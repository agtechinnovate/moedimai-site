import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop botanicals",
  description:
    "Moedim offers Kenyan botanical oils with clear origin, safe-use guidance, and lot-level traceability.",
};

export default function ShopPage() {
  return (
    <section className="container py-16 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
        I want to buy oils
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Shop the Moedim botanicals.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-cream-50/80 md:text-lg">
        Kenyan botanical oils with clear origin, safe-use guidance, and lot-level traceability.
        Product pages, cart, and checkout land in Sprints W5–W7.
      </p>

      <ul className="mt-12 grid max-w-3xl gap-3 text-sm text-cream-50/70 sm:grid-cols-2">
        <li className="rounded-md border border-cream-50/10 px-3 py-2">Essential oils — 10 SKUs</li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">Botanical oils — 3 SKUs</li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          Collections: Skin & Hair · Mind & Mood · Breathe & Relief · Carriers · The Rare Collection
        </li>
        <li className="rounded-md border border-cream-50/10 px-3 py-2">
          Every product carries an evidence-status badge
        </li>
      </ul>

      <p className="mt-12 max-w-xl text-sm text-cream-50/60">
        Sprint W1 preview. Product pages, cart, M-Pesa checkout, and international checkout ship in
        W5–W7. No medical or therapeutic claims appear on any product page — by design.
      </p>
    </section>
  );
}
