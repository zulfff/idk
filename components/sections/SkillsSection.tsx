import SplitSection from '@/components/ui/SplitSection'
import { skills } from '@/lib/data'

export default function SkillsSection() {
  return (
    <section className="page-shell page-section">
      <SplitSection
        eyebrow="Practice"
        title="Tools are useful. Thinking is the skill."
        intro="The categories I work in most, and the tools that help me look closer."
      >
        <div className="divide-y divide-surface-border border-y border-surface-border">
          {skills.map((group) => (
            <div key={group.category} className="grid gap-5 py-7 sm:grid-cols-[0.55fr_1fr] sm:gap-10">
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{group.category}</h2>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2">
                    <span className="h-1 w-1 translate-y-[-2px] bg-accent/70" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SplitSection>
    </section>
  )
}
