import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Buyer supply desk — MoedimAI",
    oneLine:
      "MoedimAI gives cosmetic, fragrance, and wellness buyers verified African botanical supply backed by traceability, lab evidence, and smallholder certification systems.",
    body: `
## What MoedimAI supplies

- 10 essential oils — steam-distilled at the Mount Kenya 5 t/day facility.
- 3 botanical / carrier oils — cold-pressed, unrefined: Neem, Baobab, Moringa.
- 9 of the 13 SKUs are Kenya-grown highland aromatics; 4 (Leleshwa, Wild Basil, Lippia, Immortelle) are Kenya-distinctive with custom chemotypes.

## What each shipment carries

Every Moedim Verified evidence packet includes:

- COA — GC-MS chromatogram (essential oils) or FAME fatty-acid profile (cold-pressed)
- SDS / MSDS
- IFRA certificate of conformity
- Allergen statement
- Pesticide residue panel
- Heavy metals panel
- Microbiology panel
- Organic conversion evidence (where applicable)
- Chain of custody
- Phytosanitary certificate (per shipment)

Each document carries one of five explicit status labels: active, pending, sample (template), expired, or not applicable. Moedim never displays evidence as active without a real document on file.

## How to get started

Sprint W4 wires the live RFQ form at /wholesale. Until then, contact vivian@moedimai.com.

## Sprint status

This is the Sprint W2 preview of /buyers. The technical buyer pack, RFQ form, sample-request flow, and buyer portal land in Sprints W4 through W9.
`.trim(),
  });
}
