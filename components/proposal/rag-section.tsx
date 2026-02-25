"use client"

import { Database, Search as SearchIcon, Swords } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { TypewriterText } from "@/components/proposal/typewriter-text"
import { cn, revealDelay } from "@/lib/utils"

const ragDatabases = [
  {
    name: "Expert Witness Testimony DB",
    cost: "~$15-30/mo",
    buildCost: "$1,500-2,500",
    description: "Georgia defense experts indexed by prior testimony, specialty, and outcome. Every transcript added compounds the value. After two years, Jordan has proprietary intelligence on his market's defense experts that no other plaintiff attorney across his three-county footprint has.",
    query: "Has Dr. Collins contradicted himself on causation in spinal injury cases?",
    tag: "defense counter-intel",
  },
  {
    name: "Personal Case Library",
    cost: "~$10-20/mo",
    buildCost: "$800-1,500",
    description: "Your own demand letters, mediation briefs, and settlement memos — indexed and queryable by case type, injury, venue, and outcome. Query your own best language back to you when starting a new similar matter. Documents stripped of identifying client information before indexing.",
    query: "Pull my best demand for a rear-end with herniated disc and soft-tissue surgery.",
  },
  {
    name: "Medical Literature RAG",
    cost: "~$10-20/mo",
    buildCost: "$1,000-2,000",
    description: "ACOG, ACS, ACEP, ADA clinical guidelines and standard-of-care literature for your med mal and dental mal case types. Cochrane reviews, expert treatises. Know the standard of care before the first call with an expert.",
    query: "What does ACOG say about standard of care for shoulder dystocia?",
  },
  {
    name: "Georgia Verdict Database",
    cost: "~$15-25/mo",
    description: "Georgia PI and med mal verdicts indexed by county, case type, injury, and outcome. Query before every mediation to anchor your demand with comparable local verdicts.",
    query: "What have Troup County juries awarded for rear-end cases with lumbar fusion?",
  },
  {
    name: "Lien Rules Database",
    cost: "~$10-15/mo",
    description: "Medicare conditional payment procedures, Medicaid lien rates, ERISA override arguments, and workers' comp lien resolution strategies — queryable at settlement. Critical given Jordan's personal liability exposure for missed Medicare liens.",
    query: "What is the Medicare final demand reduction argument for a $45K settlement?",
  },
  {
    name: "Georgia Tort Reform RAG",
    cost: "~$10-15/mo",
    description: "Tracks SB 68/SB 69 — Georgia's tort reform package signed April 2025 — damages caps, reasonable-value medical specials rules, anti-anchoring restrictions, and litigation funding disclosure requirements.",
    query: "How do SB 68's reasonable-value rules change how I present medical specials?",
  },
  {
    name: "Bad Faith / Coverage Precedent",
    cost: "~$10-20/mo",
    description: "Georgia bad faith case law, carrier-specific claims handling violations, and coverage dispute precedents — queryable before filing bad faith claims or responding to carrier denials. Georgia bad faith claims can exceed underlying policy limits.",
    query: "What are the elements of first-party bad faith against State Farm in Georgia?",
  },
  {
    name: "Dental Malpractice Standards",
    cost: "~$10-15/mo",
    description: "ADA clinical guidelines, dental board disciplinary records, and dental expert databases -- indexed for dental mal case types specific to your practice.",
    query: "Map the standard-of-care deviations in this patient's dental records against ADA guidelines.",
  },
  {
    name: "Per-Case Document Querying",
    cost: "$0 (NotebookLM)",
    description: "Upload up to 50 non-PHI case documents per notebook (police reports, court filings, contracts, correspondence) and query in plain English with cited source answers. HIPAA caveat: do not upload identifiable medical records.",
    query: "What did the responding officer note about road conditions in the crash report?",
  },
  {
    name: "Georgia Pattern Jury Instructions",
    cost: "$0 (NotebookLM)",
    description: "Georgia PJIs indexed in NotebookLM -- query the right instruction instead of navigating the full index. Set up during onboarding.",
    query: "What is the Georgia charge for sudden emergency doctrine?",
  },
]

const counterIntelDatabases = [
  {
    name: "IME Doctor Database",
    cost: "~$10-20/mo",
    description: "Georgia IME doctors used by State Farm, Allstate, USAA, and Nationwide — indexed by carrier, specialty, and known findings. Their playbook, queryable before every deposition.",
    query: "What does Dr. Marsh say about permanent impairment in lumbar cases for State Farm?",
  },
  {
    name: "Carrier Playbook",
    cost: "~$10-20/mo",
    description: "Defense strategies, settlement thresholds, and litigation behavior for each major Georgia carrier — documented from your time on their side. Query before demand goes out.",
    query: "How does Allstate respond to soft-tissue demands over $75K in Spalding County?",
  },
]

// Featured queries for the typewriter showcase at bottom
const featuredQueries = [
  "What does Dr. Marsh say about permanent impairment in lumbar cases for State Farm?",
  "How does Allstate respond to soft-tissue demands over $75K in Spalding County?",
  "What have Troup County juries awarded for rear-end cases with lumbar fusion?",
  "Draft a demand for a rear-end herniated disc case with $85K in medical specials and a prior soft-tissue claim.",
]

