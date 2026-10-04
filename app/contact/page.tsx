import PersonaPage from '@/components/sections/PersonaPage'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact' }
export default function ContactPage() { return <PersonaPage kind="contact" /> }
