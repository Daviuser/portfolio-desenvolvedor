import { ArrowUpRight, Globe2, Megaphone, PanelsTopLeft, RefreshCw, Workflow, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const icons: Record<string, LucideIcon> = { globe: Globe2, megaphone: Megaphone, app: PanelsTopLeft, layers: Workflow, refresh: RefreshCw };

export default function Services() {
  return (
    <section id="solucoes" className="services-section">
      <div className="section-container">
        <div className="section-heading-row">
          <div><Reveal><p className="eyebrow"><span className="eyebrow-line" /> O que fazemos</p></Reveal><RevealText text="Soluções digitais pensadas para mover seu negócio." className="section-title" /></div>
          <Reveal><p className="section-intro">Da primeira presença online à automação da sua operação, a tecnologia certa pode abrir novos caminhos para sua empresa.</p></Reveal>
        </div>
        <ul className="services-grid">
          {site.services.map((service, i) => { const Icon = icons[service.icon] ?? Globe2; return (
            <li key={service.title}><Reveal delay={(i % 3) * 70} className="service-reveal"><article className="service-card"><div className="service-top"><span className="service-icon"><Icon size={21} aria-hidden /></span><span className="service-count">{String(i + 1).padStart(2, "0")}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contato" className="service-link">Vamos conversar <ArrowUpRight size={15} aria-hidden /></a></article></Reveal></li>
          ); })}
        </ul>
      </div>
    </section>
  );
}
