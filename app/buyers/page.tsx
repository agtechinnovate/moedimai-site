import type { Metadata } from "next";
import { BrandMark } from "@/components/layout/brand-mark";

export const metadata: Metadata = {
  title: "Buyer supply desk",
  description:
    "MoedimAI gives cosmetic and fragrance buyers verified African botanical supply backed by traceability, lab evidence, and smallholder certification systems.",
};

export default function BuyersPage() {
  return (
    <section className="container py-16 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
        I source cosmetic ingredients
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        <BrandMark surface="moedimai" size="lg" /> for cosmetic, fragrance, and wellness buyers.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-cream-50/80 md:text-lg">
        Verified African botanical supply, backed by lab evidence, traceability, and smallholder
        certification systems. Sample requests, RFQs, and technical documents wire in across Sprints
        W4–W9.
      </p>

      <dl className="fact-list mt-10 max-w-xl">
        <dt>Sourcing region</dt>
        <dd>Mount Kenya smallholder network</dd>
        <dt>EU operations</dt>
        <dd>Rotterdam — Moedim EU BV (in formation)</dd>
        <dt>Trust mark</dt>
        <dd>
          <BrandMark surface="verified" size="sm" />
        </dd>
        <dt>Available</dt>
        <dd>Pre-order — first commercial supply Q1 2027</dd>
      </dl>

      <p className="mt-12 max-w-xl text-sm text-cream-50/60">
        Sprint W1 preview. The RFQ form, sample-request flow, technical buyer pack, and buyer portal
        ship in Sprints W4–W9 per{" "}
        <code className="rounded bg-navy-700/60 px-1.5 py-0.5 text-xs text-cream-50">
          docs/website/WEBSITE_IMPLEMENTATION_SPRINTS.md
        </code>
        . No certification, lab, or volume claims appear on this page until the underlying
        documentation is real and current.
      </p>
    </section>
  );
}
