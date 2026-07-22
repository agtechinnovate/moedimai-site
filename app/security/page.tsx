import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Report a security concern to Moedim and understand responsible-reporting boundaries.",
};

export default function SecurityPage() {
  return (
    <section className="container py-16 md:py-20">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
        Security reporting
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Tell us quickly if something looks unsafe.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream-50/85">
        Email{" "}
        <a
          href="mailto:vivian@moedim.ai?subject=Security%20report"
          className="text-gold-500 underline-offset-4 hover:underline"
        >
          vivian@moedim.ai
        </a>{" "}
        with the subject “Security report”. We record, triage and follow up through our restricted
        incident register.
      </p>
      <div className="mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
        <article className="rounded-md border border-cream-50/10 bg-navy-900/40 p-5">
          <h2 className="font-display text-xl text-cream-50">Please include</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream-50/75">
            <li>The affected page or service</li>
            <li>What you observed and when</li>
            <li>Safe steps that reproduce it</li>
            <li>Your preferred contact details</li>
          </ul>
        </article>
        <article className="rounded-md border border-cream-50/10 bg-navy-900/40 p-5">
          <h2 className="font-display text-xl text-cream-50">Do not include by email</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream-50/75">
            <li>Passwords, tokens or authentication codes</li>
            <li>Full personal records or identity documents</li>
            <li>Malware, destructive payloads or bulk exports</li>
            <li>Information belonging to other people unless necessary</li>
          </ul>
        </article>
      </div>
      <article className="mt-8 max-w-4xl rounded-md border border-gold-500/25 bg-navy-900 p-6">
        <h2 className="font-display text-2xl text-cream-50">Responsible boundaries</h2>
        <p className="mt-3 text-sm leading-relaxed text-cream-50/80">
          Do not disrupt service, access another person&apos;s data, use social engineering, test
          physical security, send denial-of-service traffic, upload malware, or retain data you
          encountered accidentally. Stop when you have enough evidence to explain the issue. This
          page does not authorize testing that would otherwise be unlawful or outside systems owned
          by Moedim.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cream-50/80">
          We aim to acknowledge useful reports promptly, prioritize them by risk, preserve evidence
          and share material progress when we can. Public disclosure should wait until a fix and
          safe coordination plan are agreed.
        </p>
      </article>
    </section>
  );
}
