# PHASE 1 — Foundation: Close-Neighborhood Locations + Core Glossary + Top Personas

> **Paste this entire file into a fresh Claude Code session when you're ready to ship Phase 1.** Target ship date: ___________

## Context

You are building Phase 1 of the 6-month local-SEO expansion roadmap for **10th Planet Long Island** — a no-gi jiu-jitsu academy at 601 Old Willets Path, Hauppauge, NY 11788. The main 8-page site has already been built and deployed; your job is to add 30 new SEO-driven landing pages that integrate seamlessly with the existing design system.

## Before you start, read these skill files

1. `.agent/skills/site-redesign/SKILL.md` — for the design system, lead modal, booking flow, mobile quality bar
2. `.agent/skills/taste-skill/SKILL.md` — premium design standards
3. `.agent/skills/performance-athletic-skill/SKILL.md` — the chosen style for this client
4. `.agent/skills/seo-audit/SKILL.md` — pipeline auto-fix rules (you will run the audit on new pages too)
5. `.agent/skills/programmatic-seo/SKILL.md` — this skill
6. `sites/10p-long-island/brand-kit.json` — EXACT color/font tokens to use
7. `sites/10p-long-island/seo-roadmap/keywords.json` — the full keyword + neighborhood inventory
8. `sites/10p-long-island/seo-roadmap/roadmap.md` — the full strategy

## Phase 1 Objective

Build **30 pages** in 3 buckets:

### Bucket A — 20 location pages (highest intent, closest neighborhoods)

