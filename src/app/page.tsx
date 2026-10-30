import MonolithLoader from "@/components/monolith-loader";

const research = [
  {
    id: "CVE-2026-3229",
    title: "Integer Overflow in Certificate Chain Allocation",
    product: "wolfSSL",
    status: "published",
    detail: "An integer overflow in certificate chain allocation can cause heap corruption. Public records state that exploitation is not directly remote and requires the application context loading certificates to be compromised.",
    meta: "CWE-122 · CVSS 3.1 5.5 Medium · Published 19 Mar 2026",
    reference: ["Patch", "https://github.com/wolfSSL/wolfssl/pull/9827"],
  },
  {
    id: "CVE-2026-5188",
    title: "Integer Underflow in X.509 Subject Alternative Name Parsing",
    product: "wolfSSL",
    status: "published",
    detail: "Malformed Subject Alternative Name entries can trigger an integer underflow. The issue is limited to configurations using the original ASN.1 parser, disabled by default.",
    meta: "Low severity · Published Apr 2026",
    reference: ["Patch", "https://github.com/wolfSSL/wolfssl/pull/10024"],
  },
  {
    id: "CVE-2026-6325",
    title: "Out-of-bounds Write in SetSuitesHashSigAlgo",
    product: "wolfSSL",
    status: "published",
    detail: "An oversized signature algorithms list can write beyond the destination buffer. Finder attribution, severity, and affected versions require confirmation against the official CVE record before public display.",
    meta: "Published · Attribution verification pending",
    reference: ["Debian tracker", "https://security-tracker.debian.org/tracker/CVE-2026-6325"],
  },
  {
    id: "CVE-2026-44518",
    title: "XMSS Buffer Overread Bug",
    product: "liboqs",
    status: "published",
    detail: "XMSS and XMSS^MT verification fail to validate caller-supplied signature length. A short buffer can cause an out-of-bounds read. Bytes are consumed internally as hash input, with possible denial of service if memory crosses an unmapped page.",
    meta: "CWE-125 · CWE-20 · CVSS 3.1 5.3 Medium · Fixed 0.16.0",
    reference: ["GHSA advisory", "https://github.com/open-quantum-safe/liboqs/security/advisories/GHSA-wf7v-fhxj-73m2"],
  },
  {
    id: "CVE-2026-104255",
    title: "Awaiting public record verification",
    product: "liboqs",
    status: "pending-verification",
    detail: "Researcher-supplied identifier preserved for verification. Title, classification, impact, dates, versions, and attribution are intentionally not stated until official records corroborate them.",
    meta: "Researcher-supplied identifier · Not counted as verified",
    reference: ["liboqs advisories", "https://github.com/open-quantum-safe/liboqs/security/advisories"],
  },
  {
    id: "GHSA-xv6c-h66p-6mfq",
    title: "LM-OTS Key Reuse and Signature Forgery in LMS Stateful Signing",
    product: "liboqs",
    status: "advisory",
    detail: "A published GitHub Security Advisory concerning fail-open lock handling. This is displayed as an advisory, not counted as an additional CVE, and is not assumed to be associated with CVE-2026-104255.",
    meta: "Moderate · Published 6 Oct 2026",
    reference: ["GitHub advisory", "https://github.com/open-quantum-safe/liboqs/security/advisories/GHSA-xv6c-h66p-6mfq"],
  },
];

const projects = [
  { name: "ARGUS", category: "Network Security Engineering", description: "An ongoing Rust project focused on eBPF/XDP firewall engineering, traffic control, and network defense.", tags: ["Rust", "eBPF", "XDP", "VyOS", "SvelteKit"] },
  { name: "FortressWAF", category: "Open Source Security Engineering", description: "An open-source Web Application Firewall project. Contributor since 10 October 2026, with a recorded contribution touching approximately five files and 677 lines.", tags: ["Open source", "WAF"] },
  { name: "Medtive Studio", category: "Software Engineering / Digital Commerce", description: "A personal digital asset commerce and SaaS project spanning full-stack development, payments, admin tooling, infrastructure, deployment, and CI/CD.", tags: ["Full-stack", "Payments", "CI/CD"] },
];

