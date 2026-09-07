import { ArrowUpRight } from 'lucide-react'
import ArrowLink from '@/components/ui/ArrowLink'
import SplitSection from '@/components/ui/SplitSection'
import { writeups } from '@/lib/data'

export default function WriteupsSection() {
  return (
    <section className="page-shell page-section">
      <SplitSection
        eyebrow="Writing"
        title="Notes from the hunt."
        intro="Longer explanations, lessons, and stories published on Medium."
      >
        <div className="border-t border-surface-border">
          {writeups.map((post) => (
            <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="surface-row group flex items-start justify-between gap-5 py-7">
              <div>
                <p className="font-mono text-xs text-accent">{post.date}</p>
                <h2 className="mt-3 max-w-xl text-xl font-medium leading-snug tracking-tight text-primary transition-colors group-hover:text-accent">{post.title}</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{post.excerpt}</p>
              </div>
              <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" strokeWidth={1.7} aria-hidden="true" />
            </a>
          ))}
        </div>
        <ArrowLink href="https://medium.com/@FufuFaf1" external className="mt-8">Read all on Medium</ArrowLink>
      </SplitSection>
    </section>
  )
}
