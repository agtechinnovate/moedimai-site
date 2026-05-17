import Link from "next/link";
import { BrandMark } from "./brand-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-50/10 bg-navy-900">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <BrandMark surface="moedim" size="md" />
            <p className="mt-3 max-w-xs text-sm text-cream-50/70">
              Moedim turns African smallholder botanicals into verified, traceable, buyer-ready
              ingredients.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50/60">
              Site
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/buyers" className="text-cream-50/80 hover:text-cream-50">
                  Buyers
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-cream-50/80 hover:text-cream-50">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/thesis" className="text-cream-50/80 hover:text-cream-50">
                  Company thesis
                </Link>
              </li>
              <li>
                <Link href="/jaribu" className="text-cream-50/80 hover:text-cream-50">
                  Jaribu by Moedim
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-cream-50/80 hover:text-cream-50">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream-50/80 hover:text-cream-50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50/60">
              Operating across
            </h2>
            <p className="mt-4 text-sm text-cream-50/80">Kenya · Netherlands · United States</p>
            <p className="mt-2 text-xs text-cream-50/55">
              Mount Kenya production base. Rotterdam EU operations. Delaware US holding.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50 md:flex-row md:items-center">
          <p>© {year} Moedai LLC. All rights reserved.</p>
          <p>From African soil to the world.</p>
        </div>
      </div>
    </footer>
  );
}
