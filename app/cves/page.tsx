import CVESection from '@/components/CVESection'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Security Research' }

export default function CVEPage() {
  return (
    <CVESection />
  )
}
