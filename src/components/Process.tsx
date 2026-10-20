import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { site } from "@/data/site";

export default function Process() {
  return (
    <section id="processo" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <RevealText
          text="Como funciona o atendimento."
          className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-4">
          {site.process.map((s, i) => (
            <li key={s.title} className="relative">
              {i < site.process.length - 1 && (
                <span aria-hidden className="absolute left-14 right-[-1.25rem] top-[1.6rem] hidden h-px bg-line md:block" />
              )}
              <Reveal delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-panel p-6 transition hover:border-lime/40">
                  <span className="relative grid h-11 w-11 place-items-center rounded-full border border-lime font-display text-lg text-lime">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
