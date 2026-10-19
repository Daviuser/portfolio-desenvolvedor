import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects, type Project } from "@/data/projects";

function Visit({ p, className = "" }: { p: Project; className?: string }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/btn inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition hover:border-lime hover:bg-lime hover:text-ink active:scale-[.97] ${className}`}
    >
      Visitar projeto
      <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
      <span className="sr-only">: {p.name} (abre em nova aba)</span>
    </a>
  );
}

function Shot({ p, sizes, priority = false }: { p: Project; sizes: string; priority?: boolean }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      className="group/shot relative block aspect-[1037/642] overflow-hidden rounded-xl border border-line bg-ink"
    >
      <Image
        src={p.image}
        alt={p.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top transition-transform duration-700 group-hover/shot:scale-[1.03]"
      />
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

function Featured({ p }: { p: Project }) {
  return (
    <article className="grid gap-8 rounded-3xl border border-line bg-panel p-4 sm:p-6 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12 lg:p-8">
      <Shot p={p} priority sizes="(min-width:1024px) 640px, 100vw" />
      <div>
        <p className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">Projeto principal</p>
        <h3 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{p.name}</h3>
        <p className="mt-2 text-sm text-lime">{p.category}</p>
        <p className="mt-5 leading-relaxed text-mute">{p.description}</p>
        {p.highlights && (
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        )}
        <Tags items={p.tech} />
        <Visit p={p} className="mt-8" />
      </div>
    </article>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-panel p-3 transition duration-300 hover:-translate-y-1 hover:border-lime/40">
      <Shot p={p} sizes="(min-width:1024px) 360px, (min-width:640px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-3 pt-5">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-1 text-sm text-lime">{p.category}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{p.description}</p>
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
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Projetos publicados, de landing pages a um sistema web.
        </h2>
      </Reveal>

      {featured && (
        <Reveal className="mt-12">
          <Featured p={featured} />
        </Reveal>
      )}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 80} className={i % 3 === 1 ? "lg:mt-10" : ""}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
