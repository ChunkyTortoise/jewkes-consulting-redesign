"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, ArrowRight, Clock, ArrowDown } from "lucide-react"

const tiers = [
  {
    id: "foundation",
    name: "Foundation",
    tag: "Recommended First Step",
    monthlyCost: "~$620-760/mo",
    highlight: false,
    timeline: "First captured after-hours lead: week 2-3",
    description: "The intake and communication infrastructure everything else is built on.",
    items: [
      "Clio Advanced + Grow — intake pipeline, matter templates, e-sign, client portal",
      "Georgia deadline automation — SOL, ante litem (6/12-mo gov't), discovery cutoffs with escalating alerts",
      "Clio + Zapier workflow automations — intake routing, deadline triggers, IME scheduling",
      "Smith.ai — script configuration, Clio integration, after-hours intake flow",
      "Case Status — branded client app, milestone workflow, weekly treatment check-in automation",
      "AI ethics policy — Rule 1.6(c), Rule 5.3, Rule 1.1, ABA Opinions 477 and 512",
    ],
  },
  {
    id: "core",
    name: "Core Practice",
    tag: "Full Working Practice",
    monthlyCost: "~$1,350-2,100/mo",
    highlight: true,
    timeline: "Live in 6-8 weeks",
    description: "Foundation + the AI tools that transform how you draft, review, and prepare.",
    items: [
      "Everything in Foundation",
      "OpenClaw AI assistant — configured for plaintiff PI/med mal, wired into Clio + Supio + Smith.ai",
      "EvenUp — account setup, record upload workflow, template configuration for demand types",
      "Supio — onboarding, record intake workflow, causation/deviation flagging configuration",
      "Skribe — deposition capture setup, transcript-to-RAG pipeline configuration",
      "Briefpoint — onboarding, case library integration, brief template configuration",
      "Automated workflow triggers — IME scheduling, demand package assembly",
    ],
  },
  {
    id: "full-stack",
    name: "Full Stack",
    tag: "Compounding Advantage",
    monthlyCost: "~$1,350-2,500/mo",
    highlight: false,
    timeline: "Live in 3-4 months",
    description: "Core Practice + all RAG knowledge databases. The proprietary intelligence layer.",
    items: [
      "Everything in Core Practice",
      "Expert witness testimony database — indexed by specialty, prior testimony, and outcome",
      "Personal case library RAG — demands, briefs, mediation statements indexed by case type",
      "Medical literature + Georgia verdicts — standard-of-care guidelines + county-level verdict data",
      "Lien rules database — Medicare, Medicaid, ERISA, workers' comp procedures",
      "IME doctor database + carrier playbook — defense counter-intelligence built from your experience",
      "Georgia tort reform RAG — SB 68/SB 69 tracking",
    ],
  },
]

const costTable = [
  { tool: "Clio Advanced + Grow", cost: "$119/mo", note: "Foundation for most automations" },
  { tool: "Clio Draft", cost: "~$49-79/mo", note: "Document template automation" },
  { tool: "Smith.ai", cost: "~$285/mo", note: "50-call plan; scales with volume" },
  { tool: "Intaker", cost: "~$80/mo", note: "PI-specific, Clio-integrated" },
  { tool: "Case Status", cost: "~$99-149/mo", note: "Branded client app" },
  { tool: "EvenUp", cost: "$300-800/demand", note: "Per-demand, not subscription" },
  { tool: "Supio", cost: "$500-1,000/mo", note: "Volume-based" },
  { tool: "CoCounsel", cost: "$65/mo", note: "Fastcase free via GA Bar" },
  { tool: "Trellis", cost: "~$79-149/mo", note: "Georgia litigation analytics" },
  { tool: "Briefpoint", cost: "~$50-100/mo", note: "Discovery drafting (solo plan)" },
  { tool: "Tracers", cost: "~$39-150/mo", note: "Skip tracing + insurance discovery" },
  { tool: "Skribe", cost: "~$349/hr live; ~$50-200/depo", note: "Per-deposition; no subscription" },
  { tool: "TrialPad", cost: "~$130 one-time", note: "iPad courtroom presentation" },
  { tool: "Microsoft Copilot", cost: "~$30/mo", note: "Email + Word AI (requires M365)" },
  { tool: "OpenClaw", cost: "~$50/mo", note: "AI legal assistant (requires configuration)" },
  { tool: "Reviewly.ai", cost: "~$49-99/mo", note: "Google review monitoring" },
  { tool: "ChatGPT Pro", cost: "~$20/mo", note: "Content drafting" },
  { tool: "Jamie", cost: "~$24/mo", note: "Call transcription + case notes" },
  { tool: "WisprFlow / Dragon", cost: "~$10-50/mo", note: "Voice-to-case-memo dictation" },
  { tool: "Gavel", cost: "~$99/mo", note: "Advanced doc automation (if Clio Draft insufficient)" },
  { tool: "LawKPIs", cost: "~$50/mo", note: "Practice analytics dashboard" },
  { tool: "Expert witness RAG", cost: "~$15-30/mo", note: "Running cost after $1,500-2,500 build" },
  { tool: "Personal case library RAG", cost: "~$10-20/mo", note: "Running cost after $800-1,500 build" },
  { tool: "Medical literature RAG", cost: "~$10-20/mo", note: "Running cost after $1,000-2,000 build" },
  { tool: "NotebookLM", cost: "$0", note: "Per-case document querying, Georgia PJIs" },
]

