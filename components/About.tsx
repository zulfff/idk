import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { value: '15', label: 'Age' },
    { value: '4', label: 'CVEs Assigned' },
    { value: '8+', label: 'Hall of Fames' },
  ]

  return (
    <section id="about" className="py-24">
      <div className="space-y-12">
        <div className="bg-surface-card border border-surface-border p-8 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-50" />
          <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-4">// bio.txt</p>
          <div className="max-w-2xl space-y-6">
            <p className="text-muted leading-relaxed font-light">
              I'm a 15-year-old security researcher based in Jakarta, Indonesia. I spend most of my time hunting bugs — web apps, government portals, open source libraries. I've been acknowledged by NASA, the Indonesian government, and several international companies for responsible disclosure.
            </p>
            <p className="text-muted leading-relaxed font-light">
              I think anyone can find critical vulnerabilities. It's more about curiosity than credentials. My focus is on finding impactful bugs that improve the security of systems that adults often overlook.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-surface-border pt-12">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="border border-surface-border rounded-lg p-8 text-center bg-surface-card"
            >
              <div className="text-3xl font-mono text-accent font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-muted uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
