import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Returns a static Tailwind reveal-delay class for a given index (cycles 1–6).
 *  Using a lookup prevents Tailwind JIT from purging dynamically constructed class names.
 */
const REVEAL_DELAYS = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
  "reveal-delay-5",
  "reveal-delay-6",
] as const

export function revealDelay(index: number, cycle = 6): string {
  return REVEAL_DELAYS[index % cycle]
}
