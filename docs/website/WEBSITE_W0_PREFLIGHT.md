# Website W0 — Preflight Decisions

> Sprint W0 of the website build per `WEBSITE_IMPLEMENTATION_SPRINTS.md`.
> Removes ambiguity so a developer can pick up W1 without re-litigating product.
> Status: decisions below are LOCKED for W1 unless explicitly reversed by Obi.
> Updated: 2026-05-17

---

## 0. Canonical source documents

This W0 sheet is the working decisions record for the website build. Authoritative scope and strategy live in:

| Doc | Purpose | Status |
|---|---|---|
| [`MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`](./MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md) | CTO/CMO scope and positioning | Canonical |
| [`WEBSITE_IMPLEMENTATION_SPRINTS.md`](./WEBSITE_IMPLEMENTATION_SPRINTS.md) | Developer-ready sprint plan W0-W14 | Canonical |
| [`WEBSITE_OPEN_DECISIONS.md`](./WEBSITE_OPEN_DECISIONS.md) | Outstanding decision list with W-A IDs | Living |
| [`WEBSITE_LIGHT_ADMIN_BUILD.md`](./WEBSITE_LIGHT_ADMIN_BUILD.md) | Website light admin scope (NOT platform admin) | Reference |
| [`CUSTOMER_JOURNEY_BUILD.md`](./CUSTOMER_JOURNEY_BUILD.md) | D2C + B2B journey deep-dive | Reference |

Any document in `/Users/obi/Documents/` predating this PR is a draft. The repo copies under `docs/website/` are canonical from this PR forward.

---

## 1. Role assignment for the website build

Per Obi's W0 instruction:

| Role | Owner | Responsibilities |
|---|---|---|
| CTO / CMO scope owner | Codex | Opens sprint gate, locks scope and decisions, reviews close gate, approves merge readiness |
| Implementation owner | Assigned per sprint by Obi (Claude for W0 + W1) | Creates `claude/` or `codex/` branch, opens one PR per sprint, does not merge directly, does not archive sprint |
| Approver | Obi | Approves PR merge after Codex close-gate review |

Sprint rhythm enforced in GitHub:

1. **Sprint open** — Codex/Obi approve sprint brief. Implementation owner creates branch. PR title begins with sprint code (e.g. `Website W1: Foundation and brand system`).
2. **Implementation PR** — one sprint per PR. PR body includes scope, out-of-scope, test evidence, analytics events, user-facing walkthrough. No future-sprint work silently included.
3. **Review** — Claude or Codex reviews depending on implementer. Obi approves merge.
4. **Sprint close** — Codex performs close-gate review. Docs marked merged/complete. Next sprint opens only after closeout.

---

## 2. Locked decisions for W0

All ten W0 decisions confirmed by Obi on 2026-05-17.

### 2.1 Website location

**Decision:** Dedicated Next.js app. If temporarily inside this repo, placed under `/website` as a separate app package. **Must not** be mixed into the existing platform admin frontend.

**Implication for W1:** Developer scaffolds a fresh Next.js 14+ App Router project under `/website` (or a new repo if Obi decides before W1 kicks off). The `web/` and `admin/` directories of the existing platform are out of scope for the website build.

### 2.2 CMS

**Decision:** Sanity.

**Implication for W2:** Sanity project provisioned with schemas for pages, journal posts, products, product evidence documents, FAQs, team members, press items, buyer resources. Sanity Studio lives either as a sub-repo or Sanity-hosted; not in the website app build.

### 2.3 Supabase project

**Decision:** Separate website Supabase project, distinct from the platform/admin Supabase project. The platform DB continues to handle farmer operations, certification, RLS-heavy workflows, internal data. The website DB handles public website content, RFQs, ecommerce, buyer portal, product docs, website analytics.

**Implication for W2:** New Supabase project provisioned in a region to be selected before W2 after checking current Supabase availability, Kenya/admin latency, EU buyer/data needs, and operational simplicity. Separate credentials, separate RLS policies, separate Storage buckets. No shared schema with the platform DB. Region selection is not a W1 blocker — W1 is frontend foundation only.

### 2.4 Product launch list

**Decision:** 13 SKUs from the master plan. Every product must show evidence status honestly: `active` / `pending` / `sample` / `expired` / `not_applicable`. No implied certifications or lab reports that are not current.

**The 13 SKUs:**
- **Essential oils (10 SKUs, 10ml at launch):** Rosemary, Eucalyptus, Peppermint, Tea Tree, English Lavender, Rose Geranium, Wild Basil, Leleshwa, Lippia, Immortelle
- **Botanical / carrier oils (3 SKUs, 30ml at launch):** Neem, Baobab, Moringa

**Implication for W5:** Each product page renders an evidence status panel with the 5-state taxonomy. Pre-launch lots that have only reference/sample data display `sample — not Moedim lot` clearly. No published lot data may be displayed as `active` without an actual COA on file.

