"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, Clock, ArrowDown } from "lucide-react"

const tiers = [
  {
    id: "foundation",
    name: "Foundation",
    tag: "Start Here — 1 Week",
    consultingFee: "$1,000 flat",
    toolsCost: "+ $20-102/mo new tools",
    highlight: true,
    timeline: "Everything live in 1 week",
    description: "The pre-lit pipeline built around your four tools. Ten deliverables. Zero dropped tools.",
    items: [
      "Claude Pro configured for your practice (2 custom Projects: Firm Assistant + Med Mal Research)",
      "Clio deadline automation: SOL, ante litem cascades (6/12-mo gov\u2019t), statute of repose",
      "Eve Legal integration audit + pre-lit workflow map",
      "AI Ethics Policy (ABA 512) + client disclosure clause + AI supply chain map",
      "MFA + security baseline + vendor contact sheet",
      "5-8 Clio templates + branded email signature",
      "Google Business Profile audit + review request workflow + written recommendation report",
    ],
  },
  {
    id: "practice-automation",
    name: "Practice Automation",
    tag: "Builds on Foundation",
    consultingFee: "$3,500 flat",
    toolsCost: "+ ~$370-660/mo new tools",
    highlight: false,
    timeline: "3-4 weeks",
    description: "Claude API custom tools, demand pipeline, and client automation built alongside Eve.",
    items: [
      "Claude API custom tools: ante litem generator, demand reviewer, client updater",
      "Clio + Zapier automations: intake routing, deadline triggers, records follow-up",
      "Demand pipeline: EvenUp / Precedent / AI Demand Pro tiered by case complexity",
      "Medical chronology workflow: Tavrn or Superinsight.ai + carrier counter-AI setup",
      "Quilia / Hona client communication (~$10/active client/mo)",
      "VERA ($29/mo) deadline extraction + deposition summary workflow",
    ],
  },
  {
    id: "knowledge-intelligence",
    name: "Knowledge + Intelligence",
    tag: "Compounding Advantage",
    consultingFee: "$7,500 flat",
    toolsCost: "+ ~$100-200/mo",
    highlight: false,
    timeline: "6-8 weeks after Tier 2",
    description: "Proprietary knowledge databases that compound in value with every case you add.",
    items: [
      "Personal case library RAG: demands, briefs, mediation statements indexed by case type",
      "Defense carrier + IME doctor playbook: your experience built into a queryable database",
      "Medical literature + standard-of-care research pipeline for med mal",
      "Georgia verdict intelligence: county-level data and settlement benchmarks",
      "GEO optimization: AI search citations for Griffin, LaGrange, and Tyrone PI queries",
    ],
  },
]

const costTable = [
  { tool: "Clio Advanced + Grow", cost: "$119/mo", note: "Foundation for deadline automation and matter management" },
  { tool: "Clio Draft", cost: "~$49-79/mo", note: "Document template automation" },
  { tool: "Claude Pro", cost: "$20/mo", note: "2 custom Projects: Firm Assistant + Med Mal Research" },
  { tool: "Claude API", cost: "~$10-60/mo", note: "Usage-based; ante litem generator, demand reviewer, client updater" },
  { tool: "OpenCase Pro", cost: "$82/mo", note: "Legal research in Word while you draft; verified Georgia citations" },
  { tool: "EvenUp", cost: "Case-based (2025 pricing)", note: "Express Demands for routine MVA; full suite for complex cases" },
  { tool: "CoCounsel", cost: "$0-65/mo", note: "Fastcase free via GA Bar; CoCounsel adds AI memos + cross-exam outlines" },
  { tool: "VERA", cost: "$29/mo", note: "Deadline extraction from court docs; native Clio integration" },
  { tool: "Quilia / Hona", cost: "~$10/active client/mo", note: "Client status updates + communication automation" },
  { tool: "Tavrn", cost: "$299.99/mo", note: "20 record requests included; medical chronologies in ~1 hour" },
  { tool: "Superinsight.ai", cost: "$28-54/chronology", note: "Best per-case value; 99%+ accuracy, pure AI (Rule 1.6 clean)" },
  { tool: "DigitalOwl", cost: "~$100-300/case", note: "Complex med mal with voluminous handwritten records" },
  { tool: "OrbDoc", cost: "$0 (free)", note: "Bill auditing against 3.3M Medicare rules and NCCI edits" },
  { tool: "Tracers", cost: "~$39-150/mo", note: "Skip tracing + insurance carrier discovery" },
  { tool: "TrialPad", cost: "~$130 one-time", note: "iPad courtroom evidence presentation" },
  { tool: "Microsoft Copilot", cost: "~$30/mo", note: "Email + Word AI (requires M365)" },
  { tool: "ChatGPT Plus", cost: "~$20/mo", note: "Same price as Claude Pro \u2014 Claude Pro recommended for legal context" },
  { tool: "Jamie", cost: "~$24/mo", note: "Call transcription + Clio case notes" },
  { tool: "Gavel", cost: "~$99/mo", note: "Advanced doc automation if Clio Draft insufficient" },
  { tool: "Expert witness RAG", cost: "~$15-30/mo", note: "Running cost after $1,500-2,500 build" },
  { tool: "Personal case library RAG", cost: "~$10-20/mo", note: "Running cost after $800-1,500 build" },
  { tool: "Medical literature RAG", cost: "~$10-20/mo", note: "Running cost after $1,000-2,000 build" },
  { tool: "NotebookLM", cost: "$0", note: "Per-case document querying, Georgia PJIs" },
]

