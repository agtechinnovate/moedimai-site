/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MoedimAI",
  description:
    "MoedimAI is a Kenyan production company with EU operations in Rotterdam and a US holding in Delaware. Founded and led by Vivian Nwakah.",
};

export default function AboutPage() {
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
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-500">About</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-cream-50 md:text-6xl">
            A Kenyan production company building verified botanical supply for the world.
          </h1>
          <p className="mt-8 max-w-3xl text-base text-cream-50/85 md:text-lg">
            MoedimAI grows, processes, and ships thirteen Kenyan botanical oils to cosmetic,
            fragrance, and wellness buyers. Every lot is GC-MS profiled or fatty acid profiled,
            traceable from farm to dispatch.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Where we operate</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">Production base</p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">Mount Kenya</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Distillation, cold-pressing, drying, and packaging. The farmer network and the QC
              floor sit here.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">EU operations</p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">Rotterdam</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              MoedimAI EU BV (in formation) handles import, EU buyer logistics, and the Rotterdam
              port relationship.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">US holding</p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">Delaware</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Moedai LLC is the US holding entity. US buyer relationships and capital sit here.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
              <img
                src="/images/vivian-at-facility.jpg"
                alt="Vivian Nwakah at the Mount Kenya distillation facility"
                className="h-80 w-full object-cover md:h-96"
              />
              <figcaption className="px-4 py-3 text-xs text-cream-50/60">
                Vivian Nwakah at the Mount Kenya distillation facility.
              </figcaption>
            </figure>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Founder</p>
              <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
                Vivian Nwakah
              </h2>
              <p className="mt-6 text-base text-cream-50/85 md:text-lg">
                Founder and CEO. Previously founded Medsaf, a pharmaceutical supply-chain platform
                in Nigeria. Now building chemotype-verification infrastructure for African organic
                exports from Mount Kenya.
              </p>
              <p className="mt-6">
                <Link href="/team" className="text-gold-500 underline-offset-4 hover:underline">
                  See the full team
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-md">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">At a glance</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">Founded</dt>
              <dd className="text-cream-50">2024</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">Production base</dt>
              <dd className="text-cream-50">Mount Kenya</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">EU platform</dt>
              <dd className="text-cream-50">Rotterdam (MoedimAI EU BV)</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">US entity</dt>
              <dd className="text-cream-50">Delaware (Moedai LLC)</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">SKUs</dt>
              <dd className="text-cream-50">13 oils</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-cream-50/60">Trust mark</dt>
              <dd className="text-gold-500">MoedimAI Verified</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 text-center md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Get in touch</p>
          <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
            Talk to Vivian directly.
          </h2>
          <p className="mt-4 text-base text-cream-50/85 md:text-lg">
            Buyer inquiries, investor introductions, partnership conversations, press.
          </p>
          <p className="mt-6">
            <a
              href="mailto:vivian@moedimAI.com"
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
