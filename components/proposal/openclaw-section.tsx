"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Users, FileEdit, Brain, TrendingUp,
  UserCheck, MessageSquare, FileText as FileTextIcon, Shield, DollarSign, Clipboard,
  PenTool, BookOpen, Scale, FileCheck, Gavel, AlertOctagon, Swords, Package,
  Search, Target, BarChart3, Link2, MapPin, Award, FileSearch, Truck,
  BadgeCheck, Crosshair, Activity,
  Globe, BookMarked, Star, Building, Megaphone, TrendingDown, Info
} from "lucide-react"

const categories = [
  {
    id: "client",
    label: "Client-Facing",
    color: "#60a5fa",
    icon: Users,
    capabilities: [
      { name: "Client Intake Screening", desc: "Reads Smith.ai lead data, assesses fault, injury, treatment, and insurance." },
      { name: "Client FAQ & Status", desc: "Pulls Clio matter status and answers client questions in your voice." },
      { name: "New Client Onboarding", desc: "Welcome letter, HIPAA auth, fee agreement draft, medical records auths, portal setup." },
      { name: "IME Preparation Letters", desc: "Personalized letter explaining what to expect, how to present." },
      { name: "Client Net Recovery Calculator", desc: "AI calculates net recovery at any proposed settlement value." },
      { name: "LOP Provider Management", desc: "Tracks LOP providers, flags cases approaching settlement, drafts lien reduction requests." },
    ],
  },
  {
    id: "drafting",
    label: "Drafting",
    color: "#c8a84b",
    icon: FileEdit,
    capabilities: [
      { name: "Demand Letter Drafting", desc: "Generates demand outline from Supio's record summary and your strongest prior arguments." },
      { name: "Discovery Drafting", desc: "Interrogatories, RFAs, and RFPs tailored to the specific case type." },
      { name: "Ante Litem Notices", desc: "Auto-generates government entity notices with Georgia's required language." },
      { name: "Mediation Statements", desc: "Pulls from Supio summary, damages record, and case library." },
      { name: "Spoliation Letters", desc: "Drafted same-day when evidence is at risk." },
      { name: "Motions in Limine", desc: "Pre-drafts responses to the MILs defense files in PI and med mal." },
      { name: "Case Closure Package", desc: "Disbursement statement, closing letter, lien checklist, file retention notice." },
      { name: "Voir Dire Questions", desc: "Tailored to case type and the defense tactics you know they'll use." },
      { name: "Trial Prep Package", desc: "Opening statement outline, exhibit list, and key witness examination outlines." },
      { name: "Wrongful Death & Estate", desc: "Flags personal representative needs, tracks estate deadlines alongside the claim." },
      { name: "Medicare Set-Aside Preparation", desc: "Flags Medicare-eligible cases, gathers CMS submission data." },
      { name: "Minor Settlement Petition", desc: "Drafts petition with damages breakdown, proposed terms, net-to-minor." },
    ],
  },
  {
    id: "intel",
    label: "Intelligence & Prep",
    color: "#2dd4bf",
    icon: Brain,
    capabilities: [
      { name: "Pre-Deposition Briefing", desc: "Queries expert witness database for prior inconsistencies and methodology shifts." },
      { name: "Deposition Outlines", desc: "Builds examination outlines from case file and prior testimony database." },
      { name: "Settlement Range Memo", desc: "Structured case valuation before mediation with comparable Georgia verdicts." },
      { name: "Lien Identification", desc: "Flags Medicare, Medicaid, ERISA, and workers' comp liens at intake." },
      { name: "Venue Analysis", desc: "Which of your three venues produces better plaintiff outcomes." },
      { name: "Expert Witness Qual Memo", desc: "Credential review, prior testimony summary, and Daubert vulnerability assessment." },
      { name: "File Health Audit", desc: "Monthly review of all active Clio matters flagging missing documents." },
      { name: "UIM Tender Tracking", desc: "Tracks tender deadlines, flags missed opportunities, generates coverage memos." },
      { name: "Daubert Challenge Research", desc: "Arguments to exclude defense experts under Georgia's Daubert standard." },
      { name: "OCGA & Appellate Research", desc: "Query Georgia Code sections and Court of Appeals decisions." },
      { name: "Standard-of-Care Deviation Mapping", desc: "Maps deviations from clinical guidelines against the patient's treatment record." },
      { name: "Bad Faith Analytics", desc: "Detects carrier bad faith patterns in UIM/coverage disputes." },
      { name: "Social Media Evidence Monitoring", desc: "Flags client social media activity that could undercut damages claims." },
      { name: "Pre-Suit Collectability Screening", desc: "Asset, coverage, and ownership checks before you commit." },
      { name: "Expert Sourcing & Affidavit Packaging", desc: "Matches specialty, location, and Daubert history." },
      { name: "Offer of Settlement Tracking", desc: "Tracks open offers, calculates fee-shifting exposure." },
      { name: "Comparative Fault Counter-Analysis", desc: "Generates documented counter-narrative against the 50% bar." },
      { name: "Premises Liability Checklist", desc: "Intake-driven evidence map for premises cases." },
    ],
  },
  {
    id: "bizdev",
    label: "Business Development",
    color: "#a78bfa",
    icon: TrendingUp,
    capabilities: [
      { name: "Referral Source Automation", desc: "Thank-you letters to referring chiropractors, ER physicians, and body shops." },
      { name: "Post-Settlement Reviews", desc: "Personalized Google review request timed for after case resolution." },
      { name: "Referral Network Mapping", desc: "Identifies firms most likely to refer PI clients. Generates personalized outreach." },
      { name: "Social Presence Automation", desc: "Weekly content drafted from case activity." },
      { name: "Case ROI Scoring", desc: "Surfaces which intake criteria correlate with highest net recoveries." },
      { name: "Reputation Monitoring", desc: "Alerts when your name appears in verdict databases or bar publications." },
    ],
  },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Client Intake Screening": UserCheck,
  "Client FAQ & Status": MessageSquare,
  "New Client Onboarding": FileTextIcon,
  "IME Preparation Letters": Shield,
  "Client Net Recovery Calculator": DollarSign,
  "LOP Provider Management": Clipboard,
  "Demand Letter Drafting": PenTool,
  "Discovery Drafting": BookOpen,
  "Ante Litem Notices": Scale,
  "Mediation Statements": FileCheck,
  "Spoliation Letters": AlertOctagon,
  "Motions in Limine": Gavel,
  "Case Closure Package": Package,
  "Voir Dire Questions": Swords,
  "Trial Prep Package": Target,
  "Wrongful Death & Estate": BookMarked,
  "Medicare Set-Aside Preparation": Activity,
  "Minor Settlement Petition": FileTextIcon,
  "Pre-Deposition Briefing": Search,
  "Deposition Outlines": FileTextIcon,
  "Settlement Range Memo": BarChart3,
  "Lien Identification": Link2,
  "Venue Analysis": MapPin,
  "Expert Witness Qual Memo": Award,
  "File Health Audit": FileSearch,
  "UIM Tender Tracking": Truck,
  "Daubert Challenge Research": BadgeCheck,
  "OCGA & Appellate Research": BookOpen,
  "Standard-of-Care Deviation Mapping": Crosshair,
  "Bad Faith Analytics": TrendingDown,
  "Social Media Evidence Monitoring": Globe,
  "Pre-Suit Collectability Screening": Search,
  "Expert Sourcing & Affidavit Packaging": Award,
  "Offer of Settlement Tracking": DollarSign,
  "Comparative Fault Counter-Analysis": Scale,
  "Premises Liability Checklist": Clipboard,
  "Referral Source Automation": Users,
  "Post-Settlement Reviews": Star,
  "Referral Network Mapping": Building,
  "Social Presence Automation": Megaphone,
  "Case ROI Scoring": BarChart3,
  "Reputation Monitoring": Globe,
}

