"use client"

import { useEffect, useState, useCallback } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

const NAV_ITEMS = [
  { label: "Overview", section: "#overview" },
  { label: "The Opportunity", section: "#opportunity" },
  { label: "OpenClaw", section: "#openclaw" },
  { label: "Tools & Use Cases", section: "#tools" },
  { label: "Deliverables", section: "#deliverables" },
  { label: "RAG Knowledge Base", section: "#rag" },
  { label: "Pricing & Tiers", section: "#pricing" },
  { label: "Compliance", section: "#compliance" },
  { label: "Next Steps", section: "#next-steps" },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((o) => !o), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        toggle()
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [toggle])

  function navigate(section: string) {
    setOpen(false)
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to section…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {NAV_ITEMS.map((item) => (
            <CommandItem key={item.section} onSelect={() => navigate(item.section)}>
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tip">
          <CommandItem disabled>Press ⌘K to open this palette anytime</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
