# Website Open Decisions

> Supersedes `/Users/obi/Documents/MoedimAI_Open_Decisions.md` (v1 draft).
> Restructured around V3's W-A IDs plus W2 prerequisite decisions.
> Updated: 2026-07-23

---

## 0. How this doc works

Every open decision below has:
- **ID** — stable identifier referenced from PR descriptions, sprint briefs, commit messages
- **Status** — `open` / `recommended` / `locked` / `superseded`
- **Owner** — who decides
- **Deadline** — by what sprint the decision must be locked
- **Recommendation** — current best-guess answer if no input

Decisions are locked into the relevant W-sprint brief at sprint open and tracked here for cross-sprint visibility.

### Public legal identity — privacy and website copy

**Status:** locked

**Owner:** Obi

**Locked answer:** `MoedimAI Incorporated`

**Confirmed:** 2026-07-23

This is the public privacy-controller and website copyright identity. It does
not, by itself, approve a Stripe account, payment flow, tax treatment, or
seller-of-record. Those remain subject to the separate W-A3 legal/accounting
gate.

---

## 1. V3 master open decisions (W-A1 through W-A9)

Inherited from [`MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`](./MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md) §13.

### W-A1 — CMS

**Status:** locked
**Owner:** Codex/Obi
**Locked answer:** Sanity
**Locked in W0 §2.2.**

### W-A2 — Portal auth

**Status:** locked
**Owner:** Codex/Obi
**Locked answer:** Supabase Auth magic links
**Locked in W0. Implication:** authoritative identity provider across customers, B2B contacts, admin, portal. No Auth.js added.

### W-A3 — Stripe entity

**Status:** recommended
**Owner:** Vivian + accountant + lawyer
**Recommendation:** Do not enable international checkout until accountant and
lawyer confirm whether MoedimAI Incorporated or another approved entity is the
Stripe seller-of-record. The public privacy-controller identity is MoedimAI
Incorporated.
**Deadline:** W7 start (International checkout)

### W-A4 — eTIMS integrator

**Status:** recommended
**Owner:** Vivian + Codex
**Recommendation:** Slade360, pending final due diligence on API fit + pricing + KRA certification + sandbox responsiveness
**Deadline:** W6 start (Kenya checkout). Integration build deferred per W0 §2.8 until credentials and requirements confirmed.

### W-A5 — Kenya fulfilment

**Status:** recommended
**Owner:** Vivian + operations
**Recommendation:** Pickup Mtaani + Sendy hybrid. Pickup Mtaani as default low-cost rail, Sendy as premium last-mile upgrade option at checkout.
**Deadline:** W6 start

### W-A6 — Press/farmer photography

**Status:** open
**Owner:** Vivian + designer
**Recommendation:** Commission early. Founder portrait, 3-5 farm/processing shots, 13 product hero shots. Real photography in hand before W3 (Recognition Spine) merges.
**Deadline:** W1 mid-sprint (engagement kicked off); deliverables before W3 merge.

### W-A7 — Designer

**Status:** open
**Owner:** Vivian + Codex
**Recommendation:** Bring in design help for homepage / product / press visual polish. Developer builds the system; designer improves brand credibility.
**Deadline:** W1 mid-sprint

### W-A8 — B2B lead magnet

**Status:** open
**Owner:** Vivian + Claude (drafting) + designer (layout)
**Recommendation:** Technical buyer pack PDF — Moedim Verified evidence framework, 13-SKU summary table, lot traceability example, COA/SDS/IFRA/allergen template overview, ICS overview, organic conversion pathway. Used as gated download on `/buyers` and `/wholesale`.
**Deadline:** W4 start (B2B buyer funnel)

### W-A9 — Consumer brand naming

**Status:** locked
**Owner:** Codex (CMO)
**Locked answer:** Moedim for product brand, MoedimAI for verification/platform, Moedim Verified as trust mark, Jaribu by Moedim for farmer recruitment. **Locked in V3 §1 and W0 §3.**

---

## 2. W2 prerequisite decisions

Per `WEBSITE_IMPLEMENTATION_SPRINTS.md` §5, W1 can start with safe assumptions but these must be locked before W2.

### W2-1 — Website location

**Status:** locked
**Owner:** Codex/Obi
**Locked answer:** Dedicated Next.js app under `/website` package in this repo temporarily. Will move to its own repo when the team grows or when website ops diverge enough from platform ops to warrant separation.
**Locked in W0 §2.1.**

### W2-2 — Website Supabase project

**Status:** locked
**Owner:** Codex/Obi
**Locked answer:** Separate Supabase project from the platform DB. Separate Auth user pool. Separate Storage buckets.
**Locked in W0 §2.3.**

### W2-6 — Website Supabase region

