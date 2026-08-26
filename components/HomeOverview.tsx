import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { acknowledgments, cves, writeups } from '@/lib/data'

export default function HomeOverview() {
  return (
    <div className="site-shell pb-24">
      <section className="grid gap-12 border-t border-surface-border py-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-6 max-w-sm text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">A few things I&apos;ve learned by looking closely.</h2>
        </div>
        <div className="border-t border-surface-border">
          {cves.slice(0, 3).map((cve) => (
            <Link key={cve.id} href="/cves" className="surface-row group grid gap-3 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-6">
              <span className="font-mono text-sm text-accent">{cve.id}</span>
              <span><span className="block font-medium transition-colors group-hover:text-accent">{cve.project}</span><span className="mt-1 block text-sm text-muted">{cve.description}</span></span>
              <ArrowUpRight size={16} className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" strokeWidth={1.7} />
            </Link>
          ))}
          <Link href="/cves" className="rule-link mt-7 text-sm">View all research <ArrowUpRight size={15} strokeWidth={1.8} /></Link>
        </div>
      </section>

      <section className="grid gap-12 border-t border-surface-border py-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <p className="eyebrow">Beyond the reports</p>
          <h2 className="mt-6 max-w-sm text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Research is also about sharing the path.</h2>
        </div>
        <div>
          <div className="border-t border-surface-border">
            {writeups.slice(0, 2).map((post) => (
              <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="surface-row group block py-5">
                <div className="flex items-start justify-between gap-5"><span className="font-mono text-xs text-accent">{post.date}</span><ArrowUpRight size={16} className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" strokeWidth={1.7} /></div>
                <h3 className="mt-3 max-w-xl text-lg font-medium leading-snug transition-colors group-hover:text-accent">{post.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{post.excerpt}</p>
              </a>
            ))}
          </div>
          <Link href="/writeups" className="rule-link mt-7 text-sm">Read the notes <ArrowUpRight size={15} strokeWidth={1.8} /></Link>
        </div>
      </section>

      <section className="grid gap-8 border-t border-surface-border py-16 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow">Working principle</p>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Find carefully. Explain clearly. Leave things safer.</h2>
        </div>
        <div className="max-w-xs text-sm leading-6 text-muted md:text-right">
          <p>{acknowledgments.length} organizations have acknowledged the work so far.</p>
          <Link href="/contact" className="rule-link mt-5 text-sm">Get in touch <ArrowUpRight size={15} strokeWidth={1.8} /></Link>
        </div>
      </section>
    </div>
  )
}