const timelineSteps = [
  { day: "Day 1", title: "Kickoff + Security Baseline", desc: "Access credentials collected, MFA audit and remediation across all firm accounts, vendor contact sheet built" },
  { day: "Day 2", title: "Clio Deadline Automation", desc: "SOL, ante litem (6/12-mo gov\u2019t), statute of repose, discovery cutoffs \u2014 cascading reminders configured and tested" },
  { day: "Day 3", title: "Claude Pro + Eve Audit", desc: "Two custom Claude Projects configured (Firm Assistant + Med Mal Research); Eve integration audit and Clio sync verification" },
  { day: "Day 4", title: "Ethics Policy + Templates", desc: "AI Ethics Policy (ABA 512) + client disclosure clause + AI supply chain map; 5-8 Clio templates + branded email signature" },
  { day: "Day 5", title: "GBP + Workflow Map + Handoff", desc: "Google Business Profile audit + review request workflow; written pre-lit workflow map + recommendation report; 30-min walkthrough call" },
]

export function PricingSection() {
  const [showFullTable, setShowFullTable] = useState(false)

  return (
    <section id="pricing" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Section 6 &middot; Engagement &amp; Pricing
        </p>
        <h2 className="mb-5 font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
          Three engagement tiers. Start with Foundation.
        </h2>
        <p className="mb-8 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
          Three engagement tiers. Start with Foundation &mdash; one week, $1,000 flat, ten deliverables &mdash; then decide.
          Each tier includes configuration, integration, training, staff walkthrough (60-90 min),
          system documentation, and 30-day post-launch support.
        </p>

        {/* Tier cards */}
        <div className="mb-16 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isHighlighted = tier.highlight
            const isThird = tier.id === "knowledge-intelligence"
            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col rounded-sm border p-6 transition-all",
                  isHighlighted
                    ? "border-gold bg-navy text-primary-foreground shadow-lg"
                    : isThird
                    ? "border-navy bg-surface-alt"
                    : "border-border bg-card"
                )}
              >
                {/* Top accent bar */}
                {isHighlighted && (
                  <div className="absolute left-0 right-0 top-0 h-1.5 rounded-t-sm bg-gold" />
                )}
                {isThird && (
                  <div className="absolute left-0 right-0 top-0 h-1.5 rounded-t-sm bg-navy" />
                )}

                <div className="mb-4">
                  <p className={cn(
                    "mb-1 font-sans text-[10px] font-bold uppercase tracking-widest",
                    isHighlighted ? "text-gold" : isThird ? "text-navy/60" : "text-muted-foreground"
                  )}>
                    {tier.tag}
                  </p>
                  <h3 className={cn(
                    "font-serif text-xl font-bold",
                    isHighlighted ? "text-primary-foreground" : "text-navy"
                  )}>{tier.name}</h3>
                  <p className={cn(
                    "mt-1 font-sans text-xs",
                    isHighlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}>{tier.description}</p>
                </div>

                <div className="mb-5">
                  <p className={cn(
                    "font-serif font-bold",
                    isHighlighted ? "text-3xl text-gold" : "text-2xl text-navy"
                  )}>
                    {tier.consultingFee}
                  </p>
                  <p className={cn(
                    "font-sans text-xs",
                    isHighlighted ? "text-primary-foreground/50" : "text-muted-foreground"
                  )}>{tier.toolsCost}</p>
                </div>

                <ul className="mb-6 flex flex-1 flex-col gap-2">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className={cn(
                        "mt-0.5 h-3.5 w-3.5 shrink-0",
                        isHighlighted ? "text-gold" : isThird ? "text-navy/60" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "font-sans text-xs leading-relaxed",
                        isHighlighted ? "text-primary-foreground/80" : "text-foreground"
                      )}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={cn(
                  "flex items-center gap-2 border-t pt-4",
                  isHighlighted ? "border-navy-mid" : "border-border"
                )}>
                  <Clock className={cn(
                    "h-3 w-3",
                    isHighlighted ? "text-primary-foreground/40" : "text-muted-foreground"
                  )} />
                  <p className={cn(
                    "font-sans text-[11px]",
                    isHighlighted ? "text-primary-foreground/50" : "text-muted-foreground"
                  )}>{tier.timeline}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Paralegal comparison */}
        <div className="mb-12 rounded-sm border border-border bg-card p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-sans text-sm font-bold text-navy">Full stack vs. full-time paralegal</p>
              <p className="font-sans text-xs text-muted-foreground">
                Foundation: $20-102/mo in new tools. Full stack: $490-962/mo vs. $4,000-5,200/mo for a paralegal
                in rural Georgia &mdash; while covering intake, communication, record review, research, drafting,
                trial prep, and case closing.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-serif text-2xl font-bold text-gold">10-20%</p>
              <p className="font-sans text-[11px] text-muted-foreground">of paralegal cost</p>
            </div>
          </div>
        </div>

        {/* Foundation Week 1 timeline */}
        <div className="mb-12">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
            Foundation &mdash; Week 1 Schedule
          </p>
          <div className="flex flex-col gap-0">
            {timelineSteps.map((step, i) => (
              <div key={step.day} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-gold bg-card">
                    <span className="font-mono text-[10px] font-bold text-gold">{i + 1}</span>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="h-full w-px bg-border" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-gold">{step.day}</p>
                  <p className="font-sans text-sm font-bold text-navy">{step.title}</p>
                  <p className="font-sans text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost reference table */}
        <div className="overflow-hidden rounded-sm border border-border">
          <div className="flex items-center justify-between bg-navy p-4">
            <div>
              <p className="font-sans text-sm font-bold text-primary-foreground">Monthly Cost Reference</p>
              <p className="font-sans text-[11px] text-primary-foreground/40">
                Third-party subscriptions billed directly by each vendor. No markup on tool costs.
              </p>
            </div>
            <button
              onClick={() => setShowFullTable(!showFullTable)}
              className="flex items-center gap-1 font-sans text-xs text-gold transition-colors hover:text-gold-light"
            >
              {showFullTable ? "Show less" : `View all ${costTable.length} tools`}
              <ArrowDown className={cn("h-3 w-3 transition-transform", showFullTable && "rotate-180")} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-sans text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Tool
                  </th>
                  <th className="px-4 py-2.5 text-left font-sans text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Cost
                  </th>
                  <th className="hidden px-4 py-2.5 text-left font-sans text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {(showFullTable ? costTable : costTable.slice(0, 8)).map((row, i) => (
                  <tr key={row.tool} className={cn("border-b border-border", i % 2 === 0 ? "bg-card" : "bg-muted/20")}>
                    <td className="px-4 py-2.5 font-sans text-xs font-medium text-foreground">{row.tool}</td>
                    <td className="px-4 py-2.5 font-sans text-xs font-bold text-navy">{row.cost}</td>
                    <td className="hidden px-4 py-2.5 font-sans text-xs text-muted-foreground md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!showFullTable && (
            <div className="border-t border-border bg-muted/20 px-4 py-2 text-center">
              <button
                onClick={() => setShowFullTable(true)}
                className="font-sans text-xs text-gold transition-colors hover:text-gold-light"
              >
                + {costTable.length - 8} more tools
              </button>
            </div>
          )}
        </div>

        {/* Where to Start router */}
        <div className="mt-12 rounded-sm border border-gold/20 bg-card p-6">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Where to Start &mdash; Match Your Biggest Problem
          </p>
          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
            {[
              { problem: "Deadline risk: SOL, ante litem, statute of repose", solution: "Deadline Automation (Day 2)" },
              { problem: "Claude / ChatGPT not configured for legal work", solution: "Claude Pro Projects (Day 3)" },
              { problem: "Unsure what Eve is doing for your practice", solution: "Eve Integration Audit (Day 3)" },
              { problem: "No ethics policy or MFA \u2014 compliance exposure", solution: "Ethics Policy + MFA (Days 1 & 4)" },
              { problem: "Build demand pipeline around Eve", solution: "Practice Automation (Tier 2)" },
              { problem: "Searchable case library + carrier intelligence", solution: "Knowledge + Intelligence (Tier 3)" },
            ].map((row) => (
              <div key={row.problem} className="flex items-start gap-2 py-1.5 border-b border-border/50 last:border-0">
                <span className="font-sans text-xs text-muted-foreground">{row.problem}</span>
                <span className="ml-auto shrink-0 font-sans text-xs font-bold text-navy">{row.solution}</span>
              </div>
            ))}
          </div>
        </div>

        {/* About this engagement */}
        <div className="mt-6 rounded-sm border border-border bg-card p-5">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            About This Engagement
          </p>
          <p className="mb-2 font-sans text-sm leading-relaxed text-foreground">
            Every tool in this proposal is selected because it solves a specific problem for a solo
            plaintiff PI/med mal practice, not because of a vendor relationship. Configuration,
            compliance, and workflow automation are scoped to your practice specifically.
          </p>
          <p className="font-sans text-xs leading-relaxed text-muted-foreground">
            These are AI systems built specifically for your practice, using your cases, your experts,
            your venues, and your arguments as the training material. They don{"'"}t exist before they{"'"}re
            built, and they compound in value over time. That{"'"}s the reason to hire a consultant
            rather than just reading the Clio sales page.
          </p>
        </div>
      </div>
    </section>
  )
}
