import PersonaPage from '@/components/sections/PersonaPage'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Timeline' }
export default function TimelinePage() { return <PersonaPage kind="timeline" /> }
