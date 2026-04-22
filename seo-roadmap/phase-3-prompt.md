# PHASE 3 — Authority Layer: Curation Hubs + Outer-Radius Locations + Comparisons

> **Paste into a fresh Claude Code session when Phase 2 has been live for ~4 weeks.** Target ship date: ___________

## Prerequisite Files to Read

Same as Phase 2, plus review all Phase 1 + Phase 2 pages to match voice.

## Phase 3 Objective

Build **30 pages** in three buckets:

### Bucket A — 6 curation / "best of" authority pages (15 pages worth of juice each)

| URL | Primary Keyword | Title |
|---|---|---|
| `/best/bjj-gym-on-long-island.html` | best bjj gym long island | Best BJJ Gym on Long Island (2026 Guide) \| 10th Planet Long Island |
| `/best/no-gi-jiu-jitsu-suffolk-county.html` | best no-gi suffolk county | Best No-Gi Jiu-Jitsu Academy in Suffolk County |
| `/best/kids-martial-arts-hauppauge.html` | best kids martial arts hauppauge | Best Kids Martial Arts Classes in Hauppauge, NY |
| `/best/start-jiu-jitsu-long-island.html` | where to start bjj long island | Where to Start Jiu-Jitsu on Long Island — A Complete Guide |
| `/best/bjj-near-smithtown.html` | best bjj near smithtown | Best BJJ Academy Near Smithtown, NY |
| `/best/mma-central-long-island.html` | best mma central long island | Best MMA Gym in Central Long Island |

**Content pattern for curation pages:**
1. H1 with the target keyword.
2. Intro explaining the criteria (lineage, class variety, beginner-friendliness, recovery amenities, schedule flexibility, real reviews).
3. **Top pick: 10th Planet Long Island** — a detailed section making the case (the 10th Planet system, 35+ classes/week, 8-week beginner course, sauna + cold plunge included, kids + masters programs, real testimonials).
4. **"What to look for in a {category}"** — educational section scoring criteria (belt lineage, class schedule, beginner-onboarding, kids programs, recovery amenities).
5. CTA to book a free trial.
6. ItemList JSON-LD + Article JSON-LD + BreadcrumbList.

This is NOT a "10 best gyms" listicle — it's an authority hub that positions 10PLI as the answer. Real content, not a doorway page.

### Bucket B — 15 outer-radius location pages (Phase 3 neighborhoods)

Target: **Holbrook** (15 min SE), **Bohemia** (15 min S), **Lake Grove** (18 min NE), **East Northport** (15 min NW). 4 neighborhoods × ~4 services = ~15 pages.

Same content structure as Phase 1 location pages. Emphasize commute (longer drives → more buying intent in the copy) and include 1 extra paragraph explaining why it's worth the drive.

### Bucket C — 9 persona-gap pages (fill matrix holes)

Cover the persona × service combinations skipped in Phase 2:

| URL | Primary Keyword |
|---|---|
| `/for/beginners-masters-bjj.html` | masters bjj for beginners |
| `/for/competitors-adult-bjj.html` | competition bjj training |
| `/for/competitors-mma.html` | mma for competitors |
| `/for/teens-beginner-bjj.html` | teen bjj classes beginners |
| `/for/teens-masters-bjj.html` | teen bjj training |
| `/for/women-private-training.html` | women's bjj private training |
| `/for/adults-over-40-mma.html` | mma over 40 |
| `/for/parents-kids-bjj.html` | bjj class for parents and kids |
| `/for/homeschool-kids-bjj.html` | homeschool kids bjj long island |

Same persona-page content outline from Phases 1-2.

## Content Rules

- Every curation page MUST include 200+ words of original educational content BEFORE positioning 10PLI as the answer. Otherwise it reads as a self-promo doorway.
- Every page needs the lead modal + booking flow.
- Every page needs the mandatory attribution.

## Schema

- Curation pages: `ItemList` + `Article` + `BreadcrumbList`
- Location pages: `LocalBusiness` + `BreadcrumbList` + `Service`
- Persona pages: `Service` + `BreadcrumbList` + `FAQPage`

## Internal Linking

- Each curation page links to 5+ location pages + 2 persona pages + 2 glossary pages + programs/schedule/booking.
- Each curation page is linked FROM the homepage (add a "See Why We're Rated Best on Long Island" block above the footer on index.html).
- Update navbar with a "Best On LI" link to `/best/bjj-gym-on-long-island.html` — makes this page the new front-door for top-of-funnel search traffic.

## Post-Build Checklist

- [ ] 30 new pages live
- [ ] All curation pages have original educational content (not just promo)
- [ ] Homepage updated with link to main curation hub
- [ ] Navbar updated
- [ ] sitemap.xml now has ~127 URLs
- [ ] Run `/seo-audit`
- [ ] Attribution verified on 30/30
- [ ] Commit: "Phase 3 SEO: curation hubs + outer-radius locations + persona gap fills"
- [ ] Push + verify deploy
- [ ] GSC check: rankings for Phase 1 location keywords (should be showing in the top 30 by now)

## Mandatory: Agency Attribution

Every page must include the "Powered by MMA Marketing Pro" line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`. No exceptions.
