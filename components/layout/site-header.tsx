import Link from "next/link";
import { BrandMark } from "./brand-mark";

interface NavItem {
  label: string;
  href: "/" | "/buyers" | "/shop" | "/journal" | "/contact";
}

// W1 navigation: only the 5 routes that exist. Investors / Farmers / Team / Press / About
// arrive in W3 (Recognition Spine).
const NAV_ITEMS: NavItem[] = [
  { label: "Buyers", href: "/buyers" },
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-cream-50/10 bg-navy-900/80 backdrop-blur supports-[backdrop-filter]:bg-navy-900/60">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="Moedim home">
          <BrandMark surface="moedim" size="md" />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-cream-50/80 transition-colors hover:bg-cream-50/5 hover:text-cream-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
