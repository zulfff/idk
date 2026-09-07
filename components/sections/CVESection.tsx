import SplitSection from '@/components/ui/SplitSection'
import { cves } from '@/lib/data'

export default function CVESection() {
  return (
    <section className="page-shell page-section">
      <SplitSection
        eyebrow="Research"
        title="Findings worth fixing."
        intro="A short record of vulnerabilities I&apos;ve disclosed through coordinated security programs."
      >
        <div className="border-t border-surface-border">
          {cves.map((cve) => (
            <article key={cve.id} className="surface-row py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-mono text-lg text-accent">{cve.id}</h2>
                <span className="font-mono text-xs text-muted">{cve.year}</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-medium text-primary">{cve.project}</h3>
                <span className="text-muted" aria-hidden="true">/</span>
                <p className="text-sm text-muted">{cve.org}</p>
                <span className={`ml-auto font-mono text-[0.65rem] uppercase tracking-[0.12em] ${cve.status === 'published' ? 'text-accent' : 'text-muted'}`}>
                  {cve.status}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{cve.description}</p>
            </article>
          ))}
        </div>
      </SplitSection>
    </section>
  )
}
