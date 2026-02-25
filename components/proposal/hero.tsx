import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="overview" className="relative flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      {/* Subtle geometric accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full border border-gold/5" />
        <div className="absolute -left-20 bottom-1/3 h-64 w-64 rounded-full border border-gold/5" />
        <div className="absolute right-1/4 top-16 h-px w-32 bg-gold/10" />
        <div className="absolute left-1/3 bottom-24 h-px w-24 bg-gold/10" />
        {/* Vertical accent lines */}
        <div className="absolute left-[15%] top-[20%] h-32 w-px bg-gold/[0.04]" />
        <div className="absolute right-[20%] bottom-[25%] h-24 w-px bg-gold/[0.04]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold">
          AI Integration Strategy
        </p>

        <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          The Jewkes Firm, LLC
        </h1>

        <p className="mb-2 font-serif text-lg font-light text-gold md:text-xl">
          Plaintiff Personal Injury & Medical Malpractice
        </p>

        <p className="mb-10 font-sans text-sm text-gold-light/60">
          Tyrone &middot; Griffin &middot; LaGrange, Georgia
        </p>

        <div className="mx-auto mb-12 h-px w-20 bg-gold/40" />

        {/* Positioning line from Strategy Overview */}
        <p className="mx-auto mb-4 max-w-2xl font-serif text-base italic leading-relaxed text-primary-foreground/70 md:text-lg">
          You spent years on the defense side. You know what that stack looks like.
          This is the plaintiff version of that infrastructure, priced for a solo firm, available right now.
        </p>

        <p className="mx-auto mb-10 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
          A full AI and automation menu — intake, communication, record review, research,
          drafting, trial prep, and case closing. Every item is standalone. Pick what matches
          your biggest pain points.
        </p>

        {/* Key metrics strip */}
        <div className="mx-auto mb-10 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">42</p>
            <p className="font-sans text-[10px] uppercase tracking-wider text-primary-foreground/40">AI use cases</p>
          </div>
          <div className="h-8 w-px bg-gold/20" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">11</p>
            <p className="font-sans text-[10px] uppercase tracking-wider text-primary-foreground/40">integrated tools</p>
          </div>
          <div className="h-8 w-px bg-gold/20" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">10</p>
            <p className="font-sans text-[10px] uppercase tracking-wider text-primary-foreground/40">RAG databases</p>
          </div>
          <div className="h-8 w-px bg-gold/20" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-primary-foreground">15-20</p>
            <p className="font-sans text-[10px] uppercase tracking-wider text-primary-foreground/40">hours recovered/wk</p>
          </div>
        </div>

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
          <span>OpenClaw Consulting</span>
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
