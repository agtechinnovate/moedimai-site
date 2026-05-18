/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The MoedimAI team across Mount Kenya operations and EU buyer relationships. Founder Vivian Nwakah, field coordinators, agronomy lead, and EU operations.",
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  photo?: { src: string; alt: string };
};

const TEAM: ReadonlyArray<TeamMember> = [
  {
    id: "vivian",
    name: "Vivian Nwakah",
    role: "Founder and CEO",
    location: "Mount Kenya",
    bio: "Founded MoedimAI in 2024 to turn African smallholder botanicals into a verified, traceable export product. Previously founded Medsaf, a pharmaceutical supply-chain platform in Nigeria.",
    photo: {
      src: "/images/vivian-at-facility.jpg",
      alt: "Vivian Nwakah at the Mount Kenya distillation facility",
    },
  },
  {
    id: "martha",
    name: "Martha",
    role: "Field Coordinator",
    location: "Mount Kenya",
    bio: "Works directly with farmers in the Mount Kenya network. Runs plot inspections, biomass collection, and the farmer-side of the ICS audit trail.",
  },
  {
    id: "esther",
    name: "Esther",
    role: "Field Coordinator",
    location: "Mount Kenya",
    bio: "Field coordinator for the broader Mount Kenya farmer network. Supports onboarding, plot mapping, and biomass handover at the collection hub.",
  },
  {
    id: "muchiri",
    name: "Muchiri",
    role: "Agronomy Lead",
    location: "Mount Kenya",
    bio: "Agronomy lead for the Kenya operation. Guides farmers on crop selection, organic input use, and harvest timing for chemotype targets.",
  },
  {
    id: "sjors",
    name: "Sjors",
    role: "EU Buyer Relationships",
    location: "Rotterdam",
    bio: "Manages European buyer relationships and the Rotterdam port operation. Bridges the Mount Kenya production base to EU cosmetics and fragrance buyers.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/qc-team.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/80 to-navy-900"
        />
        <div className="container relative py-20 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-500">Team</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-cream-50 md:text-6xl">
            The people behind every lot.
          </h1>
          <p className="mt-8 max-w-3xl text-base text-cream-50/85 md:text-lg">
            Mount Kenya operations, agronomy support, and EU buyer relationships.
          </p>
          <nav aria-label="Team members" className="mt-8 flex flex-wrap gap-2 text-xs">
            {TEAM.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="rounded-md border border-cream-50/20 px-3 py-2 uppercase tracking-wider text-cream-50/80 transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                {m.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <ul className="space-y-12">
          {TEAM.map((m) => (
            <li
              key={m.id}
              id={m.id}
              className="scroll-mt-24 rounded-lg border border-cream-50/10 bg-navy-900/40 p-6 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-3 md:gap-10">
                <div className="md:col-span-1">
                  {m.photo ? (
                    <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
                      <img
                        src={m.photo.src}
                        alt={m.photo.alt}
                        className="h-64 w-full object-cover md:h-80"
                      />
                    </figure>
                  ) : (
                    <div
                      aria-hidden
                      className="flex h-64 w-full items-center justify-center rounded-lg border border-cream-50/10 bg-navy-800/60 md:h-80"
                    >
                      <span className="font-display text-5xl text-gold-500">
                        {m.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-gold-500">{m.role}</p>
                  <h2 className="mt-3 font-display text-3xl text-cream-50 md:text-4xl">{m.name}</h2>
                  <p className="mt-2 text-sm text-cream-50/60">{m.location}</p>
                  <p className="mt-6 text-base text-cream-50/85 md:text-lg">{m.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 text-center md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Reach the team</p>
          <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
            All paths go through Vivian.
          </h2>
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
