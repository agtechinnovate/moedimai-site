import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop botanicals",
  description:
    "Kenyan essential and botanical oils, sold by the bottle. Clear origin, safe-use guidance, M-Pesa checkout, delivered across Kenya.",
};

const ESSENTIALS = [
  "Rosemary",
  "Eucalyptus",
  "Peppermint",
  "Tea Tree",
  "English Lavender",
  "Rose Geranium",
  "Wild Basil",
  "Leleshwa",
  "Lippia",
  "Immortelle",
];

const BOTANICALS = ["Moringa", "Baobab", "Neem"];

export default function ShopPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/chamomile-flowers.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/80 to-navy-900"
        />
        <div className="container relative py-16 md:py-20">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
            I want to buy oils
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Shop the Moedim botanicals.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cream-50/85 md:text-lg">
            Kenyan essential and botanical oils, sold by the bottle. Clear origin, safe-use
            guidance, M-Pesa checkout, delivered across Kenya.
          </p>
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">The catalogue</h2>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-gold-500">
            Essential oils
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ESSENTIALS.map((name) => (
              <li
                key={name}
                className="rounded-md border border-cream-50/10 bg-navy-900/40 px-4 py-3"
              >
                <p className="font-display text-lg text-cream-50">{name}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-gold-500">
            Botanical and carrier oils
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BOTANICALS.map((name) => (
              <li
                key={name}
                className="rounded-md border border-cream-50/10 bg-navy-900/40 px-4 py-3"
              >
                <p className="font-display text-lg text-cream-50">{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Sourcing in volume?</h2>
        <p className="mt-4 max-w-2xl text-base text-cream-50/85 md:text-lg">
          Bulk purchases ship from Mount Kenya by the kilogram with full documentation.
        </p>
        <Link
          href="/buyers"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
        >
          Visit the buyer supply desk
        </Link>
      </section>
    </>
  );
}
