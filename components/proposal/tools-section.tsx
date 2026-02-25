"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  Phone, Globe, Users, MessageSquare, FileText, Stethoscope, Calendar,
  Shield, Search, BarChart3, Car, UserSearch, Mic, Presentation, Brain,
  BookOpen, Briefcase, Star, Megaphone, Monitor, Volume2, PhoneCall,
  Receipt, TrendingUp, AlertTriangle, ChevronDown, ChevronUp, Award,
  Banknote, Newspaper, Mail, Scale, MapPin, Info, ChevronRight
} from "lucide-react"

type Tool = {
  name: string
  description: string
  cost: string
  icon: React.ComponentType<{ className?: string }>
  tag?: string
  venueNote?: string
  workflowNote?: string
  ethicsNote?: string
}

type Alternative = {
  option: string
  model: string
  cost: string
  bestFor: string
  recommended?: boolean
}

type ProblemAreaExtended = {
  id: string
  number: string
  title: string
  problem: string
  tools: Tool[]
  alternatives?: Alternative[]
  alternativesNote?: string
}

const problemAreas: ProblemAreaExtended[] = [
  {
    id: "intake",
    number: "01",
    title: "Intake & Lead Capture",
    problem: "Leads call after hours, hit voicemail, and hire the next attorney who picks up.",
    tools: [
      {
        name: "Smith.ai + Clio Grow",
        description: "AI + human hybrid receptionist. 24/7 intake coverage. AI handles the initial greeting and intake questions; live receptionist takes over for complex or sensitive conversations. 15-25% more retained cases. The hybrid model matters for med mal and dental mal where SOL and standard-of-care questions surface immediately.",
        cost: "~$370/mo",
        icon: Phone,
        tag: "Start Here",
        ethicsNote: "Ethics: Smith.ai calls must be disclosed as intake assistance, not legal advice. Live receptionist component is bound by your firm's confidentiality requirements. Clio Grow uses a signed BAA for HIPAA compliance.",
      },
      {
        name: "Intaker",
        description: "PI-specific AI chat widget captures website visitors 24/7, qualifies the case type, and routes leads into Clio. One additional signed case per month covers the tool for the year.",
        cost: "~$80/mo",
        icon: Globe,
      },
      {
        name: "Referral Network Management",
        description: "Systematic tracking of referral sources (chiropractors, ER physicians, body shops, attorneys) with automated thank-you workflows, case outcome updates, and referral source ROI tracking in Clio Grow.",
        cost: "$0 incremental",
        icon: Users,
      },
    ],
    alternatives: [
      { option: "Smith.ai", model: "AI + human hybrid", cost: "~$285/mo", bestFor: "Complex PI/med mal; calls needing human judgment", recommended: true },
      { option: "Ruby Receptionists", model: "Human-only", cost: "~$235–360/mo", bestFor: "Brand-focused; less automation" },
      { option: "Answer1", model: "Human-only", cost: "~$160–285/mo", bestFor: "Lower volume; fewer integrations" },
      { option: "Clio Grow alone", model: "Web forms only", cost: "Included in Clio", bestFor: "No live call coverage" },
    ],
    alternativesNote: "For a practice spanning auto wrecks, med mal, and dental mal, the hybrid model matters — calls that immediately surface SOL questions or standard-of-care facts benefit from human judgment, not just a script.",
  },
  {
    id: "communication",
    number: "02",
    title: "Client Communication & Compliance",
    problem: "Failure to communicate is the #1 cause of bar complaints nationally.",
    tools: [
      {
        name: "Case Status",
        description: "Branded client app with automated milestone updates, 138-language AI translation, NPS tracking, and weekly treatment check-ins. Client replies like 'pain is still 7/10, had to miss PT Tuesday' become timestamped, contemporaneous damages evidence.",
        cost: "~$99-149/mo",
        icon: MessageSquare,
        tag: "Priority",
        workflowNote: "Key workflow: Automated weekly treatment check-ins — 'How was your pain level this week? Have you attended all PT appointments?' Client replies are timestamped and documented in the case file as contemporaneous damages evidence that strengthens every demand.",
        ethicsNote: "Ethics: Settlement negotiations, case strategy updates, and bad news conversations must come from you directly. The automation is configured to never trigger on settlement-stage cases.",
      },
      {
        name: "AI Ethics Policy",
        description: "Written AI use policy for your firm, plus updated engagement letter language disclosing AI tool use to clients. ABA Opinion 512 compliant. Covers Rule 1.6(c), Rule 5.3, Rule 1.1.",
        cost: "$0 (one-time)",
        icon: Shield,
      },
      {
        name: "Firm Technology Security Setup",
        description: "MFA across every firm account, encrypted email configuration, written information security plan (Georgia Rule 1.1), password manager setup. Configuration work, not a subscription.",
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
        description: "AI platform built for plaintiff PI. Upload medical records, get a structured demand letter trained on 250,000+ verdicts and settlements. Firms report 20-30% higher settlements.",
        cost: "$300-800/demand",
        icon: FileText,
        tag: "High ROI",
        venueNote: "Georgia venue note: EvenUp's settlement valuations are most accurate in data-dense jurisdictions like Fulton and DeKalb counties. For cases in Fayette, Coweta, Spalding, and Troup counties — where the bulk of your client base falls — the dataset is sparser and valuations should be treated as directional, not definitive. Human judgment on rural Georgia case values still matters.",
        ethicsNote: "Ethics: Attorney review of every demand before it goes out is non-negotiable. EvenUp produces a draft, not a final work product. Some adjusters have started flagging AI-generated demands — human review and customization mitigates that risk.",
      },
      {
        name: "Supio",
        description: "AI medical record review. 500 pages in hours, not weeks. Identifies deviations from standard of care, gaps in care, and contradictions across multiple providers. 97%+ verified accuracy with source linking. Built for med mal and dental mal complexity.",
        cost: "$500-1,000/mo",
        icon: Stethoscope,
      },
      {
        name: "DigitalOwl",
        description: "Raw medical records to organized chronology with timeline, provider summary, and treatment gaps flagged. Complements Supio on complex med mal files with voluminous handwritten records.",
        cost: "~$100-300/case",
        icon: BookOpen,
      },
      {
        name: "OrbDoc + Superinsight.ai (Bill Auditing)",
        description: "OrbDoc compares bills against 3.3 million Medicare rules and NCCI edits. Flags unbundling, upcoding, and duplicates instantly. Superinsight.ai adds PI-specific cross-referencing for deeper analysis.",
        cost: "$0 (OrbDoc free)",
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
        description: "Practice management foundation. CRM, intake forms, e-sign, calendaring, billing. Clio Draft adds document automation with auto-populated templates from case files. Gavel (~$99/mo) available as upgrade if conditional logic exceeds Draft's capabilities.",
        cost: "~$168-198/mo",
        icon: Briefcase,
        tag: "Foundation",
      },
      {
        name: "Briefpoint",
        description: "AI generates discovery documents -- interrogatories, requests for production, requests for admission. Cuts drafting time by up to 95%. Pairs with personal case library RAG.",
        cost: "~$50-100/mo",
        icon: FileText,
      },
      {
        name: "Trust Accounting / LawPay",
        description: "Full configuration of Clio trust accounting plus LawPay integration for compliant IOLTA management. Georgia Bar Rule 1.15 compliance.",
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
        description: "SOL (PI: 2yr; med mal: 2yr discovery/5yr outer; minors: tolled to 18+2), ante litem (6mo counties/municipalities; 12mo State), discovery cutoffs (30 days Georgia), expert disclosure, pre-trial, mediation deadlines -- all with escalating 7/14/30-day reminders.",
        cost: "$0 incremental",
        icon: Calendar,
      },
      {
        name: "Spoliation Letter Automation",
        description: "Customized spoliation letter per defendant type (individual, corporate, trucking, hospital, government entity) generated within minutes of case opening. Preservation letters within 72 hours guaranteed.",
        cost: "$0 incremental",
        icon: AlertTriangle,
      },
      {
        name: "Lien Tracking + Resolution Assistant",
        description: "Tracks all outstanding liens (Medicare, Medicaid, ERISA, provider), calculates running net-to-client at different settlement amounts, and auto-drafts negotiation and waiver letters. Critical given personal liability exposure for missed Medicare liens.",
        cost: "$0 incremental",
        icon: Scale,
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
        description: "Fastcase free via Georgia Bar. CoCounsel adds AI research memos, citation verification, deposition analysis, and cross-examination outlines. Feed it the complaint, answer, and key records -- it produces a cross-examination outline for trial prep.",
        cost: "$0-65/mo",
        icon: Search,
      },
      {
        name: "Trellis",
        description: "Georgia court and judge analytics. See how your assigned judge rules on motions, how defense firms in your venues perform at trial, and historical outcomes by case type.",
        cost: "~$79-149/mo",
        icon: BarChart3,
      },
      {
        name: "CaseYak",
        description: "Free AI settlement value predictor for MVA cases. Useful at intake to triage whether a case justifies the time investment. For internal intake triage only.",
        cost: "$0 (free)",
        icon: Car,
      },
      {
        name: "Expert Institute / Expert Radar",
        description: "1M+ vetted experts across every specialty. Expert Radar AI analyzes an expert's complete litigation history -- prior depositions, Daubert challenges, published opinions. Critical for cert of merit, opposing expert vetting, and new expert discovery.",
        cost: "Quote-based",
        icon: Award,
        tag: "Med Mal Essential",
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
        description: "AI-powered investigative data from 120+ billion records. Locate defendants, identify insurance carriers, find witnesses, research assets. On a truck wreck, identifying the employer's commercial carrier rather than the driver's personal policy changes the recovery entirely.",
        cost: "~$39-150/mo",
        icon: UserSearch,
      },
      {
        name: "Social Media Evidence + Client Monitoring",
        description: "Documents all publicly available social profiles for opposing parties at case opening. Flags client posts that could undercut damages claims before the defense finds them. Preservation memo generated; clients advised what to lock down. Public content only -- Georgia Bar compliant.",
        cost: "$0 (protocol)",
        icon: Globe,
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
        description: "AI-assisted deposition capture. Live captionist monitors in real time while AI verifies and indexes the transcript. Searchable, timestamped transcripts synced to video. Savings vs. traditional reporters can exceed $2,000-4,000 per complex med mal case.",
        cost: "~$349/hr live; ~$50-200/depo standard",
        icon: Mic,
      },
      {
        name: "TrialPad",
        description: "Industry-standard iPad app for courtroom evidence presentation. Annotate documents, callout key passages, zoom into photos, sync to courtroom display.",
        cost: "~$130 one-time",
        icon: Presentation,
      },
      {
        name: "Deposition Prep Workflow",
        description: "CoCounsel + custom prompt templates generate cross-examination outlines, contradiction maps, and risk analyses. Compresses 8-15 hours of deposition prep into under an hour.",
        cost: "$0 incremental",
        icon: Brain,
      },
      {
        name: "Voir Dire Preparation + Juror Research",
        description: "AI analysis of juror questionnaire responses against bias indicators for PI/med mal, custom voir dire question library per case type, and Trellis venue data on historical jury behavior.",
        cost: "$0 incremental",
        icon: Users,
      },
      {
        name: "Case Timeline Exhibits",
        description: "Supio's medical chronology and Clio case milestones assembled into a professional visual timeline exhibit for mediation and trial presentations.",
        cost: "$0-15/mo (Canva Pro)",
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
        description: "Pre-mediation memo combining Trellis venue data, EvenUp damages analysis, and liability assessment into data-supported authority range with low/mid/high scenarios.",
        cost: "$0 incremental",
        icon: Brain,
      },
      {
        name: "Mediation Brief Automation",
        description: "AI-assisted workflow drafting a complete mediation brief from Supio's chronology, EvenUp's damages analysis, and Trellis comparable verdicts. Cuts 4-8 hours to 90 minutes.",
        cost: "$0 incremental",
        icon: FileText,
      },
      {
        name: "Low Offer Response Package",
        description: "Formal written response supported by comparable Georgia verdicts, updated medical projections, and point-by-point liability rebuttal -- drafted and ready in under an hour.",
        cost: "$0 incremental",
        icon: TrendingUp,
      },
      {
        name: "Settlement Disbursement Automation",
        description: "Gavel generates disbursement statement and closing letter with calculated fields -- gross settlement, attorney fee, costs, lien payoffs, net-to-client. Clio trust accounting supports disbursements.",
        cost: "$0 incremental",
        icon: Banknote,
      },
      {
        name: "Ringler (Structured Settlements)",
        description: "Models periodic-payment alternatives to lump-sum settlements for catastrophic injury, TBI, and minor-claimant cases. AI flags eligible settlements automatically. Planner compensated by life insurance company -- no direct cost.",
        cost: "$0 (referral model)",
        icon: Shield,
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
        description: "AI directly in Outlook and Word. Email chain summarization before client calls, correspondence drafting, document review for settlement agreements and insurance coverage letters. Saves 30+ minutes per day.",
        cost: "~$30/mo",
        icon: Monitor,
      },
      {
        name: "WisprFlow / Dragon Legal",
        description: "AI voice dictation captures post-meeting/post-hearing debriefs, structures output into formatted case memos synced to Clio. Recovers 15 minutes per client touchpoint.",
        cost: "~$10-50/mo",
        icon: Volume2,
      },
      {
        name: "Jamie",
        description: "Automatically transcribes and summarizes calls without joining as a visible bot. Syncs to Clio as case notes. Georgia one-party consent applies; recording disclosure included in ethics policy.",
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
        description: "Monitors Google reviews and generates professional, firm-branded response drafts. Automated review request campaigns via SMS and email.",
        cost: "~$49-99/mo",
        icon: Star,
      },
      {
        name: "ChatGPT Pro (Content)",
        description: "Content drafting for blog posts, practice area pages, and social media. All content must comply with Georgia Rules 7.1-7.5 on attorney advertising.",
        cost: "~$20/mo",
        icon: Megaphone,
      },
      {
        name: "Incident + News Monitoring",
        description: "Google Alerts (free) or Mentionlytics (~$69/mo) monitors local news and social media for accidents in your markets before they appear in court filings -- for referral network activation and targeted advertising.",
        cost: "$0-69/mo",
        icon: Newspaper,
      },
      {
        name: "Warm Lead Nurture Sequences",
        description: "Clio Grow case-type-specific SMS and email drip sequences for consultations that don't sign immediately. Recovers signed cases from leads who said 'I need to think about it.'",
        cost: "$0 incremental",
        icon: Mail,
      },
      {
        name: "LawKPIs",
        description: "Dashboard aggregating intake, matter, financial, and productivity data. Practice-area profitability, intake conversion, time-to-cash by case type, referral ROI by office.",
        cost: "~$50/mo",
        icon: BarChart3,
      },
    ],
  },
]

