import { ArrowUpRight } from 'lucide-react'
import { writeups } from '@/lib/data'

export default function WriteupsSection() {
  return (
    <section className="page-shell page-section">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div><p className="eyebrow">Writing</p><h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Notes from the hunt.</h1><p className="mt-6 max-w-sm leading-7 text-muted">Longer explanations, lessons, and stories published on Medium.</p></div>
        <div className="border-t border-surface-border">
          {writeups.map((post) => <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="surface-row group block py-7"><div className="flex items-start justify-between gap-5"><div><p className="font-mono text-xs text-accent">{post.date}</p><h2 className="mt-3 max-w-xl text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">{post.title}</h2></div><ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" strokeWidth={1.7} /></div><p className="mt-3 max-w-xl text-sm leading-6 text-muted">{post.excerpt}</p></a>)}
          <a href="https://medium.com/@FufuFaf1" target="_blank" rel="noopener noreferrer" className="rule-link mt-8 text-sm">Read all on Medium <ArrowUpRight size={15} strokeWidth={1.8} /></a>
        </div>
      </div>
    </section>
  )
}
