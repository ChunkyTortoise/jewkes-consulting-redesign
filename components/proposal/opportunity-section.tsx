import { Clock, FileText, Shield, AlertTriangle, Stethoscope, XCircle } from "lucide-react"

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

export function OpportunitySection() {
  return (
    <section id="opportunity" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Section 1 &middot; The Opportunity
          </p>
          <h2 className="mb-5 font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
            The defense side has been on this stack for two years.
          </h2>
          <p className="mb-4 font-sans text-base leading-relaxed text-muted-foreground">
            Six months from now, The Jewkes Firm looks like this: potential clients who call at 11pm get an
            immediate response — qualified, documented, and scheduled — while you sleep. Demand letters
            go out faster, backed by AI-organized medical records that would have taken two weeks to manually
            review. Clients stop calling to ask {"\"what's the status?\""} because they already know, with your
            firm{"'"}s branded app on their phone. You recover 15-20 hours per week.
          </p>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            AI-assisted record review, deposition analytics, and litigation intelligence tools have been
            standard infrastructure at well-run defense firms since 2022-2023. This isn{"'"}t about catching
            up to other plaintiff firms. It{"'"}s about reaching parity with the defense side — then using your
            knowledge of how they think to flip those same tools into a plaintiff{"'"}s advantage.
          </p>
        </div>

        {/* Five problems */}
        <div className="mb-8">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
            Five Problems This Solves
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-sm border border-border bg-card p-5 transition-all hover:border-gold/30 hover:shadow-sm"
            >
              <p.icon className="mb-4 h-5 w-5 text-gold" />
              <p className="mb-1 font-serif text-2xl font-bold text-navy">{p.stat}</p>
              <p className="mb-3 font-sans text-xs text-muted-foreground">{p.statLabel}</p>
              <h3 className="mb-2 font-sans text-sm font-bold text-navy">{p.title}</h3>
              <p className="mt-auto font-sans text-xs leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key economics callout */}
        <div className="mt-12 rounded-sm border border-gold/20 bg-navy p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                Full-Stack Economics
              </p>
              <p className="font-sans text-sm leading-relaxed text-primary-foreground/80">
                At average usage across all tools, expect approximately{" "}
                <span className="font-bold text-gold">$1,350-2,500/mo</span> in subscriptions — roughly{" "}
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

        {/* What to Avoid section */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
              Section 2 &middot; What to Avoid
            </p>
            <h3 className="mb-2 font-serif text-xl font-bold text-navy md:text-2xl">
              Before I recommend what to use, here{"'"}s what to stay away from.
            </h3>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {avoidItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-sm border border-border bg-card p-4"
              >
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/60" />
                <div>
                  <p className="mb-1 font-sans text-xs font-bold text-navy">{item.title}</p>
                  <p className="font-sans text-[11px] leading-relaxed text-muted-foreground">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick start router from proposal */}
        <div className="mt-12 rounded-sm border border-border bg-card p-6">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Where to Start
          </p>
          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
            {[
              { problem: "Losing leads after hours", solution: "Smith.ai + Clio Grow" },
              { problem: "Demand letters taking 5-15 hours", solution: "EvenUp" },
              { problem: "Clients calling, bar complaint risk", solution: "Case Status" },
              { problem: "Missed SOL / ante litem / deadlines", solution: "Deadline Automation" },
              { problem: "Medical record review taking weeks", solution: "Supio" },
              { problem: "Don't know what a case is worth at intake", solution: "CaseYak + Trellis" },
              { problem: "Use your defense background as a weapon", solution: "EvenUp + Trellis + Low Offer Response" },
            ].map((row) => (
              <div key={row.problem} className="flex items-start gap-2 py-1.5 border-b border-border/50 last:border-0">
                <span className="font-sans text-xs text-muted-foreground">{row.problem}</span>
                <span className="ml-auto shrink-0 font-sans text-xs font-bold text-navy">{row.solution}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
