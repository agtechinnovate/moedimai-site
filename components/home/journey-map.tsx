"use client";

import { JetBrains_Mono } from "next/font/google";
import { useState } from "react";
import type { CSSProperties } from "react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

type JourneyGroup = "field" | "process" | "logistics";

type Stage = {
  number: string;
  name: string;
  technology: string;
  group: JourneyGroup;
};

const GROUPS = {
  field: {
    color: "#5B8FB5",
    rgb: "91, 143, 181",
  },
  process: {
    color: "#C9A961",
    rgb: "201, 169, 97",
  },
  logistics: {
    color: "#D89479",
    rgb: "178, 94, 63",
  },
} as const;

const STAGES: Stage[] = [
  {
    number: "01",
    name: "Requirements & site",
    technology: "Specification, soil, location & standards alignment",
    group: "field",
  },
  {
    number: "02",
    name: "Planting & inputs",
    technology: "Approved inputs, seed records & field evidence",
    group: "field",
  },
  {
    number: "03",
    name: "Cultivation",
    technology: "Field observations, satellite & weather intelligence",
    group: "field",
  },
  {
    number: "04",
    name: "Harvest",
    technology: "Drone and field testing, readiness & traceability",
    group: "field",
  },
  {
    number: "05",
    name: "Processing",
    technology: "Run conditions benchmarked to the required outcome",
    group: "process",
  },
  {
    number: "06",
    name: "Logistics",
    technology: "IoT-supported custody, condition & route monitoring",
    group: "logistics",
  },
  {
    number: "07",
    name: "Delivery",
    technology: "Customer handoff with quality & document evidence",
    group: "logistics",
  },
];

function Beam({
  stage,
  index,
  position,
}: {
  stage: Stage;
  index: number;
  position: "top" | "mid";
}) {
  const delay = position === "top" ? index * 0.25 : 0.6 + index * 0.25;

  return (
    <div className="flex justify-center">
      <span className="relative inline-block h-[22px] w-0.5 overflow-hidden rounded-[1px] bg-cream-50/[0.08]">
        <span
          className="journey-beam absolute inset-0"
          style={
            {
              "--journey-beam-color": GROUPS[stage.group].color,
              "--journey-beam-delay": `${delay}s`,
            } as CSSProperties
          }
        />
      </span>
    </div>
  );
}

type TechnologyBandProps = {
  activeGroup: JourneyGroup | null;
  group: JourneyGroup;
  gridColumn: string;
  title: string;
  description: string;
  chips: Array<{ label: string; accent?: boolean }>;
  onEnter: (group: JourneyGroup) => void;
  onLeave: () => void;
};

