import { RouteLayout } from "@/components/site-chrome";
import { expertise } from "@/data";

export default function ExpertisePage() {
  return <RouteLayout index="05 / EXPERTISE" title="Technical expertise."><p className="about-copy">Tools and methods used to inspect how systems are built, break, and get repaired.</p><div className="expertise expertise-page">{expertise.map(([title, items]) => <section key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div></RouteLayout>;
}
