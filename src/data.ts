export const research = [
  { id: "CVE-2026-3229", title: "Integer Overflow in Certificate Chain Allocation", product: "wolfSSL", status: "published", detail: "An integer overflow in certificate chain allocation can cause heap corruption. Public records state that exploitation is not directly remote and requires the application context loading certificates to be compromised.", meta: "CWE-122 · CVSS 3.1 5.5 Medium · Published 19 Mar 2026", reference: ["Patch", "https://github.com/wolfSSL/wolfssl/pull/9827"] },
  { id: "CVE-2026-5188", title: "Integer Underflow in X.509 Subject Alternative Name Parsing", product: "wolfSSL", status: "published", detail: "Malformed Subject Alternative Name entries can trigger an integer underflow. The issue is limited to configurations using the original ASN.1 parser, disabled by default.", meta: "Low severity · Published Apr 2026", reference: ["Patch", "https://github.com/wolfSSL/wolfssl/pull/10024"] },
  { id: "CVE-2026-6325", title: "Out-of-bounds Write in SetSuitesHashSigAlgo", product: "wolfSSL", status: "published", detail: "An oversized signature algorithms list can write beyond the destination buffer. Finder attribution, severity, and affected versions require confirmation against the official CVE record before public display.", meta: "Published · Attribution verification pending", reference: ["Debian tracker", "https://security-tracker.debian.org/tracker/CVE-2026-6325"] },
  { id: "CVE-2026-44518", title: "XMSS Buffer Overread Bug", product: "liboqs", status: "published", detail: "XMSS and XMSS^MT verification fail to validate caller-supplied signature length. A short buffer can cause an out-of-bounds read. Bytes are consumed internally as hash input, with possible denial of service if memory crosses an unmapped page.", meta: "CWE-125 · CWE-20 · CVSS 3.1 5.3 Medium · Fixed 0.16.0", reference: ["GHSA advisory", "https://github.com/open-quantum-safe/liboqs/security/advisories/GHSA-wf7v-fhxj-73m2"] },
  { id: "CVE-2026-104255", title: "Awaiting public record verification", product: "liboqs", status: "pending-verification", detail: "Researcher-supplied identifier preserved for verification. Title, classification, impact, dates, versions, and attribution are intentionally not stated until official records corroborate them.", meta: "Researcher-supplied identifier · Not counted as verified", reference: ["liboqs advisories", "https://github.com/open-quantum-safe/liboqs/security/advisories"] },
  { id: "GHSA-xv6c-h66p-6mfq", title: "LM-OTS Key Reuse and Signature Forgery in LMS Stateful Signing", product: "liboqs", status: "advisory", detail: "A published GitHub Security Advisory concerning fail-open lock handling. This is displayed as an advisory, not counted as an additional CVE, and is not assumed to be associated with CVE-2026-104255.", meta: "Moderate · Published 6 Oct 2026", reference: ["GitHub advisory", "https://github.com/open-quantum-safe/liboqs/security/advisories/GHSA-xv6c-h66p-6mfq"] },
];

export const projects = [
  { name: "ARGUS", category: "Network Security Engineering", description: "An ongoing Rust project focused on eBPF/XDP firewall engineering, traffic control, and network defense.", tags: ["Rust", "eBPF", "XDP", "VyOS", "SvelteKit"], url: "https://github.com/zulfff/argus" },
  { name: "FortressWAF", category: "Open Source Security Engineering", description: "An open-source Web Application Firewall project. Contributor since 10 October 2026, with a recorded contribution touching approximately five files and 677 lines.", tags: ["Open source", "WAF"], url: "https://github.com/FortressCommunity/FortressWAF" },
  { name: "Medtive Studio", category: "Software Engineering / Digital Commerce", description: "A personal digital asset commerce and SaaS project spanning full-stack development, payments, admin tooling, infrastructure, deployment, and CI/CD.", tags: ["Full-stack", "Payments", "CI/CD"], url: "https://github.com/zulfff/medtive", site: "https://medtivestudio.my.id" },
];

export const articles = [
  ["wolfSSL Hunting Experience: A Gen Z Bug Hunter's Story", "https://medium.com/@FufuFaf1/wolfssl-hunting-experience-a-gen-z-bug-hunters-story-23dedc4edb18"],
  ["Chasing a Valid in the Stars: My First NASA.gov Find", "https://medium.com/@FufuFaf1/chasing-a-valid-in-the-stars-my-first-nasa-gov-find-cecdb9c29c35"],
  ["Race Condition That Leads to Privilege Escalation", "https://medium.com/@FufuFaf1/race-condition-that-leads-to-privilege-escalation-b2f5ef484768"],
];

export const expertise: Array<[string, string[]]> = [
  ["Security Research", ["Vulnerability Research", "Source Code Auditing", "Fuzzing", "Application Security", "Responsible Disclosure", "Root Cause Analysis"]],
  ["Programming", ["Rust", "Python", "TypeScript", "JavaScript"]],
  ["Security & Debugging Tools", ["Burp Suite", "GDB", "Nuclei", "WPScan", "httpx", "Katana", "Linux security tooling"]],
  ["Infrastructure", ["Linux", "Networking", "Docker", "VPS Administration", "CI/CD", "eBPF / XDP"]],
];
