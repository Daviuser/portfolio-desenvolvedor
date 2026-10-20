import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function Tech() {
  return (
    <section id="tecnologias" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <h2 className="font-display text-xl font-semibold tracking-tight">Tecnologias e ferramentas</h2>
            <div className="space-y-5 md:max-w-2xl">
              {site.tech.map((g) => (
                <div key={g.group}>
                  <h3 className="text-sm text-mute">{g.group}</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li key={t} className="rounded-md border border-line px-3 py-1.5 text-sm">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
