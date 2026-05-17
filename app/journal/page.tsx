import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Buyer-useful, evidence-led writing on African botanical supply, essential-oil verification, and organic certification for smallholder farms.",
};

const TOPICS = [
  "How cosmetic buyers verify essential oils before purchase",
  "Why GC-MS is not the same as pesticide testing",
  "Kenyan rosemary oil, a buyer evidence checklist",
  "How smallholder traceability works from farmer to lot",
  "Organic conversion for smallholder botanical farms",
  "What a buyer should ask before sourcing African botanicals",
];

export default function JournalPage() {
  return (
    <section className="container py-16 md:py-20">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
        Knowledge and evidence
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        The Moedim Journal.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-cream-50/85 md:text-lg">
        Buyer-useful, evidence-led writing on African botanical supply, essential-oil verification,
        and organic certification for smallholder farms. New pieces ship regularly.
      </p>

      <h2 className="mt-12 font-display text-xl text-cream-50 md:text-2xl">
        What we are writing about
      </h2>
      <ul className="mt-6 grid max-w-3xl gap-3 text-sm text-cream-50/80">
        {TOPICS.map((topic) => (
          <li key={topic} className="rounded-md border border-cream-50/10 bg-navy-900/40 px-4 py-3">
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
}
