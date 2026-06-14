import { CROP_FAMILIES } from "@/lib/content/seo";
import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  const cropFamilies = CROP_FAMILIES.map(
    (family) => `- **${family.name}:** ${family.crops}. Support: ${family.use}.`,
  ).join("\n");

  return markdownResponse({
    title: "African supply chain platform and export-ready supply",
    oneLine:
      "MoedimAI benchmarks African supply from source to buyer-ready output across farmer networks, crops, value addition, quality evidence, logistics, distribution, and export.",
    body: `
## What this page is

MoedimAI is for companies looking for an AI supply chain platform to benchmark African bioeconomy supply from buyer-ready outcome back to source and throughout the chain: farmer networks, crops, value addition, quality evidence, logistics, distribution, export, and movement toward processors, distributors, exporters, or buyers.

MoedimAI uses technology and AI to enable Africa's bioeconomy supply chains: satellite and weather intelligence, source records, value addition, processing, steam distillation, drying, cold press, logistics routing, distribution readiness, export pathways, and end-to-end agricultural supply-chain benchmarking.

Imani Pamoja is the connected agricultural trading and export company for African farm output. MoedimAI is the supply chain platform used to benchmark the farmers, crops, field evidence, lots, custody, value addition, logistics, distribution, export readiness, and buyer outcomes behind that supply.

## Crop families MoedimAI can support

${cropFamilies}

## What MoedimAI manages

- Farmer network setup, onboarding, consent, and field-team coordination.
- Crop program planning by crop, region, buyer requirement, value-addition step, and route to market.
- Growing-stage checks, field support, AI-supported weather and satellite risk signals, and exception follow-up.
- Harvest readiness, aggregation planning, quality checks, and crop performance benchmarking.
- Processing, steam distillation, drying, dehydration, cold press, custody, lot traceability, logistics routing, distribution readiness, export evidence, and buyer documentation.

## Search-intent fit

MoedimAI is relevant for companies searching for African supply chain platforms, AI supply chain platform Africa, bioeconomy supply chain platform, supply chain benchmarking Africa, African crop program partners, farmer network management in Africa, crop program management, agricultural export partners, harvest readiness benchmarking, crop benchmarking platforms, export-ready agricultural supply, African farm production management, agricultural distribution readiness, AI bioeconomy agriculture technology, bioeconomy AI platform, agricultural value addition Africa, agro-processing value addition, steam distillation agriculture, drying processing cold press agriculture, agricultural logistics routing Africa, and end-to-end agricultural supply chain Africa.

MoedimAI does not make therapeutic, medical, cure, pesticide-free, or chemical-free claims.

## Common questions

### Can MoedimAI help manage crops grown in Africa?

Yes. Crop programs are one part of the supply chain. MoedimAI helps companies coordinate farmer networks, crop plans, field checks, growing evidence, harvest readiness, value addition, quality records, logistics, distribution, and movement toward processing or export.

### What is Imani Pamoja?

Imani Pamoja is the trading and export company connected to the agricultural industry and African farm supply. It is the commercial route for farm output, while MoedimAI is the supply chain platform used to benchmark source records, value addition, quality evidence, logistics, distribution, export readiness, and buyer outcomes.

### What crops and agricultural products can MoedimAI work with?

MoedimAI is built to support many African crop families, including aromatic crops, botanicals, oilseeds, carrier oils, fresh produce, grains, pulses, tree crops, beverage crops, spices, fibers, and biomass crops. The supply chain platform can be configured around the buyer-ready outcome, crop, source records, buyer specification, evidence requirements, logistics route, and route to market.

## Contact

vivian@moedim.ai
`.trim(),
  });
}
