import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const md = `# MoedimAI company thesis

> MoedimAI is trade infrastructure for the agricultural bioeconomy: an operating system that turns fragmented production into verified, financeable, exportable, buyer-ready supply.

## At a glance

- Founder: Vivian Nwakah
- Proof case: Imani Pamoja
- Public scale: 600+ farmers onboarded, about 900 acres under management, 20 operating cells
- Current oil proof-case lines: Baobab, moringa, avocado
- EU platform: Rotterdam
- US entity: Delaware
- Trust mark: MoedimAI Verified

## Three pillars

**Trade infrastructure.** African production is not the bottleneck; the missing layer is infrastructure that can verify, finance, and move production into buyer-grade trade. MoedimAI connects farmer, plot, cell, quality, certification, custody, and buyer records in one governed operating graph.

**Specification-driven production.** MoedimAI works backward from the buyer's end-state specification. In the botanical proof case, chemotype and quality evidence are connected to lot records so buyers can evaluate fit before procurement decisions.

**The data layer.** The asset is a paired field-and-lab dataset built from real production, not scraped remotely. Sensing and prediction are live today; assistant workflows and closed-loop actuation remain on the roadmap.

## The ecosystem

Insurance prices climate and yield risk. Banks and DFIs lend against verified performance. Research institutions advance crop science.

## Common questions

### What is trade infrastructure for the agricultural bioeconomy?

Trade infrastructure for the agricultural bioeconomy is the operating layer that makes biological production verifiable, financeable, and exportable. MoedimAI uses farmer, plot, cell, quality, certification, logistics, and buyer-specification data to turn fragmented production into buyer-ready supply.

### How is MoedimAI different from a farmer app or a traceability tool?

MoedimAI is not primarily a farmer app and not only a traceability tool. It is a multi-tenant operating graph for agricultural supply, combining intake, verification, certification evidence, satellite and weather signals, quality records, buyer packets, and permissioned access in one governed system.

### How does verifiable production unlock financing for African agriculture?

Financing improves when lenders, insurers, buyers, and funders can see reliable operating evidence instead of informal claims. MoedimAI makes production records, risk signals, quality evidence, and buyer readiness easier to verify, which can reduce uncertainty around agricultural supply.

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
