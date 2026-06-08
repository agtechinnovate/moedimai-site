import type { FaqEntry } from "@/lib/schema";

export const CATEGORY_FAQS: FaqEntry[] = [
  {
    question: "What is trade infrastructure for the agricultural bioeconomy?",
    answer:
      "Trade infrastructure for the agricultural bioeconomy is the operating layer that makes biological production verifiable, financeable, and exportable. MoedimAI uses farmer, plot, cell, quality, certification, logistics, and buyer-specification data to turn fragmented production into buyer-ready supply.",
  },
  {
    question: "How do you verify that smallholder farm output meets a buyer's specification?",
    answer:
      "MoedimAI works backward from the buyer's end-state specification, then tracks the production, field, quality, lab, custody, and documentation signals needed to prove conformance. In the botanical proof case, chemotype and quality evidence are connected to lot records so buyers can evaluate fit before procurement decisions.",
  },
  {
    question: "What does buyer-grade or buyer-verifiable supply mean?",
    answer:
      "Buyer-grade supply means a buyer can review the evidence behind origin, quality, compliance, custody, and readiness before committing. Buyer-verifiable supply is not just a claim; it is a packet of records tied to the farmers, cells, lots, lab results, and movements behind the product.",
  },
  {
    question: "How is MoedimAI different from a farmer app or a traceability tool?",
    answer:
      "MoedimAI is not primarily a farmer app and not only a traceability tool. It is a multi-tenant operating graph for agricultural supply, combining intake, verification, certification evidence, satellite and weather signals, quality records, buyer packets, and permissioned access in one governed system.",
  },
  {
    question: "What is specification-driven agricultural production?",
    answer:
      "Specification-driven agricultural production starts with the buyer's required end state and organizes production around that target. Instead of discovering quality only after harvest, MoedimAI structures production, field checks, and evidence collection around the specification from the beginning.",
  },
  {
    question: "What is a chemotype, and why does it matter for botanicals?",
    answer:
      "A chemotype is the chemical profile that determines whether a botanical ingredient matches a buyer's functional and quality expectations. For botanical oils, GC-MS or related lab evidence helps confirm whether the lot conforms to the target profile.",
  },
  {
    question: "How does verifiable production unlock financing for African agriculture?",
    answer:
      "Financing improves when lenders, insurers, buyers, and funders can see reliable operating evidence instead of informal claims. MoedimAI makes production records, risk signals, quality evidence, and buyer readiness easier to verify, which can reduce uncertainty around agricultural supply.",
  },
  {
    question: "What is a multi-tenant operating graph for agricultural supply?",
    answer:
      "A multi-tenant operating graph connects the actors and events in agricultural supply while keeping each tenant's data governed and isolated. Enterprises can run producer onboarding, cell planning, certification evidence, logistics, buyer access, and reporting from one master account.",
  },
  {
    question: "What regulations matter for certified-organic agricultural exports to the EU?",
    answer:
      "Certified-organic agricultural exports to the EU commonly require alignment with EU organic rules, including Regulation (EU) 2018/848, plus importer, control-body, and shipment documentation. MoedimAI treats certification evidence as a structured operating record rather than a loose document archive.",
  },
  {
    question: "What is a tamper-evident traceability ledger in agriculture?",
    answer:
      "A tamper-evident agricultural traceability ledger records events so later changes are attributable and auditable. MoedimAI uses this idea to connect source records, field events, quality checks, custody changes, and buyer packets to the same evidence trail.",
  },
];

export const PROOF_CASE_FAQS: FaqEntry[] = [
  {
    question: "How do you verify that smallholder farm output meets a buyer's specification?",
    answer:
      "MoedimAI works backward from the buyer's end-state specification, then tracks the production, field, quality, lab, custody, and documentation signals needed to prove conformance. In the botanical proof case, chemotype and quality evidence are connected to lot records so buyers can evaluate fit before procurement decisions.",
  },
  {
    question: "What is a chemotype, and why does it matter for botanicals?",
    answer:
      "A chemotype is the chemical profile that determines whether a botanical ingredient matches a buyer's functional and quality expectations. For botanical oils, GC-MS or related lab evidence helps confirm whether the lot conforms to the target profile.",
  },
  {
    question: "What does buyer-grade or buyer-verifiable supply mean?",
    answer:
      "Buyer-grade supply means a buyer can review the evidence behind origin, quality, compliance, custody, and readiness before committing. Buyer-verifiable supply is not just a claim; it is a packet of records tied to the farmers, cells, lots, lab results, and movements behind the product.",
  },
  {
    question: "What is the Imani Pamoja proof case?",
    answer:
      "Imani Pamoja is the tenant-zero proof case for MoedimAI's agricultural operating system. It demonstrates how producer onboarding, cell planning, quality evidence, lab records, and buyer-ready supply can work in a real African botanical and oil context without making MoedimAI only an ingredients company.",
  },
];
