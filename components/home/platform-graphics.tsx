import Image from "next/image";

const PLATFORM_GRAPHICS = {
  valueChain: {
    src: "/images/moedimai-value-chain-engine.png",
    width: 1200,
    height: 606,
    alt: "MoedimAI decision and verification engine connecting field, remote, process, IoT and logistics intelligence across seven agricultural value-chain stages",
  },
  commandCenter: {
    src: "/images/moedimai-command-center.png",
    width: 1200,
    height: 588,
    alt: "MoedimAI command center preview showing an agricultural operating graph and decision intelligence for lot readiness and evidence gaps",
  },
} as const;

type PlatformGraphicProps = {
  kind: keyof typeof PLATFORM_GRAPHICS;
};

export function PlatformGraphic({ kind }: PlatformGraphicProps) {
  const graphic = PLATFORM_GRAPHICS[kind];

  return (
    <figure className="mt-10">
      <div
        className="overflow-x-auto rounded-xl border border-cream-50/10 bg-black/25 shadow-2xl"
        role="region"
        aria-label={`${graphic.alt}. Scroll horizontally on smaller screens to view the full graphic.`}
        tabIndex={0}
      >
        <Image
          src={graphic.src}
          alt={graphic.alt}
          width={graphic.width}
          height={graphic.height}
          sizes="(min-width: 1280px) 1200px, 94vw"
          loading={kind === "commandCenter" ? "eager" : "lazy"}
          className="h-auto w-full min-w-[900px]"
        />
      </div>
      <figcaption className="mt-3 text-xs text-cream-50/50 sm:hidden">
        Swipe to view the full platform graphic.
      </figcaption>
    </figure>
  );
}

export function FieldAppPreview() {
  return (
    <figure className="mx-auto w-full max-w-[320px]">
      <Image
        src="/images/moedim-field-moringa-avocado.png"
        alt="Moedim Field app preview showing offline field visits for moringa and avocado plots"
        width={300}
        height={590}
        sizes="(min-width: 768px) 300px, 78vw"
        className="h-auto w-full drop-shadow-[0_28px_48px_rgba(0,0,0,0.55)]"
      />
    </figure>
  );
}