**Status:** locked
**Owner:** Codex/Obi
**Locked answer:** `eu-west-1` (Ireland) preferred. If unavailable at provisioning time, fall back to `eu-west-2` (London). Europe placement chosen for EU-buyer data residency and admin latency from the Netherlands and Delaware. Kenyan customer latency is acceptable from EU-west.
**Locked in W2 sprint-open by Codex/Obi.**

### W2-3 — Product launch list

**Status:** locked
**Owner:** Vivian
**Locked answer:** 13 SKUs. Evidence status surfaced honestly per V3 §7 (active / pending / sample / expired / not_applicable).
**Locked in W0 §2.4.**

### W2-4 — Checkout first market

**Status:** locked
**Owner:** Vivian + Codex
**Locked answer:** Kenya first via M-Pesa. International (Stripe + multi-currency) deferred to W7 after Kenya checkout ships.
**Locked in W0 §2.5.**

### W2-5 — Buyer docs at launch

**Status:** locked
**Owner:** Codex (trust discipline)
**Locked answer:** Sample / placeholder-safe documents allowed with explicit status label. Replace with real lab docs as they arrive.
**Locked in W0 §2.6.**

---

## 3. Additional decisions surfaced by implementation specs

Decisions surfaced in prior implementation docs (admin backend, customer journey, architecture) that need answers before their respective sprints.

### W-B1 — B2B account ownership model

**Status:** recommended
**Owner:** Codex
**Recommendation:** Single owner per B2B account, defaults to Vivian, reassignable. Prevents confused communication, makes accountability clear.
**Deadline:** W11 start (CRM + Nurture)

### W-B2 — Inbound email parsing for B2B CRM

**Status:** recommended
**Owner:** Codex
**Recommendation:** Reply-to threading via Resend Inbound. Outbound emails set `reply-to: thread+ACCOUNTID-TOKEN@reply.moedimai.com`. Replies auto-thread.
**Deadline:** W11 start

### W-B3 — Website light admin 2FA method

**Status:** recommended
**Owner:** Codex
**Recommendation:** TOTP only. SMS 2FA is phishable. Hardware keys are overkill at this scale. Mandatory at first sign-in.
**Deadline:** W4 start (admin gains real authenticated users)

### W-B4 — CRM scope discipline confirmation

**Status:** recommended
**Owner:** Codex
**Recommendation:** Ship minimal — no custom fields on B2B accounts, no branching automation, no separate "deals" entity distinct from RFQs, no per-contact email templates with conditional content. Add only what's painful in production.
**Deadline:** W11 start

### W-B5 — Africa's Talking SMS sender ID

**Status:** recommended
**Owner:** Vivian
**Recommendation:** `MOEDIMAI` (matches brand handoff one-word rule). Sender ID requires Communications Authority of Kenya approval — ~2 weeks lead time. Apply now even though SMS module is v1.1.
**Deadline:** apply immediately; not a sprint blocker

### W-B6 — SMS marketing budget cap

**Status:** recommended
**Owner:** Codex
**Recommendation:** KES 5,000 per campaign requires admin role to approve. Cap configurable in settings.
**Deadline:** v1.1 (SMS module not in W1-W14)

### W-B7 — Cookie banner

**Status:** recommended
**Owner:** Codex
**Recommendation:** Vanilla 3-category (Essential / Analytics / Marketing) with Global Privacy Control header honored + Google Consent Mode v2 wiring ready. No third-party CMP (Cookiebot / OneTrust). Klaro as managed fallback if vanilla becomes painful.
**Deadline:** W12 (Production hardening)

### W-B8 — Calendly vs Cal.com

