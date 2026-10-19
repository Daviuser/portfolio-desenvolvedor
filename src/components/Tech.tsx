import { Code2, GitBranch } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/site";

const icons = [Code2, GitBranch];

export default function Tech() {
  return (
    <section id="tecnologias" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Tecnologias e ferramentas
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {site.tech.map((g, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={g.group} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 sm:p-8">
                  <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                    <Icon size={20} className="text-lime" aria-hidden />
                    {g.group}
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {g.items.map((t) => (
                      <li key={t} className="rounded-lg border border-line bg-ink px-4 py-2.5 text-sm transition hover:border-lime/50">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
