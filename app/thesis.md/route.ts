import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const md = `# MoedimAI company thesis

> Chemotype-verification infrastructure for African organic exports. Climate-resilient agriculture with value addition in Kenya and blockchain provenance.

## At a glance

- Founder: Vivian Nwakah
- Operations: Mount Kenya
- EU platform: Rotterdam
- US entity: Delaware
- Trust mark: MoedimAI Verified

## Three pillars

**Value addition in Kenya.** We buy biomass from farmers at above-market prices, distill, cold-press, dry, and package in Kenya. Finished essential oils, cold-press oils, and botanical powders ship to EU, US, and local buyers.

**Organic, climate, health.** Every farmer converts to EU 2018/848 and USDA NOP. No synthetic pesticides means no chemical residues, no chemical exposure for families, and soil that regenerates. Satellite and market data pre-empt unfavourable climate conditions.

**The data layer.** Every stage log, soil test, GC-MS result, and harvest weight is structured and queryable across nine export-ready crops. By end of 2027 we will hold a library of African chemotype profiles tied to operational decisions at smallholder scale.

## The ecosystem

Insurance prices climate and yield risk. Banks and DFIs lend against verified performance. Research institutions advance crop science.

## Contact

Vivian Nwakah, Founder and CEO. info@moedim.ai
`;
  return new NextResponse(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}
