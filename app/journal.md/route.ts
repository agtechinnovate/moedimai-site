import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "The Moedim Journal",
    oneLine:
      "Buyer-useful, evidence-led writing on African botanical supply, essential-oil verification, and organic certification for smallholder farms.",
    body: `
## Editorial focus

- **Use**, consumer education on how to dilute, store, and apply botanical oils safely.
- **Origin**, farmer and supply-chain stories from the Mount Kenya network.
- **Science**, chemotype, lab evidence, regulatory primers, ISO standards.

## What we are writing about

1. How cosmetic buyers verify essential oils before purchase
2. Why GC-MS is not the same as pesticide testing
3. Kenyan rosemary oil, a buyer evidence checklist
4. How smallholder traceability works from farmer to lot
5. Organic conversion for smallholder botanical farms
6. What a buyer should ask before sourcing African botanicals
`.trim(),
  });
}
