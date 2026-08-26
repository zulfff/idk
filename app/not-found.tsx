import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[calc(100vh-9rem)] items-center py-16">
      <div className="max-w-2xl">
        <p className="eyebrow">404 / Not found</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">This path leads nowhere.</h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-muted">The page may have moved, or the address might be incomplete.</p>
        <Link href="/" className="rule-link mt-9 text-sm"><ArrowLeft size={15} strokeWidth={1.8} /> Return home</Link>
      </div>
    </section>
  )
}
