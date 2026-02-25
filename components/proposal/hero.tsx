import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="overview" className="relative flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      {/* Geometric accent pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full border border-gold/10" />
        <div className="absolute -right-20 top-[30%] h-56 w-56 rounded-full border border-gold/[0.06]" />
        <div className="absolute -left-16 bottom-1/3 h-64 w-64 rounded-full border border-gold/10" />
        <div className="absolute right-1/4 top-20 h-px w-40 bg-gold/15" />
        <div className="absolute left-1/4 bottom-32 h-px w-32 bg-gold/15" />
        {/* Grid lines */}
        <div className="absolute left-[12%] top-[15%] h-40 w-px bg-gold/[0.07]" />
        <div className="absolute right-[15%] bottom-[20%] h-32 w-px bg-gold/[0.07]" />
        <div className="absolute left-[50%] top-[8%] h-20 w-px bg-gold/[0.05]" />
        {/* Corner accents */}
        <div className="absolute left-8 top-24 h-16 w-16 border-l border-t border-gold/[0.08]" />
        <div className="absolute bottom-24 right-8 h-16 w-16 border-b border-r border-gold/[0.08]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Firm name as subtitle */}
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold">
          AI Integration Strategy
        </p>

        <p className="mb-6 font-sans text-sm text-gold-light/60">
          Prepared for The Jewkes Firm, LLC &middot; Tyrone &middot; Griffin &middot; LaGrange, Georgia
        </p>

        {/* Value proposition as H1 */}
        <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-6xl text-balance">
          The plaintiff version of the defense stack, priced for a solo firm.
        </h1>

        {/* Vision statement as a distinct blockquote callout */}
        <div className="mx-auto mb-8 max-w-2xl rounded-sm border-l-2 border-gold/40 bg-gold/[0.04] px-6 py-5 mt-8">
          <p className="font-serif text-base italic leading-relaxed text-primary-foreground/80 md:text-lg">
            You spent years on the defense side. You know what that stack looks like &mdash;
            organized discovery, indexed expert testimony, demand letters that get picked
            apart before they{"'"}re answered. This is the plaintiff version of that
            infrastructure, available right now.
          </p>
        </div>

        <p className="mx-auto mb-10 max-w-xl font-sans text-sm leading-relaxed text-primary-foreground/50">
          A full AI and automation menu &mdash; intake, communication, record review, research,
          drafting, trial prep, and case closing. Every item is standalone. Pick what matches
          your biggest pain points. No locked packages, no required order.
        </p>

        {/* Key metrics strip */}
        <div className="mx-auto mb-3 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">42</p>
            <p className="font-sans text-xs uppercase tracking-wider text-primary-foreground/40">AI use cases</p>
          </div>
          <div className="h-8 w-px bg-gold/20" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">30+</p>
            <p className="font-sans text-xs uppercase tracking-wider text-primary-foreground/40">integrated tools</p>
          </div>
          <div className="h-8 w-px bg-gold/20" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">10</p>
            <p className="font-sans text-xs uppercase tracking-wider text-primary-foreground/40">RAG databases</p>
          </div>
          <div className="h-8 w-px bg-gold/20" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">15–20</p>
            <p className="font-sans text-xs uppercase tracking-wider text-primary-foreground/40">hours recovered/wk</p>
          </div>
        </div>
        <p className="mx-auto mb-10 font-sans text-[11px] text-primary-foreground/30">
          Measured across comparable solo PI/med mal practices.
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href="#tools"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 font-sans text-sm font-semibold text-navy transition-all hover:bg-gold-light"
          >
            Explore the Stack
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/30 px-6 py-3 font-sans text-sm font-medium text-gold-light transition-all hover:border-gold/60 hover:text-gold"
          >
            View Engagement Tiers
          </a>
        </div>
      </div>

      {/* Meta block */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-sans text-xs text-gold-light/40">
          <span><span className="text-gold-light/60">Prepared by</span> Cayman Roden</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>February 2026</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Confidential</span>
        </div>
        <a href="#opportunity" className="text-gold/40 transition-colors hover:text-gold" aria-label="Scroll to content">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  )
}