| URL | Primary Keyword | Title Tag | Meta Description |
|---|---|---|---|
| `/locations/hauppauge-no-gi-jiu-jitsu.html` | no-gi jiu-jitsu hauppauge | No-Gi Jiu-Jitsu in Hauppauge, NY \| 10th Planet Long Island | No-gi jiu-jitsu classes in Hauppauge for adults, kids, and masters. Free intro class at 601 Old Willets Path. Open 7 days a week. |
| `/locations/hauppauge-kids-bjj.html` | kids bjj hauppauge | Kids BJJ Classes in Hauppauge, NY \| Ages 5–12 \| 10th Planet LI | Kids no-gi jiu-jitsu in Hauppauge, ages 5–7 and 8–12. Free trial class. Dedicated kids coaches. 10th Planet Long Island. |
| `/locations/smithtown-no-gi-jiu-jitsu.html` | no-gi jiu-jitsu smithtown | No-Gi Jiu-Jitsu Near Smithtown, NY \| 10th Planet Long Island | Smithtown's closest serious no-gi jiu-jitsu academy — 5 minutes south in Hauppauge. Free intro class. Open 7 days a week. |
| `/locations/smithtown-kids-bjj.html` | kids bjj smithtown | Kids BJJ Classes Near Smithtown \| Ages 5–12 \| 10th Planet LI | Kids jiu-jitsu for Smithtown families, 5 minutes away at our Hauppauge academy. Ages 5–12, dedicated coaches, free trial. |
| `/locations/smithtown-adult-bjj.html` | adult bjj smithtown | Adult Brazilian Jiu-Jitsu Near Smithtown \| 10th Planet LI | Adult BJJ for Smithtown: AM and PM no-gi classes 5 minutes away. Beginners welcomed, competitors sharpened. Free intro. |
| `/locations/commack-no-gi-jiu-jitsu.html` | no-gi jiu-jitsu commack | No-Gi Jiu-Jitsu Classes in Commack \| 10th Planet Long Island | Commack's most respected no-gi jiu-jitsu academy, 6 minutes east on Jericho Turnpike. Free intro class, 35+ classes/week. |
| `/locations/commack-kids-bjj.html` | kids bjj commack | Kids Jiu-Jitsu Classes Near Commack \| Ages 5–12 | Commack kids BJJ 6 minutes away. Ages 5–7 and 8–12 classes. Free trial, caring coaches, confidence-first approach. |
| `/locations/commack-adult-bjj.html` | adult bjj commack | Adult BJJ Classes Near Commack, NY \| 10th Planet Long Island | Adult no-gi BJJ for Commack professionals and parents. AM + PM classes, free intro, 7 days a week. 6 min from Commack. |
| `/locations/commack-beginner-bjj.html` | beginner bjj commack | Beginner BJJ Classes Near Commack \| 8-Week Course \| 10PLI | New to jiu-jitsu? Our 8-week beginner course starts with a free private intro. 6 minutes from Commack. Train alongside other new students. |
| `/locations/islandia-no-gi-jiu-jitsu.html` | no-gi jiu-jitsu islandia | No-Gi Jiu-Jitsu in Islandia \| 10th Planet Long Island | No-gi BJJ academy adjacent to Islandia — 3 minutes north in Hauppauge. Ages 4–65+. Free intro class, open 7 days. |
| `/locations/islandia-kids-bjj.html` | kids bjj islandia | Kids BJJ Classes Near Islandia \| Ages 5–12 | Islandia kids jiu-jitsu 3 minutes away. Ages 5–7 and 8–12. Dedicated kids coaches, free trial, safe supportive environment. |
| `/locations/nesconset-no-gi-jiu-jitsu.html` | no-gi jiu-jitsu nesconset | No-Gi Jiu-Jitsu Near Nesconset, NY \| 10th Planet LI | Nesconset's closest no-gi academy, 8 minutes south. Adult, kids, and masters classes. Free intro, open 7 days a week. |
| `/locations/nesconset-kids-bjj.html` | kids bjj nesconset | Kids Jiu-Jitsu Classes Near Nesconset \| Ages 5–12 | Nesconset families: kids BJJ 8 minutes away. Ages 5–7 + 8–12 classes. Free trial, small groups, confidence-building. |
| `/locations/smithtown-mma.html` | mma smithtown | MMA Classes Near Smithtown \| 10th Planet Long Island | Smithtown MMA 5 minutes away — Beginner MMA Sundays, Advanced MMA Fridays, striking and jiu-jitsu under one roof. |
| `/locations/commack-mma.html` | mma commack | MMA Classes Near Commack \| 10th Planet Long Island | Commack MMA 6 minutes away — Beginner + Advanced classes, striking and jiu-jitsu combined. Free intro class. |
| `/locations/smithtown-masters-bjj.html` | masters bjj smithtown | Masters 35+ Jiu-Jitsu Near Smithtown \| 10th Planet LI | Technique-focused Sunday masters class for ages 35+, 5 minutes from Smithtown. Train smart, train sustainable. |
| `/locations/commack-masters-bjj.html` | masters bjj commack | Masters 35+ BJJ Classes Near Commack \| 10th Planet LI | Masters 35+ jiu-jitsu for Commack athletes 6 minutes away. Lower-impact, technique-first, longevity-built training. |
| `/locations/hauppauge-mma.html` | mma hauppauge | MMA Classes in Hauppauge, NY \| 10th Planet Long Island | Hauppauge MMA — Beginner MMA Sundays, Advanced MMA Fridays, Jiu-Jitsu Striking, 35+ classes/week. Free intro. |
| `/locations/hauppauge-masters-bjj.html` | masters bjj hauppauge | Masters 35+ BJJ in Hauppauge, NY \| 10th Planet LI | Masters 35+ Sunday BJJ for Hauppauge. Technique-driven, longevity-focused, taught by coaches who get it. |
| `/locations/hauppauge-beginner-bjj.html` | beginner bjj hauppauge | Beginner BJJ Course in Hauppauge \| 8-Week Flagship | Our 8-week beginner BJJ course in Hauppauge. Free intro + 16 classes + 10PLI rash guard. Start the right way. |

### Bucket B — 5 glossary pages (top-of-funnel)

