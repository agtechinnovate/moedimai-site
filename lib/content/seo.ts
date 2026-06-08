import type { FaqEntry } from "@/lib/schema";

export const CROP_FAMILIES: ReadonlyArray<{ name: string; crops: string; use: string }> = [
  {
    name: "Aromatic and essential-oil crops",
    crops:
      "rosemary, lavender, eucalyptus, tea tree, lemongrass, peppermint, basil, lippia, rose geranium, immortelle, leleshwa",
    use: "field programs, harvest timing, distillation readiness, GC-MS evidence, and buyer specification checks",
  },
  {
    name: "Botanicals and natural ingredients",
    crops: "moringa, baobab, neem, aloe, hibiscus, shea, tamanu, medicinal and cosmetic botanicals",
    use: "producer onboarding, quality evidence, organic-conversion records, lot documentation, and export readiness",
  },
  {
    name: "Oilseeds and carrier oils",
    crops: "avocado, sesame, sunflower, groundnut, soybean, coconut, castor, macadamia",
    use: "grower coordination, harvest and processing benchmarks, fatty-acid profiles, custody, and buyer packets",
  },
  {
    name: "Fresh produce and horticulture",
    crops: "avocado, mango, pineapple, passion fruit, banana, citrus, papaya, French beans, peas, vegetables",
    use: "farm records, stage checks, harvest readiness, grading, residue-risk workflows, and distribution movement",
  },
  {
    name: "Grains, pulses, and staples",
    crops: "maize, sorghum, millet, rice, wheat, beans, cowpea, pigeon pea, chickpea, lentils",
    use: "farmer-network management, yield benchmarking, aggregation, storage evidence, and offtaker readiness",
  },
  {
    name: "Beverage and tree crops",
    crops: "coffee, tea, cocoa, cashew, macadamia, shea, coconut, agroforestry tree crops",
    use: "plot records, quality and origin evidence, buyer compliance, harvest planning, and export documentation",
  },
  {
    name: "Spices and specialty crops",
    crops: "vanilla, ginger, turmeric, chili, black pepper, cardamom, cloves, cinnamon",
    use: "smallholder sourcing, quality benchmarks, drying and processing evidence, traceability, and buyer matching",
  },
  {
    name: "Fiber, industrial, and biomass crops",
    crops: "cotton, sisal, bamboo, biomass crops, regenerative and agroforestry supply programs",
    use: "production tracking, field evidence, sustainability records, custody, and movement into processing or distribution",
  },
];

export const CATEGORY_FAQS: FaqEntry[] = [
  {
    question: "Can MoedimAI help manage crops grown in Africa?",
    answer:
      "Yes. MoedimAI helps companies manage African crop programs by coordinating farmer networks, crop plans, field checks, growing evidence, harvest readiness, benchmarking, quality records, and movement toward processing, distribution, or export.",
  },
  {
    question: "What kind of partner is MoedimAI for companies sourcing from African farms?",
    answer:
      "MoedimAI is an operating partner for companies that need African agricultural supply to be organized, monitored, benchmarked, and moved reliably. The platform helps turn farmer activity, crop performance, quality checks, harvest events, and logistics evidence into one governed operating record.",
  },
  {
    question: "What is Imani Pamoja?",
    answer:
      "Imani Pamoja is the trading and export company connected to the agricultural industry and African farm supply. It is the commercial route for farm output, while MoedimAI is the operating system used to manage farmers, crops, benchmarks, evidence, and distribution readiness.",
  },
  {
    question: "What crops and agricultural products can MoedimAI work with?",
    answer:
      "MoedimAI is built to support many African crop families, including aromatic crops, botanicals, oilseeds, carrier oils, fresh produce, grains, pulses, tree crops, beverage crops, spices, fibers, and biomass crops. The same operating layer can be configured around the crop, buyer specification, evidence requirements, and route to market.",
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
      "MoedimAI connects production records to aggregation, quality checks, lot records, custody events, and buyer documentation. That helps companies know what is ready, what still needs evidence, and what can move toward processors, distributors, exporters, or buyers.",
  },
  {
    question: "How is MoedimAI different from a farmer app or a traceability tool?",
    answer:
      "MoedimAI is not primarily a farmer app and not only a traceability tool. It is an operating layer for companies running agricultural supply programs across farmers, crops, field teams, harvests, quality checks, benchmarks, logistics, and buyers.",
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
  CATEGORY_FAQS[6]!,
];
