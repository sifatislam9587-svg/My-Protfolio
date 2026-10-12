import { ArrowRight, CalendarDays } from 'lucide-react'
import { Container } from './primitives'

const LOGOS = ['Northwind', 'Acme Cloud', 'Lumen', 'Brightpath', 'Orbital', 'Kestrel', 'Fieldnote']

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-16 pb-20 md:pt-24">
      <Container className="flex flex-col items-center text-center">
        <h1
          id="hero-title"
          className="max-w-3xl text-5xl leading-[1.02] font-semibold tracking-tight text-balance md:text-7xl"
        >
          {"Systems that hold up when traffic doesn't."}
        </h1>
        <p className="mt-6 text-base text-muted-foreground md:text-lg">
          Backend Engineer · Node.js · NestJS · PostgreSQL · Browser Extensions
        </p>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="font-mono text-base font-semibold">350 ms</span>
          <ArrowRight className="size-5 text-primary" aria-hidden="true" />
          <span className="font-mono text-base font-semibold">35 ms</span>
          <span className="text-muted-foreground">search endpoint refactor, p95, production.</span>
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-6 rounded-full bg-primary py-1.5 pr-1.5 pl-7 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(232,105,28,0.7)] transition-transform hover:-translate-y-0.5"
          >
            See the work
            <span className="flex size-9 items-center justify-center rounded-full bg-black/15">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border bg-card py-3 pr-7 pl-4 text-sm font-semibold transition-colors hover:bg-muted"
          >
            <CalendarDays className="size-4 text-primary" aria-hidden="true" />
            Book a call
          </a>
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Open to remote, on-site and contract work
        </p>

        <div className="mt-16 w-full">
          <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">Where I&apos;ve shipped</p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul className="flex w-max animate-marquee items-center gap-16">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <li
                  key={`${logo}-${i}`}
                  aria-hidden={i >= LOGOS.length}
                  className="text-xl font-semibold tracking-tight whitespace-nowrap text-muted-foreground/70"
                >
                  {logo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
