import { ArrowUpRight, Compass, Fingerprint, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { site } from "@/data/site";

const pillars = [
  { icon: Compass, title: "Estratégia", text: "Cada projeto parte dos objetivos e da realidade do seu negócio." },
  { icon: Fingerprint, title: "Identidade", text: "Uma experiência digital alinhada à essência da sua marca." },
  { icon: Workflow, title: "Tecnologia", text: "Soluções úteis, construídas para trabalhar com você." },
];

export default function About() {
  return (
    <section id="sobre" className="commitment-section">
      <div className="section-container commitment-grid">
        <div>
          <Reveal><p className="eyebrow"><span className="eyebrow-line" /> Nosso compromisso</p></Reveal>
          <RevealText text="Não desenvolvemos apenas sites. Criamos ferramentas para impulsionar negócios." className="commitment-title" />
          <Reveal><p className="commitment-copy">{site.about}</p></Reveal>
        </div>
        <div className="pillar-list">
          {pillars.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 80}><div className="pillar-item"><span className="pillar-icon"><Icon size={19} aria-hidden /></span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={16} className="pillar-arrow" aria-hidden /></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
