'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-surface-border">
      <div className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-8">// technical_stack.sh</div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, i) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-card border border-surface-border p-6 rounded-sm"
          >
            <h3 className="font-mono text-xs text-muted uppercase mb-4 tracking-tighter">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-center gap-3 font-mono text-sm group">
                  <span className="text-accent opacity-50 group-hover:opacity-100 transition-opacity">&gt;</span>
                  <span className="text-muted group-hover:text-primary transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
