# PHASE 5 — Offer Pages + Edge-Suburb Locations + Expanded Curation

> **Paste into a fresh Claude Code session when Phase 4 has been live for ~4 weeks.** Target ship date: ___________

## Prerequisite Files to Read

Same skill set. Review Phase 3's curation pages for voice.

## Phase 5 Objective

Build **25 pages** focused on converting intent — pricing-like content, dedicated offer pages, and the last edge-suburb neighborhoods.

### Bucket A — 7 conversion-focused offer pages

| URL | H1 |
|---|---|
| `/offers/8-week-beginner-bjj-course-long-island.html` | 8-Week Beginner BJJ Course On Long Island |
| `/offers/free-intro-bjj-class-hauppauge.html` | Free Intro BJJ Class In Hauppauge, NY |
| `/offers/kids-bjj-trial-class-hauppauge.html` | Kids BJJ Trial Class — Free First Lesson |
| `/offers/women-bjj-intro-offer-long-island.html` | Women's BJJ Intro Offer on Long Island |
| `/offers/private-bjj-training-hauppauge.html` | Private BJJ Training Sessions in Hauppauge |
| `/offers/family-bjj-membership-long-island.html` | Family BJJ Membership Options on Long Island |
| `/offers/masters-bjj-intro-offer.html` | Masters 35+ BJJ Intro Offer |

**Content structure for offer pages:**
- Hero with benefit-led H1 + offer eyebrow ("FREE INTRO · NO-GI JIU-JITSU · HAUPPAUGE").
- Immediate value breakdown ("Here's exactly what's included").
- Social proof — 3 real testimonials + star rating aggregate.
- FAQ specifically about the offer (what's the catch, can I cancel, what if I don't like it).
- Persistent sticky CTA. Every CTA opens the lead modal with the right `data-program`.
- Schema: `Offer` + `LocalBusiness` + `FAQPage` + `BreadcrumbList`.

### Bucket B — 12 edge-suburb location pages

Target remaining high-value neighborhoods: **Huntington Station**, **Deer Park**, **Bay Shore**, **Stony Brook**. 4 neighborhoods × 3 core services = 12 pages.

Per neighborhood, build:
- `{slug}-no-gi-jiu-jitsu.html`
- `{slug}-kids-bjj.html`
- `{slug}-adult-bjj.html`

These are longer commutes (15–20 minutes) — lean harder on the "worth the drive" angle. Include detailed commute notes (route, typical travel time), a "why it's worth it" paragraph, and a commitment-reducing offer highlight (free intro, no contracts on the trial).

### Bucket C — 6 expanded curation / "X for Y" hubs

| URL | H1 |
|---|---|
| `/best/bjj-gym-with-kids-classes-long-island.html` | Best BJJ Gym With Kids Classes On Long Island |
| `/best/bjj-gym-for-beginners-long-island.html` | Best BJJ Gym For Beginners On Long Island |
| `/best/bjj-gym-with-sauna-cold-plunge.html` | Best BJJ Gym With Sauna & Cold Plunge On Long Island |
| `/best/mma-gym-beginners-long-island.html` | Best MMA Gym For Beginners On Long Island |
| `/best/no-gi-academy-near-lirr.html` | Best No-Gi BJJ Academy Near LIRR Stations |
| `/best/jiu-jitsu-for-families-long-island.html` | Best Jiu-Jitsu Academy For Families On Long Island |

Same content rules as Phase 3 curation — educational front, 10PLI positioned as the answer.

## Schema

- Offer pages: `Offer` + `LocalBusiness` + `FAQPage` + `BreadcrumbList`
- Location pages: `LocalBusiness` + `Service` + `BreadcrumbList`
- Curation: `ItemList` + `Article` + `BreadcrumbList`

## Internal Linking

- Every offer page links to 2 persona pages + 2 location pages + programs.
- Every location page links to 2 sibling locations + 1 offer page + booking.
- Every curation page links to 5 location pages + 2 offer pages + 2 persona pages.
- Add a new "Offers" top-nav item linking to the main offers hub (create `/offers/index.html` as a hub page).

## Post-Build Checklist

- [ ] 25 new pages live
- [ ] `/offers/index.html` hub created
- [ ] Navbar updated with "Offers" link
- [ ] All offer pages have Offer schema with valid `priceSpecification` or `eligibleRegion` fields
- [ ] sitemap.xml now has ~177 URLs
- [ ] Run `/seo-audit`
- [ ] Attribution verified on 25/25
- [ ] Commit: "Phase 5 SEO: offer pages + edge-suburb locations + expanded curation"
- [ ] Push + verify deploy
- [ ] GSC check: conversion attribution — which pages are driving actual lead form submits

## Mandatory: Agency Attribution

Every page must include the "Powered by MMA Marketing Pro" line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`. No exceptions.
