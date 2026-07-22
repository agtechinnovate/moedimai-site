/* eslint-disable @next/next/no-img-element */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-50/10 bg-navy-900">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(240px,340px)]">
          <div>
            <img src="/images/moedimai-logo-dark.png" alt="MoedimAI" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cream-50/70">
              MoedimAI is the technology layer, AI supply-chain platform, and verification engine
              for Africa&apos;s bioeconomy.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50/60">
              Contact
            </h2>
            <p className="mt-4 text-sm">
              <a
                href="mailto:vivian@moedim.ai"
                data-analytics-event="email_click"
                data-analytics-label="footer email"
                className="text-gold-500 underline-offset-4 hover:underline"
              >
                vivian@moedim.ai
              </a>
            </p>
            <p className="mt-4 text-sm text-cream-50/80">Kenya · Netherlands · United States</p>
            <p className="mt-2 text-xs text-cream-50/55">
              Source, value addition, verification, logistics, and buyer-ready output.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50 md:flex-row md:items-center">
          <p>© {year} MoedimAI. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="/privacy" className="underline-offset-4 hover:text-cream-50 hover:underline">
              Privacy
            </a>
            <a href="/security" className="underline-offset-4 hover:text-cream-50 hover:underline">
              Security
            </a>
            <span>From African farms to distribution and export.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
