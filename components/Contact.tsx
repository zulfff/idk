import { socials } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-surface-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">// connection</p>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
          </div>
          <p className="text-muted leading-relaxed max-w-sm">
            I'm always open to responsible disclosure collaboration, mentorship, or just talking about security.
          </p>
        </div>

        <div className="space-y-1">
          <div className="font-mono text-xs text-muted mb-4 uppercase tracking-widest">// socials</div>
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group p-3 -mx-3 rounded-lg hover:bg-surface-card transition-colors border border-transparent hover:border-surface-border"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs font-mono text-muted w-24">{social.platform}</span>
                <span className="text-sm group-hover:text-accent transition-colors font-mono">
                  {social.handle}
                </span>
              </div>
              <ArrowUpRight size={14} className="text-muted group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
