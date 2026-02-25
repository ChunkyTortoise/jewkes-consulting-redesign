import { Navigation } from "@/components/proposal/navigation"
import { Hero } from "@/components/proposal/hero"
import { OpportunitySection } from "@/components/proposal/opportunity-section"
import { OpenClawSection } from "@/components/proposal/openclaw-section"
import { ToolsSection } from "@/components/proposal/tools-section"
import { DeliverablesSection } from "@/components/proposal/deliverables-section"
import { RAGSection } from "@/components/proposal/rag-section"
import { PricingSection } from "@/components/proposal/pricing-section"
import { ComplianceSection } from "@/components/proposal/compliance-section"
import { NextStepsSection } from "@/components/proposal/next-steps-section"
import { Footer } from "@/components/proposal/footer"

export default function ProposalPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OpportunitySection />
      <OpenClawSection />
      <ToolsSection />
      <DeliverablesSection />
      <RAGSection />
      <PricingSection />
      <ComplianceSection />
      <NextStepsSection />
      <Footer />
    </main>
  )
}
