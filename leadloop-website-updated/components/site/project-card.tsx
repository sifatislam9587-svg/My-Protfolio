import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

const TONES = ['#7a3410', '#1f3a5f', '#14532d', '#4c1d95', '#7f1d1d', '#134e4a']

export function ProjectBanner({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={cn('relative flex h-44 overflow-hidden', className)}
      style={{ backgroundColor: TONES[project.tone % TONES.length] }}
    >
      <div className="flex flex-col justify-end p-5 text-white">
        <span className="w-fit rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-medium">{project.year}</span>
        <span className="mt-2 text-2xl leading-none font-semibold whitespace-pre-line">
          {project.big.replace(' ', '\n')}
        </span>
      </div>
      <div className="absolute top-5 -right-6 h-48 w-[62%] rotate-[-4deg] rounded-lg bg-white p-4 text-[#0f131a] shadow-xl">
        <div className="flex gap-1">
          <span className="size-1.5 rounded-full bg-neutral-300" />
          <span className="size-1.5 rounded-full bg-neutral-300" />
          <span className="size-1.5 rounded-full bg-neutral-300" />
        </div>
        <p className="mt-6 text-lg leading-tight font-medium">{project.screen}</p>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-4/5 rounded bg-neutral-200" />
          <div className="h-1.5 w-3/5 rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border bg-card transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(232,105,28,0.35)]">
      <ProjectBanner project={project} />
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold text-primary">{project.label}</span>
        <h3 className="mt-2 leading-snug font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-8 text-sm text-muted-foreground">
          {/* Stretched link: the whole card opens the detail page */}
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors group-hover:text-foreground after:absolute after:inset-0 after:content-['']"
          >
            Case study
          </Link>
          <span className="flex size-8 items-center justify-center rounded-full border bg-background text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  )
}
