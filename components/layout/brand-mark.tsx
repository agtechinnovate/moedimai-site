import { cn } from "@/lib/utils";

type BrandSurface = "moedimai" | "verified" | "jaribu";

interface BrandMarkProps {
  /**
   * Brand surface:
   *   moedimai   the company wordmark. "Moedim" cream, "AI" gold.
   *   verified   the Moedim Verified trust mark on lots, COAs, evidence packets.
   *   jaribu     the Jaribu by MoedimAI farmer recruitment surface.
   */
  surface?: BrandSurface;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClass: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl md:text-5xl",
};

export function BrandMark({ surface = "moedimai", className, size = "md" }: BrandMarkProps) {
  const base = cn("font-display tracking-tight leading-none", sizeClass[size], className);

  if (surface === "verified") {
    return (
      <span className={cn(base, "inline-flex items-baseline gap-2")} aria-label="MoedimAI Verified">
        <span className="text-cream-50">MoedimAI</span>
        <span className="text-gold-500">Verified</span>
      </span>
    );
  }

  if (surface === "jaribu") {
    return (
      <span className={base} aria-label="Jaribu by MoedimAI">
        <span className="text-terracotta-500">Jaribu</span>{" "}
        <span className="text-[0.7em] text-cream-50/80">by MoedimAI</span>
      </span>
    );
  }

  // Default: MoedimAI wordmark. One word. "Moedim" cream, "AI" gold.
  return (
    <span className={base} aria-label="MoedimAI">
      <span className="text-cream-50">Moedim</span>
      <span className="text-gold-500">AI</span>
    </span>
  );
}
