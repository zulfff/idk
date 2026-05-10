'use client'

import { motion } from 'framer-motion'
import { acknowledgments } from '@/lib/data'
import { ExternalLink, CheckCircle } from 'lucide-react'

export default function Acknowledgments() {
  return (
    <section id="acknowledgments" className="py-24">
      <div className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-8">// hall_of_fame.log</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {acknowledgments.map((ack, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -2 }}
            className="bg-surface-card border border-surface-border p-4 rounded flex items-center gap-4 hover:border-accent transition-colors"
          >
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-accent/20 text-accent text-[10px] font-mono rounded">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <h3 className="text-sm font-bold flex items-center gap-1">
                  {ack.org} 
                  <span className="text-accent text-[8px]">✓</span>
                </h3>
                <span className="text-[9px] font-mono text-muted">{ack.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-mono text-muted">{ack.domain}</p>
                <a
                  href={ack.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-[9px] font-mono opacity-60 hover:opacity-100 transition-opacity"
                >
                  View &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
