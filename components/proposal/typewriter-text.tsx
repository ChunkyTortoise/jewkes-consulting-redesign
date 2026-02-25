"use client"

import { useEffect, useRef, useState } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number       // ms per character
  startDelay?: number  // ms before starting
  className?: string
  cursorClassName?: string
}

/**
 * Types out `text` character-by-character when it enters the viewport.
 */
export function TypewriterText({
  text,
  speed = 28,
  startDelay = 200,
  className = "",
  cursorClassName = "",
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timer)
  }, [started, text, speed, startDelay])

  return (
    <span ref={ref} className={className}>
      {displayed}
      {!done && (
        <span
          className={`inline-block h-[1em] w-[2px] translate-y-[1px] bg-current align-middle animate-cursor ${cursorClassName}`}
        />
      )}
    </span>
  )
}
