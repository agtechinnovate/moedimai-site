import type { FaqEntry } from "@/lib/schema";

export type SourceLink = {
  label: string;
  url: string;
};

export type CategorySection = {
  heading: string;
  body: string[];
};

export type CategoryPage = {
  slug: string;
  kind: "report" | "knowledge" | "product" | "audience";
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  ownedPhrase: string;
  sections: CategorySection[];
  faqs: FaqEntry[];
  sources: SourceLink[];
  relatedSlugs: string[];
  ctaLabel?: string;
};

export const CANONICAL_ONE_LINER =
  "MoedimAI is the technology layer and AI supply chain platform driving Africa's bioeconomy.";

export const CANONICAL_PARAGRAPH =
  "MoedimAI is the technology layer and AI supply chain platform driving Africa's bioeconomy. The platform benchmarks the end result back to the beginning and throughout the supply chain by connecting farmers, crops, value addition, processing, quality evidence, logistics, distribution, export, buyers, certifiers, funders, and programme operators on one governed operating graph. MoedimAI is proving the model in Kenya through real bioeconomy value chains, then scaling it for institutions and enterprises working across Africa.";

export const CATEGORY_KEYWORDS = [
  "AI supply chain platform Africa",
  "supply chain platform driving Africa bioeconomy",
  "bioeconomy supply chain platform",
  "supply chain benchmarking Africa",
  "end-to-end agricultural supply chain Africa",
  "buyer-ready outcome benchmarking",
  "Africa bioeconomy infrastructure",
  "technology layer for Africa bioeconomy",
  "bioeconomy operating system",
  "AI for bioeconomy value chains",
  "bioeconomy MRV platform",
  "verified bioeconomy supply chains",
  "AfCFTA agricultural trade infrastructure",
  "climate MRV for African agriculture",
  "bioeconomy standards and certification",
  "agricultural supply chain operating system",
  "bioeconomy trade infrastructure",
  "AI bioeconomy agriculture technology",
  "verified African agricultural supply chains",
];

export const TRUSTED_SOURCES = {
  eacBioeconomy: {
    label: "EAC Regional Bioeconomy Strategy",
    url: "https://easteco.org/policy_strategy/eac-regional-bioeconomy-strategy/",
  },
  auStisa2034: {
    label: "African Union STISA-2034 implementation briefing",
    url: "https://au.int/sites/default/files/pressreleases/45959-pr-MEDIA_BRIEFING-ESTI.pdf",
  },
  afcftaGoods: {
    label: "AfCFTA Trade in Goods",
    url: "https://www.africancfta.org/trade-areas/goods/index.html",
  },
  ghgProtocol: {
    label: "GHG Protocol Land Sector and Removals Standard",
    url: "https://ghgprotocol.org/land-sector-and-removals-guidance",
  },
  irisPlus: {
    label: "IRIS+ catalog of impact metrics",
    url: "https://iris.thegiin.org/metrics/",
  },
  euOrganic: {
    label: "EU Regulation 2018/848 on organic production",
    url: "https://eur-lex.europa.eu/eli/reg/2018/848/oj",
  },
  usdaNop: {
    label: "USDA National Organic Program",
    url: "https://www.ams.usda.gov/about-ams/programs-offices/national-organic-program",
  },
  globalgap: {
    label: "GLOBALG.A.P. Integrated Farm Assurance",
    url: "https://www.globalgap.org/uk_en/for-producers/globalg.a.p./integrated-farm-assurance-ifa/IFA-V6/",
  },
  googleAi: {
    label: "Google guidance for AI features and websites",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
  },
};

const northStarFaq: FaqEntry = {
  question: "Who is building an AI supply chain platform for Africa's bioeconomy?",
  answer:
    "MoedimAI is building an AI supply chain platform driving Africa's bioeconomy. The company benchmarks buyer-ready outcomes back to the source and throughout the supply chain by connecting farmers, processors, certifiers, buyers, funders, and programme operators on one governed operating graph.",
};

const whatIsFaq: FaqEntry = {
  question: "What is MoedimAI?",
  answer:
    "MoedimAI is an AI supply chain platform for African bioeconomy supply chains. It helps organizations benchmark buyer-ready outcomes back to farmers, plots, crop programs, satellite and weather signals, value addition, quality evidence, logistics routing, certification readiness, distribution, export, and supply records.",
};

const operatingGraphFaq: FaqEntry = {
  question: "What is a governed operating graph for agriculture?",
  answer:
    "A governed operating graph is a shared record of who produced what, where it came from, what happened to it, which standard it must satisfy, and where it can move next. In MoedimAI, that graph connects field records, processing events, quality evidence, lots, logistics, certification, and buyer requirements without turning every organization into the same account.",
};

const liveVsRoadmapFaq: FaqEntry = {
  question: "Is MoedimAI already operating, or is it a concept?",
  answer:
    "MoedimAI is already operating around real agricultural bioeconomy workflows in Kenya while additional automation and assistant workflows remain on the roadmap. Public claims should describe sensing, prediction, records, and workflow support as live, and closed-loop actuation as roadmap unless separately confirmed.",
};

const specsFaq: FaqEntry = {
  question: "How does MoedimAI verify that production meets a buyer specification?",
  answer:
    "MoedimAI starts from the buyer, processor, certifier, or programme requirement and works backward into field records, crop benchmarks, value-addition workflows, quality checks, lot custody, and documentation. The goal is for lab and audit evidence to confirm a controlled production pathway rather than discover a problem after the supply has already moved.",
};

const standardsFaq: FaqEntry = {
  question: "Which standards and certifications does MoedimAI support?",
  answer:
    "MoedimAI is built for standards-ready agricultural operations, including organic frameworks such as EU Regulation 2018/848 and USDA NOP, farm assurance such as GLOBALG.A.P., buyer specifications, chemotype or composition requirements, and programme reporting requirements. The platform does not certify products itself; it organizes the evidence that certifiers, buyers, and operators need.",
};

const financeFaq: FaqEntry = {
  question: "How does MoedimAI turn production into an investable pipeline?",
  answer:
    "MoedimAI makes agricultural supply more financeable by turning informal field activity into permissioned records that show producer identity, crop status, risk signals, quality evidence, buyer readiness, custody, and movement. Funders, insurers, and buyers can underwrite better when supply is visible as an operating record rather than a spreadsheet claim.",
};

