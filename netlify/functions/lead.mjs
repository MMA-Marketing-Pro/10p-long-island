// netlify/functions/lead.mjs
// Same-origin lead intake for 10th Planet Long Island (Netlify Function, v2 API).
// Served at /api/lead via the redirect rule in netlify.toml.
//
// Why this exists: the browser used to POST lead data straight to GoHighLevel
// (and now Studio Profit OS) and then immediately redirect to booking.html. On
// mobile, that redirect can cancel the in-flight requests — silently dropping
// real leads. This endpoint takes the form POST same-origin, forwards to every
// CRM/analytics webhook SERVER-SIDE (where a client redirect can't kill it), and
// only reports success once the required deliveries land. The browser waits for
// this response before navigating.
//
// Webhook URLs come from environment variables (Netlify → Site configuration →
// Environment variables). Hardcoded fallbacks keep the form working if the env
// vars aren't set yet; once you've configured them you can delete the fallbacks.

// Outbound webhooks may only target these hosts. Anything else is refused before
// a request is ever made — this is the allowlist the lead-form safety rules require.
const ALLOWED_HOSTS = new Set([
  'services.leadconnectorhq.com',
  'app.studioprofitos.io',
]);

// Fallbacks = the values the site already shipped with. Prefer env vars in prod.
const FALLBACK = {
  // GoHighLevel — adult Jiu-Jitsu pipeline (2 hooks)
  GHL_ADULT_WEBHOOKS: [
    'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/c2c09a65-cd99-40d2-a6d1-ebbad2293596',
    'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/b6f2ecfa-6163-448c-b27d-0d1ba7d9e001',
  ].join(','),
  // GoHighLevel — kids pipeline (2 hooks)
  GHL_KIDS_WEBHOOKS: [
    'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/26d5c4a4-befa-4aca-9252-d7d8078fdbf0',
    'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/302de1d1-849a-4f42-9c1e-8d897ae1df7b',
  ].join(','),
  // Studio Profit OS — per-program inbound webhooks (secondary / analytics)
  SPOS_ADULT_WEBHOOK:
    'https://app.studioprofitos.io/api/webhooks/inbound/41c14782-2f75-4d5f-9ba5-33aa6adfd5d4',
  SPOS_KIDS_8_12_WEBHOOK:
    'https://app.studioprofitos.io/api/webhooks/inbound/7e0349ba-563f-4def-ba8f-e810eef39ee3',
  SPOS_KIDS_5_7_WEBHOOK:
    'https://app.studioprofitos.io/api/webhooks/inbound/4a0c98f3-7793-4832-b9a1-0d0a86c05aaf',
};

const OUTBOUND_TIMEOUT_MS = 8000;

export default async (request) => {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
  }

  let body;
  try {
    body = await request.json();
  } catch (_e) {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }
  if (!body || typeof body !== 'object') {
    return json({ ok: false, error: 'invalid_body' }, 400);
  }

  // Honeypot — pretend success so bots don't probe, but deliver nothing.
  if (str(body.website)) {
    return json({ ok: true, skipped: 'honeypot' }, 200);
  }

  // Required fields: a name plus both contact methods (phone is now required).
  const firstName = str(body.first_name);
  const email = str(body.email);
  const phone = str(body.phone);
  const program = str(body.program);
  if (!firstName) return json({ ok: false, error: 'missing_first_name' }, 400);
  if (!email) return json({ ok: false, error: 'missing_email' }, 400);
  if (!phone) return json({ ok: false, error: 'missing_phone' }, 400);

  // Forward exactly what the form captured (minus the honeypot). Keeping the
  // shape identical means the SPOS field mapping done from the sample matches
  // production 1:1.
  const payload = { ...body };
  delete payload.website;

  // Route by program. GHL hooks are the CRM of record (required → must land before
  // the booking redirect); the matching SPOS inbound webhook is secondary
  // (optional → best-effort, never blocks the booking flow). An unknown/empty
  // program maps to nothing — no webhooks fire, still ok (parity with prior behavior).
  const ghlAdult = process.env.GHL_ADULT_WEBHOOKS ?? FALLBACK.GHL_ADULT_WEBHOOKS;
  const ghlKids = process.env.GHL_KIDS_WEBHOOKS ?? FALLBACK.GHL_KIDS_WEBHOOKS;

  const GHL_BY_PROGRAM = {
    'adult-no-gi': ghlAdult,
    'kids-8-12': ghlKids,
    'kids-5-7': ghlKids,
  };
  const SPOS_BY_PROGRAM = {
    'adult-no-gi': process.env.SPOS_ADULT_WEBHOOK ?? FALLBACK.SPOS_ADULT_WEBHOOK,
    'kids-8-12': process.env.SPOS_KIDS_8_12_WEBHOOK ?? FALLBACK.SPOS_KIDS_8_12_WEBHOOK,
    'kids-5-7': process.env.SPOS_KIDS_5_7_WEBHOOK ?? FALLBACK.SPOS_KIDS_5_7_WEBHOOK,
  };

  const required = parseUrls(GHL_BY_PROGRAM[program]);
  const optional = parseUrls(SPOS_BY_PROGRAM[program]);

  const [requiredResults, optionalResults] = await Promise.all([
    deliverAll(required, payload),
    deliverAll(optional, payload),
  ]);

  const requiredOk = requiredResults.every((r) => r.ok);

  return json(
    {
      ok: requiredOk,
      program: program || null,
      required: requiredResults,
      optional: optionalResults,
    },
    requiredOk ? 200 : 502,
  );
};

// ---- helpers ----

function deliverAll(urls, payload) {
  return Promise.all(urls.map((url) => deliver(url, payload)));
}

async function deliver(url, payload) {
  const target = label(url);
  if (!isAllowed(url)) {
    return { target, ok: false, status: 0, error: 'host_not_allowlisted' };
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': '10thPlanetLI-LeadForm/1.0',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(OUTBOUND_TIMEOUT_MS),
    });
    return { target, ok: res.ok, status: res.status };
  } catch (err) {
    const name = (err && (err.name || err.message)) || 'fetch_error';
    return { target, ok: false, status: 0, error: String(name) };
  }
}

function parseUrls(raw) {
  if (!raw) return [];
  return String(raw)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function isAllowed(url) {
  try {
    return ALLOWED_HOSTS.has(new URL(url).hostname);
  } catch (_e) {
    return false;
  }
}

// A safe, loggable label — host + last 6 chars of the path. We never echo a full
// webhook URL back to the browser.
function label(url) {
  try {
    const u = new URL(url);
    return `${u.hostname}/…${u.pathname.slice(-6)}`;
  } catch (_e) {
    return 'invalid_url';
  }
}

function str(v) {
  if (typeof v === 'string') return v.trim();
  return v == null ? '' : String(v).trim();
}

function json(obj, status, extraHeaders) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...(extraHeaders || {}),
    },
  });
}
