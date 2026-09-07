import { ArrowUpRight } from 'lucide-react'
import SplitSection from '@/components/ui/SplitSection'
import { acknowledgments } from '@/lib/data'

export default function AcknowledgmentsSection() {
  return (
    <section className="page-shell page-section">
      <SplitSection
        eyebrow="Recognition"
        title="Good disclosure is a team sport."
        intro="A few of the teams and organizations that have acknowledged a report."
      >
        <div className="border-t border-surface-border">
          {acknowledgments.map((ack, index) => (
            <a key={ack.org} href={ack.url} target="_blank" rel="noopener noreferrer" className="surface-row group grid gap-4 py-5 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center">
              <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
              <span>
                <span className="block font-medium text-primary transition-colors group-hover:text-accent">{ack.org}</span>
                <span className="mt-1 block text-sm text-muted">{ack.description}</span>
              </span>
              <span className="flex items-center gap-3 text-xs text-muted">
                <span>{ack.year}</span>
                <ArrowUpRight size={15} className="transition-colors group-hover:text-accent" strokeWidth={1.7} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </SplitSection>
    </section>
  )
}
