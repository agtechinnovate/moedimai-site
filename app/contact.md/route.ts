import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Contact Moedim",
    oneLine: "Reach Moedim, buyer inquiries, investor inquiries, farmer applications, and press.",
    body: `
## Direct contact

- Email: vivian@moedimai.com

## Audience-routed mailto

- **Buyer inquiry**, cosmetic, fragrance, wellness, or ingredient supply.
- **Investor inquiry**, funding, partnership, blended capital, DFI conversations.
- **Farmer application**, Jaribu by Moedim out-grower program.
- **Press inquiry**, media coverage, interview requests, asset packs.
`.trim(),
  });
}
