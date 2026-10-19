import { site, whatsappUrl } from "@/data/site";

export default function Footer() {
  const links = [
    { label: "GitHub", href: site.contacts.github },
    { label: "WhatsApp", href: whatsappUrl },
    { label: "Código-fonte do portfólio", href: site.repo },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-mute sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.role}.
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#inicio" className="transition-colors hover:text-white">
              Voltar ao topo
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
