'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

/** Counts from 0 to `to` the first time it scrolls into view. Respects reduced-motion. */
export function CountUp({ to, prefix = '', suffix = '', duration = 1800, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    let frame = 0
    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
        setValue(Math.round(to * eased))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          run()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      <span aria-hidden="true" className="tabular-nums">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  )
}
