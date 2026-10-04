import AboutPersona from '@/components/sections/AboutPersona'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return <AboutPersona />
}
