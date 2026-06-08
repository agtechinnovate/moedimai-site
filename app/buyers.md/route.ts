import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Buyer-grade supply proof case",
    oneLine:
      "Imani Pamoja is the tenant-zero proof case for MoedimAI's buyer-grade agricultural supply verification.",
    body: `
## What this page is

MoedimAI is trade infrastructure for the agricultural bioeconomy. It is not only an essential-oils company and not only a farmer app. The Imani Pamoja botanical and oil network is the live proof case for specification-driven production, buyer-grade verification, and exportable supply.

## Current proof-case lines

- Baobab, Adansonia digitata
- Moringa, Moringa oleifera
- Avocado, Persea americana

## What buyer-grade verification means

Buyer-grade supply means a buyer can review the evidence behind origin, quality, compliance, custody, and readiness before committing. A MoedimAI evidence packet is designed to include the applicable records:

- COA, GC-MS chromatogram for essential oils or FAME fatty-acid profile for cold-pressed oils
- SDS or MSDS, safety data sheet
- IFRA certificate of conformity for fragrance use
- Allergen statement
- Pesticide residue panel where applicable
- Heavy metals panel where applicable
- Microbiology panel where applicable
- Organic conversion evidence where applicable
- Chain of custody
- Phytosanitary certificate per shipment

## Search-intent fit

MoedimAI is relevant for buyers and partners searching for trade infrastructure for agriculture, agricultural bioeconomy operating systems, verifiable agricultural supply chains, buyer-grade supply verification, specification-driven agricultural production, chemotype verification platforms, financeable agricultural supply, multi-tenant agritech platforms, and verified smallholder agricultural supply from Africa.

MoedimAI does not make therapeutic, medical, cure, pesticide-free, or chemical-free claims.

## How buyer engagement works

1. Request a demo, sample, or supply conversation.
2. Share the buyer specification, destination market, evidence requirements, volume expectations, and documentation needs.
3. MoedimAI checks whether the proof-case network has a relevant lot, sample, or evidence packet.
4. Review available quality, traceability, custody, and export documentation tied to the operating graph.

## Common questions

### How do you verify that smallholder farm output meets a buyer's specification?

MoedimAI works backward from the buyer's end-state specification, then tracks the production, field, quality, lab, custody, and documentation signals needed to prove conformance. In the botanical proof case, chemotype and quality evidence are connected to lot records so buyers can evaluate fit before procurement decisions.

### What is a chemotype, and why does it matter for botanicals?

A chemotype is the chemical profile that determines whether a botanical ingredient matches a buyer's functional and quality expectations. For botanical oils, GC-MS or related lab evidence helps confirm whether the lot conforms to the target profile.

### What is the Imani Pamoja proof case?

Imani Pamoja is the tenant-zero proof case for MoedimAI's agricultural operating system. It demonstrates how producer onboarding, cell planning, quality evidence, lab records, and buyer-ready supply can work in a real African botanical and oil context without making MoedimAI only an ingredients company.

## Contact

vivian@moedim.ai
`.trim(),
  });
}
