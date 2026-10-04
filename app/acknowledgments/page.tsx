import PersonaPage from '@/components/sections/PersonaPage'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Recognition' }
export default function AcknowledgmentsPage() { return <PersonaPage kind="recognition" /> }
