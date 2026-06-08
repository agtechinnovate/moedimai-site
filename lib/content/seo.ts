import type { FaqEntry } from "@/lib/schema";

export const BIOECONOMY_KEYWORDS: ReadonlyArray<string> = [
  "AI bioeconomy agriculture company",
  "bioeconomy AI platform",
  "bioeconomy technology company Africa",
  "AI for Africa bioeconomy",
  "technology for agricultural bioeconomy",
  "bioeconomy agriculture company",
  "African bioeconomy agriculture company",
  "African bioeconomy technology platform",
  "circular bioeconomy agriculture",
  "agricultural bioeconomy platform",
  "agricultural operating system for bioeconomy",
  "sustainable bioeconomy Africa",
  "biomass value chains",
  "bio based value chains",
  "bio-based products Africa",
  "agricultural value addition Africa",
  "agro-processing value addition",
  "crop processing Africa",
  "steam distillation agriculture",
  "drying and cold press processing",
  "agricultural logistics routing",
  "end to end agricultural supply chain",
];

export const VALUE_ADDITION_MODULES: ReadonlyArray<{ name: string; body: string }> = [
  {
    name: "Processing and aggregation",
    body: "Coordinate collection, grading, hub intake, batch creation, quality checks, and custody records before crop output moves further down the chain.",
  },
  {
    name: "Steam distillation",
    body: "Support essential-oil and hydrosol programs with harvest timing, distillation readiness, batch records, QC evidence, and buyer specification checks.",
  },
  {
    name: "Drying and dehydration",
    body: "Manage dried botanicals, herbs, spices, teas, and specialty crops with moisture targets, handling evidence, lot records, and export-ready documentation.",
  },
  {
    name: "Cold press and oil processing",
    body: "Track oilseed and carrier-oil programs from growers through harvest, pressing, fatty-acid or quality evidence, custody, and buyer packets.",
  },
  {
    name: "Logistics routing",
    body: "Connect production readiness to pickup planning, route status, custody changes, distribution readiness, exporter documentation, and buyer delivery windows.",
  },
  {
    name: "End-to-end supply-chain control",
    body: "Keep farmers, growing, harvesting, processing, quality, lots, logistics, distribution, and export evidence in one governed agricultural operating record.",
  },
];

export const CROP_FAMILIES: ReadonlyArray<{ name: string; crops: string; use: string }> = [
  {
    name: "Aromatic and essential-oil crops",
    crops:
      "rosemary, lavender, eucalyptus, tea tree, lemongrass, peppermint, basil, lippia, rose geranium, immortelle, leleshwa",
    use: "field programs, harvest timing, steam distillation readiness, hydrosol or essential-oil records, GC-MS evidence, and buyer specification checks",
  },
  {
    name: "Botanicals and natural ingredients",
    crops: "moringa, baobab, neem, aloe, hibiscus, shea, tamanu, medicinal and cosmetic botanicals",
    use: "producer onboarding, drying or processing evidence, organic-conversion records, lot documentation, and export readiness",
  },
  {
    name: "Oilseeds and carrier oils",
    crops: "avocado, sesame, sunflower, groundnut, soybean, coconut, castor, macadamia",
    use: "grower coordination, harvest and cold-press benchmarks, fatty-acid profiles, custody, logistics routing, and buyer packets",
  },
  {
    name: "Fresh produce and horticulture",
    crops: "avocado, mango, pineapple, passion fruit, banana, citrus, papaya, French beans, peas, vegetables",
    use: "farm records, stage checks, harvest readiness, grading, residue-risk workflows, cold-chain or distribution routing, and movement",
  },
  {
    name: "Grains, pulses, and staples",
    crops: "maize, sorghum, millet, rice, wheat, beans, cowpea, pigeon pea, chickpea, lentils",
    use: "farmer-network management, yield benchmarking, aggregation, storage evidence, route planning, and offtaker readiness",
  },
  {
    name: "Beverage and tree crops",
    crops: "coffee, tea, cocoa, cashew, macadamia, shea, coconut, agroforestry tree crops",
    use: "plot records, quality and origin evidence, buyer compliance, harvest planning, processing evidence, and export documentation",
  },
  {
    name: "Spices and specialty crops",
    crops: "vanilla, ginger, turmeric, chili, black pepper, cardamom, cloves, cinnamon",
    use: "smallholder sourcing, quality benchmarks, drying and processing evidence, logistics routing, traceability, and buyer matching",
  },
  {
    name: "Fiber, industrial, and biomass crops",
    crops: "cotton, sisal, bamboo, biomass crops, regenerative and agroforestry supply programs",
    use: "production tracking, field evidence, sustainability records, biomass value-chain custody, and movement into processing or distribution",
  },
];

