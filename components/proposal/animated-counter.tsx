"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  value: string   // e.g. "42", "30+", "15–20"
  label: string
  delay?: number  // ms
}

/**
 * Displays a stat value with a count-up animation when it enters
 * the viewport. Strings with non-numeric characters are revealed
 * with a simple fade instead of counting.
 */
export function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [displayed, setDisplayed] = useState<string>("")
  const [visible, setVisible] = useState(false)

  // Extract the numeric portion if the value is purely numeric
  const numericMatch = value.match(/^(\d+)$/)
  const targetNum = numericMatch ? parseInt(numericMatch[1], 10) : null

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    const start = () => {
      if (targetNum !== null) {
        // Count up animation
        const duration = 900
        const startTime = performance.now()
        const step = (now: number) => {
          const elapsed = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplayed(String(Math.round(eased * targetNum)))
          if (progress < 1) requestAnimationFrame(step)
          else setDisplayed(value)
        }
        requestAnimationFrame(step)
      } else {
        // Non-numeric: just reveal
        setDisplayed(value)
      }
    }

    const timer = setTimeout(start, delay)
    return () => clearTimeout(timer)
  }, [visible, targetNum, value, delay])

  return (
    <div ref={ref} className="text-center">
      <p
        className="font-serif text-3xl font-bold text-gold tabular-nums transition-opacity duration-500"
        style={{ opacity: displayed ? 1 : 0 }}
      >
        {displayed || value}
      </p>
      <p className="font-sans text-xs uppercase tracking-wider text-primary-foreground/40 mt-1">
        {label}
      </p>
    </div>
  )
}