### 2.5 Checkout first market

**Decision:** Kenya first, M-Pesa Daraja STK Push. International checkout (Stripe + PayPal-via-Stripe + multi-currency) comes later, after Stripe entity and international shipping decisions are confirmed.

**Implication for W6/W7:** W6 builds Kenya-only retail checkout. W7 layers international checkout after W6 ships and entity/shipping are resolved. No multi-currency UI shipped before W7.

### 2.6 Buyer docs at launch

**Decision:** Sample / placeholder-safe documents allowed at launch, but every document must carry a clear status label (`sample`, `pending`, `active`, `expired`, `not_applicable`). Replace with real lab documents as they arrive.

**Implication for W9:** Document model carries explicit `evidence_status` field. UI surfaces this prominently. Public lot pages and buyer portal both honor this — no document is ever served as authoritative if the status is `sample` or `pending`.

### 2.7 Photography

**Decision:** Real founder / farm / product photography is required before public launch. W1/W2 may use placeholder-safe layouts. W3 (Recognition Spine) must not depend on stock-style visuals — by the time W3 ships, real photography must be in hand.

**Implication for the team:** Photography commission must start during W0/W1 in parallel with engineering. Owner: Vivian + designer. Outputs: founder portrait, 3-5 farm/processing photos, product hero shots for the 13 SKUs.

### 2.8 eTIMS integrator

**Decision:** Slade360 is the working recommendation, pending final due diligence (API fit, pricing, KRA certification status, sandbox responsiveness). Integration must not be built until credentials and requirements are confirmed.

**Implication:** Not a W1-W7 blocker. Earliest eTIMS sprint candidate is when KE retail checkout (W6) goes from sandbox to production. Decision deadline: W6 start.

### 2.9 Kenya fulfilment

**Decision:** Pickup Mtaani + Sendy hybrid is the working recommendation. Fulfilment automation must not be built before the checkout sprint (W6).

**Implication for W6:** Shipping rate model supports both Pickup Mtaani (default low-cost) and Sendy (premium last-mile) as checkout options. Manual fulfilment from admin in v1. Carrier API integration deferred to v1.1.

### 2.10 Designer

**Decision:** Yes, bring in design help for homepage / product / press visual polish. Developer builds the system; designer improves brand credibility before launch.

**Implication for the team:** Designer engagement starts in W0/W1. Outputs: homepage hero, product page visual polish, `/press` kit layouts, `/team` photography direction. Designer is not on critical path for W1 functional build but is on critical path for W3 (Recognition Spine).

---

## 3. Brand architecture (locked from V3 §1)

All public copy, UI labels, and marketing collateral honor the V3 brand stack:

| Brand layer | Use | Where it appears |
|---|---|---|
| **Moedim** | Public product brand, B2C storefront, packaging, farmer-facing | `/`, `/shop`, `/shop/product/[slug]`, `/farmers` (via Jaribu), product labels, retail confirmation emails |
| **MoedimAI** | Verification engine, traceability platform, buyer/investor/technical | `/buyers`, `/wholesale`, `/portal/*`, `/about`, `/investors`, `/approach`, technical buyer pack, RFQ confirmations |
| **Moedim Verified** | Trust mark on product pages, lot pages, COA bundles, buyer portal | Product trust strip, `/lot/[lot_number]`, evidence-drawer headers, COA cover sheets |
| **Jaribu by Moedim** | Farmer recruitment and field program | `/farmers`, farmer-facing emails, WhatsApp script, recruitment posters |

**Forbidden in W1 build:** leading consumer pages with "AI" as the emotional hook, using "MoedimAI" on `/`, using "Moedim" on `/investors`, using "Jaribu" outside the farmer recruitment surface.

---

## 4. Brand and content inventory

To be populated by Vivian + designer during W0/W1.

### 4.1 Brand assets — required before W1 merge

| Asset | Owner | Status |
|---|---|---|
| Final logo (SVG, light and dark variants) | Vivian | ☐ |
| Color palette HEX values for Moedim, MoedimAI, Moedim Verified, Jaribu | Vivian / designer | ☐ |
| Typography decision: Fraunces + Inter (V2 default) or other | Designer | ☐ |
| Favicon + Apple touch icon | Designer | ☐ |
| OG image template (1200×630) | Designer | ☐ |
| 1 founder portrait (high-res) | Photographer | ☐ |
| 3-5 farm / processing photos | Photographer | ☐ |
| 13 product hero shots (one per SKU) | Photographer | ☐ |
| Press-kit logo pack (zip with PNG / SVG / EPS) | Designer | ☐ |
| Founder bio PDF | Vivian | ☐ |
| Company fact sheet PDF | Vivian | ☐ |

### 4.2 Content inventory — required before W3 merge

