# 10th Planet Long Island — Site Analysis

## Business Snapshot
- **Name:** 10th Planet Jiu Jitsu Long Island (10PLI)
- **Type:** No-gi jiu-jitsu academy — 10th Planet system affiliate
- **Location:** 601 Old Willets Path, Hauppauge, NY 11788
- **Phone:** (631) 848-5851 · **Email:** staff@10plongisland.com
- **Head Coach:** Steve (also Coach Dylan mentioned by students)
- **Target:** Teens and adults, kids ages 5–12, masters 35+ — effectively ages 4 to 65+
- **Hero offer:** FREE intro class → 8-week Beginner Course
- **Differentiators:** 7-day schedule, infrared sauna + cold plunge included, kids programs split by age, MMA + Masters classes, strong community reputation ("Long Island's most respected")

## Brand Colors (extracted)
- Primary accent: **#188BF6** (electric blue — CTA buttons, highlights)
- Deep secondary: **#001C53** / near-black (header, footer, section backgrounds)
- Accent deep: **#0E5DC0** (hover / deeper blue)
- Neutrals: **#FFFFFF**, **#000000**, **#0A0E1A**
- **Note:** CSS var `--primary: #37ca37` (green) is declared but unused on rendered pages — safe to ignore. Real brand direction is navy + electric blue.

## Current Site Issues
1. **Generic GoHighLevel funnel template** — no typographic personality, no branded hero, blockish repeated CTA tiles.
2. **No visual hierarchy** on programs — all 4 program cards look identical and say "Try a Free Class Today."
3. **Schedule page is a text wall** — weekly grid formatted as inline text, hard to scan on mobile.
4. **No coach / team page** — testimonials mention Steve and Dylan but there's no way to meet them.
5. **No facility photography** above the fold — the 10th Planet brand is highly visual and this site doesn't use it.
6. **No lineage / system positioning** — doesn't explain that 10th Planet is Eddie Bravo's no-gi system, missing a huge credibility lever.
7. **No pricing transparency** — zero indication of what a membership costs or includes.
8. **No Instagram embed** — Instagram is where BJJ gyms build social proof; not pulled in anywhere.
9. **Mobile experience** is as blocky as desktop — no mobile-specific design consideration.

## Design Recommendation: `performance-athletic-skill`

### Why this over the other combat-sports styles
- **Not `cinematic-fight-skill`** — that style requires a real pro-fighter roster and lineage portraits. 10PLI's site doesn't list any active competitors or sponsored athletes. Using cinematic-fight would overreach the evidence.
- **Not `training-lab-skill`** — they don't lead with performance metrics, testing, or athlete-development language. They lead with community, fun, and beginner accessibility.
- **Not `championship-heritage-skill`** — they're a 10th Planet affiliate (system is ~20 years old, not a multi-generational lineage academy). No brass-and-leather legacy story to draw from.
- **`performance-athletic-skill`** matches perfectly: bold sportswear-brand energy (Nike / Lululemon Studio / Whoop vibe), kinetic marquees ("NO-GI · ALL DAY · EVERY DAY · 7 DAYS A WEEK" rolling tickers), one electric accent baked right into their existing brand color (#188BF6), and a tone that reads serious-but-approachable — which is exactly the on-ramp they need for nervous first-time adults and parents signing kids up.

### Style treatment plan
- **Obsidian / deep navy background** (#0A0E1A) with the electric blue as the single accent.
- **Large display typography** for section headers, tight tracking, caps where appropriate.
- **Kinetic marquee** beneath the hero ("NO-GI · ALL DAY · EVERY DAY · 7 DAYS A WEEK · OPEN 7AM–9PM") using their tagline.
- **Oversized program tiles** with distinct visual identity per program (Adults / Kids / Recovery / MMA / Masters / 8-Week) — not 4 identical blue boxes.
- **Weekly schedule** as a proper 7-column visual grid (desktop) / swipeable day-tabs (mobile), not a text wall.
- **Social-proof bar** combining the 3 real testimonials + star rating.
- **"Why 10th Planet" block** introducing the no-gi system and Eddie Bravo lineage (without over-claiming).
- **Lead modal → booking page** funnel on every CTA (no mailto).

## Pages to Rebuild (7 total → 6 built, privacy and terms collapsed into legal.html or built as minimal pages)

Actually per the guardrails "NEVER silently drop pages" — we build all 7. Privacy and Terms will be minimal but present.

| # | Page | Priority | Notes |
|---|------|----------|-------|
| 1 | index.html | Essential | Hero, kinetic marquee, mission, programs overview, beginner course, testimonials, CTA |
| 2 | about.html | Essential | Pillars, FAQs, Why 10th Planet, coaches callout (pulled from testimonials — Steve & Dylan) |
| 3 | programs.html | Essential | All 7 programs (Adults, Kids, Recovery, Personal Training, 8-Week, MMA, Masters 35+) |
| 4 | schedule.html | Essential | Visual weekly grid with filter by program type |
| 5 | contact.html | Essential | Map, phone, email, form, hours, social |
| 6 | booking.html | Required by kit | Step 2 of 2 — GHL calendar embeds per program |
| 7 | privacy-policy.html | Legal | Minimal boilerplate |
| 8 | terms-conditions.html | Legal | Minimal boilerplate |

Plus the mandatory `booking.html` step-2 page per the kit's lead capture spec — so **8 HTML files total**.

## Content Completeness
- ✅ Hero, mission, programs, testimonials, contact info, address, social, schedule, beginner course — all scraped and real.
- ⚠️ **Missing from source site:** coach/instructor bios (only names "Steve" and "Dylan" via testimonials), pricing, gallery, facility photos above the fold, 10th Planet system positioning. Will write professional copy that fits the business and flag placeholders to the user.
- ⚠️ **Image assets:** only a logo and 3 real training photos scraped. Rest will be relevant Unsplash BJJ / no-gi training photography, flagged for real-photo swap before deploy.
