# PHASE 4 — Top-of-Funnel: Glossary, Comparisons, Technique Examples

> **Paste into a fresh Claude Code session when Phase 3 has been live for ~4 weeks.** Target ship date: ___________

## Prerequisite Files to Read

Same skill set as Phase 1. Review Phase 1's 5 glossary pages to match structure/voice.

## Phase 4 Objective

Build **25 pages** aimed at long-tail informational search — the "how do I start" and "how does X compare to Y" queries. These build authority, pull in top-of-funnel traffic, and internal-link into the converting pages from earlier phases.

### Bucket A — 10 glossary + tutorial pages (remaining from keywords.json)

| URL | H1 |
|---|---|
| `/learn/how-long-bjj-blue-belt.html` | How Long Does It Take To Get A BJJ Blue Belt? |
| `/learn/what-is-a-rash-guard.html` | What Is A Rash Guard (And Why No-Gi BJJ Uses Them) |
| `/learn/what-is-rubber-guard.html` | What Is Rubber Guard? Eddie Bravo's Signature System |
| `/learn/what-is-the-twister.html` | What Is The Twister Submission? 10th Planet's Signature Move |
| `/learn/what-is-lockdown.html` | What Is Lockdown? 10th Planet's Half Guard System |
| `/learn/jiu-jitsu-etiquette-beginners.html` | Jiu-Jitsu Etiquette: A Beginner's Guide To Mat Rules |
| `/learn/benefits-of-jiu-jitsu-for-adults.html` | 12 Benefits Of Jiu-Jitsu For Adults (Evidence-Based) |
| `/learn/benefits-of-jiu-jitsu-for-kids.html` | 10 Benefits Of Jiu-Jitsu For Kids (Confidence, Discipline, Fitness) |
| `/learn/cold-plunge-benefits-bjj-recovery.html` | Cold Plunge Benefits For BJJ Recovery — What Science Says |
| `/learn/infrared-sauna-benefits-athletes.html` | Infrared Sauna Benefits For Combat Athletes |

**Content rules for glossary:**
- 500–900 words of original useful content. Real answers, not fluff.
- Cite mechanisms (why rubber guard works, what lockdown locks, what cold plunge does to inflammation).
- End with a CTA block: "Ready to see it in action? Claim your free intro class at 10th Planet Long Island."
- Schema: `Article` + `BreadcrumbList` + `HowTo` where applicable (tutorials).

### Bucket B — 6 comparison pages

| URL | H1 |
|---|---|
| `/compare/no-gi-vs-gi-jiu-jitsu.html` | No-Gi vs Gi Jiu-Jitsu: A Detailed Side-By-Side |
| `/compare/bjj-vs-wrestling-self-defense.html` | BJJ vs Wrestling For Self-Defense — Which Wins? |
| `/compare/bjj-vs-judo.html` | BJJ vs Judo: Which Grappling Art Should You Start With? |
| `/compare/10th-planet-vs-traditional-bjj.html` | 10th Planet vs Traditional BJJ: A System Comparison |
| `/compare/bjj-vs-muay-thai-beginners.html` | BJJ vs Muay Thai For Beginners: Which To Start First |
| `/compare/mma-vs-bjj-which-to-start.html` | MMA vs BJJ: Which Should You Start With? |

**Content rules for comparisons:**
- Side-by-side table comparing the two (rules, pace, strength requirement, self-defense value, cost, injury profile).
- Section on "Which should you pick?" — give honest recommendations based on the reader's goal.
- Never sell too hard — mention 10PLI only at the end where the recommendation leads back to "try no-gi first."
- Schema: `Article` + `BreadcrumbList`.

### Bucket C — 6 technique / tutorial pages

| URL | H1 |
|---|---|
| `/learn/basic-bjj-guard-positions.html` | Basic BJJ Guard Positions Explained |
| `/learn/essential-bjj-submissions-white-belts.html` | 10 Essential BJJ Submissions For White Belts |
| `/learn/top-no-gi-sweeps-beginners.html` | Top 5 No-Gi Sweeps For Beginners |
| `/learn/best-bjj-warm-ups.html` | Best BJJ Warm-Ups Before Class |
| `/learn/bjj-conditioning-drills-home.html` | BJJ Conditioning Drills You Can Do At Home |
| `/learn/how-to-escape-mount-beginner.html` | How To Escape Mount — A Beginner's Guide |

**Content rules for tutorial pages:**
- Step-by-step breakdown (text-only is OK; video embeds are bonus).
- Schema: `HowTo` + `BreadcrumbList` + `Article`.
- Each step needs 1–2 sentences of detail.
- End with a "Come drill this with us" CTA.

## Internal Linking

- Every glossary page links to 2 other glossary pages + 1 location page + 1 comparison page.
- Every comparison page links to 2 other comparisons + 1 glossary + 1 persona page.
- Every tutorial links to 2 other tutorials + `programs.html` + `schedule.html`.
- Update the `/learn/` hub page created in Phase 4 to index all 15 glossary/tutorial/comparison pages (build a real `/learn/index.html` as an internal search hub).

## Post-Build Checklist

- [ ] 25 new pages live
- [ ] `/learn/index.html` created as an internal hub indexing all 15 learn-path pages
- [ ] All schema types correctly applied and validated (run through Google's Rich Results Test)
- [ ] sitemap.xml now has ~152 URLs
- [ ] Run `/seo-audit`
- [ ] Attribution verified on 25/25
- [ ] Commit: "Phase 4 SEO: glossary + comparisons + technique tutorials"
- [ ] Push + verify deploy

## Mandatory: Agency Attribution

Every page must include the "Powered by MMA Marketing Pro" line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`. No exceptions.