| Content | Owner | Status |
|---|---|---|
| Homepage copy (4-door audience routing) | Vivian + Claude draft | ☐ |
| `/about` copy with three-entity structure | Vivian + Claude draft | ☐ |
| `/approach` copy (Jaribu, ICS, Muchiri partnership, 8-stage chemotype journey) | Vivian + Claude draft | ☐ |
| `/buyers` copy + technical buyer pack outline | Vivian + Claude draft | ☐ |
| `/investors` copy + traction figures | Vivian + Claude draft | ☐ |
| `/farmers` copy in plain English (Swahili in v1.1) | Vivian + Claude draft | ☐ |
| `/team` bios + LinkedIn URLs for Vivian, Martha, Esther, Sjors, Muchiri | Vivian | ☐ |
| Press kit body copy | Vivian + Claude draft | ☐ |
| Contact form copy per audience | Vivian + Claude draft | ☐ |
| 6 launch journal posts (3 tier-1 + 3 tier-2 per V3 §10) | Vivian + Claude draft | ☐ |
| Product page long-form copy per SKU (13 entries × about / uses / how-made / FAQ / farmer story) | Vivian + Claude draft | ☐ |

### 4.3 Legal — required before W12

| Document | Owner | Status |
|---|---|---|
| Privacy policy (DPA 2019 + GDPR compliant) | Lawyer | ☐ |
| Terms of service | Lawyer | ☐ |
| Returns / refunds policy | Lawyer | ☐ |
| Shipping policy | Lawyer + ops | ☐ |
| Buyer terms (B2B specific) | Lawyer | ☐ |
| Cookie / consent banner copy | Lawyer | ☐ |
| Photo consent form EN + Swahili (already drafted) | Lawyer | ☐ |

---

## 5. Entity confirmation

| Item | Value |
|---|---|
| Seller-of-record for KE retail orders | Moedim Africa Ltd (Kenya) — or as confirmed by Vivian + accountant before W6 |
| Seller-of-record for international retail orders | Not yet approved; confirm under W-A3 before international checkout |
| Public privacy-controller / website entity | MoedimAI Incorporated (confirmed 2026-07-23) |
| EU operations entity | Moedim EU BV (Netherlands, in formation) |
| KRA PIN | Moedim Africa Ltd (confirmed) — used for eTIMS + M-Pesa Paybill |
| Banking entity for M-Pesa settlement | Confirmed before W6 with Vivian |

---

## 6. Repo conventions for the website build

| Convention | Value |
|---|---|
| Website app location | `/website` package or new repo (W0 closeout decides) |
| Branch naming | `claude/website-wN-<short-name>` or `codex/website-wN-<short-name>` |
| Sprint PR title prefix | `Website WN:` |
| One sprint per PR — no future-sprint work silently bundled | Enforced in PR review |
| Docs location for website | `docs/website/` in the platform repo until website moves to its own repo |
| Branch protection | Direct push to `main` disabled. Squash-merge to `main`. |
| CI gates | tsc, ESLint, Prettier, build, schema validation, Lighthouse, axe, link checker |

---

## 7. What W1 can start the moment W0 merges

Per `WEBSITE_IMPLEMENTATION_SPRINTS.md` Sprint W1, the implementer scaffolds:

- Next.js 14+ App Router project under `/website`
- Tailwind + shadcn/ui base
- Global layout, navigation, footer, responsive shell
- Brand tokens for Moedim, MoedimAI, Moedim Verified, Jaribu by Moedim
- Base routes (homepage, `/buyers`, `/shop`, `/journal`, `/contact`) with placeholder-safe content
- Analytics base: Vercel Analytics, Plausible, Sentry, PostHog event wrapper
- Environment validation via Zod
- CI: lint, typecheck, build, basic a11y, Lighthouse smoke

What W1 **does not** build:
- Checkout (W6)
- Buyer portal auth (W8)
- RFQ backend (W4)
- Final product content (W5/W10)
- Final imagery (depends on photography timeline)

---

## 8. Open items beyond W0

These remain open and tracked in [`WEBSITE_OPEN_DECISIONS.md`](./WEBSITE_OPEN_DECISIONS.md):

- W-A4 — Slade360 final due diligence (deadline: W6 start)
- W-A6 — Photographer engagement details (deadline: W1 mid-sprint)
- W-A7 — Designer engagement details (deadline: W1 mid-sprint)
- W-A8 — Technical buyer pack contents (deadline: W4 start)
- B2B account ownership model — single owner default Vivian, reassignable
- Inbound email parsing — reply-to threading via Resend Inbound
- 2FA method for website light admin — TOTP only
- SMS marketing budget cap — KES 5,000 per campaign
- Cookie banner approach — vanilla 3-category with GPC + Consent Mode v2
- Calendly vs Cal.com — Calendly (per Obi's prior answer)

---

## 9. W0 closeout

W0 closes when this PR merges. Codex performs close-gate review. Next sprint (W1) opens on branch `claude/website-w1-foundation` once Codex confirms.

---

*Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.*
