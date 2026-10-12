import { BellRing, Check, Gauge, MousePointerClick, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react'
import { Card, Container, PillLink, SectionHeading } from './primitives'
import { LeadloopVideo } from './leadloop-video'

const FEATURES = [
  {
    icon: MousePointerClick,
    title: 'One-click lead capture',
    body: 'Save a prospect from any profile, directory, or company page straight from your browser toolbar.',
  },
  {
    icon: Sparkles,
    title: 'Automatic enrichment',
    body: 'Fills in role, company, and contact details so every lead is ready to work the moment you save it.',
  },
  {
    icon: RefreshCw,
    title: 'CRM sync',
    body: 'Pushes new leads and updates to your CRM in real time. No exports, no copy and paste.',
  },
  {
    icon: BellRing,
    title: 'Follow-up loops',
    body: 'Set reminders and follow-up sequences so no warm lead goes cold in your pipeline.',
  },
  {
    icon: Gauge,
    title: 'Lead scoring',
    body: 'Ranks prospects by fit and activity so you always know who to contact next.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    body: 'Runs with minimal permissions and keeps your data in your own workspace.',
  },
]

const BENEFITS = [
  'Spend hours less each week on manual data entry',
  'Reply to warm leads faster, while interest is high',
  'Keep one clean, up-to-date source of truth in your CRM',
  'Grow a repeatable outreach process your whole team can follow',
]

export function LeadloopSection() {
  return (
    <section id="leadloop" aria-labelledby="leadloop-title" className="py-20">
      <Container>
        <SectionHeading
          id="leadloop-title"
          title="Leadloop Extension."
          action={<PillLink href="#contact">Get early access</PillLink>}
        />

        <div className="overflow-hidden rounded-[28px] border bg-card">
          <LeadloopVideo />
          <div className="grid gap-10 p-7 md:grid-cols-[1.1fr_1fr] md:p-10">
            <div>
              <span className="text-xs font-semibold text-primary">Browser extension</span>
              <h3 className="mt-2 text-2xl leading-snug font-semibold tracking-tight text-balance md:text-3xl">
                Capture leads, enrich them, and follow up, all from your browser.
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Leadloop sits in your toolbar and turns any page you browse into a source of qualified leads. Save a
                prospect in one click, let Leadloop fill in the details, and keep every conversation moving until it
                closes.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">Why teams use it</h4>
              <ul className="mt-4 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex">
              <Card className="w-full">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h4 className="mt-5 text-lg font-semibold tracking-tight">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
