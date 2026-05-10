'use client'

import { motion } from 'framer-motion'
import { writeups } from '@/lib/data'
import { BookOpen, ArrowUpRight } from 'lucide-react'

export default function WriteupsSection() {
  return (
    <section id="writeups" className="py-24">
      <div className="flex items-end justify-between mb-12 border-l-2 border-accent pl-4 py-1">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Technical Writeups</h2>
          <div className="font-mono text-[10px] text-muted uppercase tracking-widest">Documenting the hunt</div>
        </div>
        <a 
          href="https://medium.com/@FufuFaf1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-accent font-bold hover:underline"
        >
          VIEW_ALL_ON_MEDIUM
        </a>
      </div>

      <div className="grid gap-4">
        {writeups.map((post, i) => (
          <motion.a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ x: 4 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-surface-card border border-surface-border p-6 rounded-sm hover:border-accent transition-all"
          >
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-accent/10 border border-accent/20 rounded">
              <BookOpen size={20} className="text-accent" />
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <span className="font-mono text-xs text-muted ml-4 shrink-0">{post.date}</span>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed line-clamp-2 italic">
                "{post.excerpt}"
              </p>
            </div>

            <ArrowUpRight size={18} className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
