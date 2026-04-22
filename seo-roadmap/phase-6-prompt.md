# PHASE 6 — Fill + Optimize: Matrix Gaps + Refresh Phase 1 + Internal Graph

> **Paste into a fresh Claude Code session when Phase 5 has been live for ~4 weeks.** Target ship date: ___________

## Prerequisite Files to Read

Same skill set. Pull the latest Google Search Console data before starting — use it to prioritize refresh targets.

## Phase 6 Objective

Build **20 pages** plus refresh/optimize work. Focus shifts from expansion to consolidation.

### Bucket A — 6 remaining matrix-gap pages

Fill the highest-search-volume gaps from `keywords.json` that weren't covered in Phases 1–5. Check GSC to see what queries are driving impressions but ranking outside the top 20 — build dedicated pages for those.

Typical examples (adjust based on actual GSC data):

| URL | H1 | Notes |
|---|---|---|
| `/locations/hauppauge-private-bjj-training.html` | Private BJJ Training in Hauppauge | Premium service, direct bookings |
| `/for/parents-family-bjj.html` | Family BJJ — Train Together On Long Island | Parent+child dual enrollment |
| `/for/self-defense-women.html` | Self-Defense For Women Through BJJ | Alt-framing of `/for/women-bjj.html` |
| `/for/stress-relief-bjj.html` | BJJ For Stress Relief — The Science | High-interest long-tail |
| `/for/fitness-bjj-workout.html` | BJJ As A Workout — Is It Really That Intense? | Answers fitness-crowd curiosity |
| `/locations/suffolk-county-no-gi-jiu-jitsu.html` | No-Gi Jiu-Jitsu in Suffolk County, NY | County-level geo hub |

### Bucket B — 10 refresh/optimize passes on Phase 1 pages

Pick the 10 Phase-1 pages that are ranking positions 8–20 in GSC — the ones closest to breaking into the top 5. Refresh:

1. Rewrite the intro to be sharper and more specific to the neighborhood.
2. Add 2 more paragraphs of unique content.
3. Upgrade the title + meta to include a fresh angle (e.g., add "(2026)" or a specific benefit).
4. Add 3 new internal links from high-authority pages (homepage, `/best/bjj-gym-on-long-island.html`, the relevant Phase 5 offer page).
5. Add 1–2 new FAQ entries that target related long-tail queries showing up in GSC.
6. Update image paths if real client photography has been uploaded since Phase 1.
7. Re-verify the lead modal + booking flow still works after edits.

### Bucket C — 4 hub-page / internal-graph improvements

Rebuild these 4 hubs with fuller linking:

1. **Homepage** (`index.html`) — add a "Popular Service Areas" block above the footer showing 9 top-converting neighborhood pages.
2. **Programs** (`programs.html`) — add a "Find Your Program" block linking to 8 top persona pages.
3. **`/learn/index.html`** — expand to include category buckets (Technique, Philosophy, Etiquette, Recovery, System Specifics) and index all 15 learn-path pages.
4. **`/best/bjj-gym-on-long-island.html`** — update the curation hub with Phase 2/3/5 signals (more testimonials, more location pages referenced, a fresh 2026 date stamp).

## Content Rules

- Refresh pages must add genuine NEW value — not just reshuffled sentences. Google rewards pages that get meaningfully better.
- Every updated page's `<meta name="dateModified">` should reflect the refresh date.
- Update the last-modified timestamps in `sitemap.xml` for all touched pages.

## Schema

- New pages follow the schema patterns from earlier phases (matched to page type).
- Refreshed pages: add `dateModified` to existing `Article` / `LocalBusiness` schema blocks.

## Post-Build Checklist

- [ ] 6 new pages live + 10 refreshed + 4 hubs updated
- [ ] sitemap.xml now has ~183 URLs with updated `lastmod` dates on all touched files
- [ ] Run `/seo-audit` on both new and refreshed pages
- [ ] Attribution verified on all pages
- [ ] Commit: "Phase 6 SEO: matrix gap fill + Phase 1 refresh + hub optimization"
- [ ] Push + verify deploy
- [ ] Run a full site-wide GSC comparison: Month 1 vs Month 6 — total impressions, clicks, avg position, indexed pages
- [ ] Write a summary report documenting what worked, what didn't, and which queries to double-down on next

## Post-Roadmap

After Phase 6, the 10PLI site will be at roughly 190+ pages (8 original + 160 SEO roadmap + refreshes). Next steps:
- Quarterly content refresh on the top 20 pages.
- Add new neighborhoods or services as the business expands.
- Consider adding a real blog (posts >800 words on technique, student spotlights, coach interviews) to keep the site active and give GSC fresh signals.
- Set up schema-backed review collection so `AggregateRating` scales with real student reviews over time.

## Mandatory: Agency Attribution

Every page must include the "Powered by MMA Marketing Pro" line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`. No exceptions.
