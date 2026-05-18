import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Team",
    oneLine: "The MoedimAI team across Mount Kenya operations and EU buyer relationships.",
    body: `
## Vivian Nwakah, Founder and CEO

Mount Kenya. Founded MoedimAI in 2024 to turn African smallholder botanicals into a verified, traceable export product. Previously founded Medsaf, a pharmaceutical supply-chain platform in Nigeria.

## Martha, Field Coordinator

Mount Kenya. Works directly with farmers in the Mount Kenya network. Runs plot inspections, biomass collection, and the farmer-side of the ICS audit trail.

## Esther, Field Coordinator

Mount Kenya. Field coordinator for the broader Mount Kenya farmer network. Supports onboarding, plot mapping, and biomass handover at the collection hub.

## Muchiri, Agronomy Lead

Mount Kenya. Agronomy lead for the Kenya operation. Guides farmers on crop selection, organic input use, and harvest timing for chemotype targets.

## Sjors, EU Buyer Relationships

Rotterdam. Manages European buyer relationships and the Rotterdam port operation. Bridges the Mount Kenya production base to EU cosmetics and fragrance buyers.

## Contact

All paths go through Vivian: vivian@moedimAI.com
`.trim(),
  });
}
