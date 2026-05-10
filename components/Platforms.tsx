'use client'

import { motion } from 'framer-motion'
import { platforms } from '@/lib/data'

export default function Platforms() {
  return (
    <section id="platforms" className="py-24">
      <div className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-8">// connected_platforms</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {platforms.map((platform) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="bg-surface-card border border-surface-border px-4 py-3 rounded-sm flex justify-between items-center hover:border-accent transition-colors group"
          >
            <span className="text-xs font-mono text-muted group-hover:text-primary transition-colors">{platform.name}</span>
            <span className="text-accent text-[10px] font-mono">{platform.handle}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