| URL | Primary Keyword | Title Tag | Meta Description |
|---|---|---|---|
| `/learn/what-is-10th-planet-jiu-jitsu.html` | what is 10th planet jiu-jitsu | What Is 10th Planet Jiu-Jitsu? Eddie Bravo's System Explained | A no-gi grappling system created by Eddie Bravo. Rubber Guard, Lockdown, Twister. Here's what makes 10th Planet different. |
| `/learn/what-is-no-gi-jiu-jitsu.html` | what is no-gi jiu-jitsu | What Is No-Gi Jiu-Jitsu? A Beginner's Complete Guide | Jiu-jitsu without the traditional kimono — faster, more MMA-relevant, and the base of the 10th Planet system. Here's how it works. |
| `/learn/gi-vs-no-gi-jiu-jitsu.html` | gi vs no-gi jiu-jitsu | Gi vs No-Gi Jiu-Jitsu: Which Should You Train First? | Key differences between Gi and No-Gi jiu-jitsu — pace, grips, strategy, and which one new students should start with. |
| `/learn/what-to-wear-first-bjj-class.html` | what to wear to bjj class | What To Wear To Your First BJJ Class \| 10th Planet LI | New to jiu-jitsu? Here's exactly what to wear, what to bring, and what NOT to bring to your first no-gi BJJ class. |
| `/learn/bjj-belt-ranks-explained.html` | bjj belt ranks explained | BJJ Belt Ranks Explained: White To Black Belt Timeline | How long it takes to reach blue belt, purple, brown, and black in Brazilian jiu-jitsu — and what each rank actually means. |

### Bucket C — 5 persona pages (high-converting audience slices)

| URL | Primary Keyword | Title Tag | Meta Description |
|---|---|---|---|
| `/for/beginners-no-gi-jiu-jitsu.html` | bjj for beginners long island | No-Gi BJJ For Beginners \| 8-Week Course in Long Island | Never trained jiu-jitsu before? Our 8-week beginner course is built exactly for you. Free intro, supportive environment, Long Island's best beginner program. |
| `/for/women-bjj.html` | bjj for women long island | BJJ For Women on Long Island \| 10th Planet Long Island | A welcoming no-gi jiu-jitsu academy for women. Mixed classes, female students, real self-defense, free intro class. |
| `/for/kids-ages-5-7-bjj.html` | kids bjj ages 5-7 | Jiu-Jitsu Classes For Kids Ages 5–7 \| 10th Planet LI | Fun, focused, confidence-building BJJ classes for little ones ages 5–7. Small groups, patient coaches, free trial. |
| `/for/kids-ages-8-12-bjj.html` | kids bjj ages 8-12 | Jiu-Jitsu For Kids Ages 8–12 \| 10th Planet Long Island | Kids 8–12 jiu-jitsu in Hauppauge — discipline, fitness, confidence, and real no-gi technique. Free trial class. |
| `/for/adults-over-40-bjj.html` | bjj for adults over 40 | BJJ For Adults Over 40 \| Masters 35+ Class \| 10th Planet LI | Starting jiu-jitsu after 40? Our Masters 35+ Sunday class is technique-first, longevity-built, and beginner-friendly. |

---

## Content Outline (EVERY location page follows this structure)

1. **Hero** — H1 with `{service} in/near {neighborhood}`, subhead referencing commute time and one local landmark, primary CTA opens the existing lead modal with the matching `data-program`.
2. **"Why {neighborhood} students train at 10PLI"** — 2-3 short paragraphs mentioning commute route, what makes the academy stand out, one real testimonial anchored to the neighborhood ("Trevor K., a Commack parent…" IF geographically plausible — otherwise leave name-only).
3. **Program highlight card** — tailored to the service: Adult → AM + PM schedule; Kids → age split; MMA → Beginner/Advanced split; Masters → Sunday 8 AM.
4. **"What to expect your first class"** — 4-step visual walkthrough (same as booking page trust block, adapted per audience).
5. **Local schedule snippet** — pull the relevant times from `schedule.html` for this service only.
6. **"Also serving nearby"** — link block to 3 sibling neighborhood pages (internal link juice).
7. **Map embed + NAP** — Google Maps embed, phone, email, address.
8. **Secondary CTA band** — same accent-blue CTA band as the main site.
9. **Shared footer** — including the mandatory "Powered by MMA Marketing Pro" attribution.

