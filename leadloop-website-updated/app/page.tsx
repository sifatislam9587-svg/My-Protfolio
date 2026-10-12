import { ContactSection, LanguagesSection, StatsSection } from '@/components/site/closing-sections'
import { Hero } from '@/components/site/hero'
import { LeadloopSection } from '@/components/site/leadloop-section'
import { SiteShell } from '@/components/site/site-shell'
import {
  CurrentRole,
  ProjectsSection,
  RolesSection,
  ShippedSection,
  StackSection,
} from '@/components/site/work-sections'

export default function Page() {
  return (
    <SiteShell>
      <Hero />
      <ShippedSection />
      <CurrentRole />
      <ProjectsSection />
      <RolesSection />
      <StackSection />
      <LeadloopSection />
      <StatsSection />
      <LanguagesSection />
      <ContactSection />
    </SiteShell>
  )
}
