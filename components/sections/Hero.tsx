import Link from 'next/link'
import ResearchSceneSlot from '@/components/scene/ResearchSceneSlot'
import { STATS } from '@/lib/site'

export default function Hero() {
  return (
    <section className="hero site-shell">
      <div className="hero-copy">
        <p className="eyebrow">Independent security researcher</p>
        <h1 className="display-3d hero-title">Curiosity is<br />a security tool.</h1>
        <p className="hero-intro">I&apos;m Muhammad Arya. I find and responsibly disclose vulnerabilities in the software people rely on.</p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Link href="/cves" className="game-button">View research</Link>
          <Link href="/about" className="rule-link text-sm">Meet the researcher</Link>
        </div>
      </div>
      <aside className="hero-instrument" aria-label="Interactive research instrument">
        <ResearchSceneSlot />
      </aside>
      <dl className="hero-stats">
        <div><dt>Based in</dt><dd>Jakarta, ID</dd></div>
        {STATS.slice(1).map((stat) => <div key={stat.id}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
      </dl>
    </section>
  )
}
