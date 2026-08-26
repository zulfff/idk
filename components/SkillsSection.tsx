import { skills } from '@/lib/data'

export default function SkillsSection() {
  return (
    <section className="page-shell page-section">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div><p className="eyebrow">Practice</p><h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Tools are useful. Thinking is the skill.</h1></div>
        <div className="divide-y divide-surface-border border-y border-surface-border">
          {skills.map((group) => <div key={group.category} className="grid gap-5 py-7 sm:grid-cols-[0.55fr_1fr] sm:gap-10"><h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{group.category}</h2><ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
        </div>
      </div>
    </section>
  )
}
