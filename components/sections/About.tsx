import SplitSection from '@/components/ui/SplitSection'
import ArrowLink from '@/components/ui/ArrowLink'
import { STATS, type Stat } from '@/lib/site'

const StatsStrip = ({ stats }: { stats: readonly Stat[] }) => (
  <div className="mt-20 grid border-y border-surface-border sm:grid-cols-3">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="border-b border-surface-border py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
      >
        <div className="font-mono text-3xl text-accent">{stat.value}</div>
        <div className="mt-2 text-sm text-muted">{stat.label}</div>
      </div>
    ))}
  </div>
)

export default function About() {
  return (
    <section className="page-shell page-section">
      <SplitSection
        eyebrow="About"
        title="The person behind the reports."
        intro="Who I am, what I do, and why responsible disclosure matters."
      >
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-muted">
          <p>I&apos;m a security researcher based in Jakarta, Indonesia. Most days I&apos;m looking at web applications, government portals, and open-source libraries to understand how they fail and how they can be made better.</p>
          <p>Responsible disclosure is the part that matters most to me. A good finding should come with enough context to fix it, learn from it, and keep the same mistake from returning.</p>
        </div>
        <ArrowLink href="/contact" className="mt-9">Start a conversation</ArrowLink>
      </SplitSection>
      <StatsStrip stats={STATS} />
    </section>
  )
}
