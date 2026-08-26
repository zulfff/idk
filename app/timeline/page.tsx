import Timeline from '@/components/Timeline'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Timeline' }

export default function TimelinePage() {
  return (
    <Timeline />
  )
}
