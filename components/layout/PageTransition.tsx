'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import ResearchSceneSlot from '@/components/scene/ResearchSceneSlot'
import { NAV_LINKS } from '@/lib/site'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <div key={pathname} className={`route-enter ${pathname === '/' ? 'home-route' : 'inner-route'}`}>
      {pathname !== '/' && (
        <div className="page-instrument site-shell">
          <ResearchSceneSlot label={NAV_LINKS.find((link) => link.href === pathname)?.name ?? (pathname === '/contact' ? 'Contact' : '404')} />
        </div>
      )}
      {children}
    </div>
  )
}
