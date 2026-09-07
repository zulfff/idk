import CVESection from '@/components/sections/CVESection'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Security Research' }

export default function CVEPage() {
  return <CVESection />
}
