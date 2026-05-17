# `docs/website/` — Moedim / MoedimAI Website Documentation

This directory contains the canonical documentation for the Moedim / MoedimAI website build.

**DNS boundary (locked W0):**
- `admin.moedimai.com` — existing platform admin (farmer ops, QC, harvest, M-Pesa to farmers, ICS, certification). Out of scope for the website build.
- `manage.moedimai.com` — website light admin (product CMS, RFQs, sample workflow, buyer portal management, reviews, journal). Same Next.js app as the public website, served via subdomain routing.

---

## Reading order for a new developer

Read in this order. Each doc has a clear purpose and assumes you've read the ones above it.

1. **[`MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`](./MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md)** — CTO/CMO scope, positioning, brand architecture, audience strategy. The why.
2. **[`WEBSITE_IMPLEMENTATION_SPRINTS.md`](./WEBSITE_IMPLEMENTATION_SPRINTS.md)** — Sprint plan W0 through W14. The what and when.
3. **[`WEBSITE_W0_PREFLIGHT.md`](./WEBSITE_W0_PREFLIGHT.md)** — Locked decisions before W1. Read before opening any code PR.
4. **[`WEBSITE_OPEN_DECISIONS.md`](./WEBSITE_OPEN_DECISIONS.md)** — Outstanding decisions tracked by W-A / W-B / W-D ID. Reference per sprint.
5. **[`CUSTOMER_JOURNEY_BUILD.md`](./CUSTOMER_JOURNEY_BUILD.md)** — D2C retail and B2B sample journeys end-to-end. The how, customer-side.
6. **[`WEBSITE_LIGHT_ADMIN_BUILD.md`](./WEBSITE_LIGHT_ADMIN_BUILD.md)** — Operator-side surface: orders, B2B CRM, marketing, inventory. The how, admin-side.

---

## Brand architecture at a glance

| Layer | Use | Where it appears |
|---|---|---|
| **Moedim** | Consumer/product brand | `/`, `/shop`, `/shop/product/[slug]`, retail emails, packaging |
| **MoedimAI** | Verification / B2B / platform | `/buyers`, `/wholesale`, `/portal/*`, `/about`, `/investors`, RFQ emails |
| **Moedim Verified** | Trust mark for lots, COAs, evidence | Product trust strip, `/lot/[lot_number]`, document headers |
| **Jaribu by Moedim** | Farmer recruitment | `/farmers` only |

**Don't** lead consumer pages with "AI." Don't use "MoedimAI" in `/` hero copy. Brand discipline is enforced in PR review per [`WEBSITE_OPEN_DECISIONS.md`](./WEBSITE_OPEN_DECISIONS.md) W-B16.

---

## Sprint process

Per W0, every website sprint follows GitHub-native rhythm:

1. **Sprint open** — Codex/Obi approve sprint brief. Implementation owner creates branch.
   - Branch naming: `claude/website-wN-<short-name>` or `codex/website-wN-<short-name>`
2. **Implementation PR** — one sprint per PR. PR title prefix: `Website WN:`. PR body includes scope / out-of-scope / test evidence / analytics events / user-facing walkthrough.
3. **Review** — Claude or Codex reviews (depending on implementer). Obi approves merge.
4. **Sprint close** — Codex performs close-gate review. Docs updated. Next sprint opens only after closeout.

---

## Role assignment

| Role | Who | Responsibilities |
|---|---|---|
| CTO / CMO scope owner | Codex | Sprint open gate, scope/decisions, close gate, merge readiness |
| Implementation owner | Per sprint (Claude assigned W0 + W1) | Branch + PR + implementation, no direct merge, no sprint archival |
| Approver | Obi | Final merge approval |

---

## What lives outside this directory

| Doc | Location | Status |
|---|---|---|
| `BUILD_BRIEF 2.md` | `/Users/obi/Documents/` (Vivian's drafts) | Pre-V3 foundational brief — superseded by V3 for sprint scope, retained for historical context |
| `Moedim_AI_Website_Engineering_Brief.docx` | `/Users/obi/Downloads/` (Vivian's drafts) | GEO engineering brief — folded into V3 master plan |
| `MoedimAI_Claude_Handoff.md` | `/Users/obi/Downloads/` (brand bible) | Brand visual guidelines — referenced when building product imagery, stickers, decks. Not website-implementation guidance directly but reflects brand discipline. |
| `MoedimAI_Master_Plan_v2.md` | `/Users/obi/Documents/` (my prior draft) | Superseded by V3 — do not use for sprint scope |
| `MoedimAI_Architecture_v1.md` | `/Users/obi/Documents/` (my prior draft) | Architecture diagrams — still useful reference for system boundaries |

When time permits, the items above should also move into `docs/website/` or `docs/brand/` so the repo is the single source of truth.

---

## Current sprint status

| Sprint | Status | Branch | PR |
|---|---|---|---|
| W0 — Preflight | Merged | `claude/website-w0-preflight-reconciliation` | #45 |
| W1 — Foundation + brand system | Merged | `claude/website-w1-foundation` | #46 |
| W2 — GEO + CMS + data foundation | In review | `claude/website-w2-geo-data-foundation` | (this PR) |
| W3 — Recognition spine | Not started | — | — |
| W4 — B2B buyer funnel v1 | Not started | — | — |
| W5 — Product pages + shop shell | Not started | — | — |
| W6 — Kenya checkout | Not started | — | — |
| W7 — International checkout | Not started | — | — |
| W8 — Buyer portal foundation | Not started | — | — |
| W9 — Lot traceability + buyer documents | Not started | — | — |
| W10 — Journal + evidence library | Not started | — | — |
| W11 — CRM + nurture | Not started | — | — |
| W12 — Production hardening | Not started | — | — |
| W13 — Soft launch | Not started | — | — |
| W14 — Public launch | Not started | — | — |

This table is updated by Codex at sprint open and close.

---

*Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.*
