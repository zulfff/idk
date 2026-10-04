'use client'

import { usePathname } from 'next/navigation'

export default function PersonaWipe() {
  const pathname = usePathname()
  return <div key={pathname} className="persona-wipe" aria-hidden="true"><i /><i /><i /></div>
}
