import { site, whatsappUrl } from "@/data/site";

const nav = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const channels = [
    { label: "WhatsApp", href: whatsappUrl },
    { label: "GitHub", href: site.contacts.github },
    { label: "LinkedIn", href: site.contacts.linkedin },
    { label: "E-mail", href: site.contacts.email ? `mailto:${site.contacts.email}` : "" },
    { label: "Código-fonte do portfólio", href: site.repo },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 text-sm sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="font-display text-xl font-semibold tracking-tight">
            {site.name}
            <span className="text-lime">.</span>
          </a>
          <p className="mt-3 max-w-xs text-mute">{site.role} independente. Sites, landing pages e aplicações web sob medida.</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="space-y-2.5 text-mute">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2.5 text-mute">
          {channels.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-line px-5 py-5 text-center text-xs text-mute">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