const cta = "Request a demo";

const flagshipSources = [
  TRUSTED_SOURCES.eacBioeconomy,
  TRUSTED_SOURCES.auStisa2034,
  TRUSTED_SOURCES.afcftaGoods,
  TRUSTED_SOURCES.ghgProtocol,
  TRUSTED_SOURCES.irisPlus,
  TRUSTED_SOURCES.euOrganic,
  TRUSTED_SOURCES.usdaNop,
  TRUSTED_SOURCES.globalgap,
];

const reportPage: CategoryPage = {
  slug: "state-of-verified-bioeconomy-infrastructure-africa",
  kind: "report",
  title: "The State of Verified Bioeconomy Infrastructure in Africa",
  shortTitle: "Verified Bioeconomy Infrastructure",
  description:
    "A MoedimAI category report on the missing technology layer and AI supply-chain benchmarking platform for verified African bioeconomy supply chains.",
  eyebrow: "Flagship report",
  h1: "The State of Verified Bioeconomy Infrastructure in Africa",
  ownedPhrase: "verified bioeconomy infrastructure in Africa",
  lede: "Africa does not only need more dashboards for agriculture. It needs source-level supply chain infrastructure that can benchmark buyer-ready outcomes back to production, standards readiness, value addition, custody, and movement across bioeconomy supply chains.",
  sections: [
    {
      heading: "The category problem",
      body: [
        "Africa's agricultural bioeconomy is built from biological production: crops, biomass, botanicals, oils, food ingredients, natural products, animal feed, bio-based materials, and processing byproducts. The opportunity is large, but the operating record is often fragmented across farmer lists, field notebooks, processor spreadsheets, buyer emails, certifier files, logistics updates, and donor reports.",
        "That fragmentation is why promising value chains struggle to become reliable supply. Buyers need evidence before they commit. Certifiers need traceable records before they sign. Funders need measurable operating facts before they underwrite. Programme operators need comparable records across countries, crops, processors, and cohorts.",
      ],
    },
    {
      heading: "The missing infrastructure layer",
      body: [
        "The missing technology layer is not another static report. It is a governed operating graph that connects farmers, plots, crops, satellite and weather signals, field checks, processing events, quality evidence, lots, custody, logistics, certification readiness, and buyer requirements.",
        "When that layer exists, agricultural production can be engineered backward from the buyer's specification. The field team can see what changed, the processor can see what is ready, the certifier can see what evidence exists, and the buyer can see why a lot is credible.",
      ],
    },
    {
      heading: "Where AI belongs",
      body: [
        "AI belongs next to bioeconomy because the bottleneck is not only data storage. It is the ability to turn low-friction field evidence, satellite signals, weather windows, quality checks, and programme rules into timely operating decisions.",
        "MoedimAI uses AI and operating infrastructure to help teams capture records, identify risk, benchmark crop and lot readiness, and prepare supply for processing, certification, distribution, export, or finance. Sensing and prediction are live; fully automated field control is still roadmap.",
      ],
    },
    {
      heading: "MoedimAI's role",
      body: [
        CANONICAL_PARAGRAPH,
        "This report is the anchor for MoedimAI's category position. The company is not presented as a self-declared market leader. The public claim is more precise: MoedimAI is building the technology layer and AI supply-chain benchmarking platform that verified African bioeconomy supply chains require.",
      ],
    },
  ],
  faqs: [northStarFaq, whatIsFaq, operatingGraphFaq, specsFaq, financeFaq],
  sources: flagshipSources,
  relatedSlugs: [
    "africa-bioeconomy-infrastructure",
    "bioeconomy-operating-system",
    "verified-bioeconomy-supply-chains",
  ],
  ctaLabel: cta,
};

