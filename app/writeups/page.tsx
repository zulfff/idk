import PersonaPage from '@/components/sections/PersonaPage'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Writing' }
export default function WriteupsPage() { return <PersonaPage kind="writing" /> }
