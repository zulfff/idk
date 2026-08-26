import { ArrowUpRight } from 'lucide-react'
import { socials } from '@/lib/data'

export default function Contact() {
  return (
    <section className="page-shell page-section">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div><p className="eyebrow">Contact</p><h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Let&apos;s talk carefully.</h1><p className="mt-6 max-w-sm leading-7 text-muted">For responsible disclosure, collaboration, or a thoughtful conversation about security, you can find me here.</p></div>
        <div className="border-t border-surface-border">
          {socials.map((social) => <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="surface-row flex items-center justify-between gap-5 py-5"><span><span className="block text-sm font-medium">{social.platform}</span><span className="mt-1 block text-sm text-muted">{social.handle}</span></span><ArrowUpRight size={17} className="text-muted transition-colors hover:text-accent" strokeWidth={1.7} /></a>)}
        </div>
      </div>
    </section>
  )
}
