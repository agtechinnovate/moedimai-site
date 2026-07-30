import { markdownResponse } from "@/lib/md-mirror";

export function GET() {
  return markdownResponse({
    title: "About MoedimAI",
    oneLine:
      "MoedimAI is the enterprise intelligence and execution platform for agricultural value chains, founded by Vivian Nwakah.",
    body: `MoedimAI helps companies, institutions, and programmes monitor and benchmark agricultural operations from field activity to the required commercial, quality, certification, or programme outcome.

The platform connects Moedim Field, satellite and weather intelligence, IoT signals, testing, processing, quality, logistics, and evidence in one governed agricultural operating layer.

## Founder Bio

MoedimAI was founded by Vivian Nwakah, a founder and systems builder focused on AI, chemotype traceability, compliance infrastructure, and regulated markets.

Vivian builds infrastructure that turns fragmented, informal markets into regulated, benchmarkable supply systems. Before MoedimAI, she founded Medsaf, one of Nigeria's first tech-enabled pharmaceutical procurement platforms, scaling verified medicine access and standardized procurement workflows across 950+ hospitals and clinics. She later led AI-enabled systems work at Pfizer, translating executive priorities into governance, workflow change, and controlled operating-model adoption.

At MoedimAI, Vivian applies that operating-infrastructure experience to agricultural value chains by connecting the required outcome with field activity, remote intelligence, processing, laboratory, certification, logistics, and delivery evidence.

Vivian has spoken or appeared as a panelist at Harvard University, Stanford University, Princeton University, and the Milken Institute. She has engaged with the African Union, Africa CDC, and AMREF, has been featured in Forbes, Financial Times, and BBC, and is a recipient of VivaTech Best Female Founder and Seedstars Winner recognition.

Founder image: https://www.moedim.ai/images/vivian-nwakah-headshot.jpg

LinkedIn: https://www.linkedin.com/in/viviannwakah/

## What MoedimAI Supports

- Organizations, producer networks, field teams, and agricultural programmes.
- Moedim Field, satellite, weather, testing, drone, and IoT intelligence.
- Customer, market, certification, and programme requirements translated into benchmarks.
- Processing, quality, documentation, and custody evidence.
- Logistics, delivery readiness, and verified outcome records.

## Positioning

MoedimAI is best described as the enterprise intelligence and execution platform for agricultural value chains.

Moedim Harvest is MoedimAI's separate sister company for agricultural supply programmes and global distribution. MoedimAI provides the technology, monitoring, benchmarking, and guided support behind those programmes.

Contact: vivian@moedim.ai`,
  });
}
