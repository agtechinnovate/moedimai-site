import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Contact Moedim",
    oneLine: "Reach Moedim — buyer inquiries, investor inquiries, farmer applications, and press.",
    body: `
## Direct contact

- Email: vivian@moedimai.com

## Audience-routed forms (coming in Sprints W3 and W4)

- **Buyer inquiry** — cosmetic, fragrance, wellness, or ingredient supply.
- **Investor inquiry** — funding, partnership, blended capital, or DFI conversations.
- **Farmer application** — Jaribu by Moedim out-grower program.
- **Press inquiry** — media coverage, interview requests, asset packs.

## Sprint status

Sprint W2 preview. Forms wire in Sprints W3 (Recognition Spine) and W4 (B2B funnel). Until then, email is the routing channel.
`.trim(),
  });
}
