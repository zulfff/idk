'use client'

import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/cves' },
  { name: 'Skills', href: '/skills' },
  { name: 'Recognition', href: '/acknowledgments' },
  { name: 'Writing', href: '/writeups' },
  { name: 'Timeline', href: '/timeline' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/95 backdrop-blur-md">
      <nav className="site-shell flex h-[4.5rem] items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="Home">
          <span className="flex h-8 w-8 items-center justify-center bg-primary font-mono text-xs font-semibold text-surface">MA</span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">Muhammad Arya</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} aria-current={active ? 'page' : undefined} className={`text-sm transition-colors ${active ? 'text-accent' : 'text-muted hover:text-primary'}`}>
                {link.name}
              </Link>
            )
          })}
          <span className="h-5 w-px bg-surface-border" aria-hidden="true" />
          <Link href="/contact" className="text-sm text-primary underline decoration-surface-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
            Contact
          </Link>
          <button type="button" onClick={toggleTheme} className="inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={17} strokeWidth={1.7} /> : <Moon size={17} strokeWidth={1.7} />}
          </button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button type="button" onClick={toggleTheme} className="inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} strokeWidth={1.7} /> : <Moon size={18} strokeWidth={1.7} />}
          </button>
          <button type="button" onClick={() => setIsOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X size={21} strokeWidth={1.7} /> : <Menu size={21} strokeWidth={1.7} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="fixed inset-x-0 top-[4.5rem] h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-surface-border bg-surface lg:hidden" aria-label="Mobile navigation">
          <div className="site-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} aria-current={active ? 'page' : undefined} className={`flex min-h-12 items-center border-b border-surface-border px-1 text-base ${active ? 'text-accent' : 'text-muted'}`}>{link.name}</Link>
            })}
            <Link href="/contact" onClick={() => setIsOpen(false)} aria-current={pathname === '/contact' ? 'page' : undefined} className="flex min-h-12 items-center px-1 text-base text-primary">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