export function RAGSection() {
  const headerRef = useScrollReveal()
  const mainGridRef = useScrollReveal()
  const counterIntelRef = useScrollReveal()
  const queriesRef = useScrollReveal()

  return (
    <section id="rag" className="relative bg-navy px-6 py-24">
      {/* Subtle dot-grid texture on dark canvas */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #c8a84b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-4" ref={headerRef}>
          <p className="reveal mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Section 5 &middot; Practice Knowledge Databases
          </p>
          <h2 className="reveal reveal-delay-1 mb-5 font-serif text-3xl font-bold text-primary-foreground text-balance md:text-4xl">
            Gets smarter with every transcript, matter, and article you add.
          </h2>
          <p className="reveal reveal-delay-2 mb-2 max-w-2xl font-sans text-sm leading-relaxed text-primary-foreground/60">
            These are fixed-cost builds with minimal running costs — not subscriptions.
            They compound in value over time and represent proprietary intelligence
            no other plaintiff attorney in your market has.
          </p>
          <p className="reveal reveal-delay-3 max-w-2xl font-sans text-xs leading-relaxed text-primary-foreground/35">
            This is where the original conversation started. Every tool above is an off-the-shelf subscription.
            The items below are different: AI systems built specifically for your practice, using your cases,
            your experts, your venues, and your arguments as the training material.
          </p>
        </div>

        <div className="reveal mb-12 flex items-center gap-2">
          <Database className="h-4 w-4 text-gold/50" />
          <p className="font-sans text-xs text-primary-foreground/35">
            Built on Claude API + vector database + web query interface
          </p>
        </div>

        {/* Main knowledge databases — staggered scroll-reveal grid */}
        <div className="mb-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3" ref={mainGridRef}>
          {ragDatabases.map((db, i) => (
            <div
              key={db.name}
              className={cn("reveal group flex flex-col rounded-sm border border-navy-mid bg-white/[0.03] p-5 transition-all hover:border-gold/25 hover:bg-white/[0.05]", revealDelay(i, 4))}
            >
              <div className="mb-1 flex items-start justify-between gap-2">
                <p className="font-sans text-sm font-bold text-primary-foreground">{db.name}</p>
                {db.tag && (
                  <span className="shrink-0 rounded-sm bg-gold/10 px-1.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-gold">
                    {db.tag}
                  </span>
                )}
              </div>
              <div className="mb-3 flex items-center gap-3">
                <span className="font-sans text-xs font-semibold text-gold">{db.cost}</span>
                {db.buildCost && (
                  <>
                    <span className="text-primary-foreground/15">&middot;</span>
                    <span className="font-sans text-[10px] text-primary-foreground/35">Build: {db.buildCost}</span>
                  </>
                )}
              </div>
              <p className="mb-4 flex-1 font-sans text-xs leading-relaxed text-primary-foreground/45">
                {db.description}
              </p>
              {/* Query preview — reveal the typewriter only when card is in view */}
              <div className="border-t border-navy-mid pt-3">
                <div className="flex items-start gap-2">
                  <SearchIcon className="mt-0.5 h-3 w-3 shrink-0 text-gold/50" />
                  <p className="font-sans text-[11px] italic leading-relaxed text-gold-light/50">
                    {'"'}{db.query}{'"'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Defense Counter-Intelligence subsection */}
        <div className="mb-6 flex items-center gap-3" ref={counterIntelRef}>
          <div className="reveal flex items-center gap-3">
            <Swords className="h-5 w-5 text-gold" />
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-gold">
                Defense Counter-Intelligence
              </p>
              <p className="font-sans text-[11px] text-primary-foreground/35">
                Built from your years on the other side — no other plaintiff firm in your market has this
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {counterIntelDatabases.map((db, i) => (
            <div
              key={db.name}
              className={cn("reveal flex flex-col rounded-sm border border-gold/20 bg-gold/[0.04] p-5 transition-all hover:border-gold/35 hover:bg-gold/[0.07]", revealDelay(i))}
            >
              <div className="mb-1 flex items-start justify-between gap-2">
                <p className="font-sans text-sm font-bold text-primary-foreground">{db.name}</p>
                <span className="shrink-0 rounded-sm bg-gold/10 px-1.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-gold">
                  defense counter-intel
                </span>
              </div>
              <p className="mb-2 font-sans text-xs font-semibold text-gold">{db.cost}</p>
              <p className="mb-4 flex-1 font-sans text-xs leading-relaxed text-primary-foreground/45">
                {db.description}
              </p>
              <div className="border-t border-gold/10 pt-3">
                <div className="flex items-start gap-2">
                  <SearchIcon className="mt-0.5 h-3 w-3 shrink-0 text-gold/50" />
                  <p className="font-sans text-[11px] italic leading-relaxed text-gold-light/50">
                    {'"'}{db.query}{'"'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Typewriter query showcase */}
        <div className="reveal mt-12 rounded-sm border border-navy-mid bg-white/[0.03] p-6" ref={queriesRef}>
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            What You Can Ask It
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            {featuredQueries.map((q, i) => (
              <div key={q} className="flex items-start gap-2 rounded-sm bg-white/[0.03] p-3 border border-navy-mid/60">
                <SearchIcon className="mt-0.5 h-3 w-3 shrink-0 text-gold/35" />
                <p className="font-sans text-[11px] italic leading-relaxed text-primary-foreground/45">
                  {'"'}
                  <TypewriterText
                    text={q}
                    speed={22}
                    startDelay={i * 400 + 300}
                    className="not-italic text-primary-foreground/45"
                  />
                  {'"'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
