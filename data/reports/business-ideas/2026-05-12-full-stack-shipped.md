# Acquisition Search — Full-Stack Shipped — 2026-05-12

**End-of-day status.** PR #3 open + 5 commits pushed. Dashboard expanded from 18 listings + 17 workspaces → 58 listings + 23 workspaces in 2 days.

## What shipped today

### Round 1 — Berkeley + Residency workspaces (commit `563f608`)
- **`/berkeley`** — Property-by-property operator manual for 1507 Prince + 1227 San Pablo. Retail-bay-by-bay tenant strategy (buildout cost, timeline, Y3 revenue, permitting, vendor referrals). Year-by-year phasing (Y1 close → Y5 exit). Vendor contacts (broker/lender/architect/contractor). Permitting milestones with agency + timeline. Risk flags.
- **`/residency`** — Visa pathway matrix: 13 paths across 6 countries (PT D7/D2/D8, ES Self-Employed/NLV, IT ERV/Investor Visa, MX RT, BR VIPER, CR Rentista/Inversionista). Each with thresholds, timeline, tax residency implications, warnings, recent changes, applicable Ideas.

### Round 2 — 8 more live Ideas + 12 intel sources (commit `7c4693c`)
8 new pipeline entries from RV park + equestrian + Sicily/Puglia agent sweeps:

**RV Park / Campground (3):**
- Mirabel RV Park Forestville CA — $2.6M / 125 sites / Russian River / NOI $217k disclosed
- Yosemite-Reno KOA Holiday — $1.99M / 67 RV + 19 motel / 194ac expansion runway
- Timberlake Columbia Gorge WA — $2.3M / 65 sites inside NSA permit-restricted

**Equestrian (2):**
- Hobby Horse Farms Firestone CO — $2.5M / 80-horse / waitlist / below-market rates (value-add)
- Boulder County Equestrian Center — TBD / 40+ac / 90% occupancy / waitlist

**Sicily/Puglia (3):**
- Masseria Fachechi Salento — €1.1M / 8 BR / 18ha / cheapest sub-€1.5M operating masseria
- Etna Winery Estate Sicily — €850k (reduced from €1M) / 140yr vineyard + Palmento + 5 keys
- Masseria Salento Romolini #1305 — €2.9M ask (bid €1.9M low) / 18 BR / 21.1ha / restaurant license

**12 new intel sources:** RVParkStore, Own a KOA (Berkshire Hathaway Floberg 406-709-3536), Fay Ranches, Live Water Properties, HorseProperties.net, CasaPuglia, Romolini Immobiliare, Wineries & Vineyards, Casa Tuscany, Rimontgó Spain, Trulli e Dimore, Vintroux.

### Round 3 — Schema fix (commit `fff8c1b`)
- `IntelSource.region` union missing `italy`, `spain`, `mexico` — added so the 4 international intel sources type-check.

### Round 4 — /this-week action prioritizer (committing now)
- **`/this-week`** — Synthesis view across all workspaces. 20 ranked actions:
  - **6 NOW (15-min) actions** — Snowshoe NDA, Castle Rock broker call, Todd Renfrew duck club, Kehret CIM, OCSC warm intro, Marin Day Spa
  - **6 THIS WEEK (2-hr) actions** — Snowshoe site visit, Compass Commercial 1507 Prince, rafting outreach Batch 1, Amatierra CR, Italy Investor Visa counsel, wildfire insurance quote batch
  - **5 THIS MONTH actions** — ASA 101 enrollment, cafe-succession spring batch, Puglia broker relationships, bathhouse architect, KOA pre-list
  - **3 WATCHLIST** — AVBC price-watch, Wolf Camp earnout analysis, Patio29 cold outreach

Each action: title · category · estimated time · description · concrete step · why-now justification · cross-link to dashboard Idea.

## Top 6 things to do this week (15-min actions)

1. **Sign Snowshoe Brewery NDA + request P&Ls** — top action item across all sweeps
2. **Call Hot Springs For Sale on Castle Rock Springs** — irreplaceable thermal-water moat at $1.5M
3. **Call Todd Renfrew at California Outdoor Properties (707-455-4444)** — Sacramento Valley off-market hunt-club + ranch inventory
4. **Request CIM on Kehret Vineyards** — closest turnkey in-budget CA vineyard
5. **Find warm intro to OCSC Sailing (Berkeley Marina)** — enroll ASA 101 simultaneously
6. **Email Marin Day Spa broker on 50% seller financing terms** — quick teaser pull

## Dashboard state vs 2 days ago

| Metric | 2 days ago | Now |
|---|---|---|
| Live Idea entries | 18 | **58** (+222%) |
| Search profile tracks | 2 | 3 (Adventure) |
| Regions covered | 5 | **9** |
| Aspirational case studies | 0 | **23** |
| Cold-outreach script templates | 0 | **7** |
| Deal comps tracked | 0 | **18** |
| Unit economics templates | 0 | **10** |
| Adventure risks catalogued | 0 | **16** |
| Visa pathways catalogued | 0 | **13** across 6 countries |
| Property operator plans | 0 | **2** (1507 Prince + 1227 San Pablo) |
| Off-market succession campaigns | 0 | **6** |
| Workspaces | 17 | **23** (+6) |
| This-week prioritized actions | 0 | **20** |

## Commits in PR #3
- `b195c3c` Adventure track + Aspirational Models + Playbook
- `ac3f4ca` /economics workspace + 10 more Ideas + MX/ES/IT regions
- `563f608` /berkeley operator manual + /residency visa-path matrix
- `7c4693c` 8 more Ideas (RV/equestrian/Sicily-Puglia) + 12 intel sources
- `fff8c1b` IntelSource region union schema fix
- `[pending]` /this-week action prioritizer

## Build status
- TypeScript: **PASS**
- Production build: **PASS**
- 58 listing paths generated
- 6 new workspaces live in nav

---

📰 **TODAY'S SIGNAL:** The full stack is now in your hands. Open `/this-week` first — it tells you the 6 highest-leverage 15-min actions to take. Snowshoe Brewery NDA + Castle Rock Springs broker call are the two highest-conviction near-term moves.

🎯 **ACTION:** Open `/this-week`. Do the top 3 actions today (45 minutes total). All cross-linked to the relevant Idea + supporting workspace (economics template, risk register, outreach script).
