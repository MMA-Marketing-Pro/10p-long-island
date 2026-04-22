# PHASE 2 — Persona Expansion + Mid-Radius Locations

> **Paste into a fresh Claude Code session when Phase 1 has been live for ~4 weeks.** Target ship date: ___________

## Prerequisite Files to Read

1. `.agent/skills/site-redesign/SKILL.md`, `.agent/skills/performance-athletic-skill/SKILL.md`, `.agent/skills/seo-audit/SKILL.md`, `.agent/skills/programmatic-seo/SKILL.md`
2. `sites/10p-long-island/brand-kit.json`
3. `sites/10p-long-island/seo-roadmap/keywords.json`
4. `sites/10p-long-island/seo-roadmap/roadmap.md`
5. All 30 pages built in Phase 1 (read a few to match style/voice)

## Phase 2 Objective

Build **30 pages**:

### Bucket A — 15 Phase-2 location pages (mid-radius neighborhoods)

Target neighborhoods: **Ronkonkoma** (12 min east, LIRR hub), **Kings Park** (12 min north), **Central Islip** (10 min south). 5 services per neighborhood = 15 pages.

Per neighborhood, create these 5 service pages:
- `{slug}-no-gi-jiu-jitsu.html` (core service)
- `{slug}-kids-bjj.html`
- `{slug}-adult-bjj.html`
- `{slug}-beginner-bjj.html` (only if the hero offer makes sense)
- `{slug}-mma.html` OR `{slug}-masters-bjj.html` (pick whichever is a better fit for the neighborhood)

Title pattern: `{Service} Near {Neighborhood}, NY | 10th Planet Long Island`
Meta pattern: `{Service} for {neighborhood} families/adults — {commute time} to our Hauppauge academy. Free intro class, 35+ classes/week.`

### Bucket B — 15 Persona × Service combinations (high-converting)

Use the 6 personas × 6 services grid in `keywords.json`. Pick the 15 highest-intent combos:

| URL | H1 |
|---|---|
| `/for/beginners-adult-bjj.html` | Adult Brazilian Jiu-Jitsu For Complete Beginners |
| `/for/beginners-kids-bjj.html` | Kids Jiu-Jitsu For Total Beginners (Ages 5–12) |
| `/for/women-no-gi-jiu-jitsu.html` | No-Gi Jiu-Jitsu For Women on Long Island |
| `/for/women-beginner-bjj.html` | First-Time BJJ For Women — 8-Week Beginner Course |
| `/for/women-mma.html` | MMA For Women on Long Island |
| `/for/kids-ages-5-7-no-gi-jiu-jitsu.html` | No-Gi Jiu-Jitsu For Kids Ages 5–7 |
| `/for/kids-ages-8-12-no-gi-jiu-jitsu.html` | No-Gi Jiu-Jitsu For Kids Ages 8–12 |
| `/for/teens-bjj.html` | Teen BJJ Classes on Long Island |
| `/for/teens-mma.html` | Teen MMA Classes on Long Island |
| `/for/competitors-no-gi-jiu-jitsu.html` | Competition-Focused No-Gi Jiu-Jitsu Training |
| `/for/competitors-private-training.html` | Private BJJ Training for Competitors |
| `/for/adults-over-40-no-gi-jiu-jitsu.html` | No-Gi Jiu-Jitsu For Adults Over 40 |
| `/for/adults-over-40-masters-bjj.html` | Masters BJJ For Adults Over 40 |
| `/for/adults-over-40-beginner-bjj.html` | Starting BJJ After 40 — Beginner Course |
| `/for/beginners-mma.html` | MMA For Beginners on Long Island |

## Content Rules (applies to every page)

Same content outline as Phase 1 (hero → why → highlight → what-to-expect → schedule → nearby → map → CTA band → footer).

**Unique-content requirement per page** (non-negotiable):
- Every persona page must have a 4–5 question FAQ block with `FAQPage` JSON-LD that speaks to real objections for that specific persona.
- Every location page must include commute time, one local landmark, parking note, and one persona-anchored testimonial.

## Schema Per Page Type

- Location: `LocalBusiness` + `BreadcrumbList` + `Service`
- Persona: `Service` + `BreadcrumbList` + `FAQPage`

## Internal Linking

- Update navbar "Service Areas" dropdown (from Phase 1) to include the 3 new neighborhoods.
- Update footer "Popular Locations" to include the highest-converting Phase-1 and Phase-2 pages.
- Every Phase-2 page links to 2 sibling Phase-2 pages + 2 Phase-1 pages + programs/schedule/booking.
- Add 2 new internal links from each of the 5 top Phase-1 pages TO the relevant Phase-2 pages (build a proper internal graph).

## Post-Build Checklist

- [ ] 30 new pages live in `/locations/` and `/for/`
- [ ] Navbar + footer updated across all pages (existing 8 + Phase 1's 30 + Phase 2's 30)
- [ ] `sitemap.xml` updated (~97 URLs total now — excluding booking.html)
- [ ] Run `/seo-audit` on all new pages
- [ ] "Powered by MMA Marketing Pro" verified on 30/30 new pages
- [ ] Commit: "Phase 2 SEO: persona + mid-radius location expansion"
- [ ] Push + verify Cloudflare deploy
- [ ] Check Google Search Console for indexation of Phase-1 pages; fix any "discovered but not indexed" issues before adding more volume

## Mandatory: Agency Attribution

Every page must include the "Powered by MMA Marketing Pro" line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`. No exceptions.
