import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Shop Moedim botanicals",
    oneLine:
      "Moedim offers Kenyan botanical oils with clear origin, safe-use guidance, and lot-level traceability.",
    body: `
## Catalogue at launch

### Essential oils (10ml at launch)

- Rosemary — Rosmarinus officinalis — ISO 1342
- Eucalyptus — Eucalyptus globulus — ISO 770
- Peppermint — Mentha × piperita — ISO 856
- Tea Tree — Melaleuca alternifolia — ISO 4730
- English Lavender — Lavandula angustifolia — ISO 3515
- Rose Geranium — Pelargonium graveolens — ISO 4731
- Wild Basil — Ocimum spp. — custom chemotype
- Leleshwa — Tarchonanthus camphoratus — Kenya-indigenous, custom chemotype
- Lippia — Lippia javanica — custom chemotype
- Immortelle — Helichrysum splendidum — African analog to H. italicum

### Botanical / carrier oils (30ml at launch)

- Neem — Azadirachta indica
- Baobab — Adansonia digitata
- Moringa — Moringa oleifera

## Collections

- Skin & Hair
- Mind & Mood
- Breathe & Relief
- Carriers & Botanical Oils
- The Rare Collection

Each product carries an evidence-status badge: active / pending / sample / expired / not applicable.

## Sprint status

Sprint W2 preview. Product pages, cart, M-Pesa checkout, and international checkout ship in W5–W7. No medical or therapeutic claims appear on any product page — by design.
`.trim(),
  });
}
