import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return <section id="contato" className="contact-section"><div className="contact-rule" aria-hidden="true" /><div className="section-container"><Reveal><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> Vamos construir o próximo passo</p><h2>O próximo passo para o crescimento do seu negócio <em>começa aqui.</em></h2><p>Tenha uma presença digital profissional ou um sistema desenvolvido para transformar a maneira como sua empresa trabalha.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button-gold button-large"><MessageCircle size={18} aria-hidden /> Quero transformar meu negócio <ArrowUpRight size={17} aria-hidden /></a></div></Reveal></div></section>;
}
