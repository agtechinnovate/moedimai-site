import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const md = `# Jaribu by MoedimAI

> Above-market prices for your biomass, organic input support, and a path to certified export markets. Enrolling smallholder farmers across Mount Kenya and expanding.

## What we offer farmers

**Above-market prices.** We pay above the prevailing market rate for your biomass. Prices are set transparently before harvest, snapshotted at quality control, and paid via M-Pesa.

**Organic input support.** Access to approved organic seeds, compost, and pest control inputs. Training on EU 2018/848 and USDA NOP organic standards delivered in Swahili and English.

**A path to certified export markets.** Your crops connect to EU, US, and local buyers through MoedimAI's certified supply chain. Every farmer is part of a Group of Operators certificate.

**Field support.** Field coordinators visit regularly. Agronomy guidance, satellite-driven crop monitoring, and weather alerts are part of the program.

## Get in touch

If you grow rosemary, lavender, eucalyptus, tea tree, lemongrass, baobab, moringa, neem, immortelle, rose geranium, leleshwa, wild basil, lippia, or peppermint, or want to start, reach out.

Email: vivian@moedimAI.com
`;
  return new NextResponse(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}
