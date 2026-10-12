import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '@/lib/projects'
import { Card, CardFooterLink, CompanyChip, Container, PillLink, SectionHeading } from './primitives'
import { ProjectCard } from './project-card'

const SHIPPED = [
  {
    tag: '~350 ms → ~35 ms',
    title: 'Search endpoint refactor',
    body: 'Composite indexes on the hottest filters, a rewritten query plan with one join, read-through caching, and lean response shapes. Load-test results and CI checks are public.',
    link: 'Read the case study',
    href: '/projects/search-endpoint-refactor',
  },
  {
    tag: 'Case study',
    title: 'Messaging automation for a regional carrier',
    body: 'Owned the backend for a business messaging rollout: routing, template approvals, delivery-status reconciliation, retry queues, and webhooks into the existing CRM, all kept inside provider rate limits.',
    link: 'Read the case study',
    href: '/projects/carrier-messaging-automation',
  },
  {
    tag: 'Zero tenant leaks',
    title: 'Row-level security starter kit',
    body: 'Postgres row-level security with integration tests that deliberately try to read across tenants. Isolation lives in the database, not in app code.',
    link: 'View the case study',
    href: '/projects/rls-starter-kit',
  },
]

export function ShippedSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-20">
      <Container>
        <SectionHeading
          id="work-title"
          title="Three shipped things you can check out today."
          action={<PillLink href="/projects">See all receipts</PillLink>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {SHIPPED.map((item) => (
            <Card key={item.title}>
              <span className="font-mono text-xs text-primary">{item.tag}</span>
              <h3 className="mt-4 text-xl leading-snug font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <CardFooterLink href={item.href} label={item.link} />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function CurrentRole() {
  return (
    <section aria-labelledby="now-title" className="py-20">
      <Container>
        <Card className="p-8 md:p-12">
          <span className="flex items-center gap-2 text-xs font-semibold text-primary">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Now
          </span>
          <h2 id="now-title" className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Lead Backend Engineer at Northwind Labs.
          </h2>
          <div className="mt-5">
            <CompanyChip name="Northwind Labs" />
          </div>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Leading backend architecture across a multi-product roadmap: billing, CRM, and analytics. Open to a few
            parallel contract projects.
          </p>
          <a
            href="#experience"
            className="group mt-8 inline-flex w-fit items-center gap-6 rounded-full bg-primary py-1.5 pr-1.5 pl-7 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(232,105,28,0.7)]"
          >
            See the role
            <span className="flex size-9 items-center justify-center rounded-full bg-black/15">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </Card>
      </Container>
    </section>
  )
}

export function ProjectsSection() {
  const latest = PROJECTS.slice(0, 3)
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20">
      <Container>
        <SectionHeading
          id="projects-title"
          title="Latest projects."
          action={<PillLink href="/projects">See all projects</PillLink>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {latest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}

const ROLES = [
  {
    company: 'Northwind Labs',
    mode: 'On-site',
    title: 'Lead Backend Engineer',
    meta: 'Jan 2026 – Present · Your City',
    body: 'Own backend architecture for a multi-tenant SaaS suite: fast APIs, AI-assisted search, cloud infrastructure, CI/CD, and distributed jobs.',
  },
  {
    company: 'Northwind Labs',
    mode: 'On-site',
    title: 'Senior Backend Engineer',
    meta: 'Jun 2025 – Jan 2026 · Your City',
    body: 'Sole backend engineer across three products, building APIs, services, background workers, and deployment pipelines with NestJS and PostgreSQL.',
  },
  {
    company: 'Brightpath',
    mode: 'Remote',
    title: 'Backend Lead',
    meta: 'Mar 2024 – Jun 2025 · Remote',
    body: 'Led backend for a messaging and CRM platform: high-volume sends, lead automation, real-time delivery, and secure media storage.',
  },
  {
    company: 'Orbital Studio',
    mode: 'Hybrid',
    title: 'Full-Stack Delivery Lead',
    meta: 'Aug 2023 – Mar 2024 · Your City',
    body: 'Delivered a property marketplace end to end, including GraphQL APIs, payments, CRM, and multi-channel notifications.',
  },
]

export function RolesSection() {
  return (
    <section id="experience" aria-labelledby="roles-title" className="py-20">
      <Container>
        <SectionHeading
          id="roles-title"
          title="Recent roles."
          action={<PillLink href="#experience">See full career</PillLink>}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {ROLES.map((r) => (
            <Card key={r.title}>
              <div className="flex items-center justify-between gap-3">
                <CompanyChip name={r.company} />
                <span className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">{r.mode}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.meta}</p>
              <p className="mt-5 line-clamp-3 leading-relaxed text-muted-foreground">{r.body}</p>
              <CardFooterLink href="#" label="Read role" />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

const STACK = [
  'Node.js', 'TypeScript', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka',
  'RabbitMQ', 'BullMQ', 'GraphQL', 'Prisma', 'Docker', 'AWS', 'Next.js', 'Chrome Extensions',
]

export function StackSection() {
  return (
    <section aria-labelledby="stack-title" className="py-20">
      <Container>
        <SectionHeading id="stack-title" title="The stack I ship with." />
        <ul className="flex flex-wrap gap-3">
          {STACK.map((tool) => (
            <li
              key={tool}
              className="rounded-full border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              {tool}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