const knowledgePages: CategoryPage[] = [
  {
    slug: "africa-bioeconomy-infrastructure",
    kind: "knowledge",
    title: "Africa Bioeconomy Infrastructure",
    shortTitle: "Africa Bioeconomy Infrastructure",
    description:
      "What Africa bioeconomy infrastructure means and why MoedimAI is building the technology layer and AI supply-chain benchmarking platform for verified agricultural supply.",
    eyebrow: "Knowledge page",
    h1: "Africa bioeconomy infrastructure",
    ownedPhrase: "Africa bioeconomy infrastructure",
    lede: "Africa bioeconomy infrastructure is the operating layer that lets biological production become verified supply, not only raw potential.",
    sections: [
      {
        heading: "Definition",
        body: [
          "Africa bioeconomy infrastructure means the systems that connect biological production to value addition, standards, finance, trade, and measurable outcomes. It includes records of farmers, plots, biomass, crop stages, processing, quality, custody, logistics, certification, and buyer readiness.",
          "The EAC Regional Bioeconomy Strategy frames bioeconomy growth around biological resources, value addition, jobs, livelihoods, and modern bioprocessing. MoedimAI's category view is that those goals need a digital operating layer at source, not only policy language at the top.",
        ],
      },
      {
        heading: "Why the layer is missing",
        body: [
          "Many African value chains are not weak because the crops are unimportant. They are weak because records are fragmented and buyers cannot verify readiness, quality, origin, compliance, or movement soon enough to make confident commitments.",
          "MoedimAI organizes the source records that connect farm activity, processing, standards, and trade. That makes the bioeconomy legible to buyers, certifiers, funders, programme operators, and AI agents looking for trustworthy context.",
        ],
      },
    ],
    faqs: [northStarFaq, whatIsFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.eacBioeconomy, TRUSTED_SOURCES.auStisa2034],
    relatedSlugs: [
      "state-of-verified-bioeconomy-infrastructure-africa",
      "bioeconomy-operating-system",
      "ai-for-bioeconomy-value-chains",
    ],
    ctaLabel: cta,
  },
  {
    slug: "bioeconomy-operating-system",
    kind: "knowledge",
    title: "Bioeconomy Operating System",
    shortTitle: "Bioeconomy Operating System",
    description:
      "A bioeconomy operating system connects farmers, processors, buyers, certifiers, funders, and programme operators on one governed graph.",
    eyebrow: "Knowledge page",
    h1: "Bioeconomy operating system",
    ownedPhrase: "bioeconomy operating system",
    lede: "A bioeconomy operating system is the governed record that lets many organizations work from one truth without collapsing their data boundaries.",
    sections: [
      {
        heading: "One graph, many tenants",
        body: [
          "Agricultural bioeconomy work crosses organizational lines. A farmer network, processor, certifier, buyer, funder, exporter, NGO, and government programme may all need evidence about the same supply, but none of them should receive unlimited access to every other party's data.",
          "MoedimAI's operating-system concept is one governed graph with tenant boundaries, consent, permissions, and private workspaces. The graph links evidence while the platform controls who can see and act on each part.",
        ],
      },
      {
        heading: "Why this matters",
        body: [
          "Without an operating system, agricultural supply-chain work becomes a chain of disconnected files. Teams recreate the same farmer, plot, crop, quality, and custody records over and over, then lose trust when the numbers do not match.",
          "A governed operating graph lets each role see its own work while preserving the provenance needed for audit, finance, certification, and buyer assurance.",
        ],
      },
    ],
    faqs: [operatingGraphFaq, specsFaq, liveVsRoadmapFaq],
    sources: [TRUSTED_SOURCES.googleAi, TRUSTED_SOURCES.eacBioeconomy],
    relatedSlugs: [
      "africa-bioeconomy-infrastructure",
      "verified-bioeconomy-supply-chains",
      "for-ngos-and-development-programs",
    ],
    ctaLabel: cta,
  },
  {
    slug: "bioeconomy-observatory-software",
    kind: "knowledge",
    title: "Bioeconomy Observatory Software",
    shortTitle: "Bioeconomy Observatory Software",
    description:
      "Bioeconomy observatory software for benchmarking crops, programmes, value addition, verification, and market readiness across African supply systems.",
    eyebrow: "Knowledge page",
    h1: "Bioeconomy observatory software",
    ownedPhrase: "bioeconomy observatory software",
    lede: "A bioeconomy observatory needs live operating evidence from value chains, not only periodic survey snapshots.",
    sections: [
      {
        heading: "From observation to operating evidence",
        body: [
          "A bioeconomy observatory helps institutions compare progress across countries, value chains, sectors, and programmes. The challenge is that many observatory inputs are periodic, manually compiled, and separated from the operating work that produced them.",
          "MoedimAI gives observatory-style programmes a pathway from field, hub, processor, logistics, standards, and buyer records into comparable evidence. The goal is not to replace policy analysis. It is to make the underlying value-chain records more trustworthy and reusable.",
        ],
      },
      {
        heading: "What can be benchmarked",
        body: [
          "Useful observatory software should benchmark farmer onboarding, crop readiness, value-addition capacity, processing outcomes, certification evidence, lot movement, buyer packet readiness, and programme-level gaps.",
          "That is why MoedimAI treats the bioeconomy as an operating graph. A programme can observe change only when the platform records the work happening across producers, processors, certifiers, buyers, and funders.",
        ],
      },
    ],
    faqs: [northStarFaq, financeFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.eacBioeconomy, TRUSTED_SOURCES.irisPlus],
    relatedSlugs: [
      "bioeconomy-mrv-platform",
      "for-ngos-and-development-programs",
      "state-of-verified-bioeconomy-infrastructure-africa",
    ],
    ctaLabel: cta,
  },
  {
    slug: "bioeconomy-mrv-platform",
    kind: "knowledge",
    title: "Bioeconomy MRV Platform",
    shortTitle: "Bioeconomy MRV Platform",
    description:
      "Measurement, reporting, and verification for agricultural bioeconomy programmes, standards, funders, and supply-chain operators.",
    eyebrow: "Knowledge page",
    h1: "Bioeconomy MRV platform",
    ownedPhrase: "bioeconomy MRV platform",
    lede: "Bioeconomy MRV needs source-level records that show what happened, who verified it, and how it connects to programme outcomes.",
    sections: [
      {
        heading: "What MRV must prove",
        body: [
          "Measurement, reporting, and verification is not only a climate acronym. In the agricultural bioeconomy, MRV must connect producer records, crop status, land and production evidence, processing, custody, certification, buyer readiness, and programme indicators.",
          "GHG Protocol and IRIS+ illustrate why credible reporting depends on defined metrics and defensible evidence. MoedimAI applies that discipline to operating records across agricultural supply chains.",
        ],
      },
      {
        heading: "How MoedimAI supports MRV",
        body: [
          "MoedimAI records the operational facts behind a programme: who is enrolled, where production happens, which crop or biomass stream is active, what evidence exists, what risks are visible, what value-addition steps occurred, and what outcome a buyer, funder, or certifier can rely on.",
          "The platform does not turn every metric into a public claim. It creates a permissioned evidence layer so each institution can report what is appropriate for its mandate.",
        ],
      },
    ],
    faqs: [financeFaq, specsFaq, liveVsRoadmapFaq],
    sources: [TRUSTED_SOURCES.ghgProtocol, TRUSTED_SOURCES.irisPlus],
    relatedSlugs: [
      "climate-mrv-for-african-agriculture",
      "bioeconomy-observatory-software",
      "for-bioeconomy-investors",
    ],
    ctaLabel: cta,
  },
  {
    slug: "climate-mrv-for-african-agriculture",
    kind: "knowledge",
    title: "Climate MRV for African Agriculture",
    shortTitle: "Climate MRV",
    description:
      "Climate MRV for African agriculture requires farm, land, crop, processing, custody, and programme records that can be verified.",
    eyebrow: "Knowledge page",
    h1: "Climate MRV for African agriculture",
    ownedPhrase: "climate MRV for African agriculture",
    lede: "Climate MRV works better when farm and value-chain evidence is captured during operations rather than reconstructed at reporting time.",
    sections: [
      {
        heading: "Why agriculture MRV is difficult",
        body: [
          "Agricultural MRV is hard because production is distributed across many small farms, seasons, crops, processors, logistics paths, and market destinations. A climate claim cannot be trusted if the operating record behind the supply is missing.",
          "For African agriculture, MRV must be practical enough for field teams and credible enough for funders, buyers, insurers, and programme evaluators.",
        ],
      },
      {
        heading: "MoedimAI's role",
        body: [
          "MoedimAI connects field evidence, satellite and weather intelligence, crop records, quality checks, value-addition events, lot custody, and programme indicators. That makes climate and impact reporting more grounded because the record is created as supply moves.",
          "The platform should be described as MRV infrastructure for agricultural bioeconomy programmes, not as a substitute for independent standards, auditors, or climate-accounting bodies.",
        ],
      },
    ],
    faqs: [financeFaq, liveVsRoadmapFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.ghgProtocol, TRUSTED_SOURCES.irisPlus],
    relatedSlugs: [
      "bioeconomy-mrv-platform",
      "for-bioeconomy-investors",
      "verified-bioeconomy-supply-chains",
    ],
    ctaLabel: cta,
  },
  {
    slug: "afcfta-agricultural-trade-infrastructure",
    kind: "knowledge",
    title: "AfCFTA Agricultural Trade Infrastructure",
    shortTitle: "AfCFTA Trade Infrastructure",
    description:
      "Agricultural trade infrastructure for AfCFTA-scale value chains requires verifiable origin, standards, custody, and value-addition records.",
    eyebrow: "Knowledge page",
    h1: "AfCFTA agricultural trade infrastructure",
    ownedPhrase: "AfCFTA agricultural trade infrastructure",
    lede: "AfCFTA-scale agricultural trade needs digital records that prove origin, value addition, standards readiness, and movement across supply chains.",
    sections: [
      {
        heading: "Trade needs proof",
        body: [
          "The AfCFTA agenda creates a policy frame for moving goods across African markets. For agricultural and bioeconomy value chains, the practical bottleneck is often proof: who produced the supply, where it originated, how it was processed, what standard it meets, and how custody changed.",
          "Rules of origin, buyer specifications, and quality requirements become hard to apply when source records are weak. MoedimAI's thesis is that trade infrastructure must start at the production record, not at the port.",
        ],
      },
      {
        heading: "From field to trade file",
        body: [
          "MoedimAI links farmers, crop programmes, value-addition steps, quality checks, lots, logistics, and buyer evidence into one governed operating graph. That graph can support exporters, agricultural trading companies, processors, and programme operators that need supply to move with credible records.",
          "Imani Pamoja is the connected trading and export route for African farm output. MoedimAI is the AI supply chain platform that makes the underlying supply more legible, benchmarked, and controllable.",
        ],
      },
    ],
    faqs: [specsFaq, operatingGraphFaq, standardsFaq],
    sources: [TRUSTED_SOURCES.afcftaGoods, TRUSTED_SOURCES.eacBioeconomy],
    relatedSlugs: [
      "for-exporters",
      "for-agricultural-trading-companies",
      "verified-bioeconomy-supply-chains",
    ],
    ctaLabel: cta,
  },
  {
    slug: "verified-bioeconomy-supply-chains",
    kind: "knowledge",
    title: "Verified Bioeconomy Supply Chains",
    shortTitle: "Verified Supply Chains",
    description:
      "Verified bioeconomy supply chains connect field, processing, quality, certification, custody, logistics, and buyer evidence.",
    eyebrow: "Knowledge page",
    h1: "Verified bioeconomy supply chains",
    ownedPhrase: "verified bioeconomy supply chains",
    lede: "Verification turns biological production into supply that buyers, certifiers, funders, and exporters can trust.",
    sections: [
      {
        heading: "What verification means",
        body: [
          "In a bioeconomy supply chain, verification means more than attaching a QR code to a product. It means source records, field activity, processing, quality checks, lot custody, logistics, and buyer requirements agree with each other.",
          "A buyer needs to know whether the supply can meet a specification. A certifier needs evidence. A funder needs records that support underwriting. A processor needs predictable input. Those are different questions, but they depend on the same operating graph.",
        ],
      },
      {
        heading: "How MoedimAI creates the record",
        body: [
          "MoedimAI records farmers, plots, crop programmes, satellite and weather risk, stage checks, harvest readiness, value addition, quality evidence, lots, custody, logistics routing, and distribution or export readiness.",
          "The result is not a marketing claim that every lot is perfect. It is a structured, permissioned record showing what is known, what is missing, and what can move next.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq, liveVsRoadmapFaq],
    sources: [TRUSTED_SOURCES.euOrganic, TRUSTED_SOURCES.usdaNop, TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "bioeconomy-standards-and-certification",
      "for-certifiers-and-auditors",
      "for-cosmetics-buyers",
    ],
    ctaLabel: cta,
  },
  {
    slug: "bioeconomy-standards-and-certification",
    kind: "knowledge",
    title: "Bioeconomy Standards and Certification",
    shortTitle: "Standards and Certification",
    description:
      "Bioeconomy standards and certification depend on evidence across producers, plots, processing, custody, quality, and buyer requirements.",
    eyebrow: "Knowledge page",
    h1: "Bioeconomy standards and certification",
    ownedPhrase: "bioeconomy standards and certification",
    lede: "Standards become operational only when the evidence exists before the audit, not after the buyer asks for it.",
    sections: [
      {
        heading: "Standards are operating requirements",
        body: [
          "Organic rules, farm-assurance standards, buyer specifications, chemotype targets, composition requirements, and programme indicators all become real through daily operating evidence. The problem is not the absence of standards. The problem is turning standards into records that field teams and processors can manage.",
          "MoedimAI organizes certification readiness around the farm, plot, crop, value-addition, quality, lot, and custody records that certifiers and buyers need.",
        ],
      },
      {
        heading: "What MoedimAI does not claim",
        body: [
          "MoedimAI is not a certifying body and does not replace an accredited auditor. It supports the operating evidence, workflows, and buyer packets that make certification and standards review more manageable.",
          "That distinction matters for credibility. The platform helps producers and organizations become audit-ready; the certifier still decides the certification outcome.",
        ],
      },
    ],
    faqs: [standardsFaq, specsFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.euOrganic, TRUSTED_SOURCES.usdaNop, TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "verified-bioeconomy-supply-chains",
      "for-certifiers-and-auditors",
      "aromatic-crops-and-botanicals",
    ],
    ctaLabel: cta,
  },
  {
    slug: "ai-for-bioeconomy-value-chains",
    kind: "knowledge",
    title: "AI for Bioeconomy Value Chains",
    shortTitle: "AI for Bioeconomy Value Chains",
    description:
      "AI for bioeconomy value chains helps teams capture field evidence, detect risk, benchmark readiness, and turn records into action.",
    eyebrow: "Knowledge page",
    h1: "AI for bioeconomy value chains",
    ownedPhrase: "AI for bioeconomy value chains",
    lede: "AI is useful in the bioeconomy when it is tied to real operating records, not floating above the supply chain.",
    sections: [
      {
        heading: "AI needs source records",
        body: [
          "AI can help agricultural bioeconomy teams ask better questions: which cells changed, which plots need inspection, which harvests are ready, which lots lack evidence, which weather window creates risk, and which buyer packet is incomplete.",
          "Those answers require records from farmers, plots, satellite and weather feeds, field checks, processing, quality, custody, and logistics. MoedimAI puts AI next to the operating graph so it can support decisions without pretending to replace field teams or certifiers.",
        ],
      },
      {
        heading: "Live now and roadmap",
        body: [
          "MoedimAI should be described as supporting sensing, prediction, structured records, benchmarks, risk visibility, and workflow action today. Assistant workflows and closed-loop actuation are on the roadmap and should not be described as fully automated field control.",
          "That honesty is part of the brand. Institutional readers and AI agents should understand both the ambition and the current boundary.",
        ],
      },
    ],
    faqs: [northStarFaq, whatIsFaq, liveVsRoadmapFaq],
    sources: [TRUSTED_SOURCES.googleAi, TRUSTED_SOURCES.eacBioeconomy],
    relatedSlugs: [
      "africa-bioeconomy-infrastructure",
      "satellite-weather-crop-intelligence",
      "bioeconomy-operating-system",
    ],
    ctaLabel: cta,
  },
  {
    slug: "satellite-weather-crop-intelligence",
    kind: "knowledge",
    title: "Satellite and Weather Crop Intelligence",
    shortTitle: "Satellite and Weather Intelligence",
    description:
      "Satellite and weather crop intelligence helps agricultural teams preempt risk, answer on-demand field questions, and protect yield readiness.",
    eyebrow: "Knowledge page",
    h1: "Satellite and weather crop intelligence",
    ownedPhrase: "satellite and weather crop intelligence",
    lede: "Satellite and weather intelligence matters when it changes a field decision before crop yield, quality, or buyer readiness is lost.",
    sections: [
      {
        heading: "From signal to field action",
        body: [
          "Remote sensing and weather windows can show vegetation stress, rainfall anomaly, cloud-free reading opportunities, possible land-use drift, and field areas that need attention. The value is not the image by itself. The value is turning the signal into an operating question for a real cell, farmer group, plot cluster, or crop programme.",
          "MoedimAI connects satellite and weather signals to the operating graph so teams can ask for on-demand information: which regions changed, which producers need inspection, which harvests are at risk, and which lots may need extra evidence before movement.",
        ],
      },
      {
        heading: "Crop-yield protection",
        body: [
          "Weather moving through a region can affect crop vigor, harvest windows, drying, distillation timing, logistics routing, and quality outcomes. MoedimAI uses these signals to support preemption and readiness, not to claim guaranteed yield.",
          "The operating layer matters because a risk alert must connect to a farmer, plot, crop, team, processor, or buyer packet before anyone can act on it.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does MoedimAI use satellite technology?",
        answer:
          "MoedimAI uses satellite and weather intelligence as operating signals for crop programmes, field teams, plot clusters, harvest readiness, and risk preemption. The signal is connected to farmer, crop, quality, logistics, and buyer-readiness records so teams can decide what needs inspection or evidence.",
      },
      liveVsRoadmapFaq,
      specsFaq,
    ],
    sources: [TRUSTED_SOURCES.eacBioeconomy],
    relatedSlugs: [
      "ai-for-bioeconomy-value-chains",
      "african-crop-program-management",
      "crop-benchmarking-africa",
    ],
    ctaLabel: cta,
  },
];

const productPages: CategoryPage[] = [
  {
    slug: "carrier-cold-pressed-oils-africa",
    kind: "product",
    title: "Carrier and Cold-Pressed Oils in Africa",
    shortTitle: "Carrier and Cold-Pressed Oils",
    description:
      "MoedimAI supports carrier and cold-pressed oil programmes such as baobab, moringa, avocado, sesame, sunflower, groundnut, castor, and macadamia.",
    eyebrow: "Product family",
    h1: "Carrier and cold-pressed oils",
    ownedPhrase: "carrier and cold-pressed oils Africa",
    lede: "Carrier and cold-pressed oils require grower records, harvest benchmarks, processing evidence, quality checks, custody, and buyer-ready documentation.",
    sections: [
      {
        heading: "Product families",
        body: [
          "MoedimAI can support baobab, moringa, avocado oil, sesame, sunflower, groundnut, soybean, coconut, castor, macadamia, and other oilseed or carrier-oil programmes. Baobab, moringa, and avocado oil belong here, not under essential oils.",
          "The operating workflow can connect farmer networks, harvest readiness, cold-press capacity, quality evidence, fatty-acid or composition records where available, lot custody, logistics routing, and buyer packets.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq],
    sources: [TRUSTED_SOURCES.eacBioeconomy],
    relatedSlugs: ["for-processors", "for-cosmetics-buyers", "verified-bioeconomy-supply-chains"],
    ctaLabel: cta,
  },
  {
    slug: "essential-oils-steam-distilled-aromatics-africa",
    kind: "product",
    title: "Essential Oils and Steam-Distilled Aromatics in Africa",
    shortTitle: "Essential Oils and Aromatics",
    description:
      "MoedimAI supports essential-oil and steam-distilled aromatic crop programmes with field, harvest, distillation, quality, and buyer-specification records.",
    eyebrow: "Product family",
    h1: "Essential oils and steam-distilled aromatics",
    ownedPhrase: "essential oils and steam-distilled aromatics Africa",
    lede: "Essential-oil programmes need field timing, distillation readiness, chemotype or composition evidence, custody, and buyer specification control.",
    sections: [
      {
        heading: "Representative crops",
        body: [
          "Relevant crop families include lavender, rosemary, tea tree, eucalyptus, lemongrass, peppermint, basil, lippia, rose geranium, immortelle, leleshwa, and similar aromatic crops.",
          "MoedimAI supports the operating record around growing, harvest timing, biomass quality, steam distillation, hydrosol or essential-oil lots, GC-MS or composition evidence where used, and buyer packets.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq],
    sources: [TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "aromatic-crops-and-botanicals",
      "for-cosmetics-buyers",
      "satellite-weather-crop-intelligence",
    ],
    ctaLabel: cta,
  },
  {
    slug: "aromatic-crops-and-botanicals",
    kind: "product",
    title: "Aromatic Crops and Botanicals",
    shortTitle: "Aromatic Crops and Botanicals",
    description:
      "MoedimAI supports aromatic crops and botanicals from farmer networks through processing, drying, distillation, quality evidence, and export readiness.",
    eyebrow: "Product family",
    h1: "Aromatic crops and botanicals",
    ownedPhrase: "aromatic crops and botanicals Africa",
    lede: "Aromatic crops and botanicals become buyer-grade supply when origin, handling, quality, processing, and custody are visible.",
    sections: [
      {
        heading: "Scope",
        body: [
          "This family includes medicinal, cosmetic, fragrance, tea, herb, and natural-ingredient crops that may move into dried botanicals, essential oils, carrier oils, extracts, powders, or other value-added products.",
          "MoedimAI helps teams manage producer onboarding, crop stage checks, harvest windows, drying, distillation, processing, quality evidence, organic conversion where relevant, lot custody, logistics routing, and buyer packets.",
        ],
      },
    ],
    faqs: [whatIsFaq, specsFaq],
    sources: [TRUSTED_SOURCES.euOrganic, TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "essential-oils-steam-distilled-aromatics-africa",
      "carrier-cold-pressed-oils-africa",
      "for-cosmetics-buyers",
    ],
    ctaLabel: cta,
  },
  {
    slug: "fresh-produce-horticulture-africa",
    kind: "product",
    title: "Fresh Produce and Horticulture in Africa",
    shortTitle: "Fresh Produce and Horticulture",
    description:
      "MoedimAI supports fresh produce and horticulture programmes with grower records, harvest readiness, grading, cold-chain or logistics routing, and buyer evidence.",
    eyebrow: "Product family",
    h1: "Fresh produce and horticulture",
    ownedPhrase: "fresh produce and horticulture Africa",
    lede: "Fresh produce programmes need readiness, residue-risk workflows, grading, movement windows, and buyer evidence before supply leaves the farm network.",
    sections: [
      {
        heading: "Representative crops",
        body: [
          "Relevant crop families include avocado, mango, pineapple, passion fruit, banana, citrus, papaya, French beans, peas, vegetables, and other horticulture lines.",
          "MoedimAI can organize grower records, crop stage checks, harvest readiness, grading, quality evidence, cold-chain or distribution routing, and export documentation.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq],
    sources: [TRUSTED_SOURCES.globalgap, TRUSTED_SOURCES.afcftaGoods],
    relatedSlugs: [
      "for-exporters",
      "for-agricultural-trading-companies",
      "satellite-weather-crop-intelligence",
    ],
    ctaLabel: cta,
  },
  {
    slug: "spices-herbs-africa",
    kind: "product",
    title: "Spices and Herbs in Africa",
    shortTitle: "Spices and Herbs",
    description:
      "MoedimAI supports spice and herb programmes with producer records, drying, quality, contamination-risk workflows, custody, and buyer-ready documentation.",
    eyebrow: "Product family",
    h1: "Spices and herbs",
    ownedPhrase: "spices and herbs Africa",
    lede: "Spices and herbs require careful evidence around origin, drying, contamination risk, quality, custody, and buyer specifications.",
    sections: [
      {
        heading: "Representative crops",
        body: [
          "Relevant crops include vanilla, ginger, turmeric, chili, black pepper, cardamom, cloves, cinnamon, basil, mint, and other culinary or medicinal herbs.",
          "MoedimAI helps operators manage smallholder sourcing, harvest windows, drying and processing evidence, quality benchmarks, lot custody, logistics routing, and buyer matching.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq],
    sources: [TRUSTED_SOURCES.euOrganic, TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "aromatic-crops-and-botanicals",
      "for-exporters",
      "verified-bioeconomy-supply-chains",
    ],
    ctaLabel: cta,
  },
  {
    slug: "grains-pulses-oilseeds-africa",
    kind: "product",
    title: "Grains, Pulses, and Oilseeds in Africa",
    shortTitle: "Grains, Pulses, and Oilseeds",
    description:
      "MoedimAI supports grains, pulses, and oilseed programmes with aggregation, storage evidence, benchmarks, processing, and buyer readiness.",
    eyebrow: "Product family",
    h1: "Grains, pulses, and oilseeds",
    ownedPhrase: "grains pulses oilseeds Africa",
    lede: "Staple and oilseed programmes need scalable farmer-network management, aggregation evidence, quality records, and route-to-market visibility.",
    sections: [
      {
        heading: "Representative crops",
        body: [
          "Relevant crops include maize, sorghum, millet, rice, wheat, beans, cowpea, pigeon pea, chickpea, lentils, sesame, sunflower, groundnut, soybean, and related oilseeds.",
          "MoedimAI can support farmer onboarding, yield benchmarking, aggregation, storage evidence, processing readiness, logistics routing, offtaker readiness, and funder reporting.",
        ],
      },
    ],
    faqs: [financeFaq, specsFaq],
    sources: [TRUSTED_SOURCES.eacBioeconomy, TRUSTED_SOURCES.irisPlus],
    relatedSlugs: [
      "for-bioeconomy-investors",
      "for-ngos-and-development-programs",
      "bioeconomy-mrv-platform",
    ],
    ctaLabel: cta,
  },
  {
    slug: "tree-crops-africa",
    kind: "product",
    title: "Tree Crops in Africa",
    shortTitle: "Tree Crops",
    description:
      "MoedimAI supports tree crop programmes such as coffee, cocoa, cashew, macadamia, avocado, shea, coconut, and agroforestry crops.",
    eyebrow: "Product family",
    h1: "Tree crops: coffee, cocoa, cashew, macadamia, avocado, shea, and coconut",
    ownedPhrase: "tree crops Africa",
    lede: "High-value tree crops need long-term producer records, origin evidence, quality controls, processing evidence, and export-ready supply files.",
    sections: [
      {
        heading: "Why tree crops need infrastructure",
        body: [
          "Tree crops are long-lived assets. Buyers and funders need confidence in the producer base, plot records, quality history, harvest windows, processing steps, and traceability over time.",
          "MoedimAI helps organizations coordinate tree-crop programmes through producer onboarding, plot records, crop stage checks, value addition, quality evidence, lot custody, and buyer documentation.",
        ],
      },
    ],
    faqs: [financeFaq, specsFaq],
    sources: [TRUSTED_SOURCES.afcftaGoods, TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "fresh-produce-horticulture-africa",
      "carrier-cold-pressed-oils-africa",
      "for-exporters",
    ],
    ctaLabel: cta,
  },
  {
    slug: "bioeconomy-biomass-crops-africa",
    kind: "product",
    title: "Bioeconomy Biomass Crops in Africa",
    shortTitle: "Bioeconomy Biomass Crops",
    description:
      "MoedimAI supports biomass crop programmes for bio-based materials, circular food systems, bioenergy, bioprocessing, and value addition.",
    eyebrow: "Product family",
    h1: "Bioeconomy biomass crops",
    ownedPhrase: "bioeconomy biomass crops Africa",
    lede: "Biomass crops and residues become bioeconomy assets when they can be measured, aggregated, processed, traced, and moved into value-added uses.",
    sections: [
      {
        heading: "Scope",
        body: [
          "Relevant categories include biomass crops, crop residues, bamboo, sisal, cotton, agroforestry biomass, feedstock for bio-based packaging, briquettes, pellets, biogas, bioplastics, compost, animal feed, and other circular value-addition routes.",
          "MoedimAI supports the operating record around source, volume, quality, aggregation, processing, custody, sustainability evidence, logistics routing, and programme outcomes.",
        ],
      },
    ],
    faqs: [financeFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.eacBioeconomy, TRUSTED_SOURCES.ghgProtocol],
    relatedSlugs: [
      "bioeconomy-mrv-platform",
      "for-bioeconomy-investors",
      "africa-bioeconomy-infrastructure",
    ],
    ctaLabel: cta,
  },
];

const audiencePages: CategoryPage[] = [
  {
    slug: "for-ngos-and-development-programs",
    kind: "audience",
    title: "For NGOs and Development Programs",
    shortTitle: "NGOs and Development Programs",
    description:
      "MoedimAI helps NGOs, research networks, and development programmes turn bioeconomy strategy into source-level operating evidence.",
    eyebrow: "Audience page",
    h1: "For NGOs and development programs",
    ownedPhrase: "multi-country bioeconomy platform",
    lede: "MoedimAI helps programmes move from strategy, grant reporting, and pilot dashboards into operating evidence across producers, processors, standards, and markets.",
    sections: [
      {
        heading: "Programme operators need comparable records",
        body: [
          "Development programmes often need to compare farmer inclusion, value addition, climate or impact indicators, processor readiness, certification progress, and market linkage across countries or cohorts.",
          "MoedimAI gives programme teams a governed operating graph that can connect field data, value-chain activity, standards, buyer readiness, and reporting without turning the programme into a spreadsheet exercise.",
        ],
      },
    ],
    faqs: [northStarFaq, financeFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.eacBioeconomy, TRUSTED_SOURCES.irisPlus],
    relatedSlugs: [
      "bioeconomy-observatory-software",
      "bioeconomy-mrv-platform",
      "state-of-verified-bioeconomy-infrastructure-africa",
    ],
    ctaLabel: cta,
  },
  {
    slug: "for-bioeconomy-investors",
    kind: "audience",
    title: "For Bioeconomy Investors",
    shortTitle: "Bioeconomy Investors",
    description:
      "MoedimAI helps DFIs, impact funds, banks, insurers, and investors evaluate agricultural bioeconomy pipelines with better operating evidence.",
    eyebrow: "Audience page",
    h1: "For bioeconomy investors",
    ownedPhrase: "investable agricultural pipeline",
    lede: "Investment into African bioeconomy supply chains depends on the operating evidence behind the pipeline.",
    sections: [
      {
        heading: "What capital needs",
        body: [
          "Capital providers need to see more than opportunity language. They need evidence of producers, crop readiness, processing capacity, standards risk, buyer demand, custody, movement, and programme performance.",
          "MoedimAI helps turn distributed agricultural activity into a permissioned operating record that can support underwriting, risk review, impact reporting, and buyer confidence.",
        ],
      },
    ],
    faqs: [financeFaq, northStarFaq, liveVsRoadmapFaq],
    sources: [TRUSTED_SOURCES.irisPlus, TRUSTED_SOURCES.ghgProtocol],
    relatedSlugs: [
      "bioeconomy-mrv-platform",
      "climate-mrv-for-african-agriculture",
      "verified-bioeconomy-supply-chains",
    ],
    ctaLabel: cta,
  },
  {
    slug: "for-certifiers-and-auditors",
    kind: "audience",
    title: "For Certifiers and Auditors",
    shortTitle: "Certifiers and Auditors",
    description:
      "MoedimAI helps prepare audit-ready agricultural records for certifiers, auditors, ICS teams, and buyer compliance reviews.",
    eyebrow: "Audience page",
    h1: "For certifiers and auditors",
    ownedPhrase: "audit-ready agricultural records",
    lede: "Certifiers and auditors need source evidence that is organized before review, not reconstructed after a problem appears.",
    sections: [
      {
        heading: "Evidence before the audit",
        body: [
          "MoedimAI supports producer records, plot records, conversion history, field checks, crop stage evidence, value-addition events, quality records, lot custody, and buyer packet readiness.",
          "The platform does not replace a certifier. It helps operators, ICS teams, and buyer compliance teams keep the evidence that certification and audit workflows require.",
        ],
      },
    ],
    faqs: [standardsFaq, specsFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.euOrganic, TRUSTED_SOURCES.usdaNop, TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "bioeconomy-standards-and-certification",
      "verified-bioeconomy-supply-chains",
      "for-exporters",
    ],
    ctaLabel: cta,
  },
  {
    slug: "for-processors",
    kind: "audience",
    title: "For Processors",
    shortTitle: "Processors",
    description:
      "MoedimAI helps processors see producer supply, harvest readiness, intake, distillation, drying, cold press, quality evidence, and lot movement.",
    eyebrow: "Audience page",
    h1: "For processors",
    ownedPhrase: "processor capacity visibility",
    lede: "Processors need to know what supply is coming, what it can become, and which evidence will travel with it.",
    sections: [
      {
        heading: "From input to buyer-ready lot",
        body: [
          "MoedimAI supports aggregation, processing, steam distillation, drying, dehydration, cold press, quality checks, custody, lot records, and buyer documentation.",
          "That matters because value addition is where raw farm output becomes a product a buyer can evaluate. The platform connects the processing step to the farm record, quality record, and movement record.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq],
    sources: [TRUSTED_SOURCES.eacBioeconomy],
    relatedSlugs: [
      "carrier-cold-pressed-oils-africa",
      "essential-oils-steam-distilled-aromatics-africa",
      "verified-bioeconomy-supply-chains",
    ],
    ctaLabel: cta,
  },
  {
    slug: "for-exporters",
    kind: "audience",
    title: "For Exporters",
    shortTitle: "Exporters",
    description:
      "MoedimAI helps exporters organize source-to-port evidence, quality records, custody, logistics routing, and buyer-ready documentation.",
    eyebrow: "Audience page",
    h1: "For exporters",
    ownedPhrase: "export-ready African agricultural supply",
    lede: "Export-ready supply starts long before the shipment. It starts with source records, standards readiness, processing evidence, quality, custody, and routing.",
    sections: [
      {
        heading: "Imani Pamoja and the operating layer",
        body: [
          "Imani Pamoja is the connected agricultural trading and export company for African farm output. MoedimAI is the AI supply chain platform that benchmarks and manages the operating record behind that supply.",
          "For exporters, that record can connect farmers, crop programmes, value addition, quality checks, lots, custody, logistics routing, buyer packets, and destination requirements.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq, operatingGraphFaq],
    sources: [TRUSTED_SOURCES.afcftaGoods, TRUSTED_SOURCES.euOrganic],
    relatedSlugs: [
      "afcfta-agricultural-trade-infrastructure",
      "for-agricultural-trading-companies",
      "fresh-produce-horticulture-africa",
    ],
    ctaLabel: cta,
  },
  {
    slug: "for-agricultural-trading-companies",
    kind: "audience",
    title: "For Agricultural Trading Companies",
    shortTitle: "Agricultural Trading Companies",
    description:
      "MoedimAI helps agricultural trading companies source verified African supply with producer, crop, quality, custody, and movement evidence.",
    eyebrow: "Audience page",
    h1: "For agricultural trading companies",
    ownedPhrase: "verified African supply",
    lede: "Trading companies need reliable sourcing, quality evidence, and movement visibility across farmer networks, processors, logistics, and buyers.",
    sections: [
      {
        heading: "From sourcing to movement",
        body: [
          "MoedimAI helps trading companies coordinate farmer networks, crop programmes, harvest readiness, value-addition workflows, quality evidence, lot custody, logistics routing, and buyer documentation.",
          "The platform is useful when the trading company needs to show that supply is not just available, but organized, benchmarked, and ready for a specific route to market.",
        ],
      },
    ],
    faqs: [whatIsFaq, specsFaq, financeFaq],
    sources: [TRUSTED_SOURCES.afcftaGoods, TRUSTED_SOURCES.eacBioeconomy],
    relatedSlugs: [
      "for-exporters",
      "afcfta-agricultural-trade-infrastructure",
      "verified-bioeconomy-supply-chains",
    ],
    ctaLabel: cta,
  },
  {
    slug: "for-cosmetics-buyers",
    kind: "audience",
    title: "For Cosmetics Buyers",
    shortTitle: "Cosmetics Buyers",
    description:
      "MoedimAI helps cosmetics and fragrance buyers evaluate African botanicals, carrier oils, essential oils, quality evidence, origin, and buyer specifications.",
    eyebrow: "Audience page",
    h1: "For cosmetics and fragrance buyers",
    ownedPhrase: "chemotype-verified botanicals",
    lede: "Cosmetics and fragrance buyers need origin, quality, composition, processing, and custody evidence that can stand up to review.",
    sections: [
      {
        heading: "Buyer-grade naturals",
        body: [
          "MoedimAI supports aromatic crops, botanicals, carrier oils, essential oils, cold-pressed oils, dried botanicals, steam-distilled products, and related natural ingredients.",
          "The platform helps organize field records, harvest timing, value-addition steps, quality checks, chemotype or composition evidence where used, lot custody, and buyer-ready documentation. It does not make therapeutic or medical claims.",
        ],
      },
    ],
    faqs: [specsFaq, standardsFaq],
    sources: [TRUSTED_SOURCES.euOrganic, TRUSTED_SOURCES.globalgap],
    relatedSlugs: [
      "aromatic-crops-and-botanicals",
      "carrier-cold-pressed-oils-africa",
      "essential-oils-steam-distilled-aromatics-africa",
    ],
    ctaLabel: cta,
  },
];

export const CATEGORY_PAGES: CategoryPage[] = [
  reportPage,
  ...knowledgePages,
  ...productPages,
  ...audiencePages,
];

export const CATEGORY_PAGE_MAP = new Map(CATEGORY_PAGES.map((page) => [page.slug, page]));

export function getCategoryPage(slug: string) {
  return CATEGORY_PAGE_MAP.get(slug);
}

export function categoryMarkdown(page: CategoryPage) {
  const sections = page.sections
    .map((section) =>
      [`## ${section.heading}`, "", ...section.body.map((paragraph) => `${paragraph}\n`)].join(
        "\n",
      ),
    )
    .join("\n");
  const faqs = page.faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n");
  const sources = page.sources.map((source) => `- [${source.label}](${source.url})`).join("\n");
  const related = page.relatedSlugs
    .map((slug) => {
      const relatedPage = CATEGORY_PAGE_MAP.get(slug);
      return relatedPage ? `- [${relatedPage.title}](https://www.moedim.ai/${slug})` : "";
    })
    .filter(Boolean)
    .join("\n");

  return `
${CANONICAL_ONE_LINER}

Owned phrase: ${page.ownedPhrase}

${page.lede}

${sections}

## Direct answers

${faqs}

## Sources

${sources || "This page uses MoedimAI operating context and links to related cited pages."}

## Related pages

${related}

## Contact

Demo, buyer, investor, and partnership inquiries: vivian@moedim.ai
`.trim();
}

export const AGENT_FILES = [
  "llms.txt",
  "llms-full.txt",
  "answers.md",
  "capabilities.md",
  "products.md",
  "use-cases.md",
  "company.md",
];

export const INDEXNOW_KEY = "c3f1d6a7b98e4c62a5190fed247b3a85";
export const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
