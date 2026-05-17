import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Shop Moedim botanicals",
    oneLine:
      "Kenyan essential and botanical oils, sold by the bottle. Clear origin, safe-use guidance, M-Pesa checkout, delivered across Kenya.",
    body: `
## The catalogue

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

## Sourcing in volume

Bulk purchases ship from Mount Kenya by the kilogram with full documentation. Visit the buyer supply desk at /buyers.
`.trim(),
  });
}
