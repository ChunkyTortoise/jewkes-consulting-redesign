"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "OpenClaw AI", href: "#openclaw" },
  { label: "Tools", href: "#tools" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Knowledge Bases", href: "#rag" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compliance", href: "#compliance" },
  { label: "Next Steps", href: "#next-steps" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navItems.map(item => item.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold">
            <span className="font-serif text-sm font-bold text-navy">OC</span>
          </div>
          <span className="font-serif text-sm font-bold tracking-wide text-gold-light">
            OpenClaw
          </span>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 text-xs font-sans font-medium tracking-wide uppercase transition-colors rounded-sm",
                activeSection === item.href.replace("#", "")
                  ? "text-gold bg-gold/10"
                  : "text-gold-light/70 hover:text-gold-light"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:cayman@openclaw.consulting"
          className="hidden text-xs font-sans font-medium text-gold/80 transition-colors hover:text-gold md:block"
        >
          cayman@openclaw.consulting
        </a>
      </div>
    </nav>
  )
}
