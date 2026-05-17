/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaribu by MoedimAI",
  description:
    "Above-market prices for your biomass, organic input support, and a path to certified export markets. Enrolling smallholder farmers across Mount Kenya and expanding.",
};

const OFFERS: ReadonlyArray<{ heading: string; body: string }> = [
  {
    heading: "Above-market prices",
    body: "We pay above the prevailing market rate for your biomass. Prices are set transparently before harvest, snapshotted at quality control, and paid via M-Pesa.",
  },
  {
    heading: "Organic input support",
    body: "Access to approved organic seeds, compost, and pest control inputs. Training on EU 2018/848 and USDA NOP organic standards delivered in Swahili and English.",
  },
  {
    heading: "A path to certified export markets",
    body: "Your crops connect to EU, US, and local buyers through MoedimAI's certified supply chain. Every farmer is part of a Group of Operators certificate.",
  },
  {
    heading: "Field support",
    body: "Field coordinators visit regularly. Agronomy guidance, satellite-driven crop monitoring, and weather alerts come to you on WhatsApp.",
  },
];

export default function JaribuPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/wildflowers.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/80 to-navy-900"
        />
        <div className="container relative py-16 md:py-24">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-terracotta-500">
            I am a farmer
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-cream-50 md:text-5xl">
            Jaribu by MoedimAI
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cream-50/85 md:text-lg">
            Above-market prices for your biomass, organic input support, and a path to certified
            export markets. We&apos;re enrolling smallholder farmers across Mount Kenya and
            expanding.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl text-cream-50 md:text-3xl">What we offer farmers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {OFFERS.map((offer) => (
            <article
              key={offer.heading}
              className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6"
            >
              <h3 className="font-display text-xl text-cream-50">{offer.heading}</h3>
              <p className="mt-3 text-sm text-cream-50/80 md:text-base">{offer.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Get in touch</h2>
          <p className="mt-6 max-w-2xl text-base text-cream-50/85 md:text-lg">
            If you grow rosemary, lavender, eucalyptus, tea tree, lemongrass, baobab, moringa, neem,
            immortelle, rose geranium, leleshwa, wild basil, lippia, or peppermint, or want to
            start, reach out. Tell us where you farm, how much land you have, and what you grow
            today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/254000000000?text=I%27d%20like%20to%20join%20Jaribu%20by%20MoedimAI"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Message on WhatsApp
            </a>
            <a
              href="mailto:vivian@moedimAI.com?subject=Jaribu%20enrolment%20enquiry"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Send us an email
            </a>
          </div>
          <p className="mt-6 text-sm text-cream-50/65">
            Or call our field coordinators directly during business hours, Monday to Saturday, 8am
            to 6pm EAT.
          </p>
        </div>
      </section>
    </>
  );
}
