import { RouteLayout } from "@/components/site-chrome";
import { projects } from "@/data";

export default function WorkPage() {
  return <RouteLayout index="02 / ENGINEERING" title="Selected work."><div className="work-list">{projects.map((project, index) => <article className={index === 0 ? "work-feature" : "work-row"} key={project.name}><div className="note mono">{project.category}</div><h2>{project.name}</h2><p className="note">{project.description}</p><div className="tags">{project.tags.map((tag) => <span className="tag mono" key={tag}>{tag}</span>)}</div><a className="ref" href={project.url} target="_blank" rel="noreferrer">Repository ↗</a>{project.site && <a className="ref" href={project.site} target="_blank" rel="noreferrer" style={{ marginLeft: 18 }}>Website ↗</a>}</article>)}</div></RouteLayout>;
}
