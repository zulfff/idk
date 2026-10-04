import PersonaPage from '@/components/sections/PersonaPage'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Skills' }
export default function SkillsPage() { return <PersonaPage kind="skills" /> }
