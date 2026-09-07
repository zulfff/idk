import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import ResearchSceneSlot from '@/components/scene/ResearchSceneSlot'
import { STATS } from '@/lib/site'

const GLANCE_STATS = [
  { id: 'location', label: 'Based in', value: 'Jakarta, ID' },
  { id: 'cves', label: STATS[1].label, value: STATS[1].value, mono: true },
  { id: 'recognitions', label: STATS[2].label, value: STATS[2].value, mono: true },
]

export default function Hero() {
  return (
    <section className="site-shell grid items-center gap-10 py-10 sm:min-h-[calc(100svh-4.5rem)] sm:gap-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
      <div className="order-last lg:order-first">
        <p className="eyebrow">Independent security researcher</p>
        <h1 className="text-balance mt-7 max-w-3xl text-[clamp(2.6rem,12vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-primary">
          Curiosity is a security tool.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
          I&apos;m Muhammad Arya, a 15-year-old researcher from Jakarta. I find and responsibly disclose vulnerabilities in software and systems people rely on.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/cves"
            className="inline-flex items-center gap-3 bg-accent px-5 py-3 text-sm font-medium text-contrast transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_var(--accent),0_10px_30px_-12px_var(--accent)]"
          >
            Explore research <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
          <Link href="/about" className="rule-link text-sm">
            A little more about me <ArrowDownRight size={15} strokeWidth={1.8} />
          </Link>
        </div>

        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-surface-border pt-7">
          {GLANCE_STATS.map((stat) => (
            <div key={stat.id} className="min-w-0">
              <dt className="text-xs text-muted">{stat.label}</dt>
              <dd className={`mt-1 truncate font-medium text-primary ${stat.mono ? 'font-mono text-xl text-accent' : 'text-base'}`}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <aside className="order-first lg:order-none" aria-label="Interactive 3D research lattice">
        <ResearchSceneSlot />
      </aside>
    </section>
  )
}
