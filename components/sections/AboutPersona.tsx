import Link from 'next/link'
import PersonaBackground from '@/components/layout/PersonaBackground'
import { socials } from '@/lib/data'
import { PROFILE_FULL_NAME, PROFILE_ROLE, PROFILE_LOCATION } from '@/lib/site'

export default function AboutPersona() {
  return <div className="persona-page persona-about"><PersonaBackground src="/persona/main1.optimized.mp4" /><div className="persona-page__identity"><span>MA</span><strong>{PROFILE_FULL_NAME}<small>{PROFILE_ROLE}</small></strong></div><Link href="/" className="persona-page__back">← MENU</Link><div className="persona-about__shell"><aside className="persona-dossier"><h1>ABOUT</h1><p>PROFILE DOSSIER</p><div className="persona-controls"><span><b>ENTER</b> SOCIALS</span><span><b>Q / ESC</b> BACK</span></div>{/* eslint-disable-next-line @next/next/no-img-element -- single static portrait, no optimization pipeline needed */}
      <img src="/persona/mainm.jpeg" alt="Profile portrait" />
</aside><section className="persona-paper"><p className="persona-detail__meta">{PROFILE_LOCATION} / SECURITY RESEARCHER</p><h2>{PROFILE_FULL_NAME}</h2><p>I am an independent security researcher based in Jakarta, Indonesia. I study how web applications, government portals, and open-source libraries fail, then report the problem with enough context to make it fixable.</p><p>Responsible disclosure is the part that matters most. A useful finding should help a team patch the issue and keep the same mistake from returning.</p><h3>WORKING PRINCIPLE</h3><p>Find carefully. Explain clearly. Leave things safer.</p><div className="persona-paper__links">{socials.slice(0, 2).map((social) => <a key={social.platform} href={social.url} target="_blank" rel="noreferrer">{social.platform}</a>)}</div></section></div></div>
}
