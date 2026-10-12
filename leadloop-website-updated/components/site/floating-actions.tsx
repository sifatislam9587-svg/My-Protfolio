'use client'

import { MessageCircle, SunMoon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export function FloatingActions() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 md:right-4 md:bottom-4">
      <Link
        href="/#contact"
        aria-label="Contact me"
        className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
      </Link>
      <button
        type="button"
        aria-label="Change theme"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="flex size-11 items-center justify-center rounded-full border bg-accent text-primary shadow-lg transition-transform hover:scale-105"
      >
        <SunMoon className="size-5" aria-hidden="true" />
      </button>
    </div>
  )
}
