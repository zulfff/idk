'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: '00.home', href: '/' },
  { name: '01.about', href: '/about' },
  { name: '02.skills', href: '/skills' },
  { name: '03.cves', href: '/cves' },
  { name: '04.hall_of_fame', href: '/acknowledgments' },
  { name: '05.writeups', href: '/writeups' },
  { name: '06.timeline', href: '/timeline' },
  { name: '07.contact', href: '/contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-surface-border bg-opacity-80 backdrop-blur-md dark:bg-black/80 bg-white/80">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/"
          className="font-mono text-accent font-bold text-lg tracking-tighter"
        >
          [MAAJH] <span className="text-[#666] font-normal text-xs ml-2 hidden lg:inline">/ Muhammad Arya Arjuna Habibullah</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] font-mono transition-colors ${
                pathname === link.href ? 'text-accent underline underline-offset-8' : 'text-muted hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 text-muted hover:text-accent transition-colors ml-2"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted hover:text-accent transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted hover:text-accent transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-surface dark:bg-black border-b border-surface-border p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-mono transition-colors ${
                  pathname === link.href ? 'text-accent' : 'text-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
