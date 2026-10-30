import { RouteLayout } from "@/components/site-chrome";
import { research } from "@/data";

export default function ResearchPage() {
  return <RouteLayout index="01 / RESEARCH" title="Security research."><div className="research-list">{research.map((item) => <article className="research-item" key={item.id}><div><div className="research-id mono">{item.id}</div><div className="note">{item.product}</div></div><div><h3>{item.title}</h3><p>{item.detail}</p><div className="note mono" style={{ marginTop: 14 }}>{item.meta}</div><a className="ref" href={item.reference[1]} target="_blank" rel="noreferrer">{item.reference[0]} ↗</a></div><div className={`status mono status-${item.status === "pending-verification" ? "pending" : item.status}`}>{item.status.replace("-", " ")}</div></article>)}</div><p className="note" style={{ marginTop: 28 }}>Published CVEs, pending identifiers, and GitHub Security Advisories stay separate. Pending records are not counted as verified.</p></RouteLayout>;
}
