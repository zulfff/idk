import Link from 'next/link'
import { FOOTER_LINKS, PROFILE_FULL_NAME } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="site-shell border-t border-surface-border py-8">
      <div className="flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {PROFILE_FULL_NAME}
          </p>
          <p className="mt-2 text-xs">Independent security research from Jakarta.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
