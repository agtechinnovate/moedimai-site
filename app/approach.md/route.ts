import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse({
    title: "Our approach",
    oneLine:
      "How MoedimAI works with smallholder farmers, runs internal control under EU 2018/848 and USDA NOP, processes biomass, and verifies every lot before dispatch.",
    body: `
## Five steps from plot to lot

1. **Jaribu.** Smallholder farmers join Jaribu by MoedimAI. We pay above-market prices for biomass, provide organic input support, and bring each plot through the conversion clock to EU 2018/848 and USDA NOP.
2. **Internal Control System (ICS).** Every farmer sits inside a Group of Operators certificate. Field coordinators inspect plots, log non-conformities, and keep the audit trail current for external certifiers.
3. **Processing.** Biomass arrives at the Mount Kenya facility. Essential oils are steam-distilled. Cold-pressed oils are extracted unrefined. Powders are dried to spec. Everything is filled and labelled with lot codes.
4. **Quality control.** Essential oils are GC-MS profiled. Cold-pressed oils get a fatty acid profile. Pesticide residue, heavy metals, microbiology, and allergens are tested per shipment.
5. **Dispatch.** Every lot ships with a MoedimAI Verified evidence packet: COA, SDS, IFRA where relevant, allergen statement, chain of custody, and phytosanitary clearance.

## Three operating principles

**Organic by construction.** Every farmer converts to EU 2018/848 and USDA NOP. The conversion clock is tracked per plot, not per farmer.

**Hub-first quality.** Biomass is graded and priced at the collection hub, not at the farm. Payment is triggered by QC acceptance and sent via M-Pesa.

**Provenance, not paperwork.** Every join from plot to harvest to distillation run to lot to shipment carries a weight in kilograms. Buyers can trace any lot back to the contributing plots.

## Contact

vivian@moedimAI.com
`.trim(),
  });
}
