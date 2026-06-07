import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Buyer supply desk",
    oneLine:
      "MoedimAI for cosmetic, fragrance, and wellness buyers. Thirteen Kenyan-grown botanicals available by the kilogram with full documentation.",
    body: `
## What MoedimAI supplies

- 10 essential oils, steam-distilled at the Mount Kenya facility.
- 3 botanical and carrier oils, cold-pressed and unrefined: Neem, Baobab, Moringa.
- 4 of the SKUs are Kenya-distinctive with custom chemotypes: Leleshwa, Wild Basil, Lippia, Immortelle.

## What each shipment carries

Every Moedim Verified evidence packet includes:

- COA, GC-MS chromatogram for essential oils or FAME fatty-acid profile for cold-pressed oils
- SDS or MSDS, safety data sheet
- IFRA certificate of conformity for fragrance use
- Allergen statement
- Pesticide residue panel
- Heavy metals panel
- Microbiology panel
- Organic conversion evidence where applicable
- Chain of custody
- Phytosanitary certificate per shipment

## How buyer engagement works

1. Request a sample. We ship samples plus the current lot GC-MS profile to your facility.
2. Place an order. We confirm pricing, lead time, and lot allocation within 48 hours.
3. Receive with full documentation. Every shipment includes Certificate of Analysis, lot traceability record, and origin documentation. KEPHIS phytosanitary clearance arranged for export consignments.

## Contact

info@moedim.ai
`.trim(),
  });
}
