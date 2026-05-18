/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press kit and media inquiries for MoedimAI. Logos, founder bio, fact sheet, and a direct contact for journalists.",
};

const FACTS: ReadonlyArray<{ label: string; value: string }> = [
  { label: "Company", value: "MoedimAI" },
  { label: "Founder and CEO", value: "Vivian Nwakah" },
  { label: "Founded", value: "2024" },
  { label: "Production base", value: "Mount Kenya, Kenya" },
  { label: "EU operations", value: "Rotterdam, Netherlands (MoedimAI EU BV, in formation)" },
  { label: "US entity", value: "Delaware, United States (Moedai LLC)" },
  { label: "Catalogue", value: "13 oils, 10 essential oils and 3 cold-pressed botanical oils" },
  { label: "Trust mark", value: "MoedimAI Verified" },
];

const ASSETS: ReadonlyArray<{ name: string; href: string; note: string }> = [
  {
    name: "MoedimAI logo, dark surfaces (PNG)",
    href: "/images/moedimai-logo-dark.png",
    note: "Use on dark navy backgrounds.",
  },
  {
    name: "MoedimAI logo, dark surfaces (SVG)",
    href: "/images/moedimai-logo-dark.svg",
    note: "Vector. Use on dark navy backgrounds.",
  },
  {
    name: "MoedimAI logo, light surfaces (PNG)",
    href: "/images/moedimai-logo-light.png",
    note: "Use on cream or white backgrounds.",
  },
  {
    name: "MoedimAI logo, light surfaces (SVG)",
    href: "/images/moedimai-logo-light.svg",
    note: "Vector. Use on cream or white backgrounds.",
  },
];

export default function PressPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/vivian-at-facility.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/80 to-navy-900"
        />
        <div className="container relative py-20 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-500">Press</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-cream-50 md:text-6xl">
            Press kit and media inquiries.
          </h1>
          <p className="mt-8 max-w-3xl text-base text-cream-50/85 md:text-lg">
            Logos, founder bio, and a direct line for journalists. Email
            <a
              href="mailto:vivian@moedimAI.com?subject=Media%20enquiry"
              className="ml-1 text-gold-500 underline-offset-4 hover:underline"
            >
              vivian@moedimAI.com
            </a>{" "}
            with the publication, the angle, and the deadline.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Fact sheet</h2>
        <div className="mx-auto mt-8 max-w-2xl">
          <dl className="space-y-3 text-sm">
            {FACTS.map((f, idx) => (
              <div
                key={f.label}
                className={[
                  "flex flex-col justify-between gap-1 pb-3 md:flex-row md:gap-4",
                  idx < FACTS.length - 1 ? "border-b border-cream-50/10" : "",
                ].join(" ")}
              >
                <dt className="text-cream-50/60">{f.label}</dt>
                <dd className="text-cream-50 md:text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Brand assets</h2>
          <p className="mt-3 max-w-2xl text-sm text-cream-50/70 md:text-base">
            Use the full brand name MoedimAI. Do not shorten to Moedim.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {ASSETS.map((a) => (
              <li key={a.href} className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
                <p className="font-display text-lg text-cream-50">{a.name}</p>
                <p className="mt-2 text-sm text-cream-50/70">{a.note}</p>
                <p className="mt-4">
                  <a
                    href={a.href}
                    download
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gold-500 px-4 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10"
                  >
                    Download
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Founder bio</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3 md:items-start">
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40 md:col-span-1">
            <img
              src="/images/vivian-at-facility.jpg"
              alt="Vivian Nwakah at the Mount Kenya distillation facility"
              className="h-72 w-full object-cover md:h-80"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">
              Vivian Nwakah, Founder and CEO.
            </figcaption>
          </figure>
          <div className="md:col-span-2">
            <p className="text-base text-cream-50/85 md:text-lg">
              Vivian Nwakah is the Founder and CEO of MoedimAI, the Kenyan production company
              turning smallholder botanicals into verified, traceable, buyer-ready ingredients for
              global cosmetic, fragrance, and wellness buyers. Vivian previously founded Medsaf, a
              pharmaceutical supply-chain platform in Nigeria. She is based in Mount Kenya.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 text-center md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Media inquiries</p>
          <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
            One inbox for press.
          </h2>
          <p className="mt-6">
            <a
              href="mailto:vivian@moedimAI.com?subject=Media%20enquiry"
              className="font-display text-2xl text-gold-500 underline-offset-4 hover:underline md:text-3xl"
            >
              vivian@moedimAI.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
