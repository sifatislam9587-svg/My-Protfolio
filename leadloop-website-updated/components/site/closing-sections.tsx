import { ArrowUpRight, Mail, MessageCircle, Send } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './brand-icons'
import { CountUp } from './count-up'
import { Container, SectionHeading } from './primitives'

const STATS = [
  { to: 6, suffix: '+', label: 'years shipping production Node' },
  { to: 4, suffix: '', label: 'countries worked with remotely' },
  { to: 1, suffix: '', label: 'product of my own: Leadloop Extension' },
  { to: 100, suffix: '%', label: 'remote-ready, async-friendly' },
]

export function StatsSection() {
  return (
    <section aria-labelledby="stats-title" className="py-20">
      <Container>
        <SectionHeading id="stats-title" title="Six years, four countries, one product." />
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="card-glow rounded-[28px] border bg-card p-7">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-5xl font-semibold tracking-tight">
                <CountUp to={s.to} suffix={s.suffix} />
              </dd>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

const LANGUAGES = [
  { name: 'English', native: 'English', level: 'Full professional' },
  { name: 'Bangla', native: 'বাংলা', level: 'Native' },
  { name: 'Hindi', native: 'हिन्दी', level: 'Professional working' },
]

export function LanguagesSection() {
  return (
    <section aria-labelledby="lang-title" className="py-20">
      <Container>
        <SectionHeading id="lang-title" title={<>Three languages,<br />one conversation.</>} />
        <ul className="grid gap-4 sm:grid-cols-3">
          {LANGUAGES.map((l) => (
            <li key={l.name} className="rounded-[28px] border bg-card px-4 py-8 text-center">
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">{l.name}</p>
              <p lang={l.name === 'Bangla' ? 'bn' : l.name === 'Hindi' ? 'hi' : 'en'} className="mt-2 text-lg text-primary">
                {l.native}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{l.level}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

const CONTACTS = [
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
  { label: 'Telegram', href: '#', icon: Send },
  { label: 'Email', href: 'mailto:you@example.com', icon: Mail },
]

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20">
      <Container>
        <div className="card-glow grid gap-10 rounded-[28px] border bg-card p-8 md:grid-cols-[1.6fr_1fr] md:items-center md:p-16">
          <div>
            <h2 id="contact-title" className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Building something that needs a backend that scales?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {"I take on a handful of contract projects each year. If your backend is struggling under load, or you're planning something new that needs to be right from day one, let's talk."}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Usually replies within 24h · Your time zone</p>
          </div>
          <ul className="flex flex-col gap-4">
            {CONTACTS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center justify-between rounded-full border bg-background py-2 pr-2 pl-3 transition-colors hover:border-primary"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <span className="flex size-9 items-center justify-center rounded-full bg-accent text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    {label}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border bg-card transition-colors group-hover:text-primary">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

const SOCIALS = [
  { label: 'Facebook', href: 'https://facebook.com/', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com/', icon: InstagramIcon },
  { label: 'Twitter', href: 'https://twitter.com/', icon: TwitterIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: LinkedinIcon },
]

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Your Name</p>
          <p className="text-sm text-muted-foreground">Backend engineer and maker of Leadloop Extension.</p>
        </div>
        <ul className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex size-11 items-center justify-center rounded-full border bg-card transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <div className="border-t">
        <Container className="py-6 text-xs text-muted-foreground">
          © 2026 Your Name. All rights reserved.
        </Container>
      </div>
    </footer>
  )
}
