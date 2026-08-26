import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  { value: '15', label: 'years old' },
  { value: '04', label: 'CVE assignments' },
  { value: '08+', label: 'recognitions' },
]

export default function About() {
  return (
    <section className="page-shell page-section">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">The person behind the reports.</h1>
        </div>
        <div>
          <div className="max-w-2xl space-y-6 text-lg leading-8 text-muted">
            <p>I&apos;m a security researcher based in Jakarta, Indonesia. Most days I&apos;m looking at web applications, government portals, and open-source libraries to understand how they fail and how they can be made better.</p>
            <p>Responsible disclosure is the part that matters most to me. A good finding should come with enough context to fix it, learn from it, and keep the same mistake from returning.</p>
          </div>
          <Link href="/contact" className="rule-link mt-9 text-sm">Start a conversation <ArrowUpRight size={15} strokeWidth={1.8} /></Link>
        </div>
      </div>

      <div className="mt-20 grid border-y border-surface-border sm:grid-cols-3">
        {stats.map((stat) => <div key={stat.label} className="border-b border-surface-border py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"><div className="font-mono text-3xl text-accent">{stat.value}</div><div className="mt-2 text-sm text-muted">{stat.label}</div></div>)}
      </div>
    </section>
  )
}
