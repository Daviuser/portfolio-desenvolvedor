import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="sobre" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Sobre mim</h2>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-mute">
            {site.about.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-panel">
            {site.values.map((v) => (
              <li key={v.title} className="p-6">
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-1 text-mute">{v.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
