import { site } from "@/data/site";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

export default function Process() {
  return <section id="processo" className="process-section"><div className="section-container"><div className="section-heading-row"><div><Reveal><p className="eyebrow"><span className="eyebrow-line" /> Do primeiro contato à entrega</p></Reveal><RevealText text="Um caminho claro para tirar seu projeto do papel." className="section-title" /></div><Reveal><p className="section-intro">Cada etapa é conduzida com alinhamento e transparência para manter seu projeto no rumo certo.</p></Reveal></div><ol className="process-grid">{site.process.map((step, i) => <li key={step.title}><Reveal delay={i * 70}><div className="process-card"><span className="process-number">{String(i + 1).padStart(2, "0")}</span><span className="process-rule" /><h3>{step.title}</h3><p>{step.text}</p></div></Reveal></li>)}</ol></div></section>;
}
