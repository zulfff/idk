'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [pathname])

  return <div ref={progressRef} className="fixed left-0 right-0 top-0 z-[60] h-px origin-left scale-x-0 bg-accent will-change-transform" aria-hidden="true" />
}
