import Brand from "./Brand";

const nav = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#beneficios", label: "Por que ter um site" },
  { href: "#processo", label: "Como funciona" },
  { href: "#sobre", label: "Nosso compromisso" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return <footer className="site-footer"><div className="section-container footer-main"><div><a href="#inicio" className="footer-brand"><Brand /></a><p className="footer-summary">Soluções digitais para empresas que querem crescer com tecnologia.</p></div><nav aria-label="Links do rodapé" className="footer-nav">{nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav><a href="#inicio" className="back-top">Voltar ao início <span aria-hidden="true">↑</span></a></div><div className="section-container footer-bottom"><span>© {new Date().getFullYear()} VIVUS BUSINESS</span><span>Tecnologia estratégica para negócios que querem ir mais longe.</span></div></footer>;
}
