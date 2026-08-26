import { ArrowUpRight } from 'lucide-react'
import { acknowledgments } from '@/lib/data'

export default function Acknowledgments() {
  return (
    <section className="page-shell page-section">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div><p className="eyebrow">Recognition</p><h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Good disclosure is a team sport.</h1><p className="mt-6 max-w-sm leading-7 text-muted">A few of the teams and organizations that have acknowledged a report.</p></div>
        <div className="border-t border-surface-border">
          {acknowledgments.map((ack, index) => <a key={ack.org} href={ack.url} target="_blank" rel="noopener noreferrer" className="surface-row group grid gap-4 py-5 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center"><span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span><span><span className="block font-medium transition-colors group-hover:text-accent">{ack.org}</span><span className="mt-1 block text-sm text-muted">{ack.description}</span></span><span className="flex items-center gap-3 text-xs text-muted"><span>{ack.year}</span><ArrowUpRight size={15} className="transition-colors group-hover:text-accent" strokeWidth={1.7} /></span></a>)}
        </div>
      </div>
    </section>
  )
}
