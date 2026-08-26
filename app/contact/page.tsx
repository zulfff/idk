import Contact from '@/components/Contact'
import Platforms from '@/components/Platforms'
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
