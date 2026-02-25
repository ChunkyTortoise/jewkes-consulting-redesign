"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowUp } from "lucide-react"

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "The Opportunity", href: "#opportunity" },
  { label: "AI System", href: "#openclaw" },
  { label: "Tools", href: "#tools" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Knowledge DBs", href: "#rag" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compliance", href: "#compliance" },
  { label: "Next Steps", href: "#next-steps" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
    setShowBackToTop(window.scrollY > 800)

    // Scroll progress
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)

    // Active section detection
    const sections = navItems.map(item => item.href.replace("#", ""))
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i])
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        {/* Progress bar */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy-mid/30">
            <div
              className="h-full bg-gold/60 transition-[width] duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#overview" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold">
              <span className="font-serif text-sm font-bold text-navy">CR</span>
            </div>
            <span className="font-serif text-sm font-bold tracking-wide text-gold-light">
              Cayman Roden
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-2.5 py-1.5 text-[11px] font-sans font-medium tracking-wide uppercase transition-colors rounded-sm",
                  activeSection === item.href.replace("#", "")
                    ? "text-gold bg-gold/10"
                    : "text-gold-light/70 hover:text-gold-light"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:cayman@openclaw.consulting"
              className="hidden text-xs font-sans font-medium text-gold/80 transition-colors hover:text-gold lg:block"
            >
              cayman@openclaw.consulting
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-sm text-gold-light transition-colors hover:bg-gold/10 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-md lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-2 px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "w-full max-w-xs rounded-sm px-5 py-3 text-center font-sans text-sm font-medium uppercase tracking-wider transition-colors",
                  activeSection === item.href.replace("#", "")
                    ? "bg-gold/10 text-gold"
                    : "text-gold-light/70 hover:bg-gold/5 hover:text-gold-light"
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-6 h-px w-full max-w-xs bg-navy-mid" />
            <a
              href="mailto:cayman@openclaw.consulting"
              onClick={() => setMobileOpen(false)}
              className="mt-2 font-sans text-xs font-medium text-gold/60 transition-colors hover:text-gold"
            >
              cayman@openclaw.consulting
            </a>
          </div>
        </div>
      )}

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-sm bg-navy/90 text-gold shadow-lg backdrop-blur-sm transition-all hover:bg-navy",
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  )
}
