import { Briefcase, FileText, FolderOpen, Puzzle } from 'lucide-react'
import Link from 'next/link'
import { Container } from './primitives'

// Absolute hrefs so the header also works on /projects and /projects/[slug].
const NAV = [
  { href: '/#contact', label: 'Resume', icon: FileText },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/#experience', label: 'Experience', icon: Briefcase },
  { href: '/#leadloop', label: 'Leadloop', icon: Puzzle },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 py-4">
      <Container>
        {/* One frosted-glass box that holds both the name and the section links */}
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/40 bg-white/40 p-1.5 shadow-[0_8px_30px_-12px_rgba(15,19,26,0.25)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-white/5">
          <Link href="/" className="flex items-center gap-2 rounded-full py-1 pr-4 pl-1 text-sm font-bold">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              YN
            </span>
            Your Name
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-0.5">
              {NAV.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="size-4 text-primary" strokeWidth={2.5} aria-hidden="true" />
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sr-only sm:hidden">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
