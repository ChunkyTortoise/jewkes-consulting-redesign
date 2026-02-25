export function Footer() {
  return (
    <footer className="bg-navy px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold">
              <span className="font-serif text-sm font-bold text-navy">CR</span>
            </div>
            <div>
              <p className="font-serif text-sm font-bold text-gold-light">Cayman Roden</p>
              <p className="font-sans text-[11px] text-primary-foreground/40">
                AI Integration Consultant
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href="mailto:cayman@openclaw.consulting"
              className="font-sans text-xs text-gold/60 transition-colors hover:text-gold"
            >
              cayman@openclaw.consulting
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-mid pt-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-sans text-[11px] text-primary-foreground/30">
              Confidential &mdash; Prepared exclusively for The Jewkes Firm, LLC &middot; Jordan Jewkes, Esq.
            </p>
            <p className="font-sans text-[10px] text-primary-foreground/20">
              Specializing in AI implementation for legal practices — configuration, compliance, and workflow automation &middot; February 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
