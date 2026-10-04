import PersonaPage from '@/components/sections/PersonaPage'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Security Research' }
export default function CVEPage() { return <PersonaPage kind="research" /> }
