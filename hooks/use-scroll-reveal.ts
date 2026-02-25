"use client"

import { useEffect, useRef } from "react"

/**
 * Adds the "revealed" class to elements with the "reveal" class family
 * when they enter the viewport. Returns a ref to attach to the container.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-scale"
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
