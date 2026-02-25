const sections = [
  { id: "overview",     label: "Overview" },
  { id: "opportunity",  label: "Opportunity" },
  { id: "openclaw",     label: "OpenClaw" },
  { id: "tools",        label: "Tools" },
  { id: "deliverables", label: "Deliverables" },
  { id: "rag",          label: "Databases" },
  { id: "pricing",      label: "Pricing" },
  { id: "compliance",   label: "Compliance" },
  { id: "next-steps",   label: "Next Steps" },
]

export function Footer() {
  return (
    <footer className="relative bg-navy px-6 pb-10 pt-16">
      {/* Gold hairline top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gold/20" />

      <div className="mx-auto max-w-6xl">
        {/* Top row — wordmark + contact */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Wordmark */}
          <div>
            <div className="mb-1 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-gold">
                <span className="font-serif text-xs font-bold text-navy">OC</span>
              </div>
              <span className="font-serif text-base font-bold text-gold-light">OpenClaw Consulting</span>
            </div>
            <p className="font-sans text-[11px] text-primary-foreground/35">
              AI Integration for Legal Practices
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1.5 md:items-end">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/30">
              Cayman Roden
            </p>
            <a
              href="mailto:cayman@openclaw.consulting"
              className="font-sans text-xs text-gold/55 transition-colors hover:text-gold"
            >
              cayman@openclaw.consulting
            </a>
          </div>
        </div>

        {/* Section quick-links */}
        <div className="mb-10 flex flex-wrap gap-x-4 gap-y-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-sans text-[11px] text-primary-foreground/25 transition-colors hover:text-primary-foreground/60"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-navy-mid pt-6">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <p className="font-sans text-[11px] text-primary-foreground/30">
              Confidential &mdash; Prepared exclusively for The Jewkes Firm, LLC &middot; Jordan Jewkes, Esq.
            </p>
            <p className="font-sans text-[10px] text-primary-foreground/20">
              February 2026 &middot; State of Georgia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
