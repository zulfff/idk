import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SplitSection from '@/components/ui/SplitSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ArrowLink from '@/components/ui/ArrowLink'
import { acknowledgments, cves, writeups } from '@/lib/data'

function RowArrow() {
  return (
    <ArrowUpRight
      size={16}
      className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      strokeWidth={1.7}
      aria-hidden="true"
    />
  )
}

export default function HomeOverview() {
  return (
    <div className="site-shell pb-24">
      <SplitSection
        as="h2"
        variant="compact"
        className="border-t border-surface-border py-16"
        eyebrow="Selected work"
        title="A few things I&apos;ve learned by looking closely."
      >
        <div className="border-t border-surface-border">
          {cves.slice(0, 3).map((cve) => (
            <Link key={cve.id} href="/cves" className="surface-row group grid gap-3 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-6">
              <span className="font-mono text-sm text-accent">{cve.id}</span>
              <span>
                <span className="block font-medium transition-colors group-hover:text-accent">{cve.project}</span>
                <span className="mt-1 block text-sm text-muted">{cve.description}</span>
              </span>
              <RowArrow />
            </Link>
          ))}
        </div>
        <ArrowLink href="/cves" className="mt-7">View all research</ArrowLink>
      </SplitSection>

      <SplitSection
        as="h2"
        variant="compact"
        className="border-t border-surface-border py-16"
        eyebrow="Beyond the reports"
        title="Research is also about sharing the path."
      >
        <div>
          <div className="border-t border-surface-border">
            {writeups.slice(0, 2).map((post) => (
              <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="surface-row group block py-5">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-xs text-accent">{post.date}</span>
                  <RowArrow />
                </div>
                <h3 className="mt-3 max-w-xl text-lg font-medium leading-snug transition-colors group-hover:text-accent">{post.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{post.excerpt}</p>
              </a>
            ))}
          </div>
          <ArrowLink href="/writeups" className="mt-7">Read the notes</ArrowLink>
        </div>
      </SplitSection>

      <section className="grid gap-8 border-t border-surface-border py-16 md:grid-cols-[1fr_auto] md:items-end">
        <SectionHeading
          as="h2"
          variant="compact"
          eyebrow="Working principle"
          title="Find carefully. Explain clearly. Leave things safer."
        />
        <div className="max-w-xs text-sm leading-6 text-muted md:text-right">
          <p>{acknowledgments.length} organizations have acknowledged the work so far.</p>
          <ArrowLink href="/contact" className="mt-5">Get in touch</ArrowLink>
        </div>
      </section>
    </div>
  )
}
