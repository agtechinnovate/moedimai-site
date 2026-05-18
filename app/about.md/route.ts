import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "About MoedimAI",
    oneLine:
      "MoedimAI is a Kenyan production company with EU operations in Rotterdam and a US holding in Delaware. Founded and led by Vivian Nwakah.",
    body: `
## What we do

MoedimAI grows, processes, and ships thirteen Kenyan botanical oils to cosmetic, fragrance, and wellness buyers. Every lot is GC-MS profiled or fatty acid profiled, traceable from farm to dispatch.

## Where we operate

- **Mount Kenya, Kenya.** Production base. Distillation, cold-pressing, drying, packaging. The farmer network and the QC floor sit here.
- **Rotterdam, Netherlands.** MoedimAI EU BV (in formation). EU import, buyer logistics, port relationship.
- **Delaware, United States.** Moedai LLC. US holding entity. US buyer relationships and capital.

## Founder

Vivian Nwakah, Founder and CEO. Previously founded Medsaf, a pharmaceutical supply-chain platform in Nigeria. Now building chemotype-verification infrastructure for African organic exports from Mount Kenya.

## At a glance

- Founded: 2024
- Production base: Mount Kenya
- EU platform: Rotterdam (MoedimAI EU BV)
- US entity: Delaware (Moedai LLC)
- SKUs: 13 oils
- Trust mark: MoedimAI Verified

## Contact

vivian@moedimAI.com
`.trim(),
  });
}
