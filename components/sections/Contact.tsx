import { ArrowUpRight } from 'lucide-react'
import SplitSection from '@/components/ui/SplitSection'
import { socials } from '@/lib/data'

export default function Contact() {
  return (
    <section className="page-shell page-section">
      <SplitSection
        eyebrow="Contact"
        title="Let&apos;s talk carefully."
        intro="For responsible disclosure, collaboration, or a thoughtful conversation about security, you can find me here."
      >
        <div className="border-t border-surface-border">
          {socials.map((social) => (
            <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="surface-row group flex items-center justify-between gap-5 py-5">
              <span>
                <span className="block text-sm font-medium text-primary transition-colors group-hover:text-accent">{social.platform}</span>
                <span className="mt-1 block text-sm text-muted">{social.handle}</span>
              </span>
              <ArrowUpRight size={17} className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" strokeWidth={1.7} aria-hidden="true" />
            </a>
          ))}
        </div>
      </SplitSection>
    </section>
  )
}
