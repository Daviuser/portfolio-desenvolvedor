"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "@/data/site";
import Brand from "./Brand";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#beneficios", label: "Por que ter um site" },
  { href: "#processo", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#inicio" className="brand-link"><Brand /></a>
        <nav aria-label="Principal" className="desktop-nav">
          {links.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button-gold header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
        <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav id="mobile-menu" aria-label="Menu para celular" className={`mobile-nav ${open ? "open" : ""}`}>
        {links.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="mobile-nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
      </nav>
    </header>
  );
}
