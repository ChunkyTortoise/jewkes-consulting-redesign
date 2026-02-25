import { Zap, FileText as FileIcon, Search, Shield, Stethoscope, DollarSign, BarChart3 } from "lucide-react"

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
    replaces: "$5K-15K life care planner on cases that don't need it",
    icon: DollarSign,
  },
  {
    name: "Deposition prep prompt library",
    replaces: "8-15 hours of deposition prep per complex witness",
    icon: BarChart3,
  },
]

const deliverables = [
  {
    number: "1",
    name: "Smith.ai + Intaker + Clio Grow intake setup",
    timeline: "2-3 weeks",
  },
  {
    number: "2",
    name: "Case Status build — milestones, check-ins, review trigger",
    timeline: "1-2 weeks",
  },
  {
    number: "3",
    name: "Workflow automation — missed call text-back, reminders, follow-ups",
    timeline: "1 week",
  },
  {
    number: "4",
    name: "AI ethics policy + engagement letter update",
    timeline: "3-5 days",
  },
  {
    number: "5",
    name: "Firm technology security setup — MFA, encrypted email, WISP",
    timeline: "2-3 days",
  },
  {
    number: "6",
    name: "Clio practice management build — templates, fields, deadline rules, Draft library",
    timeline: "2-3 weeks",
  },
  {
    number: "7",
    name: "Trust accounting + IOLTA configuration",
    timeline: "1 week",
  },
  {
    number: "8",
    name: "Tool onboarding + training — EvenUp, Supio, OrbDoc, CoCounsel, Expert Institute, Briefpoint, Tracers, Trellis, CaseYak, Reviewly.ai, Ringler, LawKPIs",
    timeline: "1-2 weeks",
  },
  {
    number: "9",
    name: "Marketing automation — ChatGPT content, Reviewly.ai, Google Alerts",
    timeline: "1-2 weeks",
  },
  {
    number: "10",
    name: "Advanced workflow buildout — Section 3 workflow automations",
    timeline: "6-8 weeks",
  },
  {
    number: "11",
    name: "Skribe setup + RAG transcript pipeline",
    timeline: "1 week",
  },
  {
    number: "12",
    name: "RAG system builds — expert witness DB, case library, medical literature",
    timeline: "Fixed-cost builds",
  },
  {
    number: "13",
    name: "Ongoing support + optimization — updates, troubleshooting, quarterly audits",
    timeline: "Ongoing",
  },
]

export function DeliverablesSection() {
  return (
    <section id="deliverables" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Section 4 &middot; Configuration &amp; Setup
        </p>
        <h2 className="mb-5 font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
          What I Can Build For You
        </h2>
        <p className="mb-12 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
          Configuration, integration, and training — you don{"'"}t touch the technical setup.
          Each deliverable is scoped, built, and handed off with documentation. Staff training
          included. 30-day post-launch support on every engagement.
        </p>

        {/* Deliverables table */}
        <div className="mb-16 overflow-hidden rounded-sm border border-border">
          <div className="bg-navy px-5 py-3">
            <p className="font-sans text-sm font-bold text-primary-foreground">Engagement Deliverables</p>
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

        {/* Additional automations */}
        <div className="mb-4">
          <div className="mb-1 flex items-center gap-2">
            <Zap className="h-4 w-4 text-gold" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
              Additional Workflow Automations
            </p>
          </div>
          <p className="mb-6 font-sans text-xs text-muted-foreground">
            Built on tools already in your stack — no additional subscription required.
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
                <p className="mt-1 font-sans text-[10px] font-bold text-gold">$0 incremental</p>
              </div>
            </div>
          ))}
        </div>

        {/* Data Governance callout from SOW */}
        <div className="mt-12 rounded-sm border border-gold/20 bg-navy p-6">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Data Governance & Vendor Security — Included in Every Engagement
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Vendor security review",
                desc: "Retention terms, training-on-data defaults, access controls, breach notice, and subcontractors for each AI vendor.",
              },
              {
                title: "Data classification & routing policy",
                desc: "What categories of data enter which vendor, implemented as Clio/Zapier workflow gates — not just a PDF policy.",
              },
              {
                title: "Output verification protocol",
                desc: "Citation pin-cites, exhibit source links, and \"verified\" stamps before anything reaches court or a demand.",
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
