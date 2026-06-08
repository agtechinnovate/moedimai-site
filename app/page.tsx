import Link from "next/link";
import { BrandMark } from "@/components/layout/brand-mark";

interface AudienceDoor {
  eyebrow: string;
  title: string;
  body: string;
  href: "/buyers" | "/thesis" | "/jaribu";
  cta: string;
}

const DOORS: AudienceDoor[] = [
  {
    eyebrow: "I SOURCE COSMETIC INGREDIENTS",
    title: "Buyer supply desk",
    body: "Thirteen Kenyan botanicals available now in bulk. GC-MS specifications, lot-level traceability, samples on request, and direct shipping from Mount Kenya to your facility.",
    href: "/buyers",
    cta: "View buyer supply desk",
  },
  {
    eyebrow: "I AM AN INVESTOR OR PARTNER",
    title: "Company thesis",
    body: "MoedimAI is building chemotype-verification infrastructure for African organic exports. Three hundred farmers live, three thousand in pipeline, nine crops, 5 to 10 tonnes per day of processing capacity once the second distillation partner is online.",
    href: "/thesis",
    cta: "Read the thesis",
  },
  {
    eyebrow: "I AM A FARMER",
    title: "Jaribu by MoedimAI",
    body: "Above-market prices for your biomass, organic input support, and a path to certified export markets. We're enrolling smallholder farmers across Mount Kenya and expanding.",
    href: "/jaribu",
    cta: "Get in touch",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/lavender-field.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/60 to-navy-900/30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900"
        />
        <div className="container relative py-20 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-500">
            Rooted in Africa. Refined for the world.
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-cream-50 md:text-6xl">
            Verified African botanicals,
            <br />
            traceable to the lot.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cream-50/90 md:text-lg">
            Thirteen Kenyan-grown botanical oils, sold by the bottle and by the kilogram. Every lot
            is GC-MS profiled, traceable from farm to dispatch, and shipped worldwide from our Mount
            Kenya operations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/buyers"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Buyer supply desk
            </Link>
            <Link
              href="/thesis"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Read the thesis
            </Link>
          </div>
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 text-sm md:grid-cols-4">
            <div>
              <dt className="text-cream-50/70">Origin</dt>
              <dd className="mt-1 text-cream-50">Mount Kenya</dd>
            </div>
            <div>
              <dt className="text-cream-50/70">EU operations</dt>
              <dd className="mt-1 text-cream-50">Rotterdam</dd>
            </div>
            <div>
              <dt className="text-cream-50/70">US holding</dt>
              <dd className="mt-1 text-cream-50">Delaware</dd>
            </div>
            <div>
              <dt className="text-cream-50/70">Trust mark</dt>
              <dd className="mt-1">
                <BrandMark surface="verified" size="sm" />
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="audience-doors"
        className="border-t border-cream-50/10 bg-navy-800/40"
      >
        <div className="container py-16 md:py-20">
          <h2 id="audience-doors" className="font-display text-2xl text-cream-50 md:text-3xl">
            Choose your path
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-cream-50/70 md:text-base">
            One brand, three doors. Each one takes you where you want to go.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DOORS.map((door) => (
              <AudienceDoorCard key={door.href} door={door} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cream-50/10">
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
              href="mailto:vivian@moedim.ai"
              className="font-display text-2xl text-gold-500 underline-offset-4 hover:underline md:text-3xl"
            >
              vivian@moedim.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function AudienceDoorCard({ door }: { door: AudienceDoor }) {
  return (
    <Link
      href={door.href}
      className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
    >
      <article className="flex h-full flex-col justify-between rounded-lg border border-cream-50/10 bg-navy-900/60 p-6 transition-colors hover:border-gold-500/40 hover:bg-navy-900">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold-500">
            {door.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-xl text-cream-50 md:text-2xl">{door.title}</h3>
          <p className="mt-3 text-sm text-cream-50/75 md:text-base">{door.body}</p>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-cream-50/70">{door.cta}</span>
          <span className="text-gold-500 transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </article>
    </Link>
  );
}
