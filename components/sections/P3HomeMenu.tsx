'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PROFILE_FIRST_NAME, PROFILE_ROLE } from '@/lib/site'

const ITEMS = [
  { label: 'ABOUT ME', href: '/about', size: 'clamp(3.4rem, 10vw, 8rem)' },
  { label: 'RESEARCH', href: '/cves', size: 'clamp(3rem, 8vw, 6.5rem)' },
  { label: 'SKILLS', href: '/skills', size: 'clamp(3.2rem, 9vw, 7rem)' },
  { label: 'WRITING', href: '/writeups', size: 'clamp(3rem, 8vw, 6.5rem)' },
  { label: 'TIMELINE', href: '/timeline', size: 'clamp(2.8rem, 7vw, 5.7rem)' },
  { label: 'CONTACT', href: '/contact', size: 'clamp(3rem, 8vw, 6.5rem)' },
]

export default function P3HomeMenu() {
  const router = useRouter()
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const onControl = event.target instanceof HTMLElement && event.target.closest('a, button')
      if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
        event.preventDefault()
        setActive((value) => Math.max(0, value - 1))
      }
      if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
        event.preventDefault()
        setActive((value) => Math.min(ITEMS.length - 1, value + 1))
      }
      if ((event.key === 'Enter' || event.key === ' ') && !onControl) {
        event.preventDefault()
        router.push(ITEMS[active].href)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, router])

  return (
    <main className="p3-home" id="main-content">
      <div className="p3-home__orb" aria-hidden="true" />
      <div className="p3-home__word" aria-hidden="true">RESEARCH</div>
      <div className="p3-home__scanlines" aria-hidden="true" />
      <div className="p3-home__redline" aria-hidden="true" />
      <div className="p3-home__redline p3-home__redline--soft" aria-hidden="true" />

      <div className="p3-home__identity">
        <span className="p3-home__mark">MA</span>
        <span>{PROFILE_FIRST_NAME}<small>{PROFILE_ROLE}</small></span>
      </div>

      <nav className="p3-menu" aria-label="Main navigation">
        {ITEMS.map((item, index) => {
          const isActive = index === active
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`p3-menu__item ${isActive ? 'is-active' : ''} ${mounted ? 'is-mounted' : ''}`}
              style={{ fontSize: item.size, marginLeft: `${index % 2 === 0 ? 0 : 1.5 + index * 0.35}rem`, transitionDelay: `${index * 70}ms` }}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="p3-menu__slash" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p3-home__hint" aria-hidden="true">
        <span><b>↑↓</b> NAVIGATE</span>
        <span><b>ENTER</b> SELECT</span>
      </div>
      <div className="p3-home__counter" aria-hidden="true">{String(active + 1).padStart(2, '0')} / 06</div>
    </main>
  )
}
