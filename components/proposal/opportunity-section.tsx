"use client"

import { Clock, FileText, Shield, AlertTriangle, Stethoscope, XCircle, Info } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn, revealDelay } from "@/lib/utils"

const problems = [
  {
    icon: Clock,
    title: "Lead loss from after-hours calls",
    description: "AI intake answers every call in under 30 seconds, qualifies, and logs to Clio. Every call that hits voicemail is a lead lost with no record it happened.",
    stat: "15-25%",
    statLabel: "more retained cases",
  },
  {
    icon: FileText,
    title: "Demand letters take 5-15 hours",
    description: "EvenUp cuts drafting to minutes with AI-organized records. Firms report 20-30% higher settlements from better-organized medical narratives and fewer missed treatment events.",
    stat: "20-30%",
    statLabel: "higher settlements",
  },
  {
    icon: Shield,
    title: "Bar complaint risk from poor communication",
    description: "Case Status delivers automated milestone updates and weekly treatment check-ins. Clients stop calling because they already know. Check-in replies become contemporaneous damages evidence.",
    stat: "#1",
    statLabel: "cause of bar complaints",
  },
  {
    icon: AlertTriangle,
    title: "Missed SOL, ante litem, and discovery deadlines",
    description: "Clio deadline automation with 7/14/30-day escalating alerts. SOL, ante litem (6/12-mo gov't), discovery cutoffs, expert disclosure, pre-trial, and mediation deadlines on every matter.",
    stat: "100%",
    statLabel: "deadline coverage",
  },
  {
    icon: Stethoscope,
    title: "Medical record review takes weeks",
    description: "Supio reduces 500-page reviews to hours with causation flags, standard-of-care deviations, and treatment gap identification. One firm saved 437 hours across six cases.",
    stat: "90%",
    statLabel: "faster case prep",
  },
]

const avoidItems = [
  {
    title: "Consumer ChatGPT or Claude for case work",
    reason: "Citation hallucination rates run 17-34%. Georgia Rule 1.6(c) requires reasonable measures to prevent unauthorized disclosure. Consumer AI trains on user inputs and does not offer BAAs.",
  },
  {
    title: "Full automation of client-facing communication",
    reason: "Settlement discussions, strategy updates, and bad news conversations must involve you directly. ABA Opinion 512 and Georgia Rules are explicit. Automation handles the routine.",
  },
  {
    title: "Enterprise-priced tools (Harvey AI, Westlaw Edge)",
    reason: "Priced for AmLaw 100 firms at $300+/mo for capabilities CoCounsel and Trellis cover at a fraction of the cost. None justify the price for a solo PI practice.",
  },
  {
    title: "Custom enterprise-scale RAG systems",
    reason: "A $25K-50K custom build with ongoing maintenance costs when EvenUp, Supio, and scoped $800-2,500 RAG builds do the same work for their specific functions.",
  },
  {
    title: "AI for unverified judicial filings",
    reason: "Mata v. Avianca resulted in sanctions for AI-hallucinated citations. Every AI-assisted document going to a tribunal requires citation verification. No exceptions.",
  },
]

const outOfScope = [
  "E-filing automation — Georgia county-specific filing systems vary significantly; evaluate after Clio is fully configured.",
  "Virtual paralegal / staffing recommendations — can be addressed separately once you know what the automation covers.",
  "Physical mail and service of process tracking — outside the scope of this engagement.",
  "Firm website redesign — Intaker handles chat capture; site design is a separate engagement.",
  "Billing and collections automation — Clio handles invoicing; collections strategy is outside this scope.",
]

