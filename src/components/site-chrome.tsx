import Link from "next/link";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" href="/">ARYA / PELIORO</Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link href="/research">Research</Link>
        <Link href="/work">Work</Link>
        <Link href="/expertise">Expertise</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="footer"><span>© 2026 Muhammad Arya Arjuna Habibullah</span><span className="mono">UNDERSTANDING SYSTEMS / INVESTIGATING FAILURE</span></footer>;
}

export function RouteLayout({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return <div className="site-shell"><SiteHeader /><main className="content route-page"><section className="section" aria-labelledby="route-title"><div className="section-heading"><span className="section-index mono">{index}</span><h1 id="route-title">{title}</h1></div>{children}</section></main><SiteFooter /></div>;
}
