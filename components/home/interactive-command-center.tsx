"use client";

import { useState } from "react";

const SCENARIOS = [
  {
    question: "Which lots meet the current EU cosmetic specification?",
    lead: "3 lots are ready.",
    detail: "2 require COA uploads. 1 supplier group needs updated organic-scope evidence.",
    actions: ["View 3 ready lots", "Resolve 2 COA gaps", "Review organic scope"],
  },
  {
    question: "Generate the evidence pack for Baobab Lot B-204",
    lead: "Evidence pack assembled.",
    detail:
      "COA, GC-MS, organic scope and custody records are compiled for Lot B-204 and ready for review.",
    actions: ["Preview pack", "Open lot record", "Review evidence"],
  },
  {
    question: "Flag certification gaps across Kenya deployments",
    lead: "4 gaps found.",
    detail:
      "2 plots need updated GLOBALG.A.P. checks. 1 processor SOP expires in 30 days. 1 DDS record is incomplete.",
    actions: ["Assign field visits", "Renew SOP", "Complete DDS"],
  },
  {
    question: "Match available moringa supply to specification MO-17",
    lead: "2 networks match.",
    detail:
      "Nakuru cell 3 and Nyeri cell 1 meet specification MO-17 for moisture, identity and Q4 volume.",
    actions: ["Review volume", "Open spec MO-17", "Notify processor"],
  },
] as const;

const GRAPH_NODES = [
  { label: "Farmer", left: "14%", top: "16%", side: "source" },
  { label: "Plot/cell", left: "14%", top: "38%", side: "source" },
  { label: "Processor", left: "14%", top: "61%", side: "source" },
  { label: "Cert/ICS", left: "14%", top: "84%", side: "source" },
  { label: "Lab/QC", left: "84%", top: "13%", side: "source" },
  { label: "Lot", left: "84%", top: "39%", side: "outcome" },
  { label: "Customer", left: "84%", top: "64%", side: "outcome" },
  { label: "Delivery", left: "84%", top: "88%", side: "outcome" },
] as const;

export function InteractiveCommandCenter() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeAction, setActiveAction] = useState(0);
  const scenario = SCENARIOS[activeScenario] ?? SCENARIOS[0]!;

  function selectScenario(index: number) {
    setActiveScenario(index);
    setActiveAction(0);
  }

  return (
    <figure className="mt-10">
      <div
        className="bg-navy-950/90 overflow-x-auto rounded-xl border border-cream-50/10 shadow-2xl"
        role="region"
        aria-label="Interactive MoedimAI command center product preview. Scroll horizontally on smaller screens to use the full preview."
        tabIndex={0}
      >
        <div className="min-w-[1060px] font-sans">
          <div className="flex items-center justify-between border-b border-cream-50/10 px-5 py-3.5">
            <div className="flex items-center gap-3.5">
              <div className="flex gap-2" aria-hidden="true">
                <span className="size-3 rounded-full bg-cream-50/20" />
                <span className="size-3 rounded-full bg-cream-50/20" />
                <span className="size-3 rounded-full bg-cream-50/20" />
              </div>
              <span className="font-mono text-[13px] text-cream-50/75">
                moedimai · command center
              </span>
            </div>
            <span className="rounded-md border border-teal-300/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-300">
              Product preview
            </span>
          </div>

          <div className="grid grid-cols-[1fr_1.05fr]">
            <div className="border-r border-cream-50/10 px-6 py-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-300/85">
                Agricultural operating graph · source → customer
              </p>
              <div className="relative mt-2 h-[440px]" aria-label="Agricultural operating graph">
                <svg
                  viewBox="0 0 600 440"
                  className="absolute inset-0 size-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 92 70 C 180 90, 200 180, 268 210"
                    stroke="rgba(91,143,181,0.35)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 92 165 C 170 175, 200 195, 268 214"
                    stroke="rgba(91,143,181,0.35)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 92 265 C 170 255, 200 235, 268 222"
                    stroke="rgba(91,143,181,0.35)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 92 365 C 180 350, 200 260, 268 226"
                    stroke="rgba(91,143,181,0.35)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 332 206 C 400 170, 430 90, 496 58"
                    stroke="rgba(91,143,181,0.4)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 332 214 C 410 200, 440 180, 496 172"
                    stroke="rgba(201,169,97,0.45)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 332 222 C 410 240, 440 268, 496 280"
                    stroke="rgba(201,169,97,0.45)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 332 228 C 400 270, 430 350, 496 384"
                    stroke="rgba(201,169,97,0.45)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="420" cy="120" r="4" fill="#5B8FB5" />
                  <circle cx="430" cy="330" r="4" fill="#C9A961" />
                </svg>

                {GRAPH_NODES.map((node) => (
                  <div
                    key={node.label}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                    style={{ left: node.left, top: node.top }}
                  >
                    <span
                      className={
                        node.side === "outcome"
                          ? "size-[46px] rounded-full border-2 border-gold-500 bg-[#231c0c]/90"
                          : "size-[46px] rounded-full border-2 border-teal-300 bg-navy-900/90"
                      }
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap font-mono text-xs text-cream-50/85">
                      {node.label}
                    </span>
                  </div>
                ))}

                <div className="absolute left-[44%] top-[47%] flex size-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-teal-300 bg-teal-300/10 text-center shadow-[0_0_40px_rgba(91,143,181,0.25)]">
                  <span className="font-mono text-xs leading-[1.4] text-cream-50">
                    MoedimAI
                    <br />
                    graph
                  </span>
                </div>
              </div>
            </div>

            <div className="flex min-h-[496px] flex-col">
              <div className="flex items-center gap-2.5 border-b border-cream-50/10 px-6 py-5">
                <span className="size-2.5 rounded-full bg-green-400" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300">
                  Decision intelligence
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                <div className="max-w-[88%] self-end rounded-[10px] border border-teal-300/50 bg-teal-300/[0.08] px-5 py-3.5 text-[15px] text-cream-50">
                  {scenario.question}
                </div>
                <div className="rounded-[10px] border border-cream-50/10 bg-cream-50/[0.03] px-5 py-4">
                  <p className="text-sm leading-6 text-cream-50/90">
                    <strong className="text-cream-50">{scenario.lead}</strong> {scenario.detail}
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-2.5">
                    {scenario.actions.map((action, index) => (
                      <button
                        key={action}
                        type="button"
                        aria-pressed={activeAction === index}
                        onClick={() => setActiveAction(index)}
                        className={
                          activeAction === index
                            ? "rounded-md border border-gold-500/70 bg-gold-500/10 px-3.5 py-2 font-mono text-xs text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
                            : "rounded-md border border-cream-50/25 px-3.5 py-2 font-mono text-xs text-cream-50/85 transition-colors hover:border-cream-50/45 hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
                        }
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-cream-50/10 px-6 pb-5 pt-4">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cream-50/45">
                  Try
                </p>
                <div className="grid">
                  {SCENARIOS.map((item, index) => (
                    <button
                      key={item.question}
                      type="button"
                      aria-pressed={activeScenario === index}
                      onClick={() => selectScenario(index)}
                      className={
                        activeScenario === index
                          ? "border-b border-dashed border-cream-50/10 py-2 text-left text-sm text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-300"
                          : "border-b border-dashed border-cream-50/10 py-2 text-left text-sm text-cream-50/55 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-300"
                      }
                    >
                      <span aria-hidden="true">›&nbsp;&nbsp;</span>
                      {item.question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs text-cream-50/50">
        <span>Select a question to explore the product preview.</span>
        <span className="sm:hidden">Swipe to view the full command center.</span>
      </figcaption>
    </figure>
  );
}
