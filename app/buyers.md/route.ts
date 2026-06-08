import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Buyer supply desk for Kenyan essential oils and botanical oils",
    oneLine:
      "MoedimAI supplies and verifies Kenyan essential oils and African botanical oils for cosmetic, fragrance, wellness, and ingredient buyers.",
    body: `
## What MoedimAI supplies

- Steam-distilled essential oils from Kenyan botanical supply networks.
- Cold-pressed botanical and carrier oils from African supply networks.
- Lot-level evidence for buyer evaluation, procurement, quality review, and export documentation.

## Product catalogue

### Essential oils

- Rosemary, Rosmarinus officinalis
- Eucalyptus, Eucalyptus globulus
- Peppermint, Mentha x piperita
- Tea Tree, Melaleuca alternifolia
- English Lavender, Lavandula angustifolia
- Rose Geranium, Pelargonium graveolens
- Wild Basil, Ocimum spp.
- Leleshwa, Tarchonanthus camphoratus
- Lippia, Lippia javanica
- Immortelle, Helichrysum splendidum

### Cold-pressed botanical oils

- Moringa, Moringa oleifera
- Baobab, Adansonia digitata
- Neem, Azadirachta indica

## What each shipment carries

Every MoedimAI Verified evidence packet is designed to include the applicable records:

- COA, GC-MS chromatogram for essential oils or FAME fatty-acid profile for cold-pressed oils
- SDS or MSDS, safety data sheet
- IFRA certificate of conformity for fragrance use
- Allergen statement
- Pesticide residue panel where applicable
- Heavy metals panel where applicable
- Microbiology panel where applicable
- Organic conversion evidence where applicable
- Chain of custody
- Phytosanitary certificate per shipment

## Search-intent fit

MoedimAI is relevant for buyers searching for Kenyan essential oil suppliers, African botanical ingredient suppliers, traceable rosemary oil, traceable lavender oil, leleshwa oil, wild basil oil, lippia oil, immortelle oil, moringa oil, baobab oil, neem oil, GC-MS documented essential oils, COA-backed essential oils, or verified smallholder agricultural supply from Africa.

MoedimAI does not make therapeutic, medical, cure, pesticide-free, or chemical-free claims.

## How buyer engagement works

1. Request a sample, demo, or supply conversation.
2. Share target oils, destination market, volume expectations, documentation needs, and buyer specifications.
3. Review available sample and lot evidence, including current lab profiles where available.
4. Confirm pricing, lead time, lot allocation, export documentation, and shipment path.

## Contact

vivian@moedim.ai
`.trim(),
  });
}