export function OpenClawSection() {
  const [activeTab, setActiveTab] = useState("client")
  const activeCategory = categories.find(c => c.id === activeTab) ?? categories[0]

  return (
    <section id="openclaw" className="bg-navy px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold">
            <span className="font-serif text-base font-bold text-navy">AI</span>
          </div>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Section 2 &middot; AI Legal Assistant &middot; OpenClaw
            </p>
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              OpenClaw AI Legal Assistant
            </h2>
          </div>
        </div>

        <p className="mb-4 max-w-2xl font-sans text-sm leading-relaxed text-primary-foreground/70">
          Your own AI legal assistant &mdash; configured for plaintiff PI and med mal, in your voice.
          Wired into your practice stack. Every tool below feeds it context, and it acts on that
          context to do real work.
        </p>

        <p className="mb-6 font-sans text-xs text-primary-foreground/40">
          ~$50/mo running cost after setup. Everything goes through you before it reaches a client or court.
        </p>

        {/* Disclosures */}
        <div className="mb-12 flex flex-col gap-2">
          <div className="flex items-start gap-2.5 rounded-sm border border-gold/15 bg-gold/[0.04] px-4 py-3">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" />
            <p className="font-sans text-xs leading-relaxed text-primary-foreground/50">
              <span className="font-semibold text-primary-foreground/70">Disclosure:</span>{" "}
              I recommend this configuration because I believe it fits &mdash; weigh that accordingly.
            </p>
          </div>
          <div className="flex items-start gap-2.5 rounded-sm border border-gold/15 bg-gold/[0.04] px-4 py-3">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" />
            <p className="font-sans text-xs leading-relaxed text-primary-foreground/50">
              <span className="font-semibold text-primary-foreground/70">OpenClaw Consulting is my firm.</span>{" "}
              I recommend this configuration because I believe it fits &mdash; weigh that accordingly.
            </p>
          </div>
        </div>

        {/* Data feeds */}
        <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { label: "Smith.ai", sub: "Intake calls & lead data" },
            { label: "Clio", sub: "Matter data & client records" },
            { label: "Supio", sub: "Medical record summaries" },
            { label: "Case Status", sub: "Treatment gaps & client events" },
          ].map((feed) => (
            <div key={feed.label} className="rounded-sm border border-navy-mid bg-navy-mid/30 p-3">
              <p className="font-sans text-xs font-bold text-primary-foreground">{feed.label}</p>
              <p className="font-sans text-xs text-primary-foreground/50">{feed.sub}</p>
            </div>
          ))}
        </div>

        {/* 42 Powers - Tabbed Interface */}
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-sans text-lg font-bold text-primary-foreground">
              42 Use Cases
            </p>
            <p className="font-sans text-xs text-primary-foreground/40">
              {categories.map(c => `${c.capabilities.length} ${c.label}`).join(' · ')}
            </p>
          </div>
        </div>

        {/* Tab buttons — upgraded to primary navigation weight */}
        <div className="mb-0 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "flex items-center gap-2.5 rounded-sm px-5 py-3 font-sans text-sm font-bold transition-all",
                activeTab === cat.id
                  ? "shadow-sm"
                  : "bg-navy-mid/20 text-primary-foreground/60 hover:bg-navy-mid/40 hover:text-primary-foreground/80"
              )}
              style={activeTab === cat.id ? {
                backgroundColor: `${cat.color}18`,
                color: cat.color,
              } : undefined}
            >
              <cat.icon
                className="h-4 w-4"
                style={{ color: activeTab === cat.id ? cat.color : undefined }}
              />
              {cat.label}
              <span
                className="inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 font-sans text-xs font-bold"
                style={{
                  backgroundColor: activeTab === cat.id ? `${cat.color}30` : 'rgba(255,255,255,0.08)',
                  color: cat.color,
                }}
              >
                {cat.capabilities.length}
              </span>
            </button>
          ))}
        </div>

        {/* Always-visible grid for active tab — with category color top-border accent */}
        <div
          className="rounded-sm border border-navy-mid bg-navy/60 p-4"
          style={{ borderTopColor: activeCategory.color, borderTopWidth: '3px', borderTopStyle: 'solid' }}
        >
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-widest" style={{ color: activeCategory.color }}>
            {activeCategory.label} &mdash; {activeCategory.capabilities.length} capabilities
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.capabilities.map((cap) => {
              const Icon = iconMap[cap.name] || FileTextIcon
              return (
                <div
                  key={cap.name}
                  className="rounded-sm border border-navy-mid/60 bg-navy-mid/10 p-3 transition-colors hover:border-navy-mid"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: activeCategory.color }} />
                    <p className="font-sans text-xs font-bold text-primary-foreground">
                      {cap.name}
                    </p>
                  </div>
                  <p className="font-sans text-xs leading-relaxed text-primary-foreground/50">
                    {cap.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
