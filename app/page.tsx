import Link from "next/link";
import { BrandMark } from "@/components/layout/brand-mark";

interface AudienceDoor {
  surface: "moedimai" | "moedim" | "moedimai-investor" | "jaribu";
  eyebrow: string;
  title: string;
  body: string;
  href?: "/buyers" | "/shop" | "/journal" | "/contact";
  cta: string;
  comingSoon?: boolean;
}

// Four-door pattern per V3 §2. The two routes not built in W1 (`investors`,
// `farmers`) are surfaced honestly as "Coming W3" — placeholder-safe per W0.
const DOORS: AudienceDoor[] = [
  {
    surface: "moedimai",
    eyebrow: "I source cosmetic ingredients",
    title: "Buyer supply desk",
    body: "Verified African botanical supply backed by lab evidence, traceability, and smallholder certification systems.",
    href: "/buyers",
    cta: "View buyer supply desk",
  },
  {
    surface: "moedim",
    eyebrow: "I want to buy oils",
    title: "Shop the botanicals",
    body: "Kenyan botanical oils with clear origin, safe-use guidance, and lot-level traceability.",
    href: "/shop",
    cta: "Shop botanicals",
  },
  {
    surface: "moedimai-investor",
    eyebrow: "I am an investor or partner",
    title: "Company thesis",
    body: "Moedim is building data and trust infrastructure for African smallholder botanical supply.",
    cta: "Coming in W3 (Recognition Spine)",
    comingSoon: true,
  },
  {
    surface: "jaribu",
    eyebrow: "I am a farmer",
    title: "Jaribu by Moedim",
    body: "Smallholder onboarding, organic input support, and the YMCA Agricultural School training hub.",
    cta: "Coming in W3 (Recognition Spine)",
    comingSoon: true,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="container py-16 md:py-24">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
          Sprint W1 preview
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-cream-50 md:text-6xl">
          Verified African botanicals,
          <br />
          traceable to the lot.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-cream-50/80 md:text-lg">
          Moedim turns African smallholder botanicals into verified, traceable, buyer-ready
          ingredients. The page below routes you to the right door — buyer, shopper, investor, or
          farmer.
        </p>
        <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-3 text-sm md:grid-cols-4">
          <div>
            <dt className="text-cream-50/60">Origin</dt>
            <dd className="mt-1 text-cream-50">Mount Kenya</dd>
          </div>
          <div>
            <dt className="text-cream-50/60">EU operations</dt>
            <dd className="mt-1 text-cream-50">Rotterdam</dd>
          </div>
          <div>
            <dt className="text-cream-50/60">US holding</dt>
            <dd className="mt-1 text-cream-50">Delaware</dd>
          </div>
          <div>
            <dt className="text-cream-50/60">Trust mark</dt>
            <dd className="mt-1">
              <BrandMark surface="verified" size="sm" />
            </dd>
          </div>
        </dl>
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
            One site, four audiences. Each door takes you to the right level of detail.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {DOORS.map((door) => (
              <AudienceDoorCard key={door.eyebrow} door={door} />
            ))}
          </div>

          <p className="mt-10 text-xs text-cream-50/50">
            Investor and Jaribu doors arrive in Sprint W3 (Recognition Spine). Routes shown are
            placeholder-safe per the W0 preflight.
          </p>
        </div>
      </section>
    </>
  );
}

function AudienceDoorCard({ door }: { door: AudienceDoor }) {
  const card = (
    <article
      className={[
        "group flex h-full flex-col justify-between rounded-lg border border-cream-50/10 bg-navy-900/60 p-6 transition-colors",
        door.comingSoon ? "opacity-70" : "hover:border-gold-500/40 hover:bg-navy-900",
      ].join(" ")}
    >
      <div>
        <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold-500">
          {door.eyebrow}
        </p>
        <h3 className="mt-3 font-display text-xl text-cream-50 md:text-2xl">{door.title}</h3>
        <p className="mt-3 text-sm text-cream-50/75 md:text-base">{door.body}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-cream-50/60">{door.cta}</span>
        {door.comingSoon ? (
          <span className="rounded-full border border-cream-50/15 px-2 py-1 text-[0.7rem] uppercase tracking-wider text-cream-50/60">
            Coming W3
          </span>
        ) : (
          <span className="text-gold-500 transition-transform group-hover:translate-x-0.5">→</span>
        )}
      </div>
    </article>
  );

  if (door.comingSoon || !door.href) {
    return <div aria-disabled="true">{card}</div>;
  }

  return (
    <Link
      href={door.href}
      className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
    >
      {card}
    </Link>
  );
}
