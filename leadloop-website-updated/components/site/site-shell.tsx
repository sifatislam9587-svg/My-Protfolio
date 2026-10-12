import { FloatingActions } from './floating-actions'
import { SiteFooter } from './closing-sections'
import { SiteHeader } from './site-header'

/** Header + footer + floating buttons shared by every page. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}
