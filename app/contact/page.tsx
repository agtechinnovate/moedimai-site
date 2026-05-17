import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Moedim — buyer inquiries, investor inquiries, farmer applications, and press.",
};

const AUDIENCE_ROUTES = [
  {
    label: "Buyer inquiry",
    description: "Cosmetic, fragrance, wellness, or ingredient supply.",
    note: "Form wires in Sprint W4 (B2B buyer funnel).",
  },
  {
    label: "Investor inquiry",
    description: "Funding, partnership, blended capital, or DFI conversations.",
    note: "Form wires in Sprint W3 (Recognition Spine).",
  },
  {
    label: "Farmer application",
    description: "Join the Jaribu by Moedim out-grower program.",
    note: "Form wires in Sprint W3 (Recognition Spine).",
  },
  {
    label: "Press inquiry",
    description: "Media coverage, interview requests, asset packs.",
    note: "Press kit ships in Sprint W3.",
  },
] as const;

export default function ContactPage() {
  return (
    <section className="container py-16 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">Get in touch</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Contact Moedim.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-cream-50/80 md:text-lg">
        Four routing forms — buyer, investor, farmer, and press — wire in across Sprints W3 and W4.
        Until then, reach the team directly:
      </p>

      <ul className="fact-list mt-10 max-w-xl">
        <li>
          <dt className="sr-only">Email</dt>
          <a
            href="mailto:vivian@moedimai.com"
            className="text-gold-500 underline-offset-4 hover:underline"
          >
            vivian@moedimai.com
          </a>
        </li>
      </ul>

      <h2 className="mt-16 font-display text-2xl text-cream-50 md:text-3xl">
        Routing — coming in Sprints W3 and W4
      </h2>
      <div className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
        {AUDIENCE_ROUTES.map((route) => (
          <article
            key={route.label}
            className="rounded-md border border-cream-50/10 bg-navy-900/40 p-4"
          >
            <h3 className="font-display text-lg text-cream-50">{route.label}</h3>
            <p className="mt-1 text-sm text-cream-50/75">{route.description}</p>
            <p className="mt-3 text-xs text-cream-50/55">{route.note}</p>
          </article>
        ))}
      </div>

      <p className="mt-12 max-w-xl text-sm text-cream-50/60">
        Sprint W1 preview. No form submissions are persisted on this page yet — placeholder-safe per
        W0.
      </p>
    </section>
  );
}
