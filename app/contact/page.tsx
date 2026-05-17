import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Moedim. Buyer inquiries, investor inquiries, farmer applications, and press.",
};

const AUDIENCE_ROUTES = [
  {
    label: "Buyer inquiry",
    description: "Cosmetic, fragrance, wellness, or ingredient supply.",
    mailto: "mailto:vivian@moedimai.com?subject=Buyer%20inquiry",
  },
  {
    label: "Investor inquiry",
    description: "Funding, partnership, blended capital, DFI conversations.",
    mailto: "mailto:vivian@moedimai.com?subject=Investor%20inquiry",
  },
  {
    label: "Farmer application",
    description: "Join the Jaribu by Moedim out-grower program.",
    mailto: "mailto:vivian@moedimai.com?subject=Jaribu%20enrolment%20enquiry",
  },
  {
    label: "Press inquiry",
    description: "Media coverage, interview requests, asset packs.",
    mailto: "mailto:vivian@moedimai.com?subject=Press%20inquiry",
  },
] as const;

export default function ContactPage() {
  return (
    <section className="container py-16 md:py-20">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">Get in touch</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Contact Moedim.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-cream-50/85 md:text-lg">
        Reach the team at{" "}
        <a
          href="mailto:vivian@moedimai.com"
          className="text-gold-500 underline-offset-4 hover:underline"
        >
          vivian@moedimai.com
        </a>
        , or pick the audience that fits you below.
      </p>

      <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
        {AUDIENCE_ROUTES.map((route) => (
          <a
            key={route.label}
            href={route.mailto}
            className="rounded-md border border-cream-50/10 bg-navy-900/40 p-4 transition-colors hover:border-gold-500/40 hover:bg-navy-900"
          >
            <h2 className="font-display text-lg text-cream-50">{route.label}</h2>
            <p className="mt-1 text-sm text-cream-50/75">{route.description}</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-gold-500">Email us →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
