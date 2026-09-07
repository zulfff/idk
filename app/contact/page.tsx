import Contact from '@/components/sections/Contact'
import Platforms from '@/components/sections/Platforms'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Platforms />
    </>
  )
}
