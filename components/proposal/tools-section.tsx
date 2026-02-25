"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Phone, Globe, Users, MessageSquare, FileText, Stethoscope, Calendar,
  Shield, Search, BarChart3, Car, UserSearch, Mic, Presentation, Brain,
  BookOpen, Briefcase, Star, Megaphone, Monitor, Volume2, PhoneCall,
  Receipt, TrendingUp, AlertTriangle, ChevronDown, ChevronUp
} from "lucide-react"

type Tool = {
  name: string
  description: string
  cost: string
  icon: React.ComponentType<{ className?: string }>
  tag?: string
}

type ProblemArea = {
  id: string
  number: string
  title: string
  problem: string
  tools: Tool[]
}

const problemAreas: ProblemArea[] = [
  {
    id: "intake",
    number: "01",
    title: "Intake & Lead Capture",
    problem: "Leads call after hours, hit voicemail, and hire the next attorney who picks up.",
    tools: [
      {
        name: "Smith.ai + Clio Grow",
        description: "AI + human hybrid receptionist. 24/7 intake coverage. AI handles the initial greeting and intake questions; live receptionist takes over for complex or sensitive conversations. 15-25% more retained cases. Clio Grow manages leads, automates follow-up, and feeds structured intake data into your case management. The hybrid model matters for med mal and dental mal where SOL and standard-of-care questions surface immediately.",
        cost: "~$370/mo",
        icon: Phone,
        tag: "Start Here",
      },
      {
        name: "Intaker",
        description: "PI-specific AI chat widget captures website visitors 24/7, qualifies the case type, and routes leads into Clio. One additional signed case per month covers the tool for the year.",
        cost: "~$80/mo",
        icon: Globe,
      },
      {
        name: "Referral Network Management",
        description: "Systematic tracking of referral sources with automated thank-you workflows, case outcome updates, and referral source ROI tracking in Clio Grow.",
        cost: "$0 incremental",
        icon: Users,
      },
    ],
  },
  {
    id: "communication",
    number: "02",
    title: "Client Communication & Compliance",
    problem: "Failure to communicate is the #1 cause of bar complaints nationally.",
    tools: [
      {
        name: "Case Status",
        description: "Branded client app with automated milestone updates, 138-language AI translation, NPS tracking, and weekly treatment check-ins. The check-in workflow sends automated texts — client replies like 'pain is still 7/10, had to miss PT Tuesday' become timestamped, contemporaneous damages evidence that strengthens your demand.",
        cost: "~$99-149/mo",
        icon: MessageSquare,
        tag: "Priority",
      },
      {
        name: "AI Ethics Policy",
        description: "Written AI use policy for your firm, plus updated engagement letter language disclosing AI tool use to clients. ABA Opinion 512 compliant.",
        cost: "$0 (one-time)",
        icon: Shield,
      },
    ],
  },
  {
    id: "demands",
    number: "03",
    title: "Demand Letters & Record Review",
    problem: "Demand letters take 5-15 hours and medical records take weeks to organize.",
    tools: [
      {
        name: "EvenUp",
        description: "AI platform built for plaintiff PI. Upload medical records, get a structured demand letter trained on 250,000+ verdicts and settlements. Firms report 20-30% higher settlements. Georgia venue caveat: valuations are most accurate in data-dense jurisdictions like Fulton/DeKalb. For Fayette, Spalding, and Troup counties, treat valuations as directional.",
        cost: "$300-800/demand",
        icon: FileText,
        tag: "High ROI",
      },
      {
        name: "Supio",
        description: "AI medical record review. 500 pages in hours, not weeks. Identifies deviations from standard of care, gaps in care, and contradictions across multiple providers. 97%+ verified accuracy with source linking. One firm saved 437 hours across six cases. Built for med mal and dental mal complexity.",
        cost: "$500-1,000/mo",
        icon: Stethoscope,
      },
      {
        name: "DigitalOwl",
        description: "Raw medical records to organized chronology with timeline, provider summary, and treatment gaps flagged. Particularly valuable for med mal.",
        cost: "~$100-300/case",
        icon: BookOpen,
      },
      {
        name: "OrbDoc (Bill Auditing)",
        description: "Compares bills against 3.3 million Medicare rules and NCCI edits. Flags unbundling, upcoding, and duplicates instantly.",
        cost: "$0 (free)",
        icon: Receipt,
      },
    ],
  },
  {
    id: "case-management",
    number: "04",
    title: "Case Management & Documents",
    problem: "Producing the same 10-15 document types over and over from scratch.",
    tools: [
      {
        name: "Clio Advanced + Draft",
        description: "Practice management foundation. CRM, intake forms, e-sign, calendaring, billing. Document automation with auto-populated templates from case files.",
        cost: "~$168-198/mo",
        icon: Briefcase,
        tag: "Foundation",
      },
      {
        name: "Briefpoint",
        description: "AI generates discovery documents — interrogatories, requests for production, requests for admission. Cuts drafting time by up to 95%.",
        cost: "~$99/mo",
        icon: FileText,
      },
      {
        name: "Trust Accounting / LawPay",
        description: "Full configuration of Clio trust accounting plus LawPay integration for compliant IOLTA management.",
        cost: "$0-49/mo",
        icon: Shield,
      },
    ],
  },
  {
    id: "deadlines",
    number: "05",
    title: "Deadline & Compliance Automation",
    problem: "One missed SOL is a malpractice claim. One missed ante litem is a permanent bar to recovery.",
    tools: [
      {
        name: "Full Litigation Deadline Management",
        description: "SOL, ante litem (6/12-mo gov't), discovery cutoffs, expert disclosure, pre-trial, mediation deadlines — all with escalating 7/14/30-day reminders.",
        cost: "$0 incremental",
        icon: Calendar,
      },
      {
        name: "Spoliation Letter Automation",
        description: "Customized spoliation letter per defendant type generated within minutes of case opening. Preservation letters within 72 hours guaranteed.",
        cost: "$0 incremental",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "research",
    number: "06",
    title: "Legal Research & Case Intelligence",
    problem: "Research takes hours and you don't know what a case is worth until deep into it.",
    tools: [
      {
        name: "Fastcase + CoCounsel",
        description: "Fastcase free via Georgia Bar. CoCounsel adds AI research memos, citation verification, deposition analysis, and cross-examination outlines.",
        cost: "$0-65/mo",
        icon: Search,
      },
      {
        name: "Trellis",
        description: "Georgia court and judge analytics. See how your assigned judge rules on motions before you file. How defense firms in your venues perform at trial.",
        cost: "~$79-149/mo",
        icon: BarChart3,
      },
      {
        name: "CaseYak",
        description: "Free AI settlement value predictor for MVA cases. Useful at intake to triage whether a case justifies the time investment.",
        cost: "$0 (free)",
        icon: Car,
      },
    ],
  },
  {
    id: "investigation",
    number: "07",
    title: "Investigation",
    problem: "Locating defendants, finding insurance layers, and tracking witnesses manually.",
    tools: [
      {
        name: "Tracers / TLOxp",
        description: "AI-powered investigative data from 120+ billion records. Locate defendants, identify insurance carriers, find witnesses, research assets.",
        cost: "~$39-150/mo",
        icon: UserSearch,
      },
    ],
  },
  {
    id: "trial",
    number: "08",
    title: "Trial Preparation",
    problem: "You try cases. Prep is time-intensive and high-stakes.",
    tools: [
      {
        name: "Skribe",
        description: "AI deposition capture at ~$349/hr vs. $350-500/hr for traditional reporters. Searchable, timestamped transcripts synced to video.",
        cost: "~$349/hr",
        icon: Mic,
      },
      {
        name: "TrialPad",
        description: "Industry-standard iPad app for courtroom evidence presentation. Annotate documents, callout key passages, zoom into photos.",
        cost: "~$130 one-time",
        icon: Presentation,
      },
    ],
  },
  {
    id: "settlement",
    number: "09",
    title: "Settlement & Closing",
    problem: "Mediation preparation is ad hoc and closing a case is still entirely manual.",
    tools: [
      {
        name: "Settlement Authority Memo",
        description: "Pre-mediation memo combining Trellis venue data, EvenUp damages analysis, and liability assessment into data-supported authority range.",
        cost: "$0 incremental",
        icon: Brain,
      },
      {
        name: "Low Offer Response Package",
        description: "Formal written response supported by comparable Georgia verdicts, updated medical projections, and point-by-point liability rebuttal.",
        cost: "$0 incremental",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "productivity",
    number: "10",
    title: "Daily Productivity",
    problem: "Outlook and Word eat 1-2 hours a day in tasks AI can handle in minutes.",
    tools: [
      {
        name: "Microsoft Copilot",
        description: "AI directly in Outlook and Word. Email chain summarization, correspondence drafting, document review. Saves 30+ minutes per day.",
        cost: "~$30/mo",
        icon: Monitor,
      },
      {
        name: "WisprFlow / Dragon Legal",
        description: "AI voice dictation captures post-meeting debriefs, structures output into formatted case memos synced to Clio.",
        cost: "~$10-50/mo",
        icon: Volume2,
      },
      {
        name: "Jamie",
        description: "Automatically transcribes and summarizes calls without joining as a visible bot. Syncs to Clio as case notes.",
        cost: "~$24/mo",
        icon: PhoneCall,
      },
    ],
  },
  {
    id: "bizdev",
    number: "11",
    title: "Business Development",
    problem: "Reviews, content, and referral tracking all fall through the cracks.",
    tools: [
      {
        name: "Reviewly.ai",
        description: "Monitors Google reviews and generates professional, firm-branded response drafts. Automated review request campaigns.",
        cost: "~$49-99/mo",
        icon: Star,
      },
      {
        name: "ChatGPT Pro (Content)",
        description: "Content drafting for blog posts, practice area pages, and social media. Clio Grow tracking identifies which channels drive qualified leads.",
        cost: "~$20/mo",
        icon: Megaphone,
      },
      {
        name: "LawKPIs",
        description: "Dashboard aggregating intake, matter, financial, and productivity data. Practice-area profitability, intake conversion, time-to-cash by case type.",
        cost: "~$50/mo",
        icon: BarChart3,
      },
    ],
  },
]

export function ToolsSection() {
  const [expandedArea, setExpandedArea] = useState<string | null>("intake")

  return (
    <section id="tools" className="bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Section 3 &middot; The Full Stack
          </p>
          <h2 className="mb-3 font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
            Tools by Problem Area
          </h2>
          <p className="mb-5 max-w-3xl font-sans text-sm leading-relaxed text-muted-foreground">
            Eleven off-the-shelf tools form the infrastructure OpenClaw runs on. Each solves
            a specific, expensive problem. No required order — pick what matches your biggest
            pain point first. Everything connects to Clio.
          </p>
        </div>

        {/* Recommendation callout */}
        <div className="mb-12 rounded-sm border-l-4 border-gold bg-card p-5 shadow-sm">
          <p className="mb-1 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            If you only do one thing after this conversation
          </p>
          <p className="mb-2 font-sans text-sm font-bold text-navy">
            Clio Grow + Smith.ai — the intake foundation.
          </p>
          <p className="font-sans text-sm leading-relaxed text-foreground">
            Every other tool in this document connects to Clio. And every call that hits voicemail
            after hours is a lead you{"'"}ve already lost — invisibly, with no record that it happened.
            Clio gives you the foundation everything else feeds into. Smith.ai fills the after-hours gap
            and puts qualified leads into your pipeline while you sleep.
          </p>
          <p className="mt-2 font-sans text-xs text-muted-foreground">
            Cost: ~$370/mo &middot; Timeline: 2-3 weeks to your first captured after-hours lead
          </p>
        </div>

        {/* Problem areas */}
        <div className="flex flex-col gap-2">
          {problemAreas.map((area) => {
            const isExpanded = expandedArea === area.id
            return (
              <div key={area.id} className="overflow-hidden rounded-sm border border-border bg-card">
                <button
                  onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="font-mono text-xs font-bold text-gold">{area.number}</span>
                  <div className="flex-1">
                    <p className="font-sans text-sm font-bold text-navy">{area.title}</p>
                    <p className="font-sans text-xs text-muted-foreground">{area.problem}</p>
                  </div>
                  <span className="shrink-0 font-sans text-xs text-muted-foreground">
                    {area.tools.length} {area.tools.length === 1 ? "tool" : "tools"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>

                {isExpanded && (
                  <div className="border-t border-border bg-muted/20 p-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      {area.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className={cn(
                            "rounded-sm border p-4 transition-all",
                            tool.tag
                              ? "border-gold/30 bg-card shadow-sm"
                              : "border-border bg-card"
                          )}
                        >
                          <div className="mb-2 flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <tool.icon className="h-4 w-4 shrink-0 text-gold" />
                              <p className="font-sans text-sm font-bold text-navy">{tool.name}</p>
                            </div>
                            {tool.tag && (
                              <span className="shrink-0 rounded-sm bg-gold/10 px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-gold">
                                {tool.tag}
                              </span>
                            )}
                          </div>
                          <p className="mb-3 font-sans text-xs leading-relaxed text-muted-foreground">
                            {tool.description}
                          </p>
                          <p className="font-sans text-xs font-bold text-navy">
                            {tool.cost}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
