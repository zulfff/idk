import { timeline } from '@/lib/data'

export default function Timeline() {
  return (
    <section className="page-shell page-section">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div><p className="eyebrow">Timeline</p><h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A practice built one report at a time.</h1></div>
        <div className="border-t border-surface-border">
          {timeline.map((event) => <article key={event.date} className="grid gap-3 border-b border-surface-border py-7 sm:grid-cols-[7rem_1fr] sm:gap-8"><time className="font-mono text-sm text-accent">{event.date}</time><div><h2 className="text-xl font-medium tracking-tight">{event.title}</h2><p className="mt-2 max-w-xl leading-7 text-muted">{event.description}</p></div></article>)}
        </div>
      </div>
    </section>
  )
}