## Content Outline (EVERY persona page follows this structure)

1. **Hero** — audience-first H1 ("BJJ For Beginners on Long Island"), lead copy speaks to the persona's specific objection (beginners: fear of looking dumb; women: is it safe; parents: will my kid be safe).
2. **"Why this program is built for {persona}"** — specific program (8-week course for beginners, Masters 35+ class for over-40s, kids split classes for ages 5-7 and 8-12).
3. **Common questions from {persona}** — FAQ section with 4-5 questions targeting real objections. Add `FAQPage` JSON-LD.
4. **Testimonial from a similar {persona}** — reuse real quote from the site, re-anchor where plausible.
5. **Program details card + CTA** opening the lead modal with the right `data-program`.
6. **"Nearby locations that serve {persona}"** — link to 3 location pages.
7. **Shared footer + attribution.**

## Content Outline (EVERY glossary page)

1. **H1 question/term**, meta description answers it in one sentence.
2. **300–600 words of actual useful content** — not fluff, not keyword stuffing. Answer the question.
3. **Related CTA block** — "Train no-gi in Hauppauge — claim your free intro class."
4. **"Related reading"** — link to 2 other glossary pages + 1 location page.
5. **Article JSON-LD + BreadcrumbList.**
6. **Shared footer + attribution.**

---

## Required Schema Per Page Type

- **Location pages:** `LocalBusiness` (with `areaServed` scoped to the neighborhood) + `BreadcrumbList` + `Service`
- **Persona pages:** `Service` (audience specified) + `BreadcrumbList` + `FAQPage`
- **Glossary pages:** `Article` + `BreadcrumbList`

## Internal Linking Requirements

- **Every new page** links to `programs.html`, `schedule.html`, and `booking.html`.
- **Every location page** links to 3 sibling neighborhood pages + 1 relevant persona page.
- **Every persona page** links to 3 relevant location pages + 2 glossary pages.
- **Every glossary page** links to 2 other glossary pages + 1 closest-to-topic location page.
- Add a **"Service Areas" megamenu item** in the main navbar (update navbar on ALL existing 8 pages + all 30 new pages) that dropdowns to the 12 neighborhoods.
- Update the footer on all pages to include a "Popular Locations" link column showing 6 top neighborhoods.

## Post-Build Checklist

- [ ] 30 new HTML files created in `/locations/`, `/for/`, and `/learn/` subfolders
- [ ] All use the shared `styles.css` and `scripts.js` — no inline overrides
- [ ] Every page has the canonical tag pointing to itself
- [ ] Every page has OG + Twitter Card meta
- [ ] Every page has the required JSON-LD for its type
- [ ] Every page includes the `lead-modal` and works on mobile
- [ ] Every page has "Powered by MMA Marketing Pro" in the footer
- [ ] Run `/seo-audit` on the new pages to catch anything missed
- [ ] Update `sitemap.xml` to include all 30 new URLs
- [ ] Update navbar + footer on the original 8 pages to include the new "Service Areas" link
- [ ] Commit with message: "Phase 1 SEO: add 30 location + persona + glossary pages"
- [ ] Push to GitHub and verify Cloudflare Pages auto-deploy succeeded
- [ ] Submit updated sitemap to Google Search Console

## Mandatory: Agency Attribution

Every page built in Phase 1 MUST include this exact line in the footer, below the copyright:

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

No exceptions. Never removed, replaced, or rebranded.
