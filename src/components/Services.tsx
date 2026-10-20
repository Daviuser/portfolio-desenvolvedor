import { Globe, Megaphone, LayoutDashboard, RefreshCw, ArrowUpRight, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

const icons: Record<string, LucideIcon> = { globe: Globe, megaphone: Megaphone, app: LayoutDashboard, refresh: RefreshCw };

export default function Services() {
  return (
    <section id="servicos" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <RevealText
            text="Soluções para cada etapa da sua presença digital."
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
          <Reveal>
            <p className="mt-6 max-w-sm text-mute">Do site de apresentação ao sistema personalizado, cada projeto é pensado para o seu negócio.</p>
          </Reveal>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {site.services.map((s, i) => {
            const Icon = icons[s.icon] ?? Globe;
            const ex = "example" in s ? projects.find((p) => p.slug === s.example) : undefined;
            return (
              <li key={s.title}>
                <Reveal delay={i * 60}>
                  <div className="group grid gap-5 py-8 transition-colors sm:grid-cols-[auto_1fr] sm:gap-7 sm:px-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-line text-lime transition group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                      <Icon size={22} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                      <p className="mt-2 text-mute">{s.text}</p>
                      <p className="mt-3 text-sm">
                        <span className="text-lime">Para você:</span> {s.benefit}
                      </p>
                      {ex && (
                        <a
                          href={ex.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm text-mute underline-offset-4 transition hover:text-white hover:underline"
                        >
                          Exemplo: {ex.name}
                          <ArrowUpRight size={14} aria-hidden />
                          <span className="sr-only"> (abre em nova aba)</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