const articles = [
  ["wolfSSL Hunting Experience: A Gen Z Bug Hunter's Story", "https://medium.com/@FufuFaf1/wolfssl-hunting-experience-a-gen-z-bug-hunters-story-23dedc4edb18"],
  ["Chasing a Valid in the Stars: My First NASA.gov Find", "https://medium.com/@FufuFaf1/chasing-a-valid-in-the-stars-my-first-nasa-gov-find-cecdb9c29c35"],
  ["Race Condition That Leads to Privilege Escalation", "https://medium.com/@FufuFaf1/race-condition-that-leads-to-privilege-escalation-b2f5ef484768"],
];

const expertise: Array<[string, string[]]> = [
  ["Security research", ["Vulnerability Research", "Source Code Auditing", "Fuzzing", "Root Cause Analysis", "Responsible Disclosure"]],
  ["Programming", ["Rust", "Python", "TypeScript", "JavaScript"]],
  ["Tools", ["Burp Suite", "GDB", "Nuclei", "WPScan", "httpx", "Katana"]],
  ["Infrastructure", ["Linux", "Networking", "Docker", "VPS Administration", "CI/CD", "eBPF/XDP"]],
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top">ARYA / PELIORO</a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="kicker mono">Independent vulnerability researcher / Indonesia</span>
            <h1 id="hero-title">ARYA</h1>
            <p className="hero-lede">Investigating software vulnerabilities, understanding implementation-level failures, and building security-focused systems.</p>
            <div className="hero-links">
              <a className="text-link" href="https://github.com/zulfff" target="_blank" rel="noreferrer">GitHub profile</a>
              <a className="text-link" href="https://medium.com/@FufuFaf1/" target="_blank" rel="noreferrer">Medium profile</a>
              <a className="text-link" href="#research">Read research records</a>
            </div>
          </div>
          <div className="scene-wrap"><MonolithLoader /></div>
        </section>

        <div className="content">
          <section className="section" id="about" aria-labelledby="about-title">
            <div className="section-heading"><span className="section-index mono">01 / ABOUT</span><h2 id="about-title">Beyond the surface.</h2></div>
            <div className="about-grid">
              <p className="about-copy">I am interested in understanding how systems fail, finding the underlying causes, and improving the software we depend on.</p>
              <div><p className="note">I am a Grade 10 vocational high school student in Indonesia, studying Computer and Network Engineering and Telecommunications. My work sits between vulnerability research, security engineering, and open-source software.</p><p className="note">Research interests include source code auditing, fuzzing, binary analysis, cryptographic software security, network security, and root cause analysis.</p></div>
            </div>
          </section>

          <section className="section section-rule" id="research" aria-labelledby="research-title">
            <div className="section-heading"><span className="section-index mono">02 / RESEARCH</span><h2 id="research-title">Security research.</h2></div>
            <div className="research-list">
              {research.map((item) => <article className="research-item" key={item.id}><div><div className="research-id mono">{item.id}</div><div className="note">{item.product}</div></div><div><h3>{item.title}</h3><p>{item.detail}</p><div className="note mono" style={{ marginTop: 14 }}>{item.meta}</div><a className="ref" href={item.reference[1]} target="_blank" rel="noreferrer">{item.reference[0]} ↗</a></div><div className={`status mono status-${item.status === "pending-verification" ? "pending" : item.status}`}>{item.status.replace("-", " ")}</div></article>)}
            </div>
            <p className="note" style={{ marginTop: 28 }}>Research records preserve their source category. Published CVEs, pending identifiers, and GitHub Security Advisories are not merged or counted interchangeably.</p>
          </section>

          <section className="section section-rule" id="work" aria-labelledby="work-title">
            <div className="section-heading"><span className="section-index mono">03 / ENGINEERING</span><h2 id="work-title">Selected work.</h2></div>
            <div className="work-layout"><div className="work-feature"><h3>ARGUS</h3><p className="about-copy">Network defense as a systems problem.</p><p className="note">{projects[0].description}</p><div className="tags">{projects[0].tags.map((tag) => <span className="tag mono" key={tag}>{tag}</span>)}</div><a className="ref" href="https://github.com/zulfff/argus" target="_blank" rel="noreferrer">View repository ↗</a></div><div className="work-list">{projects.slice(1).map((project) => <article className="work-row" key={project.name}><div className="note mono">{project.category}</div><h3>{project.name}</h3><p className="note">{project.description}</p><div className="tags">{project.tags.map((tag) => <span className="tag mono" key={tag}>{tag}</span>)}</div><a className="ref" href={project.name === "FortressWAF" ? "https://github.com/FortressCommunity/FortressWAF" : "https://github.com/zulfff/medtive"} target="_blank" rel="noreferrer">Repository ↗</a>{project.name === "Medtive Studio" && <a className="ref" href="https://medtivestudio.my.id" target="_blank" rel="noreferrer" style={{ marginLeft: 18 }}>Website ↗</a>}</article>)}</div></div>
          </section>

          <section className="section section-rule" id="expertise" aria-labelledby="expertise-title">
            <div className="section-heading"><span className="section-index mono">04 / EXPERTISE</span><h2 id="expertise-title">Tools for looking closer.</h2></div>
            <div className="expertise">{expertise.map(([title, items]) => <div key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
          </section>

          <section className="section section-rule" id="notes" aria-labelledby="notes-title">
            <div className="section-heading"><span className="section-index mono">05 / FIELD NOTES</span><h2 id="notes-title">Writing from the hunt.</h2></div>
            <div className="work-list">{articles.map(([title, url]) => <article className="work-row" key={url}><h3>{title}</h3><p className="note">Article by Arya on Medium. Open source article.</p><a className="ref" href={url} target="_blank" rel="noreferrer">Read on Medium ↗</a></article>)}</div>
          </section>

          <section className="section section-rule" id="timeline" aria-labelledby="timeline-title">
            <div className="section-heading"><span className="section-index mono">05 / TIMELINE</span><h2 id="timeline-title">Research timeline.</h2></div>
            <div className="timeline"><div className="timeline-item"><time className="mono">2026 / 03</time><div><h3>CVE-2026-3229 published</h3><p className="note">wolfSSL certificate chain allocation research enters the public record.</p></div></div><div className="timeline-item"><time className="mono">2026 / 05</time><div><h3>CVE-2026-44518 published</h3><p className="note">liboqs XMSS signature length validation research enters the public record.</p></div></div><div className="timeline-item"><time className="mono">2026 / 10</time><div><h3>FortressWAF contribution</h3><p className="note">Open-source contribution recorded under commit 098372bf65.</p></div></div><div className="timeline-item"><time className="mono">ONGOING</time><div><h3>ARGUS development</h3><p className="note">Continued work on Rust and eBPF/XDP network defense engineering.</p></div></div></div>
          </section>
        </div>

        <section className="contact" id="contact" aria-labelledby="contact-title"><span className="kicker mono">06 / CONTACT</span><h2 id="contact-title">Let&apos;s connect.</h2><a className="text-link" href="https://github.com/zulfff" target="_blank" rel="noreferrer">Find me on GitHub</a><span className="note" style={{ display: "block", marginTop: 30, color: "#aaa79e" }}>Professional email: [not provided]</span></section>
      </main>
      <footer className="footer"><span>© 2026 Muhammad Arya Arjuna Habibullah</span><span className="mono">UNDERSTANDING SYSTEMS / INVESTIGATING FAILURE</span></footer>
    </div>
  );
}
