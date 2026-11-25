import { ArrowUpRight, Clock3, Gauge, Globe2, ShieldCheck, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const icons: LucideIcon[] = [TrendingUp, ShieldCheck, Clock3, Gauge, Globe2, Sparkles];

export default function Benefits() {
  return <section id="beneficios" className="benefits-section"><div className="section-container">
    <div className="section-heading-row"><div><Reveal><p className="eyebrow"><span className="eyebrow-line" /> Um ativo para sua empresa</p></Reveal><RevealText text="Por que sua empresa precisa de um site?" className="section-title" /></div><Reveal><p className="section-intro">Sua presença digital pode trabalhar todos os dias para aproximar a sua empresa de novas oportunidades.</p></Reveal></div>
    <ul className="benefit-grid">{site.benefits.map((item, i) => { const Icon = icons[i]; return <li key={item.title}><Reveal delay={(i % 3) * 65}><article className="benefit-card"><span className="benefit-icon"><Icon size={20} aria-hidden /></span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal></li>; })}</ul>
    <Reveal><a href="#solucoes" className="text-link">Encontre a solução para sua empresa <ArrowUpRight size={16} aria-hidden /></a></Reveal>
  </div></section>;
}
