'use client'

import { motion } from 'framer-motion'
import { timeline } from '@/lib/data'

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 border-t border-surface-border">
      <div className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-12">// exploration_history.log</div>
      
      <div className="relative border-l border-surface-border ml-3 space-y-12">
        {timeline.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-accent rounded-full border-4 border-surface ring-1 ring-accent/20" />
            
            <div>
              <span className="font-mono text-xs text-accent mb-1 block">{event.date}</span>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{event.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-xl font-light">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
