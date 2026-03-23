"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { FadeInSection, FadeInItem } from "@/components/motion/fade-in-section"

export function Hero() {
  return (
    <section id="overview" className="relative flex min-h-screen flex-col items-center justify-center bg-navy px-6 pt-20 pb-28 text-center">
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

      <motion.div
        className="relative z-10 mx-auto max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
        }}
      >
        {/* Firm name as subtitle */}
        <motion.p
          className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          AI Integration Strategy
        </motion.p>

        <motion.p
          className="mb-6 font-sans text-sm text-gold-light/60"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Prepared for The Jewkes Firm, LLC &middot; Tyrone &middot; Griffin &middot; LaGrange, Georgia
        </motion.p>

        {/* Value proposition as H1 */}
        <motion.h1
          className="mb-6 font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-6xl text-balance"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
        >
          The plaintiff version of the defense stack, priced for a solo firm.
        </motion.h1>

        {/* Vision statement as a distinct blockquote callout */}
        <motion.div
          className="mx-auto mb-8 max-w-2xl rounded-sm border-l-2 border-gold/40 bg-gold/[0.04] px-6 py-5 mt-8"
          variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
        >
          <p className="font-serif text-base italic leading-relaxed text-primary-foreground/80 md:text-lg">
            You spent years on the defense side. You know what that stack looks like &mdash;
            organized discovery, indexed expert testimony, demand letters that get picked
            apart before they{"'"}re answered. This is the plaintiff version of that
            infrastructure, available right now.
          </p>
        </motion.div>

        <motion.p
          className="mx-auto mb-10 max-w-xl font-sans text-sm leading-relaxed text-primary-foreground/50"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
        >
          Three engagement tiers. Start with Foundation &mdash; one week, $1,000, ten deliverables &mdash; then decide.
        </motion.p>

        {/* Key metrics strip — staggered */}
        <motion.div
          className="mx-auto mb-3 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {[
            { value: "10", label: "deliverables" },
            { value: "1", label: "week complete" },
            { value: "3", label: "engagement tiers" },
            { value: "15–20", label: "hours recovered/wk" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
            >
              <p className="font-serif text-2xl font-bold text-gold">{stat.value}</p>
              <p className="font-sans text-xs uppercase tracking-wider text-primary-foreground/40">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="mx-auto mb-10 font-sans text-[11px] text-primary-foreground/30"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }}
        >
          Measured across comparable solo PI/med mal practices.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 font-sans text-sm font-semibold text-navy transition-all hover:bg-gold-light"
          >
            See Foundation Package
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/30 px-6 py-3 font-sans text-sm font-medium text-gold-light transition-all hover:border-gold/60 hover:text-gold"
          >
            View All Three Tiers
          </a>
        </motion.div>
      </motion.div>

      {/* Meta block */}
      <div className="mt-auto left-0 right-0 z-10 flex flex-col items-center gap-4 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-sans text-xs text-gold-light/40">
          <span><span className="text-gold-light/60">Prepared by</span> Cayman Roden</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>March 2026</span>
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
