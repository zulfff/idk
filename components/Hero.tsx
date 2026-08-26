import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import ResearchSceneSlot from '@/components/ResearchSceneSlot'

export default function Hero() {
  return (
    <section className="site-shell grid min-h-0 items-center gap-8 py-10 sm:min-h-[calc(100vh-4.5rem)] sm:gap-12 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
      <div>
        <p className="eyebrow mb-8">Independent security researcher</p>
        <h1 className="text-balance max-w-4xl text-[clamp(2.85rem,13vw,7rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-primary sm:text-[clamp(3.25rem,8vw,7rem)]">
          Curiosity is a security tool.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
          I&apos;m Muhammad Arya, a 15-year-old researcher from Jakarta. I find and responsibly disclose vulnerabilities in software and systems people rely on.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link href="/cves" className="inline-flex items-center gap-3 bg-accent px-5 py-3 text-sm font-medium text-contrast transition-transform hover:-translate-y-0.5">
            Explore research <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
          <Link href="/about" className="rule-link text-sm">
            A little more about me <ArrowDownRight size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </div>

      <aside className="lg:pl-4">
        <ResearchSceneSlot />
        <div className="border-t border-surface-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">At a glance</p>
          <dl className="mt-6 space-y-5 lg:mt-8 lg:space-y-7">
          <div className="flex items-baseline justify-between gap-6 border-b border-surface-border pb-4">
            <dt className="text-sm text-muted">Based in</dt>
            <dd className="font-medium">Jakarta, Indonesia</dd>
          </div>
          <div className="flex items-baseline justify-between gap-6 border-b border-surface-border pb-4">
            <dt className="text-sm text-muted">CVE assignments</dt>
            <dd className="font-mono text-2xl text-accent">04</dd>
          </div>
          <div className="flex items-baseline justify-between gap-6 border-b border-surface-border pb-4">
            <dt className="text-sm text-muted">Public recognition</dt>
            <dd className="font-mono text-2xl text-accent">08+</dd>
          </div>
          <div className="pt-1">
            <p className="text-sm leading-6 text-muted">Currently interested in web application security, open-source review, and the small details that become big problems.</p>
          </div>
          </dl>
        </div>
      </aside>
    </section>
  )
}
