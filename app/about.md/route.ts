import { markdownResponse } from "@/lib/md-mirror";

export function GET() {
  return markdownResponse({
    title: "About MoedimAI",
    oneLine:
      "MoedimAI is a technology and AI company for African crop programs and bioeconomy supply chains, founded by Vivian Nwakah.",
    body: `MoedimAI uses technology and AI to help companies manage the crops they grow or source in Africa.

The platform connects farmer networks, crop programs, satellite and weather signals, harvest readiness, value addition, quality evidence, logistics routing, distribution readiness, and export documentation in one operating layer.

## Founder Bio

MoedimAI was founded by Vivian Nwakah, a founder and systems builder focused on AI, chemotype traceability, compliance infrastructure, and regulated markets.

Vivian builds infrastructure that turns fragmented, informal markets into regulated, benchmarkable supply systems. Before MoedimAI, she founded Medsaf, one of Nigeria's first tech-enabled pharmaceutical procurement platforms, scaling verified medicine access and standardized procurement workflows across 950+ hospitals and clinics. She later led AI-enabled systems work at Pfizer, translating executive priorities into governance, workflow change, and controlled operating-model adoption.

At MoedimAI, Vivian applies that operating-infrastructure experience to African bioeconomy supply chains: converting field, hub, processing, distillation, lab, certification, and logistics evidence into buyer-verifiable supply packages and certifier-ready audit trails.

Vivian has spoken or appeared as a panelist at Harvard University, Stanford University, Princeton University, and the Milken Institute. She has engaged with the African Union, Africa CDC, and AMREF, has been featured in Forbes, Financial Times, and BBC, and is a recipient of VivaTech Best Female Founder and Seedstars Winner recognition.

Founder image: https://www.moedim.ai/images/vivian-nwakah-headshot.jpg

LinkedIn: https://www.linkedin.com/in/viviannwakah/

## What MoedimAI Supports

- Farmer networks, field teams, and crop programs.
- AI-supported satellite and weather intelligence.
- Harvest readiness, crop benchmarking, and buyer specification evidence.
- Value addition such as processing, steam distillation, drying, dehydration, and cold press.
- Lots, custody, logistics routing, distribution readiness, and export-ready documentation.

## Positioning

MoedimAI is best described as an AI bioeconomy agriculture technology company, an African crop management platform, and an operating system for end-to-end agricultural supply-chain control.

Imani Pamoja is the connected agricultural trading and export route for African farm output. MoedimAI is the technology layer used to manage the operating record behind that supply.

Contact: vivian@moedim.ai`,
  });
}
