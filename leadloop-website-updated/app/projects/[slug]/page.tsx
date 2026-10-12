import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, Container } from '@/components/site/primitives'
import { ProjectBanner } from '@/components/site/project-card'
import { SiteShell } from '@/components/site/site-shell'
import { getAdjacentProjects, getProject, PROJECTS } from '@/lib/projects'

type Params = { slug: string }

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: `${project.name} | Your Name`, description: project.summary }
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const { prev, next } = getAdjacentProjects(slug)

  return (
    <SiteShell>
      <article className="pt-8 pb-20 md:pt-12">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>

          <header className="mt-8 max-w-3xl">
            <span className="text-xs font-semibold text-primary">{project.label}</span>
            <h1 className="mt-3 text-4xl leading-[1.08] font-semibold tracking-tight text-balance md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
          </header>

          <div className="mt-10 overflow-hidden rounded-[28px] border">
            <ProjectBanner project={project} className="h-56 md:h-80" />
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-[28px] border bg-card p-6 md:grid-cols-4">
            {[
              ['Role', project.role],
              ['Year', project.year],
              ['Duration', project.duration],
              ['Type', project.label],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-12">
              <section aria-labelledby="challenge">
                <h2 id="challenge" className="text-2xl font-semibold tracking-tight">
                  The challenge
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.challenge}</p>
              </section>
              <section aria-labelledby="solution">
                <h2 id="solution" className="text-2xl font-semibold tracking-tight">
                  The solution
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.solution}</p>
              </section>
              <section aria-labelledby="features">
                <h2 id="features" className="text-2xl font-semibold tracking-tight">
                  Key features
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-8">
              <section aria-labelledby="stack">
                <h2 id="stack" className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
                  Tech stack
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <li key={t} className="rounded-full border bg-card px-4 py-2 text-sm font-medium">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
              {project.link && (
                <Link
                  href={project.link.href}
                  className="inline-flex items-center gap-3 rounded-full bg-primary py-1.5 pr-1.5 pl-6 text-sm font-semibold text-primary-foreground"
                >
                  {project.link.label}
                  <span className="flex size-9 items-center justify-center rounded-full bg-black/15">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              )}
            </aside>
          </div>

          <section aria-labelledby="results" className="mt-16">
            <h2 id="results" className="text-2xl font-semibold tracking-tight">
              Results
            </h2>
            <dl className="mt-5 grid gap-5 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label} className="card-glow rounded-[28px] border bg-card p-7">
                  <dd className="text-4xl font-semibold tracking-tight">{r.value}</dd>
                  <dt className="mt-2 text-sm text-muted-foreground">{r.label}</dt>
                </div>
              ))}
            </dl>
          </section>

          <nav aria-label="More projects" className="mt-16 grid gap-5 sm:grid-cols-2">
            <Link href={`/projects/${prev.slug}`} className="group block">
              <Card className="h-full">
                <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <ArrowLeft className="size-3.5" aria-hidden="true" /> Previous
                </span>
                <span className="mt-3 font-semibold tracking-tight group-hover:text-primary">{prev.title}</span>
              </Card>
            </Link>
            <Link href={`/projects/${next.slug}`} className="group block">
              <Card className="h-full sm:items-end sm:text-right">
                <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  Next <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
                <span className="mt-3 font-semibold tracking-tight group-hover:text-primary">{next.title}</span>
              </Card>
            </Link>
          </nav>
        </Container>
      </article>
    </SiteShell>
  )
}
