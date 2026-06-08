import { CROP_FAMILIES } from "@/lib/content/seo";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const cropFamilies = CROP_FAMILIES.map(
    (family) => `- **${family.name}:** ${family.crops}.`,
  ).join("\n");

  const md = `# MoedimAI company thesis

> MoedimAI is an operating system for companies managing African crop programs, farmer networks, growing, harvest readiness, benchmarking, quality evidence, and movement to distribution or export.

## At a glance

- Founder: Vivian Nwakah
- Trading and export route: Imani Pamoja
- Operating focus: African crop programs, AI-enabled bioeconomy supply chains, farmer networks, crop benchmarks, harvest readiness, value addition, logistics routing, quality evidence, and distribution readiness
- EU platform: Rotterdam
- US entity: Delaware
- Trust mark: MoedimAI Verified

## What Imani Pamoja is

Imani Pamoja is the agricultural trading and export company connected to African farm supply. MoedimAI is the operating system used to manage the farmers, crops, benchmarks, field evidence, harvest readiness, lots, custody, and buyer or distributor readiness behind that supply.

## Crop families

${cropFamilies}

## Three pillars

**Managed crop programs.** Companies need a partner that can coordinate farmers, crops, field support, harvest readiness, quality evidence, and movement toward processors, distributors, exporters, or buyers. MoedimAI gives that work one operating graph.

**AI for the bioeconomy.** MoedimAI uses technology and AI to enable Africa's bioeconomy supply chains: satellite and weather intelligence, crop benchmarks, processing, steam distillation, drying, cold press, custody, logistics routing, distribution readiness, and export evidence.

**Benchmarking and output readiness.** MoedimAI helps teams compare crop programs, farms, plots, cells, harvests, value-addition steps, quality checks, and buyer or distributor requirements so output can be improved before it reaches a bottleneck.

**The data layer.** The asset is a paired field, quality, custody, and logistics dataset built from real production. Sensing and prediction are live today; assistant workflows and closed-loop actuation remain on the roadmap.

## The ecosystem

Insurance prices climate and yield risk. Banks and DFIs lend against verified performance. Buyers, processors, distributors, and exporters need reliable crop output and evidence that the supply can move.

## Common questions

### Can MoedimAI help manage crops grown in Africa?

Yes. MoedimAI helps companies manage African crop programs by coordinating farmer networks, crop plans, field checks, growing evidence, harvest readiness, benchmarking, quality records, and movement toward processing, distribution, or export.

### What is Imani Pamoja?

Imani Pamoja is the trading and export company connected to the agricultural industry and African farm supply. It is the commercial route for farm output, while MoedimAI is the operating system used to manage farmers, crops, benchmarks, evidence, and distribution readiness.

### How does MoedimAI improve crop output and harvest readiness?

MoedimAI gives teams a structured view of farmers, plots, crop stages, weather and satellite risk, field checks, quality benchmarks, and expected buyer requirements. That makes it easier to see which farms need support, which crops are on track, and which harvests are ready for aggregation or distribution.

## Contact

Vivian Nwakah, Founder and CEO. vivian@moedim.ai
`;
  return new NextResponse(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}
