import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-shell border-t border-surface-border py-8">
      <div className="flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Muhammad Arya Arjuna Habibullah</p>
          <p className="mt-2 text-xs">Independent security research from Jakarta.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/about" className="transition-colors hover:text-accent">About</Link>
          <Link href="/cves" className="transition-colors hover:text-accent">Research</Link>
          <Link href="/skills" className="transition-colors hover:text-accent">Skills</Link>
          <Link href="/writeups" className="transition-colors hover:text-accent">Writing</Link>
          <Link href="/contact" className="transition-colors hover:text-accent">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
