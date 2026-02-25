import { ArrowDown } from "lucide-react"
import { AnimatedCounter } from "@/components/proposal/animated-counter"
import { ReadingProgress } from "@/components/proposal/reading-progress"

const stats = [
  { value: "42", label: "AI use cases", delay: 0 },
  { value: "30+", label: "integrated tools", delay: 100 },
  { value: "10", label: "RAG databases", delay: 200 },
  { value: "15–20", label: "hours recovered/wk", delay: 300 },
]

export function Hero() {
  return (
    <>
      <ReadingProgress />
      <section
        id="overview"
        className="relative flex min-h-screen flex-col items-center justify-center bg-navy px-6 pt-20 pb-28 text-center"
      >
        {/* Refined geometric accent pattern */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Concentric rings — right cluster */}
          <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-gold/[0.07]" />
          <div className="absolute -right-20 top-[27%] h-64 w-64 rounded-full border border-gold/[0.05]" />
          <div className="absolute right-4 top-[33%] h-40 w-40 rounded-full border border-gold/[0.04]" />
          {/* Left cluster */}
          <div className="absolute -left-20 bottom-1/3 h-72 w-72 rounded-full border border-gold/[0.06]" />
          <div className="absolute -left-6 bottom-[35%] h-44 w-44 rounded-full border border-gold/[0.04]" />
          {/* Horizontal hairlines */}
          <div className="absolute right-1/4 top-20 h-px w-48 bg-gold/10" />
          <div className="absolute left-1/4 bottom-32 h-px w-36 bg-gold/10" />
          <div className="absolute left-1/3 top-1/2 h-px w-20 bg-gold/[0.06]" />
          {/* Vertical hairlines */}
          <div className="absolute left-[12%] top-[15%] h-48 w-px bg-gold/[0.06]" />
          <div className="absolute right-[15%] bottom-[18%] h-36 w-px bg-gold/[0.06]" />
          <div className="absolute left-[50%] top-[6%] h-24 w-px bg-gold/[0.04]" />
          {/* Corner bracket accents */}
          <div className="absolute left-8 top-24 h-20 w-20 border-l border-t border-gold/[0.07]" />
          <div className="absolute bottom-24 right-8 h-20 w-20 border-b border-r border-gold/[0.07]" />
          {/* Dot grid — top-right faint decoration */}
          <div
            className="absolute right-[8%] top-[12%] h-32 w-32 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #c8a84b 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold">
            AI Integration Strategy
          </p>

          <p className="mb-6 font-sans text-sm text-gold-light/50">
            Prepared for The Jewkes Firm, LLC &middot; Tyrone &middot; Griffin &middot; LaGrange, Georgia
          </p>

          {/* H1 */}
          <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-primary-foreground text-balance md:text-4xl lg:text-6xl">
            The plaintiff version of the defense stack, priced for a solo firm.
          </h1>

          {/* Blockquote */}
          <div className="mx-auto mb-8 mt-8 max-w-2xl rounded-sm border-l-2 border-gold/40 bg-gold/[0.04] px-6 py-5 text-left">
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

          {/* Animated key metrics strip */}
          <div className="mx-auto mb-3 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <AnimatedCounter value={stat.value} label={stat.label} delay={stat.delay} />
                {i < stats.length - 1 && (
                  <div className="hidden h-8 w-px bg-gold/15 sm:block" />
                )}
              </div>
            ))}
          </div>
          <p className="mx-auto mb-10 font-sans text-[11px] text-primary-foreground/25">
            Measured across comparable solo PI/med mal practices.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 font-sans text-sm font-semibold text-navy transition-all hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Explore the Stack
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-sm border border-gold/30 px-6 py-3 font-sans text-sm font-medium text-gold-light transition-all hover:border-gold/60 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              View Engagement Tiers
            </a>
          </div>
        </div>

        {/* Meta block */}
        <div className="mt-auto left-0 right-0 z-10 flex flex-col items-center gap-4 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-sans text-xs text-gold-light/35">
            <span>
              <span className="text-gold-light/55">Prepared by</span> Cayman Roden
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span>February 2026</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Confidential</span>
          </div>
          <a
            href="#opportunity"
            className="text-gold/35 transition-colors hover:text-gold"
            aria-label="Scroll to content"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
        {/* Very subtle bottom vignette */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/60 to-transparent" />
      </section>
    </>
  )
}
