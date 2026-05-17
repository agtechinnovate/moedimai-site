import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Buyer-useful, evidence-led writing on African smallholder botanical supply, essential-oil verification, and organic certification for smallholder farms.",
};

export default function JournalPage() {
  return (
    <section className="container py-16 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
        Knowledge and evidence
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        The Moedim Journal.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-cream-50/80 md:text-lg">
        Buyer-useful, evidence-led writing — not generic brand storytelling. The first six articles
        ship in Sprint W10 (Journal and Evidence Library).
      </p>

      <ul className="mt-12 grid max-w-3xl gap-2 text-sm text-cream-50/70">
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          How cosmetic buyers verify essential oils before purchase
        </li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          Why GC-MS is not the same as pesticide testing
        </li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          Kenyan rosemary oil: buyer evidence checklist
        </li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          How smallholder traceability works from farmer to lot
        </li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          Organic conversion for smallholder botanical farms
        </li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          What a buyer should ask before sourcing African botanicals
        </li>
      </ul>

      <p className="mt-12 max-w-xl text-sm text-cream-50/60">
        Sprint W1 preview. CMS (Sanity) wires in W2; full Journal ships in W10.
      </p>
    </section>
  );
}
