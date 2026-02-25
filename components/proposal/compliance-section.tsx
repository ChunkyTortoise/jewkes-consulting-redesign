import { Scale, Shield, FileCheck, Lock, Eye, AlertTriangle } from "lucide-react"

const complianceItems = [
  {
    icon: Scale,
    title: "Georgia Bar Compliance",
    description: "All tools selected with Georgia Rules of Professional Conduct in mind — Rule 1.1 (competence), Rule 1.6(c) (data security), and Rule 5.3 (supervision of non-attorney assistants). Written AI ethics policy is an included deliverable.",
  },
  {
    icon: Shield,
    title: "Citation Verification",
    description: "OpenClaw's legal research configuration includes automatic citation verification against Westlaw/Casetext. All AI-generated research outputs are flagged if verification fails. Georgia courts have issued sanctions for AI-hallucinated citations.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "All client case data accessed during configuration handled per legal industry data security standards. OpenClaw Consulting will not retain, copy, or use any client case data for any purpose other than completing the deliverables.",
  },
  {
    icon: FileCheck,
    title: "ABA Opinion 512 Compliance",
    description: "Attorneys must: (1) understand the AI tools they use, (2) supervise AI output, (3) maintain client confidentiality, and (4) disclose AI use when material to the representation. The ethics policy covers all four.",
  },
  {
    icon: Eye,
    title: "Attorney Supervision",
    description: "Attorney review and supervision of all AI-generated outputs prior to use in client matters, filings, or court submissions remains the sole responsibility of The Jewkes Firm. Every tool is configured with this requirement built in.",
  },
  {
    icon: AlertTriangle,
    title: "SB 69 Litigation Funding Compliance",
    description: "Pre-planned disclosure posture for AI-assisted work product and litigation funding coordination. Funder registration, disclosure regime, and discovery exposure managed proactively.",
  },
]

const engagementTerms = [
  {
    title: "Intellectual Property",
    content: "Upon receipt of full payment, all configured systems, templates, knowledge databases, and documentation are the property of The Jewkes Firm. OpenClaw retains the right to use general methodologies and non-client-specific frameworks.",
  },
  {
    title: "Limitation of Liability",
    content: "OpenClaw is not responsible for case outcomes, third-party vendor performance issues, or any claim arising from failure to supervise AI outputs before use in legal proceedings.",
  },
  {
    title: "Termination",
    content: "Either party may terminate with 14 days written notice. Pro-rata invoicing for work completed. Client data returned or destroyed within 7 days at the client's election.",
  },
  {
    title: "Client Responsibilities",
    content: "Provide timely system access, designate one point of contact, review and approve AI outputs before use, adopt the ethics policy, and respond to configuration questions within 2 business days.",
  },
]

const vendorQuestions = [
  {
    vendor: "Smith.ai",
    questions: [
      "Who builds the intake questions — do I write them and you configure, or does your team build them?",
      "What specifically triggers a transfer to a live receptionist?",
      "What does the Clio Grow integration setup look like?",
      "Are your live receptionists available on holidays and overnight?",
      "Can you share anonymized intake conversion data for plaintiff PI firms on a 50-call plan?",
    ],
  },
  {
    vendor: "EvenUp",
    questions: [
      "How dense is your dataset for Fayette, Spalding, Troup, and Coweta counties?",
      "What's your turnaround from record upload to demand draft?",
      "Can you walk me through a sample output on a soft-tissue auto case and a med mal case?",
      "If I'm not satisfied with a demand — what's the revision process?",
      "Do you have Georgia plaintiff PI references who practice in rural counties similar to my markets?",
    ],
  },
  {
    vendor: "Supio",
    questions: [
      "What formats do you accept for medical records?",
      "How does Supio identify inconsistencies and treatment gaps across all providers?",
      "Can you walk me through standard-of-care analysis on a physician negligence vs. dental mal case?",
      "What's your turnaround time on a 500-page record set?",
      "Do you sign a BAA? Where is PHI stored, who has access, and what's your breach notification protocol?",
    ],
  },
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Compliance header */}
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Compliance &amp; Engagement Terms
        </p>
        <h2 className="mb-5 font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
          Georgia Bar compliant from day one.
        </h2>
        <p className="mb-12 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
          This is a technology consulting engagement. Nothing in this agreement constitutes legal
          advice. Every tool is selected with the Georgia Rules of Professional Conduct in mind.
        </p>

        {/* Compliance grid */}
        <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((item) => (
            <div key={item.title} className="rounded-sm border border-border bg-card p-5">
              <item.icon className="mb-3 h-5 w-5 text-gold" />
              <p className="mb-2 font-sans text-sm font-bold text-navy">{item.title}</p>
              <p className="font-sans text-xs leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Engagement terms */}
        <div className="mb-16">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
            Key Engagement Terms
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {engagementTerms.map((term) => (
              <div key={term.title} className="rounded-sm border border-border bg-card p-4">
                <p className="mb-1 font-sans text-xs font-bold text-navy">{term.title}</p>
                <p className="font-sans text-[11px] leading-relaxed text-muted-foreground">{term.content}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-sans text-[11px] text-muted-foreground">
            Governing law: State of Georgia. Disputes resolved in Fayette County, Georgia.
            Independent contractor engagement. Full Statement of Work provided upon scope agreement.
          </p>
        </div>

        {/* Vendor discovery questions */}
        <div>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
            Appendix &middot; Questions to Ask Each Vendor
          </p>
          <p className="mb-6 font-sans text-xs text-muted-foreground">
            Before committing to any of the top three tools, here are the questions worth asking
            during a discovery call. Each one surfaces something a vendor pitch won{"'"}t tell you.
          </p>

          <div className="grid gap-4 lg:grid-cols-3">
            {vendorQuestions.map((v) => (
              <div key={v.vendor} className="rounded-sm border border-border bg-card p-5">
                <p className="mb-3 font-sans text-sm font-bold text-navy">{v.vendor}</p>
                <ol className="flex flex-col gap-2">
                  {v.questions.map((q, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="shrink-0 font-mono text-[10px] font-bold text-gold">{i + 1}</span>
                      <span className="font-sans text-[11px] leading-relaxed text-muted-foreground">{q}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
