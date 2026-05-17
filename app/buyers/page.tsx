import type { Metadata } from "next";
import { BrandMark } from "@/components/layout/brand-mark";

export const metadata: Metadata = {
  title: "Buyer supply desk",
  description:
    "Thirteen Kenyan-grown botanicals available for purchase by the kilogram. Steam-distilled essential oils and cold-pressed carrier oils, every lot GC-MS or fatty acid profiled, traceable from Mount Kenya to your dispatch dock.",
};

const ESSENTIAL_OILS: ReadonlyArray<{ name: string; latin: string }> = [
  { name: "Rosemary", latin: "Rosmarinus officinalis" },
  { name: "Eucalyptus", latin: "Eucalyptus globulus" },
  { name: "Peppermint", latin: "Mentha × piperita" },
  { name: "Tea Tree", latin: "Melaleuca alternifolia" },
  { name: "English Lavender", latin: "Lavandula angustifolia" },
  { name: "Rose Geranium", latin: "Pelargonium graveolens" },
  { name: "Wild Basil", latin: "Ocimum spp." },
  { name: "Leleshwa", latin: "Tarchonanthus camphoratus" },
  { name: "Lippia", latin: "Lippia javanica" },
  { name: "Immortelle", latin: "Helichrysum splendidum" },
];

const BOTANICAL_OILS: ReadonlyArray<{ name: string; latin: string }> = [
  { name: "Moringa", latin: "Moringa oleifera" },
  { name: "Baobab", latin: "Adansonia digitata" },
  { name: "Neem", latin: "Azadirachta indica" },
];

const SPEC_ROWS: ReadonlyArray<{ label: string; value: React.ReactNode }> = [
  { label: "Sourcing region", value: "Mount Kenya smallholder network" },
  { label: "EU operations", value: "Rotterdam" },
  { label: "US holding", value: "Delaware" },
  { label: "Trust mark", value: <BrandMark surface="verified" size="sm" /> },
  { label: "Catalog", value: "10 essential oils, 3 botanical carrier oils" },
  { label: "Volume", value: "By the kilogram, no minimum on samples" },
  { label: "Documentation", value: "GC-MS or FAME profile per lot, COA, traceability record" },
];

export default function BuyersPage() {
  return (
    <>
      <section className="container py-16 md:py-20">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
          I source cosmetic ingredients
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          <BrandMark surface="moedimai" size="lg" /> for cosmetic, fragrance, and wellness buyers.
        </h1>
        <p className="mt-6 max-w-3xl text-base text-cream-50/85 md:text-lg">
          Thirteen Kenyan-grown botanicals available for purchase by the kilogram. Steam-distilled
          essential oils and cold-pressed carrier oils, every lot GC-MS or fatty acid profiled,
          traceable from Mount Kenya farm to your dispatch dock.
        </p>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Available now</h2>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-gold-500">
            Essential oils (steam distilled)
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ESSENTIAL_OILS.map((oil) => (
              <li
                key={oil.name}
                className="rounded-md border border-cream-50/10 bg-navy-900/40 px-4 py-3"
              >
                <p className="font-display text-lg text-cream-50">{oil.name}</p>
                <p className="font-display text-sm italic text-cream-50/65">{oil.latin}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-gold-500">
            Cold-pressed botanical oils
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BOTANICAL_OILS.map((oil) => (
              <li
                key={oil.name}
                className="rounded-md border border-cream-50/10 bg-navy-900/40 px-4 py-3"
              >
                <p className="font-display text-lg text-cream-50">{oil.name}</p>
                <p className="font-display text-sm italic text-cream-50/65">{oil.latin}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl text-cream-50 md:text-3xl">
          How buyer engagement works
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">1</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">Request a sample.</h3>
            <p className="mt-3 text-sm text-cream-50/80">
              Pick the oils you want to evaluate. We ship samples plus the current lot&apos;s GC-MS
              profile to your facility.
            </p>
          </li>
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">2</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">Place an order.</h3>
            <p className="mt-3 text-sm text-cream-50/80">
              Once the sample matches your spec, submit volume and delivery requirements. We confirm
              pricing, lead time, and lot allocation within 48 hours.
            </p>
          </li>
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">3</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">
              Receive with full documentation.
            </h3>
            <p className="mt-3 text-sm text-cream-50/80">
              Every shipment includes Certificate of Analysis, lot traceability record, and origin
              documentation. KEPHIS phytosanitary clearance arranged for export consignments.
            </p>
          </li>
        </ol>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Specifications</h2>
          <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[max-content_1fr]">
            {SPEC_ROWS.map((row) => (
              <div key={row.label} className="contents">
                <dt className="text-sm text-cream-50/60">{row.label}</dt>
                <dd className="text-sm text-cream-50">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="mailto:vivian@moedimai.com?subject=Buyer%20information%20request"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Request more information
            </a>
            <a
              href="mailto:vivian@moedimai.com?subject=RFQ%20submission"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Submit an RFQ
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
