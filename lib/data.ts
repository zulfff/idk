export type CVE = {
  id: string
  project: string
  org: string
  status: 'published' | 'reserved'
  description: string
  year: number
}

export type Acknowledgment = {
  org: string
  domain: string
  description: string
  url: string
  year: number
}

export type Platform = {
  name: string
  handle: string
  url: string
}

export type Social = {
  platform: string
  handle: string
  url: string
}

export type Writeup = {
  title: string
  url: string
  excerpt: string
  date: string
}

export type Skill = {
  category: string
  items: string[]
}

export type TimelineEvent = {
  date: string
  title: string
  description: string
}

export const cves: CVE[] = [
  {
    id: 'CVE-2026-5188',
    project: 'wolfSSL',
    org: 'WolfSSL Team',
    status: 'published',
    description: 'Security vulnerability discovered and responsibly reported.',
    year: 2026,
  },
  {
    id: 'CVE-2026-3229',
    project: 'wolfSSL',
    org: 'WolfSSL Team',
    status: 'published',
    description: 'Security vulnerability discovered and responsibly reported.',
    year: 2026,
  },
  {
    id: 'CVE-2026-6325',
    project: 'wolfSSL',
    org: 'WolfSSL Team',
    status: 'reserved',
    description: 'Reserved — pending coordinated disclosure.',
    year: 2026,
  },
  {
    id: 'CVE-2026-44518',
    project: 'liboqs',
    org: 'Open Quantum Safe',
    status: 'reserved',
    description: 'Reserved — pending coordinated disclosure.',
    year: 2026,
  },
]

export const acknowledgments: Acknowledgment[] = [
  {
    org: 'wolfSSL',
    domain: 'wolfssl.com',
    description: 'Acknowledged for responsibly disclosing multiple cryptographic vulnerabilities.',
    url: 'https://www.wolfssl.com/',
    year: 2026,
  },
  {
    org: 'Open Quantum Safe',
    domain: 'openquantumsafe.org',
    description: 'Recognized for security research and vulnerability disclosure in liboqs.',
    url: 'https://openquantumsafe.org/',
    year: 2026,
  },
  {
    org: 'NASA',
    domain: 'nasa.gov',
    description: 'Discovered and reported security vulnerability on nasa.gov.',
    url: 'https://nasa.gov',
    year: 2025,
  },
  {
    org: 'Pemerintah DKI Jakarta',
    domain: 'jakarta.go.id',
    description: 'Security researcher recognition for vulnerability disclosure.',
    url: 'https://jakarta.go.id',
    year: 2025,
  },
  {
    org: 'Pemerintah Kota Yogyakarta',
    domain: 'jogjakota.go.id',
    description: 'Acknowledged for responsible disclosure on government portal.',
    url: 'https://jogjakota.go.id',
    year: 2025,
  },
  {
    org: 'Signicat',
    domain: 'signicat.com',
    description: 'Recognized for discovering security vulnerability.',
    url: 'https://signicat.com',
    year: 2025,
  },
  {
    org: 'Dokobit',
    domain: 'dokobit.com',
    description: 'Security researcher recognition for responsible disclosure.',
    url: 'https://dokobit.com',
    year: 2025,
  },
  {
    org: 'Rust Security Team',
    domain: 'rust-lang.org',
    description: 'Acknowledged by Rust security team for vulnerability report.',
    url: 'https://rust-lang.org',
    year: 2025,
  },
]

export const platforms: Platform[] = [
  { name: 'HackerOne', handle: 'pelioro', url: 'https://hackerone.com/pelioro' },
  { name: 'Bugcrowd', handle: 'JustAKids', url: 'https://bugcrowd.com/JustAKids' },
  { name: 'Intigriti', handle: 'zulfff', url: 'https://intigriti.com/zulfff' },
]

export const socials: Social[] = [
  { platform: 'GitHub', handle: 'zulfff', url: 'https://github.com/zulfff' },
  {
    platform: 'LinkedIn',
    handle: 'muhammad-arya-arjuna-habibulah',
    url: 'https://www.linkedin.com/in/muhammad-arya-arjuna-habibulah',
  },
  { platform: 'TikTok', handle: '@jaxthegrayhat', url: 'https://tiktok.com/@jaxthegrayhat' },
  { platform: 'Instagram', handle: '@jaxthewhitehat', url: 'https://instagram.com/jaxthewhitehat' },
]

export const skills: Skill[] = [
  {
    category: 'Vulnerability Research',
    items: ['Web Pentesting', 'Source Code Review', 'API Security', 'Logic Flaws'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Burp Suite', 'Nmap', 'Metasploit', 'Python', 'Go', 'Wireshark'],
  },
  {
    category: 'Specializations',
    items: ['Cloud Security', 'Reverse Engineering', 'Cryptography', 'OSINT'],
  },
]

export const timeline: TimelineEvent[] = [
  {
    date: '2026',
    title: 'Multi-CVE Assignment',
    description: 'Assigned 4 CVEs for critical vulnerabilities in wolfSSL and liboqs.',
  },
  {
    date: '2025',
    title: 'NASA Hall of Fame',
    description: 'Recognized by NASA VDP for identifying security vulnerabilities on nasa.gov.',
  },
  {
    date: '2024',
    title: 'Government Security Audit',
    description: 'Began reporting vulnerabilities to Indonesian government portals (DKI Jakarta & Yogyakarta).',
  },
  {
    date: '2023',
    title: 'Journey Begins',
    description: 'Started deep-diving into web application security and responsible disclosure.',
  },
]

export const writeups: Writeup[] = [
  {
    title: 'wolfSSL Hunting Experience: Cerita dari seorang bug hunter pengangguran :v',
    url: 'https://medium.com/@FufuFaf1/wolfssl-hunting-experience-cerita-dari-seorang-bug-hunter-pengangguran-v-5b51cd55cefe',
    excerpt: 'Sharing my journey finding multiple CVEs in wolfSSL, from setup to discovery.',
    date: '2026',
  },
  {
    title: 'Chasing a valid in the stars: My first nasa.gov find',
    url: 'https://medium.com/@FufuFaf1/chasing-a-valid-in-the-stars-my-first-nasa-gov-find-cecdb9c29c35',
    excerpt: 'The story of how I found my first vulnerability on NASA’s infrastructure.',
    date: '2025',
  },
  {
    title: 'Race Condition that leads to Privilege Escalation',
    url: 'https://medium.com/@FufuFaf1/race-condition-that-leads-to-privilege-escalation-b2f5ef484768',
    excerpt: 'A technical deep-dive into a race condition vulnerability and its impact.',
    date: '2025',
  },
]
