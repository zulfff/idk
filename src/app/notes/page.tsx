import { RouteLayout } from "@/components/site-chrome";
import { articles } from "@/data";

export default function NotesPage() {
  return <RouteLayout index="03 / FIELD NOTES" title="Writing from the hunt."><div className="work-list">{articles.map(([title, url]) => <article className="work-row" key={url}><h2>{title}</h2><p className="note">Article by Arya on Medium. Open source article.</p><a className="ref" href={url} target="_blank" rel="noreferrer">Read on Medium ↗</a></article>)}</div></RouteLayout>;
}