export function OpportunitySection() {
  const sectionRef = useScrollReveal()
  const cardsRef = useScrollReveal()

  return (
    <section id="opportunity" className="bg-surface px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="reveal mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Section 1 &middot; The Opportunity
          </p>
          <h2 className="reveal reveal-delay-1 mb-5 font-serif text-3xl font-bold text-navy text-balance md:text-4xl">
            The defense side has been on this stack for two years.
          </h2>

          {/* Six months vision blockquote — stronger left rule */}
          <div className="reveal reveal-delay-2 mb-6 rounded-sm border-l-4 border-gold bg-gold/[0.04] px-6 py-5 shadow-sm">
            <p className="font-serif text-base leading-relaxed text-navy md:text-lg">
              <span className="font-bold">Six months from now,</span> The Jewkes Firm looks like this:
              potential clients who call at 11pm get an immediate response &mdash; qualified, documented,
              and scheduled &mdash; while you sleep. Demand letters go out faster, backed by AI-organized
              medical records that would have taken two weeks to manually review. Clients stop calling to
              ask {'"what\'s the status?"'} because they already know, with your firm{"'"}s branded app on their
              phone. You recover 15-20 hours per week.
            </p>
          </div>

          <p className="reveal reveal-delay-3 font-sans text-sm leading-relaxed text-muted-foreground">
            AI-assisted record review, deposition analytics, and litigation intelligence tools have been
            standard infrastructure at well-run defense firms since 2022-2023. This isn{"'"}t about catching
            up to other plaintiff firms. It{"'"}s about reaching parity with the defense side &mdash; then using your
            knowledge of how they think to flip those same tools into a plaintiff{"'"}s advantage.
          </p>
        </div>

        {/* Five problems header */}
        <div className="reveal mb-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
            Five Problems This Solves
          </p>
        </div>

        {/* Problem cards with staggered reveal */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" ref={cardsRef}>
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={cn("reveal group flex flex-col rounded-sm border border-border bg-card p-5 transition-all hover:border-gold/30 hover:shadow-md", revealDelay(i, 4))}
            >
              <p.icon className="mb-4 h-5 w-5 text-gold transition-transform group-hover:scale-110" />
              <p className="mb-0.5 font-serif text-2xl font-bold text-navy">{p.stat}</p>
              <p className="mb-3 font-sans text-xs text-muted-foreground">{p.statLabel}</p>
              <h3 className="mb-2 font-sans text-sm font-bold text-navy">{p.title}</h3>
              <p className="mt-auto font-sans text-xs leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key economics callout */}
        <div className="reveal mt-12 rounded-sm border border-gold/20 bg-navy p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                Full-Stack Economics
              </p>
              <p className="font-sans text-sm leading-relaxed text-primary-foreground/80">
                At average usage across all tools, expect approximately{" "}
                <span className="font-bold text-gold">$1,350-2,500/mo</span> in subscriptions &mdash; roughly{" "}
                <span className="font-bold text-primary-foreground">30-40%</span> of what a single full-time paralegal costs
                in Peachtree City (~$4,500-5,500/mo), while covering intake, communication, record review,
                research, drafting, trial prep, and case closing.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-serif text-3xl font-bold text-gold">15-20</p>
              <p className="font-sans text-xs text-primary-foreground/60">hours recovered per week</p>
            </div>
          </div>
        </div>

        {/* What to Avoid subsection */}
        <div className="mt-16">
          <div className="reveal mb-8">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
              What to Avoid
            </p>
            <h3 className="mb-2 font-serif text-xl font-bold text-navy md:text-2xl">
              Before I recommend what to use, here{"'"}s what to stay away from.
            </h3>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {avoidItems.map((item, i) => (
              <div
                key={item.title}
                className={cn("reveal flex gap-3 rounded-sm border border-border bg-card p-4 transition-all hover:border-destructive/20", revealDelay(i, 3))}
              >
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/60" />
                <div>
                  <p className="mb-1 font-sans text-xs font-bold text-navy">{item.title}</p>
                  <p className="font-sans text-xs leading-relaxed text-muted-foreground">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Out of scope */}
        <div className="reveal mt-12 rounded-sm border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Info className="h-4 w-4 shrink-0 text-muted-foreground" />
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-navy/60">
              What This Proposal Does Not Cover
            </p>
          </div>
          <p className="mb-3 font-sans text-xs text-muted-foreground">
            These are known items outside the current scope &mdash; each can be addressed in future phases:
          </p>
          <ul className="flex flex-col gap-1.5">
            {outOfScope.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
                <span className="font-sans text-xs leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
