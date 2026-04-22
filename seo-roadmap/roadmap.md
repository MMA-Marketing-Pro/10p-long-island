# 10th Planet Long Island — 6-Month Local SEO Expansion Roadmap

> **160 pages across 6 phases.** Every page is a real, unique, useful landing page targeting a specific local search query. No thin doorway pages, no duplicate content, no keyword-swapped junk. Each phase delivers 25-30 pages in a focused sprint the user can ship on their own schedule.

---

## Executive Summary

| Field | Value |
|---|---|
| Business | 10th Planet Long Island — no-gi jiu-jitsu academy |
| Primary Location | 601 Old Willets Path, Hauppauge, NY 11788 |
| Service Area | Suffolk County, Long Island (~20 mile radius) |
| Brand | 10th Planet system affiliate (Eddie Bravo lineage) |
| Hero Offer | Free intro class → 8-week beginner course |
| Current Site | 8 pages (home, about, programs, schedule, contact, privacy, terms, booking) |
| SEO Roadmap | 160 new pages over 6 months |
| Playbooks Used | Locations (heavy), Personas (heavy), Glossary, Curation, Comparisons, Examples |

**Business context:** 10PLI runs 35+ classes per week serving ages 4 to 65+. The academy's biggest unrealized SEO opportunity is local "near me" intent — parents searching "kids jiu-jitsu in Smithtown," adults searching "BJJ classes Commack," beginners searching "how to start jiu-jitsu Long Island." The existing 8-page site doesn't rank for any of these today.

---

## Keyword Matrix

| Pattern | Playbook | Pages Planned | Example |
|---|---|---|---|
| `{service} in {neighborhood}` | Locations | 84 | "No-Gi Jiu-Jitsu in Commack" |
| `{service} for {persona}` | Personas | 36 | "BJJ For Women in Suffolk County" |
| `best {thing} in {city/area}` | Curation | 6 | "Best BJJ Gym on Long Island" |
| `what is {term}` + `{guide}` | Glossary | 15 | "What Is 10th Planet Jiu-Jitsu?" |
| `{us} vs {competitor style}` | Comparisons | 6 | "No-Gi vs Gi Jiu-Jitsu" |
| `{technique} examples / tutorials` | Examples | 6 | "Basic BJJ Guard Positions Explained" |
| Program/offer pages | Conversion-focused | 7 | "8-Week Beginner BJJ Course Long Island" |
| **Total** | | **160** | |

### Service × Neighborhood location grid (84 pages)

Services (7) × Top neighborhoods (12) = 84 location pages:

**Services:** No-Gi Jiu-Jitsu · Adult BJJ · Kids BJJ · Beginner BJJ Classes · MMA Classes · Masters 35+ BJJ · Private BJJ Training

**Neighborhoods (prioritized):**
1. Hauppauge (core — internal/home)
2. Smithtown (5 min, high-income — Phase 1)
3. Commack (5 min, dense — Phase 1)
4. Islandia (adjacent — Phase 1)
5. Nesconset (8 min — Phase 1)
6. Ronkonkoma (12 min, LIRR — Phase 2)
7. Kings Park (12 min — Phase 2)
8. Central Islip (10 min — Phase 2)
9. Holbrook (15 min — Phase 3)
10. Bohemia (15 min — Phase 3)
11. Lake Grove (18 min — Phase 3)
12. East Northport (15 min — Phase 3)

⚠️ **User-validation needed:** Confirm these 12 neighborhoods reflect actual student catchment. If Stony Brook / Huntington Station / Brentwood / Patchogue are higher-yield, swap the tail end.

### Persona × Service grid (36 pages)

**Personas (6):** Beginners · Women · Kids 5-7 · Kids 8-12 · Adults Over 40 · Competitors
**Services (6 — drop Private Training since it cross-applies):** paired with personas for 36 total.

---

## URL Structure Plan

Flat URL hierarchy to match the existing kebab-case `*.html` pattern:

```
/                                   ← homepage
/about.html
/programs.html
/schedule.html
/contact.html
/booking.html

NEW directories (to be created in Phase 1):
/locations/{neighborhood}-{service}.html
    e.g. /locations/commack-no-gi-jiu-jitsu.html
         /locations/smithtown-kids-bjj.html

/for/{persona}-{service}.html
    e.g. /for/women-bjj.html
         /for/beginners-no-gi-jiu-jitsu.html

/learn/{glossary-slug}.html
    e.g. /learn/what-is-no-gi-jiu-jitsu.html

/compare/{topic}.html
    e.g. /compare/no-gi-vs-gi-jiu-jitsu.html

/best/{curation-slug}.html
    e.g. /best/bjj-gym-on-long-island.html
```

**Alternative (subfolder with index.html):** if Cloudflare Pages-friendly clean URLs are preferred, use `/locations/commack-no-gi-jiu-jitsu/index.html` instead. Both work — pick one and stay consistent. Recommended: go with flat `.html` because the existing site already uses it and relative links stay simple.

---

## Phase-by-Phase Plan

