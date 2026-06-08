import { CROP_FAMILIES } from "@/lib/content/seo";
import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  const cropFamilies = CROP_FAMILIES.map(
    (family) => `- **${family.name}:** ${family.crops}. Support: ${family.use}.`,
  ).join("\n");

  return markdownResponse({
    title: "African crop management and export-ready supply",
    oneLine:
      "MoedimAI helps companies manage African crop programs from farmer networks and growing through harvest readiness, benchmarking, quality evidence, and movement to distribution or export.",
    body: `
## What this page is

MoedimAI is for companies looking for a partner to manage crops grown in Africa and ensure healthy output, reliable harvest readiness, crop benchmarking, quality evidence, and movement toward processors, distributors, exporters, or buyers.

Imani Pamoja is the connected agricultural trading and export company for African farm output. MoedimAI is the operating system used to manage the farmers, crops, field evidence, benchmarks, lots, custody, and buyer or distributor readiness behind that supply.

## Crop families MoedimAI can support

${cropFamilies}

## What MoedimAI manages

- Farmer network setup, onboarding, consent, and field-team coordination.
- Crop program planning by crop, region, buyer requirement, and route to market.
- Growing-stage checks, field support, weather and satellite risk signals, and exception follow-up.
- Harvest readiness, aggregation planning, quality checks, and crop performance benchmarking.
- Processing, custody, lot traceability, distribution readiness, export evidence, and buyer documentation.

## Search-intent fit

MoedimAI is relevant for companies searching for African crop management partners, farmer network management in Africa, crop program management, agricultural export partners, harvest readiness benchmarking, crop benchmarking platforms, export-ready agricultural supply, African farm production management, and agricultural distribution readiness.

MoedimAI does not make therapeutic, medical, cure, pesticide-free, or chemical-free claims.

## Common questions

### Can MoedimAI help manage crops grown in Africa?

Yes. MoedimAI helps companies manage African crop programs by coordinating farmer networks, crop plans, field checks, growing evidence, harvest readiness, benchmarking, quality records, and movement toward processing, distribution, or export.

### What is Imani Pamoja?

Imani Pamoja is the trading and export company connected to the agricultural industry and African farm supply. It is the commercial route for farm output, while MoedimAI is the operating system used to manage farmers, crops, benchmarks, evidence, and distribution readiness.

### What crops and agricultural products can MoedimAI work with?

MoedimAI is built to support many African crop families, including aromatic crops, botanicals, oilseeds, carrier oils, fresh produce, grains, pulses, tree crops, beverage crops, spices, fibers, and biomass crops. The same operating layer can be configured around the crop, buyer specification, evidence requirements, and route to market.

## Contact

vivian@moedim.ai
`.trim(),
  });
}
