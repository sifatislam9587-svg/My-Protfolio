import type { Metadata } from 'next'
import { Container, SectionHeading } from '@/components/site/primitives'
import { ProjectCard } from '@/components/site/project-card'
import { SiteShell } from '@/components/site/site-shell'
import { PROJECTS } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'All projects | Your Name',
  description: 'Twenty projects: products, client work, open source and internal systems.',
}

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section aria-labelledby="all-projects-title" className="pt-12 pb-20 md:pt-16">
        <Container>
          <SectionHeading id="all-projects-title" title="All projects." />
          <p className="-mt-6 mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {PROJECTS.length} projects across products, client work, open source and internal systems. Open any card to
            read the full case study.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  )
}
