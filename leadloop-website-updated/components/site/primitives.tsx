import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1104px] px-5 md:px-6', className)}>{children}</div>
}

export function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center gap-3 rounded-full border bg-card/60 py-1.5 pr-1.5 pl-5 text-sm font-medium transition-colors hover:bg-card"
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:translate-x-0.5">
        <ArrowRight className="size-4" aria-hidden="true" />
      </span>
    </Link>
  )
}

export function SectionHeading({
  title,
  action,
  id,
}: {
  title: React.ReactNode
  action?: React.ReactNode
  id?: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <h2 id={id} className="max-w-xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {action}
    </div>
  )
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <article
      className={cn(
        'card-glow flex flex-col rounded-[28px] border bg-card p-7 shadow-[0_1px_2px_rgba(15,19,26,0.04)] transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(232,105,28,0.25)]',
        className,
      )}
    >
      {children}
    </article>
  )
}

export function CardFooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group mt-auto flex items-center justify-between pt-8 text-sm text-muted-foreground">
      <span className="transition-colors group-hover:text-foreground">{label}</span>
      <span className="flex size-8 items-center justify-center rounded-full border bg-background text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </span>
    </Link>
  )
}

export function CompanyChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold">
      <span className="flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-primary">
        {name.charAt(0)}
      </span>
      {name}
    </span>
  )
}