function TechnologyBand({
  activeGroup,
  group,
  gridColumn,
  title,
  description,
  chips,
  onEnter,
  onLeave,
}: TechnologyBandProps) {
  const isActive = activeGroup === group;
  const isDimmed = activeGroup !== null && !isActive;
  const { rgb, color } = GROUPS[group];

  return (
    <div
      onMouseEnter={() => onEnter(group)}
      onMouseLeave={onLeave}
      style={{
        gridColumn,
        border: `1px solid rgba(${rgb}, ${isActive ? 0.9 : 0.55})`,
        background: `rgba(${rgb}, ${isActive ? 0.18 : 0.1})`,
        boxShadow: isActive ? `0 0 28px rgba(${rgb}, 0.28)` : "none",
        opacity: isDimmed ? 0.4 : 1,
      }}
      className="relative cursor-default rounded-lg px-[18px] py-4 transition-all duration-300"
    >
      <p
        className={`${jetBrainsMono.className} m-0 text-[11px] leading-[normal] tracking-[0.2em]`}
        style={{ color }}
      >
        {title === "AI-SUPPORTED PROCESS INTELLIGENCE" ? (
          <>
            <span className="whitespace-nowrap">AI-SUPPORTED</span> PROCESS INTELLIGENCE
          </>
        ) : (
          title
        )}
      </p>
      <p className="m-0 mt-2 text-[13px] leading-[normal] text-cream-50/85">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip.label}
            className={`${jetBrainsMono.className} rounded-full px-2.5 py-1 text-[10px] leading-[normal] tracking-[0.1em]`}
            style={{
              border: `1px solid rgba(${rgb}, ${group === "field" ? 0.45 : 0.55})`,
              color: chip.accent ? "#E0C588" : "rgba(245, 239, 224, 0.75)",
            }}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function StageCard({
  stage,
  activeGroup,
  onEnter,
  onLeave,
}: {
  stage: Stage;
  activeGroup: JourneyGroup | null;
  onEnter: (group: JourneyGroup) => void;
  onLeave: () => void;
}) {
  const isActive = activeGroup === stage.group;
  const isDimmed = activeGroup !== null && !isActive;
  const { rgb, color } = GROUPS[stage.group];

  return (
    <div
      onMouseEnter={() => onEnter(stage.group)}
      onMouseLeave={onLeave}
      className="relative flex cursor-default flex-col gap-2 overflow-hidden rounded-lg px-3.5 py-4 transition-all duration-300"
      style={{
        border: `1px solid rgba(${rgb}, ${isActive ? 0.7 : 0.2})`,
        background: isActive ? `rgba(${rgb}, 0.08)` : "rgba(245, 239, 224, 0.03)",
        boxShadow: isActive
          ? `0 10px 24px rgba(0, 0, 0, 0.4), 0 0 18px rgba(${rgb}, 0.18)`
          : "none",
        opacity: isDimmed ? 0.4 : 1,
        transform: isActive ? "translateY(-3px)" : "none",
      }}
    >
      <span
        className="absolute inset-x-0 top-0 h-0.5"
        style={{
          background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          opacity: isActive ? 1 : 0.5,
        }}
      />
      <p
        className={`${jetBrainsMono.className} m-0 text-[10px] leading-[normal] tracking-[0.16em] text-cream-50/45`}
      >
        {stage.number}
      </p>
      <p className="m-0 text-sm font-semibold leading-[normal] text-cream-50">{stage.name}</p>
      <p className="m-0 text-xs leading-[1.5] text-cream-50/65">{stage.technology}</p>
    </div>
  );
}

export function JourneyMap() {
  const [activeGroup, setActiveGroup] = useState<JourneyGroup | null>(null);

  return (
    <figure className="mt-10">
      <div
        className="journey-panel overflow-x-auto rounded-xl border border-cream-50/10 px-7 pb-6 pt-7"
        role="region"
        aria-label="MoedimAI technology across seven agricultural value-chain stages. Scroll horizontally on smaller screens to view the full graphic."
        tabIndex={0}
      >
        <div className="min-w-[1060px]">
          <div className="grid grid-cols-7 gap-2.5">
            <div className="journey-engine relative col-span-7 flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-lg border border-teal-300/50 bg-gradient-to-r from-teal-300/15 to-gold-500/10 px-[22px] py-[18px]">
              <div className="journey-scan absolute inset-0" />
              <div className="relative flex items-center gap-3.5">
                <span className="journey-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(91,143,181,0.9)]" />
                <div>
                  <p
                    className={`${jetBrainsMono.className} m-0 text-xs leading-[normal] tracking-[0.24em] text-cream-50`}
                  >
                    THE MOEDIM<span className="text-gold-500">AI</span>
                    {" DECISION & VERIFICATION ENGINE FOR AGRICULTURAL VALUE CHAINS"}
                  </p>
                  <p className="m-0 mt-1.5 text-[13px] leading-[normal] text-cream-50/70">
                    MoedimAI benchmarks performance across the value chain and keeps the supporting
                    evidence connected.
                  </p>
                </div>
              </div>
              <span
                className={`${jetBrainsMono.className} relative text-[11px] leading-[normal] tracking-[0.16em] text-cream-50/55`}
              >
                LIVE ACROSS 07 STAGES
              </span>
            </div>

            {STAGES.map((stage, index) => (
              <Beam key={`engine-${stage.number}`} stage={stage} index={index} position="top" />
            ))}

            <TechnologyBand
              activeGroup={activeGroup}
              group="field"
              gridColumn="1 / span 4"
              title="FIELD & REMOTE INTELLIGENCE"
              description="Moedim Field · satellite · weather · drone · field testing"
              chips={[{ label: "APP STORE · GOOGLE PLAY" }, { label: "OFFLINE-FIRST" }]}
              onEnter={setActiveGroup}
              onLeave={() => setActiveGroup(null)}
            />
            <TechnologyBand
              activeGroup={activeGroup}
              group="process"
              gridColumn="5 / span 1"
              title="AI-SUPPORTED PROCESS INTELLIGENCE"
              description="Benchmarking · guidance"
              chips={[{ label: "PATENT PENDING", accent: true }]}
              onEnter={setActiveGroup}
              onLeave={() => setActiveGroup(null)}
            />
            <TechnologyBand
              activeGroup={activeGroup}
              group="logistics"
              gridColumn="6 / span 2"
              title="IOT & LOGISTICS INTELLIGENCE"
              description="Condition · custody · storage · routing"
              chips={[{ label: "SENSOR TELEMETRY" }]}
              onEnter={setActiveGroup}
              onLeave={() => setActiveGroup(null)}
            />

            {STAGES.map((stage, index) => (
              <Beam key={`stages-${stage.number}`} stage={stage} index={index} position="mid" />
            ))}

            {STAGES.map((stage) => (
              <StageCard
                key={stage.number}
                stage={stage}
                activeGroup={activeGroup}
                onEnter={setActiveGroup}
                onLeave={() => setActiveGroup(null)}
              />
            ))}

            {STAGES.map((stage) => (
              <div
                key={`anchor-${stage.number}`}
                className="flex flex-col items-center"
                aria-hidden="true"
              >
                <span className="h-3.5 w-px bg-verifiedGreen-500/70" />
                <span className="h-[9px] w-[9px] rounded-full border-2 border-verifiedGreen-500 bg-navy-900 shadow-[0_0_8px_rgba(63,138,110,0.55)]" />
              </div>
            ))}

            <div className="relative col-span-7 -mt-1 overflow-hidden rounded-lg border border-verifiedGreen-500/55 bg-verifiedGreen-500/[0.08] px-[22px] pb-[22px] pt-[18px]">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <p
                    className={`${jetBrainsMono.className} m-0 text-[11px] leading-[normal] tracking-[0.2em] text-verifiedGreen-300`}
                  >
                    BLOCKCHAIN-BACKED EVIDENCE RECORD
                  </p>
                  <p className="m-0 mt-1.5 text-[13px] leading-[normal] text-cream-50/80">
                    A continuous chain of evidence from specification alignment through delivery.
                  </p>
                </div>
                <span
                  className={`${jetBrainsMono.className} whitespace-nowrap text-xs leading-[normal] text-cream-50/70`}
                >
                  Requirement → Field → Processing → Quality → Delivery
                </span>
              </div>
              <div className="relative mt-4 h-3.5">
                <svg
                  viewBox="0 0 1000 14"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="7"
                    x2="1000"
                    y2="7"
                    stroke="rgba(122,181,155,0.35)"
                    strokeWidth="2"
                    strokeDasharray="10 8"
                    className="journey-flow"
                  />
                </svg>
                <span className="journey-packet absolute left-0 top-1/2 -ml-1 -mt-1 h-2 w-2 rounded-full bg-verifiedGreen-300 shadow-[0_0_12px_rgba(122,181,155,0.9)]" />
                <span className="journey-packet journey-packet-delayed absolute left-0 top-1/2 -ml-1 -mt-1 h-2 w-2 rounded-full bg-verifiedGreen-300 shadow-[0_0_12px_rgba(122,181,155,0.9)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-cream-50/50 lg:hidden">
        Swipe to view all seven stages.
      </figcaption>

      <style jsx global>{`
        .journey-panel {
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91, 143, 181, 0.08), transparent),
            rgba(12, 16, 24, 0.9);
        }

        .journey-scan {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(91, 143, 181, 0.07) 0 1px,
            transparent 1px 56px
          );
        }

        @keyframes journey-flow {
          from {
            stroke-dashoffset: 60;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes journey-pulse {
          0%,
          100% {
            opacity: 0.55;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes journey-beam {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100%);
          }
        }

        @keyframes journey-packet {
          0% {
            left: 0%;
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          94% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes journey-scan {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 56px 0;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .journey-scan {
            animation: journey-scan 6s linear infinite;
          }

          .journey-pulse {
            animation: journey-pulse 2.4s ease-in-out infinite;
          }

          .journey-beam {
            background: linear-gradient(
              to bottom,
              transparent,
              var(--journey-beam-color),
              transparent
            );
            animation: journey-beam 2.2s linear var(--journey-beam-delay) infinite;
          }

          .journey-flow {
            animation: journey-flow 1.6s linear infinite;
          }

          .journey-packet {
            animation: journey-packet 7s linear infinite;
          }

          .journey-packet-delayed {
            animation-delay: 3.5s;
          }
        }
      `}</style>
    </figure>
  );
}
