import { ArrowUpRight } from 'lucide-react'
import { platforms } from '@/lib/data'

export default function Platforms() {
  return (
    <section className="page-shell pb-24">
      <p className="eyebrow">Elsewhere</p>
      <div className="mt-8 grid border-y border-surface-border sm:grid-cols-3 sm:divide-x sm:divide-surface-border">
        {platforms.map((platform) => <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-surface-border py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0"><span><span className="block text-sm font-medium transition-colors group-hover:text-accent">{platform.name}</span><span className="mt-1 block text-xs text-muted">{platform.handle}</span></span><ArrowUpRight size={15} className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" strokeWidth={1.7} /></a>)}
      </div>
    </section>
  )
}
