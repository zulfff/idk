'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/') return <>{children}</>

  return (
    <main id="main-content" key={pathname} className="route-enter inner-route">
      <div className="page-topline site-shell">
        <Link href="/" className="back-to-menu">← Back to menu</Link>
        <span aria-hidden="true">RESEARCHER / {pathname.slice(1).toUpperCase()}</span>
      </div>
      {children}
    </main>
  )
}