| Phase | Month | Page Count | Page Type Mix | Target SV Tier | Notes |
|---|---|---|---|---|---|
| 1 | Month 1 | 30 | 20 Phase-1 locations + 5 glossary + 5 top personas | Medium-high | Foundation — close neighborhoods, highest intent |
| 2 | Month 2 | 30 | 15 Phase-2 locations + 15 persona × service | Medium | Expand catchment + answer parent/women/age searches |
| 3 | Month 3 | 30 | 15 Phase-3 locations + 6 curation + 9 persona-gap | Medium | Authority layer ("best of", wider area) |
| 4 | Month 4 | 25 | 10 glossary/examples + 6 comparisons + 9 deep locations | Long-tail | Top-of-funnel education content |
| 5 | Month 5 | 25 | 7 program/offer pages + 12 remaining locations + 6 curation variants | Converting | Funnel + hyper-local |
| 6 | Month 6 | 20 | Fill matrix gaps (6) + refresh/optimize Phase 1 pages (10) + internal link expansion (4 hub pages) | Mixed | Consolidation + retrieval refresh |
| **Total** | | **160** | | | |

---

## Internal Linking Architecture

```
homepage (index.html)
├─ /best/bjj-gym-on-long-island.html   ← master hub
│    ├─ /locations/{neighborhood}-no-gi-jiu-jitsu.html  (12 pages)
│    └─ /for/beginners-no-gi-jiu-jitsu.html  ← primary persona funnel
│
├─ /programs.html
│    ├─ /locations/{neighborhood}-kids-bjj.html  (12 pages)
│    ├─ /for/{persona}-bjj.html  (6 persona pages)
│    └─ /learn/{technique}.html  (6 example tutorials)
│
└─ /learn/index.html (glossary hub — build in Phase 4)
     └─ 15 glossary spokes
```

Rules:
- Every location page links to: `/programs.html`, `/schedule.html`, `/booking.html`, 2 sibling neighborhood pages, 1 relevant persona page.
- Every persona page links to: `/programs.html`, 3 relevant location pages, 2 glossary pages.
- Every glossary page links to: `/programs.html`, 2 other glossary pages, 1 location page closest to the user.
- Footer of every new page adds a "Explore Nearby" link group pulling 4 location pages.

---

## Schema Strategy (JSON-LD per page type)

| Page Type | Required Schema |
|---|---|
| Location pages | `LocalBusiness` (extended with `areaServed`) + `BreadcrumbList` + `Service` |
| Persona pages | `Service` (audience-specific) + `BreadcrumbList` + `FAQPage` |
| Glossary pages | `Article` + `BreadcrumbList` + optional `HowTo` for tutorials |
| Comparison pages | `Article` + `BreadcrumbList` + `Table` where applicable |
| Curation pages | `ItemList` + `BreadcrumbList` |
| Example/tutorial | `HowTo` + `Article` + `VideoObject` if video |

---

## Content Uniqueness Rules (NON-NEGOTIABLE)

Every location page MUST include these unique elements — never a thin keyword swap:

1. **Commute time & route** from the neighborhood to 601 Old Willets Path (e.g., "From downtown Commack, we're a 6-minute drive down Jericho Turnpike and south on Old Willets Path.")
2. **At least one neighborhood landmark** in the intro (school, park, LIRR station, shopping center)
3. **Local testimonial or social proof** — reuse one of the 3 real reviews (Trevor K., Gavin F., Gahrey O.) but re-anchor with "student from {neighborhood}" where it's plausible
4. **Unique parking / access note** for riders from that direction (e.g., "Smithtown parents driving in from 25A: free parking in front of the academy")
5. **Neighborhood-specific schedule callout** (e.g., "Kids 5-7 classes on Tuesday and Thursday afternoons at 5:30 PM — perfect for parents picking up from Commack Middle School")
6. **Local nav/context block** ("Also serving: [3 nearby neighborhoods]")

Persona pages need equivalents (age-specific, goal-specific intros), comparisons need real technical differences (not just a feature matrix).

---

## Success Metrics (per phase)

| Phase | Metric 1 | Metric 2 | Metric 3 |
|---|---|---|---|
| 1 | 30 pages indexed within 30 days | 5+ ranking in top 50 for neighborhood terms | 2+ new lead form submits from location pages |
| 2 | Cumulative 60 pages indexed | 10+ ranking in top 20 | 5+ new leads/month |
| 3 | Cumulative 90 pages indexed | 15+ ranking in top 10 | 10+ new leads/month |
| 4 | Cumulative 115 pages indexed | Glossary pages earning top-20 for informational queries | GSC impressions up 3× vs Month 1 |
| 5 | Cumulative 140 pages indexed | Pricing/offer pages converting at ≥ 2% | 20+ leads/month |
| 6 | 160/160 pages indexed + refreshed | Top-3 ranking for "{service} in {neighborhood}" for 3+ key neighborhoods | Organic lead share ≥ 30% of total |

---

## Assumptions That Need Local Validation

1. **Neighborhood list** — I picked the 12 closest high-density Suffolk County neighborhoods around Hauppauge. The user should confirm this reflects where current students actually live. If Stony Brook (university crowd) or Huntington Station (larger catchment) are bigger sources, swap them in for Lake Grove / East Northport.
2. **Personas** — "Women" and "Adults Over 40" are common enough to target, but user should confirm these have been proven audiences (check membership demographics). If Teens are a bigger category than Women currently, reweight.
3. **Competitor names** — deliberately left generic ("vs Gi jiu-jitsu," "vs wrestling"). If there are specific Long Island competitor academies the user wants to name explicitly, add them as explicit comparison pages in Phase 3.
4. **Commute times** — rough estimates. User should sanity-check before the Phase 1 pages ship.

---

## Agency Attribution (enforced on every page)

Every new page built in every phase MUST include the "Powered by MMA Marketing Pro" line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`. This matches the shared footer on the original 8 pages. The `/seo-audit` step verifies this on every file — never remove, alter, or rebrand it.
