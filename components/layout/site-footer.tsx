/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-50/10 bg-navy-900">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src="/images/moedimai-logo-dark.png" alt="MoedimAI" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cream-50/70">
              MoedimAI helps companies manage African crop programs from farmer networks and
              growing to harvest readiness, benchmarking, and distribution.
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
                <Link href="/thesis" className="text-cream-50/80 hover:text-cream-50">
                  Company thesis
                </Link>
              </li>
              <li>
                <Link href="/jaribu" className="text-cream-50/80 hover:text-cream-50">
                  Jaribu by MoedimAI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50/60">
              Contact
            </h2>
            <p className="mt-4 text-sm">
              <a
                href="mailto:vivian@moedim.ai"
                className="text-gold-500 underline-offset-4 hover:underline"
              >
                vivian@moedim.ai
              </a>
            </p>
            <p className="mt-4 text-sm text-cream-50/80">Kenya · Netherlands · United States</p>
            <p className="mt-2 text-xs text-cream-50/55">
              Mount Kenya production base. Rotterdam EU operations. Delaware US holding.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50 md:flex-row md:items-center">
          <p>© {year} MoedimAI. All rights reserved.</p>
          <p>From African farms to distribution and export.</p>
        </div>
      </div>
    </footer>
  );
}
