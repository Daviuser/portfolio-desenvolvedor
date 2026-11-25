import { ArrowDown, ArrowUpRight, Orbit } from "lucide-react";
import { whatsappUrl } from "@/data/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-halo" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal><p className="eyebrow"><span className="eyebrow-line" /> Soluções digitais para empresas</p></Reveal>
          <Reveal delay={100}><h1>Sua empresa merece uma presença digital <em>à altura do seu potencial.</em></h1></Reveal>
          <Reveal delay={180}><p className="hero-description">Desenvolvemos sites e sistemas personalizados que fortalecem sua marca, atraem clientes, ampliam oportunidades e tornam sua operação mais eficiente.</p></Reveal>
          <Reveal delay={240}>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight size={17} aria-hidden /></a>
              <a className="button button-outline" href="#solucoes">Conhecer nossas soluções <ArrowDown size={16} aria-hidden /></a>
            </div>
            <p className="hero-note"><Orbit size={15} aria-hidden /> Tecnologia estratégica para negócios que querem ir mais longe.</p>
          </Reveal>
        </div>
        <Reveal delay={160} className="hero-art-wrap"><div className="hero-art" role="img" aria-label="Composição abstrata em azul-marinho e dourado inspirada na marca Vivus Business">
          <div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" />
          <span className="art-v">V</span><span className="art-glint" />
          <div className="art-caption"><span>Presença que inspira confiança</span><span className="art-caption-line" /></div>
          <span className="art-coordinate">V / B</span>
        </div></Reveal>
      </div>
      <a href="#beneficios" className="hero-scroll" aria-label="Rolar para os benefícios"><span /> Role para explorar</a>
    </section>
  );
}