const timelineSteps = [
  { week: "Week 1-2", title: "Discovery & Access", desc: "System credentials, current workflow review, Clio + Smith.ai configuration begins" },
  { week: "Week 2-4", title: "Core Setup", desc: "Intake pipeline live, deadline automation active, Case Status milestones configured" },
  { week: "Week 4-6", title: "AI Layer", desc: "OpenClaw assistant configuration, EvenUp + Supio onboarding, document templates" },
  { week: "Week 6-10", title: "Knowledge Databases", desc: "RAG builds, expert witness indexing, carrier playbook population (Full Stack only)" },
  { week: "Final Week", title: "Handoff", desc: "Staff training, documentation handoff, 30-day support period begins, completion invoice issued" },
]

export function PricingSection() {
  const [showFullTable, setShowFullTable] = useState(false)

  return (
    <section id="pricing" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Section 6 &middot; Engagement & Pricing
        </p>
        <h2 className="mb-5 font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
          Three engagement tiers. Pick what fits.
        </h2>
        <p className="mb-8 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
          No locked packages. No required order. Start with what solves your most expensive
          problem first. Each tier includes configuration, integration, training, staff walkthrough
          (60-90 min), system documentation, and 30-day post-launch support.
        </p>

        {/* Engagement fee callout — stated upfront */}
        <div className="mb-12 rounded-sm border border-gold/30 bg-navy p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-1 font-sans text-xs font-bold uppercase tracking-widest text-gold">
                Consulting Engagement Fee
              </p>
              <p className="font-serif text-2xl font-bold text-primary-foreground">
                $6,500 – $12,000
              </p>
              <p className="mt-1 font-sans text-xs leading-relaxed text-primary-foreground/60">
                Covers configuration, integration, training, staff walkthrough, and 30-day post-launch support.
                Distinct from the ongoing tool subscriptions shown in each tier below.
              </p>
            </div>
            <div className="shrink-0 rounded-sm border border-navy-mid bg-navy-mid/40 p-4 text-left sm:text-right">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/50">Payment Terms</p>
              <p className="mt-1 font-sans text-sm font-bold text-primary-foreground">50% at kickoff</p>
              <p className="font-sans text-sm font-bold text-primary-foreground">50% at handoff</p>
              <p className="mt-1 font-sans text-[11px] text-primary-foreground/40">Monthly retainer available</p>
            </div>
          </div>
        </div>

        {/* Tier cards — visually differentiated */}
        <div className="mb-16 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isFoundation = tier.id === "foundation"
            const isCore = tier.id === "core"
            const isFullStack = tier.id === "full-stack"
            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col rounded-sm border p-6 transition-all",
                  isCore
                    ? "border-gold bg-navy text-primary-foreground shadow-lg"
                    : isFullStack
                    ? "border-navy bg-surface-alt"
                    : "border-border bg-card"
                )}
              >
                {/* Top accent bar */}
                {isCore && (
                  <div className="absolute left-0 right-0 top-0 h-1.5 rounded-t-sm bg-gold" />
                )}
                {isFullStack && (
                  <div className="absolute left-0 right-0 top-0 h-1.5 rounded-t-sm bg-navy" />
                )}

                <div className="mb-4">
                  <p className={cn(
                    "mb-1 font-sans text-[10px] font-bold uppercase tracking-widest",
                    isCore ? "text-gold" : isFullStack ? "text-navy/60" : "text-muted-foreground"
                  )}>
                    {tier.tag}
                  </p>
                  <h3 className={cn(
                    "font-serif text-xl font-bold",
                    isCore ? "text-primary-foreground" : "text-navy"
                  )}>{tier.name}</h3>
                  <p className={cn(
                    "mt-1 font-sans text-xs",
                    isCore ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}>{tier.description}</p>
                </div>

                <div className="mb-5">
                  <p className={cn(
                    "font-serif font-bold",
                    isCore ? "text-3xl text-gold" : "text-2xl text-navy"
                  )}>
                    {tier.monthlyCost}
                  </p>
                  <p className={cn(
                    "font-sans text-xs",
                    isCore ? "text-primary-foreground/50" : "text-muted-foreground"
                  )}>monthly tool subscriptions</p>
                </div>

                <ul className="mb-6 flex flex-1 flex-col gap-2">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className={cn(
                        "mt-0.5 h-3.5 w-3.5 shrink-0",
                        isCore ? "text-gold" : isFullStack ? "text-navy/60" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "font-sans text-xs leading-relaxed",
                        isCore ? "text-primary-foreground/80" : "text-foreground"
                      )}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={cn(
                  "flex items-center gap-2 border-t pt-4",
                  isCore ? "border-navy-mid" : "border-border"
                )}>
                  <Clock className={cn(
                    "h-3 w-3",
                    isCore ? "text-primary-foreground/40" : "text-muted-foreground"
                  )} />
                  <p className={cn(
                    "font-sans text-[11px]",
                    isCore ? "text-primary-foreground/50" : "text-muted-foreground"
                  )}>{tier.timeline}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* OpenClaw-first callout */}
        <div className="mb-12 rounded-sm border border-gold/20 bg-gold/5 p-5">
          <p className="mb-1 font-sans text-xs font-bold text-gold">Want to start with OpenClaw first?</p>
          <p className="font-sans text-xs leading-relaxed text-foreground">
            If the AI assistant and knowledge layer are the priority, we can scope an OpenClaw-first
            engagement — configure the assistant, build one or two RAG databases, and layer in the
            practice management tools afterward.
          </p>
        </div>

        {/* Paralegal comparison */}
        <div className="mb-12 rounded-sm border border-border bg-card p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-sans text-sm font-bold text-navy">Full stack vs. full-time paralegal</p>
              <p className="font-sans text-xs text-muted-foreground">
                The full tool stack at average usage costs roughly 30-40% of what a full-time paralegal costs
                in Peachtree City (~$4,500-5,500/mo), while covering intake, communication, record review,
                research, drafting, trial prep, and case closing. Supio + DigitalOwl: Supio handles most files;
                DigitalOwl reserved for complex med mal with voluminous handwritten records.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-serif text-2xl font-bold text-gold">30-40%</p>
              <p className="font-sans text-[11px] text-muted-foreground">of paralegal cost</p>
            </div>
          </div>
        </div>

        {/* Project timeline */}
        <div className="mb-12">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
            Engagement Timeline
          </p>
          <div className="flex flex-col gap-0">
            {timelineSteps.map((step, i) => (
              <div key={step.week} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-gold bg-card">
                    <span className="font-mono text-[10px] font-bold text-gold">{i + 1}</span>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="h-full w-px bg-border" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-gold">{step.week}</p>
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

        {/* Where to Start - Quick-Start Router (relocated from Opportunity) */}
        <div className="mt-12 rounded-sm border border-gold/20 bg-card p-6">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Where to Start &mdash; Match Your Biggest Problem
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

        {/* About OpenClaw Consulting */}
        <div className="mt-6 rounded-sm border border-border bg-card p-5">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            About OpenClaw Consulting
          </p>
          <p className="mb-2 font-sans text-sm leading-relaxed text-foreground">
            OpenClaw Consulting specializes in AI implementation for legal practices &mdash;
            configuration, compliance, and workflow automation. Every tool in this proposal is
            selected because it solves a specific problem for a solo plaintiff PI/med mal practice,
            not because of a vendor relationship.
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