export function ToolsSection() {
  const [expandedArea, setExpandedArea] = useState<string | null>("intake")
  const [expandedAlternatives, setExpandedAlternatives] = useState<Record<string, boolean>>({})
  const [expandedEthics, setExpandedEthics] = useState<Record<string, boolean>>({})
  const headerRef   = useScrollReveal()
  const calloutRef  = useScrollReveal()
  const accordionRef = useScrollReveal()

  const toggleAlternatives = (areaId: string) =>
    setExpandedAlternatives(prev => ({ ...prev, [areaId]: !prev[areaId] }))

  const toggleEthics = (toolName: string) =>
    setExpandedEthics(prev => ({ ...prev, [toolName]: !prev[toolName] }))

  return (
    <section id="tools" className="bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4" ref={headerRef}>
          <p className="reveal mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Section 3 &middot; The Full Stack
          </p>
          <h2 className="reveal reveal-delay-1 mb-3 font-serif text-3xl font-bold text-navy text-balance md:text-4xl">
            Tools by Problem Area
          </h2>
          <p className="reveal reveal-delay-2 mb-5 max-w-3xl font-sans text-sm leading-relaxed text-muted-foreground">
            Thirty-plus tools across eleven problem areas form the infrastructure this system runs on.
            Each solves a specific, expensive problem. No required order &mdash; pick what matches your
            biggest pain point first. Everything connects to Clio.
          </p>
        </div>

        {/* Recommendation callout */}
        <div className="reveal mb-12 rounded-sm border-l-4 border-gold bg-card p-5 shadow-sm" ref={calloutRef}>
          <p className="mb-1 font-sans text-xs font-bold uppercase tracking-widest text-gold">
            If you only do one thing after this conversation
          </p>
          <p className="mb-2 font-sans text-sm font-bold text-navy">
            Clio Grow + Smith.ai &mdash; the intake foundation.
          </p>
          <p className="font-sans text-sm leading-relaxed text-foreground">
            Every other tool in this document connects to Clio. And every call that hits voicemail
            after hours is a lead you{"'"}ve already lost &mdash; invisibly, with no record that it happened.
            Clio gives you the foundation everything else feeds into. Smith.ai fills the after-hours gap
            and puts qualified leads into your pipeline while you sleep.
          </p>
          <p className="mt-2 font-sans text-xs text-muted-foreground">
            Cost: ~$370/mo &middot; Timeline: 2-3 weeks to your first captured after-hours lead
          </p>
        </div>

        {/* Problem areas */}
        <div className="flex flex-col gap-2" ref={accordionRef}>
          {problemAreas.map((area, areaIdx) => {
            const isExpanded = expandedArea === area.id
            const delayClass = `reveal reveal-delay-${(areaIdx % 5) + 1}`
            return (
              <div key={area.id} className={`${delayClass} overflow-hidden rounded-sm border border-border bg-card`}>
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
                    <div className={cn("grid gap-3", area.tools.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")}>
                      {area.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className={cn(
                            "flex flex-col rounded-sm border p-4 transition-all",
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

                          {/* Venue note */}
                          {tool.venueNote && (
                            <div className="mb-3 flex gap-2 rounded-sm border-l-2 border-gold/40 bg-gold/5 px-3 py-2.5">
                              <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-gold/60" />
                              <p className="font-sans text-[11px] leading-relaxed text-muted-foreground">
                                {tool.venueNote}
                              </p>
                            </div>
                          )}

                          {/* Workflow note */}
                          {tool.workflowNote && (
                            <div className="mb-3 rounded-sm border-l-2 border-navy/30 bg-navy/5 px-3 py-2.5">
                              <p className="mb-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-navy/50">Key workflow</p>
                              <p className="font-sans text-[11px] leading-relaxed text-muted-foreground">
                                {tool.workflowNote.replace("Key workflow: ", "")}
                              </p>
                            </div>
                          )}

                          <div className="mt-auto flex items-center justify-between gap-2 pt-1">
                            <p className="font-sans text-xs font-bold text-navy">
                              {tool.cost}
                            </p>
                            {/* Ethics toggle */}
                            {tool.ethicsNote && (
                              <button
                                onClick={() => toggleEthics(tool.name)}
                                className="flex items-center gap-1 rounded-sm px-2 py-1 font-sans text-[10px] font-medium italic text-muted-foreground/60 transition-colors hover:bg-muted hover:text-muted-foreground"
                              >
                                <Info className="h-3 w-3" />
                                Ethics {"&"} Risk
                                <ChevronRight className={cn("h-3 w-3 transition-transform", expandedEthics[tool.name] && "rotate-90")} />
                              </button>
                            )}
                          </div>

                          {/* Ethics note collapsible */}
                          {tool.ethicsNote && expandedEthics[tool.name] && (
                            <p className="mt-2 font-sans text-[11px] italic leading-relaxed text-muted-foreground/60 border-t border-border pt-2">
                              {tool.ethicsNote}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Alternatives table */}
                    {area.alternatives && (
                      <div className="mt-4">
                        <button
                          onClick={() => toggleAlternatives(area.id)}
                          className="flex items-center gap-1.5 font-sans text-xs font-medium text-muted-foreground transition-colors hover:text-navy"
                        >
                          <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", expandedAlternatives[area.id] && "rotate-90")} />
                          Compare alternatives
                        </button>
                        {expandedAlternatives[area.id] && (
                          <div className="mt-3 rounded-sm border border-border bg-card overflow-hidden">
                            <div className="overflow-x-auto">
                              <table className="w-full text-left">
                                <thead>
                                  <tr className="border-b border-border bg-muted/40">
                                    <th className="px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Option</th>
                                    <th className="px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Model</th>
                                    <th className="px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Cost</th>
                                    <th className="px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Best For</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {area.alternatives.map((alt, i) => (
                                    <tr
                                      key={alt.option}
                                      className={cn(
                                        "border-b border-border last:border-0",
                                        alt.recommended && "bg-gold/5"
                                      )}
                                    >
                                      <td className="px-3 py-2.5">
                                        <div className="flex items-center gap-1.5">
                                          <span className="font-sans text-xs font-bold text-navy">{alt.option}</span>
                                          {alt.recommended && (
                                            <span className="rounded-sm bg-gold/15 px-1.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-gold">Rec.</span>
                                          )}
                                        </div>
                                      </td>
                                      <td className="px-3 py-2.5 font-sans text-xs text-muted-foreground">{alt.model}</td>
                                      <td className="px-3 py-2.5 font-sans text-xs font-medium text-navy">{alt.cost}</td>
                                      <td className="px-3 py-2.5 font-sans text-xs text-muted-foreground">{alt.bestFor}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            {area.alternativesNote && (
                              <div className="border-t border-border bg-muted/20 px-3 py-2.5">
                                <p className="font-sans text-[11px] italic leading-relaxed text-muted-foreground/70">
                                  {area.alternativesNote}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
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
