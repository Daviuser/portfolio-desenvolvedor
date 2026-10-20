"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "inicio" ? "" : `#${e.target.id}`);
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["inicio", ...links.map((l) => l.href.slice(1)), "tecnologias"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/95" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="font-display text-lg font-semibold tracking-tight">
          {site.name}
          <span className="text-lime">.</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const on = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={on ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors hover:text-white ${on ? "text-white" : "text-mute"}`}
              >
                {l.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-4 bottom-0.5 h-px origin-left bg-lime transition-transform duration-300 ${on ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            );
          })}
        </nav>

        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center gap-2 rounded-full bg-lime px-4 text-sm font-medium text-ink transition hover:bg-white active:scale-[.97] md:inline-flex"
          >
            <MessageCircle size={16} aria-hidden />
            Vamos conversar
          </a>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Menu mobile"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,visibility] duration-300 md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 px-5 pb-4">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block border-t border-line py-4 font-display text-xl">
                {l.label}
              </a>
            </li>
          ))}
          {whatsappUrl && (
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block border-t border-line py-4 font-display text-xl text-lime">
                Vamos conversar
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
