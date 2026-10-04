'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import PersonaBackground from '@/components/layout/PersonaBackground'
import { acknowledgments, cves, skills, timeline, writeups, socials } from '@/lib/data'
import { useRouter } from 'next/navigation'
import { PROFILE_FULL_NAME, PROFILE_ROLE } from '@/lib/site'

type Row = { title: string; meta: string; description: string; href?: string }

type PersonaPageProps = {
  kind: 'research' | 'skills' | 'writing' | 'timeline' | 'recognition' | 'contact'
}

const content: Record<PersonaPageProps['kind'], { title: string; subtitle: string; rows: Row[]; background: string }> = {
  research: { title: 'RESEARCH', subtitle: 'COORDINATED SECURITY DISCLOSURES', background: '/persona/main2.optimized.mp4', rows: cves.map((item) => ({ title: item.id, meta: `${item.project} / ${item.org} / ${item.status}`, description: item.description })) },
  skills: { title: 'SKILLS', subtitle: 'TECHNICAL AND CREATIVE STACK', background: '/persona/main2.optimized.mp4', rows: skills.flatMap((group) => group.items.map((item) => ({ title: item, meta: group.category, description: `Applied through ${group.category.toLowerCase()} workflows.` }))) },
  writing: { title: 'WRITING', subtitle: 'FIELD NOTES AND TECHNICAL STORIES', background: '/persona/main1.optimized.mp4', rows: writeups.map((item) => ({ title: item.title, meta: item.date, description: item.excerpt, href: item.url })) },
  timeline: { title: 'TIMELINE', subtitle: 'EVENT LIST / DATES AND MILESTONES', background: '/persona/main2.optimized.mp4', rows: timeline.map((item) => ({ title: item.title, meta: item.date, description: item.description })) },
  recognition: { title: 'RECOGNITION', subtitle: 'RESPONSIBLE DISCLOSURE RECORD', background: '/persona/main3.optimized.mp4', rows: acknowledgments.map((item) => ({ title: item.org, meta: `${item.domain} / ${item.year}`, description: item.description, href: item.url })) },
  contact: { title: 'SOCIAL HUB', subtitle: 'OPEN A CHANNEL', background: '/persona/main3.optimized.mp4', rows: socials.map((item) => ({ title: item.platform, meta: item.handle, description: 'External profile link', href: item.url })) },
}

export default function PersonaPage({ kind }: PersonaPageProps) {
  const router = useRouter()
  const page = content[kind]
  const [active, setActive] = useState(0)
  const row = page.rows[active] ?? page.rows[0]

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') { event.preventDefault(); setActive((value) => Math.max(0, value - 1)) }
      if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') { event.preventDefault(); setActive((value) => Math.min(page.rows.length - 1, value + 1)) }
      if (event.key === 'Enter' && row?.href) window.open(row.href, '_blank', 'noopener,noreferrer')
      if (event.key === 'Escape' || event.key.toLowerCase() === 'q') router.push('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [page.rows.length, row?.href, router])

  return (
    <div className="persona-page">
      <PersonaBackground src={page.background} />
      <div className="persona-page__identity"><span>MA</span><strong>{PROFILE_FULL_NAME}<small>{PROFILE_ROLE}</small></strong></div>
      <Link href="/" className="persona-page__back">← MENU</Link>
      <div className="persona-shell">
        <aside className="persona-sidebar">
          <h1>{page.title}</h1>
          <p>{page.subtitle}</p>
          <div className="persona-controls"><span><b>W / S</b> MOVE</span><span><b>ENTER</b> OPEN</span><span><b>Q / ESC</b> BACK</span></div>
          <div className="persona-list">
            {page.rows.map((item, index) => (
              <button type="button" key={`${item.title}-${index}`} className={`persona-list__item ${index === active ? 'is-active' : ''}`} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)}>
                <strong>{item.title}</strong><small>{item.meta}</small>
              </button>
            ))}
          </div>
        </aside>
        <section className="persona-detail" aria-live="polite">
          <div className="persona-detail__head"><span>{String(active + 1).padStart(2, '0')} / {String(page.rows.length).padStart(2, '0')}</span><b>{page.title}</b></div>
          <div className="persona-detail__body"><p className="persona-detail__meta">{row?.meta}</p><h2>{row?.title}</h2><p>{row?.description}</p>{row?.href ? <a href={row.href} target="_blank" rel="noreferrer">OPEN LINK</a> : null}</div>
        </section>
      </div>
    </div>
  )
}
