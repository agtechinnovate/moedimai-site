import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Press",
    oneLine:
      "Press kit and media inquiries for MoedimAI. Logos, founder bio, fact sheet, and a direct contact for journalists.",
    body: `
## Fact sheet

- Company: MoedimAI
- Founder and CEO: Vivian Nwakah
- Founded: 2024
- Production base: Mount Kenya, Kenya
- EU operations: Rotterdam, Netherlands (MoedimAI EU BV, in formation)
- US entity: Delaware, United States (Moedai LLC)
- Catalogue: 13 oils, 10 essential oils and 3 cold-pressed botanical oils
- Trust mark: MoedimAI Verified

## Brand assets

- [MoedimAI logo, dark surfaces (PNG)](/images/moedimai-logo-dark.png)
- [MoedimAI logo, dark surfaces (SVG)](/images/moedimai-logo-dark.svg)
- [MoedimAI logo, light surfaces (PNG)](/images/moedimai-logo-light.png)
- [MoedimAI logo, light surfaces (SVG)](/images/moedimai-logo-light.svg)

Use the full brand name MoedimAI. Do not shorten to Moedim.

## Founder bio

Vivian Nwakah is the Founder and CEO of MoedimAI, the Kenyan production company turning smallholder botanicals into verified, traceable, buyer-ready ingredients for global cosmetic, fragrance, and wellness buyers. Vivian previously founded Medsaf, a pharmaceutical supply-chain platform in Nigeria. She is based in Mount Kenya.

## Media inquiries

vivian@moedimAI.com
`.trim(),
  });
}