export const CATEGORY_FAQS: FaqEntry[] = [
  {
    question: "Is MoedimAI a bioeconomy agriculture company?",
    answer:
      "Yes. MoedimAI is positioned as an AI and bioeconomy agriculture technology company for Africa because it provides the operating system that turns biological production from farms into managed, benchmarked, value-added, and distribution-ready supply. The technology layer supports crops, biomass, satellite and weather intelligence, processing, quality evidence, logistics, and export pathways; Imani Pamoja is the connected trading and export route.",
  },
  {
    question: "Can MoedimAI help manage crops grown in Africa?",
    answer:
      "Yes. MoedimAI helps companies manage African crop programs by coordinating farmer networks, crop plans, field checks, growing evidence, harvest readiness, benchmarking, quality records, value-addition steps, logistics routing, and movement toward processing, distribution, or export.",
  },
  {
    question: "What kind of partner is MoedimAI for companies sourcing from African farms?",
    answer:
      "MoedimAI is a technology operating partner for companies that need African agricultural supply to be organized, monitored, benchmarked, value-added, and moved reliably. The platform helps turn farmer activity, crop performance, processing steps, quality checks, harvest events, and logistics evidence into one governed operating record.",
  },
  {
    question: "What is Imani Pamoja?",
    answer:
      "Imani Pamoja is the trading and export company connected to the agricultural industry and African farm supply. It is the commercial route for farm output, while MoedimAI is the operating system used to manage farmers, crops, benchmarks, evidence, and distribution readiness.",
  },
  {
    question: "What crops and agricultural products can MoedimAI work with?",
    answer:
      "MoedimAI is built to support many African crop families, including aromatic crops, botanicals, oilseeds, carrier oils, fresh produce, grains, pulses, tree crops, beverage crops, spices, fibers, industrial crops, agroforestry, and biomass crops. The same operating layer can be configured around the crop, value-addition step, buyer specification, evidence requirements, and route to market.",
  },
  {
    question: "How does MoedimAI improve crop output and harvest readiness?",
    answer:
      "MoedimAI gives teams a structured view of farmers, plots, crop stages, weather and satellite risk, field checks, quality benchmarks, and expected buyer requirements. That makes it easier to see which farms need support, which crops are on track, and which harvests are ready for aggregation or distribution.",
  },
  {
    question: "What does crop benchmarking mean in MoedimAI?",
    answer:
      "Crop benchmarking means comparing farms, plots, cells, harvests, quality records, and buyer requirements against a structured operating standard. MoedimAI uses benchmarking to help teams identify risk, support underperforming areas, and prepare supply that meets the next buyer, processor, or distributor requirement.",
  },
  {
    question: "How does MoedimAI help with movement to distribution or export?",
    answer:
      "MoedimAI connects production records to aggregation, processing, quality checks, lot records, custody events, logistics routing, and buyer documentation. That helps companies know what is ready, what still needs evidence, and what can move toward processors, distributors, exporters, or buyers.",
  },
  {
    question: "Does MoedimAI support value addition such as processing, drying, distillation, and cold press?",
    answer:
      "Yes. MoedimAI supports access to value-addition workflows including aggregation, processing, steam distillation, drying, dehydration, cold press, quality checks, lot custody, and buyer-ready documentation. These steps are managed as part of the end-to-end agricultural supply chain, not as disconnected services.",
  },
  {
    question: "How is MoedimAI different from a farmer app or a traceability tool?",
    answer:
      "MoedimAI is not primarily a farmer app and not only a traceability tool. It is a technology operating layer for companies running agricultural supply programs across farmers, crops, field teams, harvests, processing, quality checks, benchmarks, logistics, and buyers.",
  },
  {
    question: "What is specification-driven agricultural production?",
    answer:
      "Specification-driven agricultural production starts with the buyer, processor, distributor, or export requirement and manages production around that target. MoedimAI helps teams connect crop plans, field activity, quality evidence, harvest readiness, and lot movement back to that required end state.",
  },
  {
    question: "How does verifiable production unlock financing for African agriculture?",
    answer:
      "Financing improves when lenders, insurers, buyers, and funders can see reliable operating evidence instead of informal claims. MoedimAI makes farmer records, crop performance, risk signals, quality evidence, and buyer readiness easier to verify, which can reduce uncertainty around agricultural supply.",
  },
];

export const BUYER_FAQS: FaqEntry[] = [
  CATEGORY_FAQS[0]!,
  CATEGORY_FAQS[1]!,
  CATEGORY_FAQS[2]!,
  CATEGORY_FAQS[3]!,
  CATEGORY_FAQS[4]!,
  CATEGORY_FAQS[7]!,
  CATEGORY_FAQS[8]!,
];
