import { ArrowDown, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";
import HeroVisual from "./HeroVisual";

const lines = site.headline.split(/(?<=\.)\s+/);

export default function Hero() {
  const cta = whatsappUrl
    ? { href: whatsappUrl, external: true }
    : { href: "#contato", external: false };

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28">
      <div aria-hidden className="grid-bg absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-mute" style={{ "--d": "100ms" } as React.CSSProperties}>
            <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
            {site.role}
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.9rem)] font-semibold leading-[1.03] tracking-tight">
            {lines.map((line, li) => (
              <span key={li} className="block">
                {line.split(" ").map((w, i) => (
                  <span key={i}>
                    <span className="word">
                      <span style={{ "--d": `${200 + (li * 4 + i) * 90}ms` } as React.CSSProperties}>{w}</span>
                    </span>{" "}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="fade-in mt-7 max-w-lg text-lg leading-relaxed text-mute" style={{ "--d": "1000ms" } as React.CSSProperties}>
            {site.intro}
          </p>
          <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ "--d": "1100ms" } as React.CSSProperties}>
            <a
              href={cta.href}
              {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-lime px-6 font-medium text-ink transition hover:bg-white active:scale-[.97]"
            >
              <MessageCircle size={18} aria-hidden />
              Vamos conversar
            </a>
            <a
              href="#projetos"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 font-medium transition hover:border-lime hover:text-lime active:scale-[.97]"
            >
              Conhecer projetos
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>

      <a
        href="#projetos"
        aria-label="Rolar para os projetos"
        className="absolute bottom-6 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border border-line pt-2 sm:flex"
      >
        <span className="scroll-dot h-1.5 w-1 rounded-full bg-lime" />
      </a>
    </section>
  );
}
