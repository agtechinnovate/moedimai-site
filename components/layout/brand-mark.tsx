import { cn } from "@/lib/utils";

type BrandSurface = "moedim" | "moedimai" | "verified" | "jaribu";

interface BrandMarkProps {
  /**
   * Brand layer (V3 §1):
   *   moedim    – consumer/product surface (default for `/`, `/shop`, retail)
   *   moedimai  – B2B / verification / platform (`/buyers`, `/portal/*`)
   *   verified  – Moedim Verified trust mark (lot pages, evidence packets)
   *   jaribu    – Jaribu by Moedim farmer recruitment surface (`/farmers`)
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

export function BrandMark({ surface = "moedim", className, size = "md" }: BrandMarkProps) {
  const base = cn("font-display tracking-tight leading-none", sizeClass[size], className);

  if (surface === "moedimai") {
    // Per brand handoff: MoedimAI is ONE WORD. "Moedim" cream, "AI" gold, no space.
    return (
      <span className={base} aria-label="MoedimAI">
        <span className="text-cream-50">Moedim</span>
        <span className="text-gold-500">AI</span>
      </span>
    );
  }

  if (surface === "verified") {
    return (
      <span className={cn(base, "inline-flex items-baseline gap-2")} aria-label="Moedim Verified">
        <span className="text-cream-50">Moedim</span>
        <span className="text-gold-500">Verified</span>
      </span>
    );
  }

  if (surface === "jaribu") {
    return (
      <span className={base} aria-label="Jaribu by Moedim">
        <span className="text-terracotta-500">Jaribu</span>{" "}
        <span className="text-[0.7em] text-cream-50/80">by Moedim</span>
      </span>
    );
  }

  return (
    <span className={cn(base, "text-cream-50")} aria-label="Moedim">
      Moedim
    </span>
  );
}
