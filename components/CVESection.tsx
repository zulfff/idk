'use client'

import { motion } from 'framer-motion'
import { cves } from '@/lib/data'

export default function CVESection() {
  return (
    <section id="cves" className="py-24">
      <div className="flex items-end justify-between mb-8 border-l-2 border-accent pl-4 py-1">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Security Advisories</h2>
          <div className="font-mono text-[10px] text-muted uppercase tracking-widest">Vulnerability Disclosure Program (VDP)</div>
        </div>
        <div className="font-mono text-[10px] text-accent font-bold hidden sm:block">4 ENTRIES TOTAL</div>
      </div>

      <div className="grid gap-6">
        {cves.map((cve, i) => (
          <motion.div
            key={cve.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative border-l-2 border-accent bg-surface-card p-6 border-y border-r border-surface-border rounded-r-lg hover:border-accent transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent text-lg font-medium">{cve.id}</span>
                <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded border ${
                    cve.status === 'published' 
                    ? 'bg-accent/10 text-accent border-accent/20' 
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                  {cve.status}
                </span>
              </div>
              <span className="text-xs font-mono text-muted">{cve.year}</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-1">{cve.project}</h3>
                <p className="text-xs text-muted font-sans">{cve.org}</p>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {cve.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
