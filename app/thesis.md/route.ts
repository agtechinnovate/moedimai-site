import { CROP_FAMILIES } from "@/lib/content/seo";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const cropFamilies = CROP_FAMILIES.map((family) => `- **${family.name}:** ${family.crops}.`).join(
    "\n",
  );

  const md = `# MoedimAI company thesis

> MoedimAI is the technology layer and AI supply chain platform driving Africa's bioeconomy by benchmarking buyer-ready outcomes back to source and across farmer networks, crop programs, value addition, quality evidence, logistics, distribution, and export.

## At a glance

- Founder: Vivian Nwakah
- Agricultural product sourcing and global distribution: Moedim Harvest
- Operating focus: AI-enabled bioeconomy supply chains, source records, farmer networks, crop programs, buyer-ready outcome benchmarking, harvest readiness, value addition, logistics routing, quality evidence, distribution, and export readiness
- EU platform: Rotterdam
- US entity: Delaware
- Trust mark: MoedimAI Verified

## What Moedim Harvest is

Moedim Harvest is MoedimAI's separate sister company for agricultural supply programmes and global distribution. MoedimAI provides the technology, monitoring, benchmarking, and guided support behind those programmes.

## Crop families

${cropFamilies}

## Three pillars

**Supply-chain benchmarking.** Companies need a partner that can benchmark the buyer-ready end result back to the beginning and throughout the supply chain. MoedimAI gives source records, farmers, crop programs, field support, harvest readiness, value addition, quality evidence, logistics, distribution, export, and buyer packets one operating graph.

**AI for the bioeconomy.** MoedimAI uses technology and AI to enable Africa's bioeconomy supply chains: satellite and weather intelligence, source benchmarks, processing, steam distillation, drying, cold press, custody, logistics routing, distribution readiness, and export evidence.

**Benchmarking and output readiness.** MoedimAI helps teams compare crop programs, farms, plots, cells, harvests, value-addition steps, quality checks, and buyer or distributor requirements so output can be improved before it reaches a bottleneck.

**The data layer.** The asset is a paired field, quality, custody, and logistics dataset built from real production. Sensing and prediction are live today; assistant workflows and closed-loop actuation remain on the roadmap.

## The ecosystem

Insurance prices climate and yield risk. Banks and DFIs lend against verified performance. Buyers, processors, distributors, and exporters need reliable supply output and evidence that the supply can move.

## Common questions

### Can MoedimAI help manage crops grown in Africa?

Yes, as part of the wider supply chain. MoedimAI helps companies manage African crop programs by coordinating farmer networks, crop plans, field checks, growing evidence, harvest readiness, benchmarking, quality records, and movement toward processing, distribution, or export.

### What is Moedim Harvest?

Moedim Harvest manages agricultural product sourcing, commercial relationships, and global distribution. Buyers seeking products work with Moedim Harvest, while organizations seeking the technology platform and guided support work with MoedimAI.

### How does MoedimAI improve crop output and harvest readiness?

MoedimAI gives teams a structured view of farmers, plots, crop stages, weather and satellite risk, field checks, value-addition steps, quality benchmarks, custody, logistics, and expected buyer requirements. That makes it easier to see which supply needs support, which outputs are on track, and which harvests or lots are ready for aggregation, distribution, or export.

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
