import { acknowledgments, cves } from '@/lib/data'

export type NavLink = {
  name: string
  href: string
}

export const PROFILE_FIRST_NAME = 'Muhammad Arya'
export const PROFILE_FULL_NAME = 'Muhammad Arya Arjuna Habibullah'
export const PROFILE_ROLE = 'Independent security researcher'
export const PROFILE_LOCATION = 'Jakarta, Indonesia'

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/cves' },
  { name: 'Skills', href: '/skills' },
  { name: 'Recognition', href: '/acknowledgments' },
  { name: 'Writing', href: '/writeups' },
  { name: 'Timeline', href: '/timeline' },
]

export const FOOTER_LINKS: NavLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/cves' },
  { name: 'Skills', href: '/skills' },
  { name: 'Writing', href: '/writeups' },
  { name: 'Contact', href: '/contact' },
]

const pad2 = (value: number) => String(value).padStart(2, '0')

export const STATS = [
  { id: 'age', value: '15', label: 'years old' },
  { id: 'cves', value: pad2(cves.length), label: 'CVE assignments' },
  {
    id: 'recognitions',
    value: `${pad2(acknowledgments.length)}+`,
    label: 'recognitions',
  },
] as const

export type Stat = (typeof STATS)[number]
