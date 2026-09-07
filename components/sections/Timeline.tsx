import SplitSection from '@/components/ui/SplitSection'
import { timeline } from '@/lib/data'

export default function Timeline() {
  return (
    <section className="page-shell page-section">
      <SplitSection
        eyebrow="Timeline"
        title="A practice built one report at a time."
        intro="The milestones so far — each one a lesson in looking carefully."
      >
        <div className="border-t border-surface-border">
          {timeline.map((event) => (
            <article key={event.date} className="grid gap-3 border-b border-surface-border py-7 sm:grid-cols-[7rem_1fr] sm:gap-8">
              <time className="font-mono text-sm text-accent">{event.date}</time>
              <div>
                <h2 className="text-xl font-medium tracking-tight text-primary">{event.title}</h2>
                <p className="mt-2 max-w-xl leading-7 text-muted">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SplitSection>
    </section>
  )
}
