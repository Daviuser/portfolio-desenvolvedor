import { Github, Linkedin, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { site, whatsappUrl } from "@/data/site";

export default function Contact() {
  const c = site.contacts;
  const channels: { label: string; href: string; Icon: LucideIcon; external: boolean }[] = [];
  if (c.whatsapp) channels.push({ label: "WhatsApp", href: whatsappUrl, Icon: MessageCircle, external: true });
  if (c.email) channels.push({ label: "E-mail", href: `mailto:${c.email}`, Icon: Mail, external: false });
  if (c.linkedin) channels.push({ label: "LinkedIn", href: c.linkedin, Icon: Linkedin, external: true });
  if (c.github) channels.push({ label: "GitHub", href: c.github, Icon: Github, external: true });

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="rounded-3xl bg-lime p-8 text-ink sm:p-14">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Tem uma ideia ou um projeto em mente? Vamos conversar.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-ink/75">
            Explique o que você precisa e peça um orçamento. Sem compromisso: a primeira conversa serve para entender o seu cenário.
          </p>
          {channels.length > 0 ? (
            <ul className="mt-10 flex flex-wrap gap-3">
              {channels.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-ink px-6 font-medium text-white transition hover:bg-white hover:text-ink active:scale-[.97]"
                  >
                    <Icon size={18} aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            process.env.NODE_ENV !== "production" && (
              <p className="mt-10 rounded-xl border border-ink/30 p-4 text-sm">
                Nenhum canal configurado. Preencha <code>contacts</code> em src/data/site.ts.
              </p>
            )
          )}
        </div>
      </Reveal>
    </section>
  );
}
