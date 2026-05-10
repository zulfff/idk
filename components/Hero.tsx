'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const [text, setText] = useState('')
  const fullName = 'Muhammad Arya Arjuna Habibullah'
  const [complete, setComplete] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    let index = 0
    let glitchFrames = 0
    const glyphs = '01#$%/×_<>{}[]'

    const interval = setInterval(() => {
      if (glitchFrames > 0) {
        // Scramble the last few characters
        const currentReal = fullName.slice(0, index)
        const scrambled = currentReal.split('').map((c, i) => {
          if (i < index - 4) return c 
          return glyphs[Math.floor(Math.random() * glyphs.length)]
        }).join('')
        
        setText(scrambled)
        glitchFrames--
        if (glitchFrames === 0) setIsGlitching(false)
        return
      }

      setText(fullName.slice(0, index))
      index++

      // Trigger glitch every ~8 chars
      if (index > 4 && index < fullName.length && index % 8 === 0 && Math.random() > 0.3) {
        glitchFrames = Math.floor(Math.random() * 3) + 2
        setIsGlitching(true)
      }

      if (index > fullName.length) {
        clearInterval(interval)
        setComplete(true)
        setIsGlitching(false)
      }
    }, 70)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 } 
    },
  }

  return (    <section className="min-h-screen flex flex-col justify-center relative py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">Active_Session</span>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-muted text-xs uppercase tracking-tighter"
            >
              // process.identity.init()
            </motion.p>
          </div>

          <div className="relative">
            <motion.h1 
              animate={isGlitching ? {
                x: [0, -2, 2, -1, 0],
                y: [0, 1, -1, 0],
                skew: [0, 1, -1, 0],
                filter: [
                  'none',
                  'drop-shadow(-2px 0 var(--accent)) drop-shadow(2px 0 #ff003c)',
                  'none'
                ]
              } : {}}
              transition={{ duration: 0.1, repeat: isGlitching ? Infinity : 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-primary"
            >
              {text}
              <span className="animate-blink inline-block w-[3px] h-[0.8em] bg-accent ml-2 align-middle" />
            </motion.h1>
          </div>

          {complete && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              <motion.div variants={itemVariants} className="max-w-xl">
                <p className="text-xl md:text-2xl text-muted font-light leading-relaxed">
                  15 years old. <span className="text-primary font-medium underline underline-offset-8 decoration-accent/30 tracking-tight">Finding bugs </span> 
                  in systems that adults usually overlook.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 max-w-lg">
                <div className="p-4 rounded-sm border border-surface-border bg-surface-card backdrop-blur-sm group hover:border-accent transition-colors">
                  <div className="font-mono text-accent text-2xl font-bold mb-1">04</div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-muted group-hover:text-primary transition-colors">CVE_ASSIGNMENTS</div>
                </div>
                <div className="p-4 rounded-sm border border-surface-border bg-surface-card backdrop-blur-sm group hover:border-accent transition-colors">
                  <div className="font-mono text-accent text-2xl font-bold mb-1">08+</div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-muted group-hover:text-primary transition-colors">HALL_OF_FAME_LOGS</div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/cves"
                  className="group relative px-8 py-4 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-10"
                >
                  <span className="relative z-10">Access_Advisories</span>
                  <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all font-bold tracking-tighter">&gt;&gt;</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-surface-border hover:border-accent font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-all bg-surface-card"
                >
                  Initiate_Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>

        <div className="hidden lg:flex flex-col col-span-4 self-end space-y-8 pb-10 opacity-60 hover:opacity-100 transition-opacity">
          <div className="space-y-2 border-l border-surface-border pl-6">
            <div className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] font-bold">System_Status</div>
            <div className="text-sm font-mono text-muted leading-tight">
              Kernel 6.12.0-secure<br/>
              Jakarta/ID Portal Audit: 84%<br/>
              OpenSource Patching: Active
            </div>
          </div>
          <div className="space-y-2 border-l border-surface-border pl-6">
            <div className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] font-bold">Latest_Activity</div>
            <div className="text-xs font-mono text-muted lowercase">
              [2026] Assigned CVE-2026-5188<br/>
              [2026] Patch submitted to wolfSSL<br/>
              [2025] NASA Recognition Received
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
