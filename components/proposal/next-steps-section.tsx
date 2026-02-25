import { ArrowRight, Mail } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "You decide what matters most",
    description: "Review the tools above and flag the items that match your biggest pain points. No required starting point -- pick what's most valuable to you right now.",
  },
  {
    number: "02",
    title: "We agree on scope and timeline",
    description: "Based on what you want built, I put together a simple engagement agreement with deliverables, timeline, and payment terms. No surprises.",
  },
  {
    number: "03",
    title: "I send the agreement",
    description: "One or two pages. Plain language. Deliverables, timeline, and fee. Foundation, Core Practice, or Full Stack -- or a custom scope. You sign, we start.",
  },
  {
    number: "04",
    title: "Setup begins",
    description: "You give me access to Clio (or we create a new account), share your existing intake workflow, and provide branding assets. I take it from there.",
  },
  {
    number: "05",
    title: "Staff training + handoff",
    description: "60-90 minute walkthrough of all configured tools. Written system documentation. 30-day post-launch support for questions and adjustments.",
  },
  {
    number: "06",
    title: "30-day check-in, then add more",
    description: "We review what's working -- lead capture rates, client communication volume, time saved -- and adjust. Once the first items are producing results, we layer in whatever's next.",
  },
  {
    number: "07",
    title: "90-day case study",
    description: "After 90 days, I'll share anonymized results from our work together — with your permission — as a case study for other plaintiff attorneys considering this path.",
  },
  {
    number: "08",
    title: "Referral courtesy",
    description: "If you know other attorneys who could benefit from this kind of setup, I'm happy to offer a referral courtesy.",
  },
]

export function NextStepsSection() {
  return (
    <section id="next-steps" className="bg-navy px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Section 8 &middot; Next Steps
        </p>
        <h2 className="mb-12 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Tell me which problems matter most.
        </h2>

        <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-3 rounded-sm border border-navy-mid bg-navy-mid/15 p-5">
              <span className="font-mono text-xl font-bold text-gold/20">{step.number}</span>
              <div>
                <p className="mb-1 font-sans text-sm font-bold text-primary-foreground">{step.title}</p>
                <p className="font-sans text-xs leading-relaxed text-primary-foreground/50">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-2xl rounded-sm border border-gold/30 bg-navy-mid/30 p-8 text-center md:p-12">
          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Ready to start?
          </p>
          <h3 className="mb-4 font-serif text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
            {"I'll"} put together a plain-language engagement agreement within 24 hours.
          </h3>
          <p className="mb-8 font-sans text-sm leading-relaxed text-primary-foreground/60">
            Deliverables, timeline, and fee. One or two pages. You sign, we start.
            No locked packages. No required order. Pick what solves your most expensive
            problem first.
          </p>
          <a
            href="mailto:cayman@openclaw.consulting"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3.5 font-sans text-sm font-semibold text-navy transition-all hover:bg-gold-light"
          >
            <Mail className="h-4 w-4" />
            cayman@openclaw.consulting
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 font-sans text-xs text-primary-foreground/30">
            Cayman Roden &middot; AI Integration Consultant
          </p>
        </div>
      </div>
    </section>
  )
}
