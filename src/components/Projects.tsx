import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { projects, type Project } from "@/data/projects";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-12"];

function Visit({ p, className = "" }: { p: Project; className?: string }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/btn inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition hover:border-lime hover:bg-lime hover:text-ink active:scale-[.97] ${className}`}
    >
      Visitar projeto
      <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden />
      <span className="sr-only">: {p.name} (abre em nova aba)</span>
    </a>
  );
}

function Mock({ p, sizes, priority = false }: { p: Project; sizes: string; priority?: boolean }) {
  const host = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      className="block overflow-hidden rounded-xl border border-line bg-ink shadow-[0_24px_50px_-24px_rgba(0,0,0,.9)] transition duration-500 group-hover:-translate-y-1 group-hover:border-lime/40"
    >
      <div className="flex h-8 items-center gap-3 border-b border-line bg-panel px-3" aria-hidden>
        <span className="flex gap-1.5">
          <i className="h-2 w-2 rounded-full bg-line" />
          <i className="h-2 w-2 rounded-full bg-line" />
          <i className="h-2 w-2 rounded-full bg-line" />
        </span>
        <span className="min-w-0 truncate rounded-md bg-ink px-3 py-0.5 text-[11px] text-mute">{host}</span>
      </div>
      <div className="relative aspect-[1037/642] overflow-hidden">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </a>
  );
}

function Tags({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Highlight({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="mt-5 border-l-2 border-lime pl-4 text-sm leading-relaxed">
      <span className="text-lime">Destaque:</span> {text}
    </p>
  );
}

function Featured({ p }: { p: Project }) {
  return (
    <article className="group relative grid gap-8 overflow-hidden rounded-3xl border border-line bg-panel p-4 sm:p-6 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-12 lg:p-10">
      <div aria-hidden className="glow pointer-events-none absolute -left-24 -top-24 h-96 w-96" />
      <div className="relative">
        <Mock p={p} priority sizes="(min-width:1024px) 680px, 100vw" />
      </div>
      <div className="relative">
        <p className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">Projeto principal</p>
        <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{p.name}</h3>
        <p className="mt-2 text-sm text-lime">{p.category}</p>
        <p className="mt-5 leading-relaxed text-mute">{p.description}</p>
        {p.highlights && (
          <>
            <p className="mt-6 text-sm text-mute">Módulos apresentados na tela de acesso:</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </>
        )}
        <Highlight text={p.highlight} />
        <Tags items={p.tech} />
        <Visit p={p} className="mt-8" />
      </div>
    </article>
  );
}

function Case({ p, wide }: { p: Project; wide: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-line bg-panel p-3 sm:p-4 ${
        wide ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-6" : ""
      }`}
    >
      <Mock p={p} sizes={wide ? "(min-width:1024px) 540px, 100vw" : "(min-width:1024px) 560px, (min-width:640px) 50vw, 100vw"} />
      <div className="flex flex-1 flex-col p-3 pt-6">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-1 text-sm text-lime">{p.category}</p>
        <p className="mt-3 text-sm leading-relaxed text-mute">{p.description}</p>
        <Highlight text={p.highlight} />
        <Tags items={p.tech} />
        <Visit p={p} className="mt-6 self-start" />
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <RevealText
        text="Projetos publicados, de landing pages a um sistema web."
        className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
      />
      <Reveal>
        <p className="mt-6 max-w-xl text-lg text-mute">
          Cada projeto é um site real, no ar. Abra qualquer um para ver como ele funciona.
        </p>
      </Reveal>

      {featured && (
        <Reveal className="mt-12">
          <Featured p={featured} />
        </Reveal>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 80} className={`h-full ${spans[i] ?? "lg:col-span-6"}`}>
            <Case p={p} wide={i === rest.length - 1 && rest.length === 5} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
