import { Zap, FileText as FileIcon, Search, Shield, Stethoscope, DollarSign, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const automations = [
  {
    name: "Custom client onboarding packets",
    replaces: "Manual per-case-type packet creation at engagement",
    icon: FileIcon,
  },
  {
    name: "Complaint first-draft workflow",
    replaces: "2-4 hours of complaint drafting per new filing",
    icon: FileIcon,
  },
  {
    name: "Insurance policy analysis",
    replaces: "45-minute manual policy review per case",
    icon: Search,
  },
  {
    name: "Opposing counsel + expert research",
    replaces: "Half-day pre-mediation manual research",
    icon: Search,
  },
  {
    name: "Med mal viability pre-screen",
    replaces: "Thousands in premature expert review costs",
    icon: Stethoscope,
  },
  {
    name: "Future medical cost projection",
    replaces: "$5K-15K life care planner on cases that don\u2019t need it",
    icon: DollarSign,
  },
  {
    name: "Deposition prep prompt library",
    replaces: "8-15 hours of deposition prep per complex witness",
    icon: BarChart3,
  },
]

const foundationDeliverables = [
  { number: "1", name: "Kickoff call + access credentials collected", timeline: "Day 1" },
  { number: "2", name: "MFA audit + remediation across all firm accounts", timeline: "Day 1" },
  { number: "3", name: "Clio deadline automation: SOL, ante litem (6/12-mo gov\u2019t), statute of repose, discovery cutoffs \u2014 cascading reminders configured and tested", timeline: "Day 2" },
  { number: "4", name: "Claude Pro configured \u2014 Jewkes Firm Assistant Project (GA PI rules, firm voice, ante litem templates, demand letter structure, 9-11-9.1 affidavit checklist)", timeline: "Day 3" },
  { number: "5", name: "Claude Pro configured \u2014 Med Mal Research Project (standard-of-care templates, SB 68 bifurcation prompts, expert qualification checklist)", timeline: "Day 3" },
  { number: "6", name: "Eve Legal integration audit: Clio sync verification, pre-lit workflow map showing where Eve starts and stops, Colossus-optimized output check", timeline: "Day 3" },
  { number: "7", name: "AI Ethics Policy (ABA 512) + client disclosure clause", timeline: "Day 4" },
  { number: "8", name: "AI supply chain map: data flows documented for Eve, Claude, OpenCase, OpenClaw", timeline: "Day 4" },
  { number: "9", name: "5-8 Clio templates + branded email signature", timeline: "Day 4" },
  { number: "10", name: "Google Business Profile audit + review request workflow + written pre-lit workflow map + recommendation report + 30-min walkthrough call", timeline: "Day 5" },
]

const practiceAutomationDeliverables = [
  { number: "1", name: "Claude API custom tools: ante litem generator, demand reviewer, client status updater", timeline: "Week 1" },
  { number: "2", name: "Clio + Zapier automations: intake routing, deadline reminders, records follow-up triggers", timeline: "Week 1-2" },
  { number: "3", name: "Demand pipeline: EvenUp / Precedent / AI Demand Pro tiered by case complexity + carrier counter-AI setup (Colossus-aware demand formatting)", timeline: "Week 2" },
  { number: "4", name: "Medical chronology workflow: Tavrn or Superinsight.ai configured, ICD-10 consistency checks, source-linked outputs", timeline: "Week 2-3" },
  { number: "5", name: "Quilia / Hona client communication: automated milestone updates, weekly treatment check-ins", timeline: "Week 3" },
  { number: "6", name: "VERA integration: deadline extraction from court documents + deposition summary workflow", timeline: "Week 3" },
  { number: "7", name: "HIPAA vendor review: confirm BAA coverage for all AI tools handling PHI", timeline: "Week 3" },
  { number: "8", name: "2 training sessions + full documentation handoff", timeline: "Week 4" },
]

const knowledgeDeliverables = [
  { number: "1", name: "Personal case library RAG: demands, briefs, and mediation statements indexed by case type, injury, and venue \u2014 queryable from Claude", timeline: "Weeks 1-2" },
  { number: "2", name: "Defense carrier + IME doctor playbook: your defense background turned into a queryable database of carrier tendencies, IME patterns, and counter-strategies", timeline: "Weeks 2-3" },
  { number: "3", name: "Medical literature + standard-of-care research pipeline for med mal: cert of merit support, expert qualification, SB 68 bifurcation prompts", timeline: "Weeks 3-4" },
  { number: "4", name: "Georgia verdict intelligence: CaseMetrix county-level data + Lex Machina judge analytics for Spalding, Troup, and Pike courts", timeline: "Weeks 4-5" },
  { number: "5", name: "GEO optimization: content, schema markup, and Google Business Profile for AI search citations in Griffin, LaGrange, and Tyrone markets", timeline: "Weeks 6-8" },
]

type Deliverable = { number: string; name: string; timeline: string }

function TierDeliverables({
  title,
  subtitle,
  badge,
  deliverables,
  accent,
}: {
  title: string
  subtitle: string
  badge: string
  deliverables: Deliverable[]
  accent: "gold" | "navy" | "muted"
}) {
  const accentClass = {
    gold: "border-gold/40 bg-gold/5",
    navy: "border-navy/20 bg-navy/5",
    muted: "border-border bg-card",
  }[accent]

  return (
    <div className={cn("mb-8 overflow-hidden rounded-sm border", accentClass)}>
      <div className={cn(
        "px-5 py-4",
        accent === "gold" ? "bg-navy" : accent === "navy" ? "bg-surface-alt" : "bg-muted/30"
      )}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className={cn(
              "mb-0.5 font-sans text-[10px] font-bold uppercase tracking-widest",
              accent === "gold" ? "text-gold" : "text-muted-foreground"
            )}>{badge}</p>
            <p className={cn(
              "font-sans text-sm font-bold",
              accent === "gold" ? "text-primary-foreground" : "text-navy"
            )}>{title}</p>
          </div>
          <p className={cn(
            "shrink-0 font-sans text-xs",
            accent === "gold" ? "text-primary-foreground/50" : "text-muted-foreground"
          )}>{subtitle}</p>
        </div>
      </div>
      <div className="divide-y divide-border">
        {deliverables.map((d) => (
          <div key={d.number} className="flex items-center gap-4 bg-card px-5 py-3 transition-colors hover:bg-muted/30">
            <span className="w-6 shrink-0 font-mono text-xs font-bold text-gold">{d.number}</span>
            <span className="flex-1 font-sans text-xs text-foreground">{d.name}</span>
            <span className="shrink-0 font-sans text-[11px] font-medium text-muted-foreground">{d.timeline}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DeliverablesSection() {
  return (
    <section id="deliverables" className="relative bg-surface-alt px-6 py-24">
      {/* Gold hairline at top signals phase boundary within the light section group */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gold/25" />
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Section 4 &middot; Configuration &amp; Setup
        </p>
        <h2 className="mb-5 font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
          What I Build For You
        </h2>
        <p className="mb-12 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
          Configuration, integration, and training &mdash; you don{"'"}t touch the technical setup.
          Each deliverable is scoped, built, and handed off with documentation. Staff training
          included. 30-day post-launch support on every engagement.
        </p>

        {/* Three-tier deliverables */}
        <TierDeliverables
          title="Foundation"
          subtitle="$1,000 flat | 1 week"
          badge="Start Here"
          deliverables={foundationDeliverables}
          accent="gold"
        />
        <TierDeliverables
          title="Practice Automation"
          subtitle="$3,500 flat | 3-4 weeks"
          badge="Builds on Foundation"
          deliverables={practiceAutomationDeliverables}
          accent="navy"
        />
        <TierDeliverables
          title="Knowledge + Intelligence"
          subtitle="$7,500 flat | 6-8 weeks"
          badge="Compounding Advantage"
          deliverables={knowledgeDeliverables}
          accent="muted"
        />

        {/* Additional automations */}
        <div className="mb-4 mt-8">
          <div className="mb-1 flex items-center gap-2">
            <Zap className="h-4 w-4 text-gold" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
              Additional Workflow Automations
            </p>
          </div>
          <p className="mb-6 font-sans text-xs text-muted-foreground">
            Built on tools already in your stack &mdash; no additional subscription required.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {automations.map((a) => (
            <div key={a.name} className="flex gap-3 rounded-sm border border-border bg-card p-4">
              <a.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
              <div>
                <p className="mb-1 font-sans text-xs font-bold text-navy">{a.name}</p>
                <p className="font-sans text-[11px] leading-relaxed text-muted-foreground">
                  Replaces: {a.replaces}
                </p>
                <p className="mt-1 font-sans text-xs font-bold text-gold">$0 incremental</p>
              </div>
            </div>
          ))}
        </div>

        {/* Data Governance callout from SOW */}
        <div className="mt-12 rounded-sm border border-gold/20 bg-navy p-6">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Data Governance &amp; Vendor Security &mdash; Included in Every Engagement
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Vendor security review",
                desc: "Retention terms, training-on-data defaults, access controls, breach notice, and subcontractors for each AI vendor.",
              },
              {
                title: "Data classification & routing policy",
                desc: "What categories of data enter which vendor, implemented as Clio/Zapier workflow gates \u2014 not just a PDF policy.",
              },
              {
                title: "Output verification protocol",
                desc: "Citation pin-cites, exhibit source links, and \u201cverified\u201d stamps before anything reaches court or a demand.",
              },
              {
                title: "AI disclosure posture documentation",
                desc: "Pre-planned disclosure position for AI-assisted work product and litigation funding coordination under SB 69.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-2">
                <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" />
                <div>
                  <p className="font-sans text-xs font-bold text-primary-foreground">{item.title}</p>
                  <p className="font-sans text-[11px] leading-relaxed text-primary-foreground/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