**Status:** locked
**Owner:** Obi
**Locked answer:** Calendly (per Obi's prior answer in conversation)
**Deadline:** W11 start

### W-B9 — Default international shipping carrier

**Status:** recommended
**Owner:** Codex
**Recommendation:** DHL Express as default for premium / B2B samples (3-7 days globally from Nairobi). FedEx International Economy and Aramex (Africa/ME corridor) as cheaper alternatives surfaced at checkout.
**Deadline:** W7 start

### W-B10 — KE D2C free-shipping threshold

**Status:** recommended
**Owner:** Codex + Vivian
**Recommendation:** Free domestic shipping above KES 5,000 cart total. Revisit after first 60 days.
**Deadline:** W6 start

### W-B11 — International free-shipping threshold

**Status:** recommended
**Owner:** Codex
**Recommendation:** None. Always charge actual cost. DHL Express to Europe is $35-60 per parcel; free shipping above any threshold destroys margin on a $25/bottle sample kit.
**Deadline:** W7 start

### W-B12 — Returns policy

**Status:** recommended
**Owner:** Vivian + lawyer
**Recommendation:** 14-day window on unopened bottles only. Refund to original payment method. Industry standard for essential oils + cosmetics. Opened bottles cannot be resold (product safety).
**Deadline:** W12 (Production hardening, legal pages)

### W-B13 — Reviews moderation policy

**Status:** recommended
**Owner:** Codex
**Recommendation:** Hybrid — verified-purchase auto-publish, unverified pre-moderate. Spam filter via simple heuristics or Akismet.
**Deadline:** W5 (Product pages)

### W-B14 — PayPal activation on Stripe

**Status:** recommended
**Owner:** Codex + Vivian
**Recommendation:** Activate Stripe's PayPal Payment Method on W7 launch. Two-checkbox cost in Stripe Dashboard. Real consumer trust signal.
**Deadline:** W7 start

### W-B15 — EU IOSS registration

**Status:** recommended
**Owner:** Vivian + accountant
**Recommendation:** Defer. Register after 5+ EU sample shipments. Registration adds quarterly VAT filing obligation; not worth it for sub-€150 / shipment volumes at launch.
**Deadline:** post-W14, revisit at 5 EU shipments

### W-B16 — Press / brand voice review cadence

**Status:** open
**Owner:** Codex (CMO)
**Recommendation:** Every PR that touches public copy must pass V3 §12 messaging framework — no "AI-powered essential oil store" language, no "chemical-free" claims, no medical benefits, no generic poetry above the fold. PR template includes a copy-review checklist.
**Deadline:** W3 start

---

## 4. Defaults to confirm or override

Defaults set across prior implementation docs. Codex confirms or overrides before W2.

| ID | Topic | Default | Status |
|---|---|---|---|
| W-D1 | Background jobs orchestration | Vercel Cron | ☐ |
| W-D2 | Email service | Resend | ☐ |
| W-D3 | SMS service KE | Africa's Talking | ☐ |
| W-D4 | SMS / WhatsApp international | Twilio | ☐ |
| W-D5 | Shipping aggregator | Shippo | ☐ |
| W-D6 | Analytics (cookie-less) | Plausible | ☐ |
| W-D7 | Product analytics (opt-in) | PostHog | ☐ |
| W-D8 | Error tracking | Sentry | ☐ |
| W-D9 | UI library | shadcn/ui | ☐ |
| W-D10 | Display serif font | Fraunces | ☐ |
| W-D11 | Body / UI font | Inter | ☐ |
| W-D12 | Money storage | KES cents (integer) for KE; USD/EUR cents per variant | ☐ |
| W-D13 | FX source | exchangerate.host (daily cron) | ☐ |
| W-D14 | Lighthouse target | 90+ all categories on mobile 4G | ☐ |
| W-D15 | Sample customs HS code | 3301.x per oil | ☐ |
| W-D16 | DPA 2019 data deletion path | Anonymise orders, keep tax record 7 years | ☐ |
| W-D17 | Audit log retention | 7 years | ☐ |
| W-D18 | Cloudflare in front of website | Yes — DNS / WAF / CDN / image polish / access policy on admin | ☐ |

---

## 5. Closed decisions

Decisions made and no longer in play.

| ID | Decision | Outcome | Closed when |
|---|---|---|---|
| Closed-1 | Channel scope | D2C + B2B both, with B2B trust as the moat per V3 | V3 §14 |
| Closed-2 | 13 SKUs vs 9 crops vs 3 SKUs | 13 SKUs locked | User direction 2026-05-17 |
| Closed-3 | Phasing approach | No phasing in V2 master plan; superseded by V3 sequential W0-W14 sprints | V3 |
| Closed-4 | GEO requirements apply to ecommerce pages | Yes | V3 §6 + engineering brief |
| Closed-5 | Customer reviews in v1 | Yes | User direction |
| Closed-6 | Cloudflare in front | Yes | User direction |
| Closed-7 | Currency switcher | USD / EUR / KES | User direction, deferred to W7 |
| Closed-8 | RFQ approval SLA | 48 hours | User direction |
| Closed-9 | Slack notifications | No (use email + dashboard) | User direction |
| Closed-10 | Buyer portal sample/mock docs at launch | Allowed with status label | W0 §2.6 |
| Closed-11 | Legal entity for KRA/M-Pesa | Moedim Africa Ltd as Kenya seller-of-record | W0 + Vivian confirmation |
| Closed-12 | Public legal identity for international website/privacy | MoedimAI Incorporated; payment seller-of-record requires separate W-A3 approval | Obi direction 2026-07-23 |
| Closed-13 | DNS boundary for admin surfaces | `admin.moedimai.com` = existing platform admin only; `manage.moedimai.com` = website light admin. No DNS collision. | W0 cleanup commit 2026-05-17 |
| Closed-14 | Website Supabase region | `eu-west-1` (Ireland) with `eu-west-2` fallback. EU placement chosen for EU-buyer data residency. | W2 sprint-open |

---

*Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.*
