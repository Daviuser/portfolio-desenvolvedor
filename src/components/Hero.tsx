import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

const words = site.headline.split(" ");
const bySlug = (s: string) => projects.find((p) => p.slug === s)!;

function Frame({ slug, className, delay, priority = false }: { slug: string; className: string; delay: number; priority?: boolean }) {
  const p = bySlug(slug);
  return (
    <div
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
      className={`fade-in absolute overflow-hidden rounded-xl border border-line bg-panel shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)] ${className}`}
    >
      <div className="flex h-5 items-center gap-1.5 border-b border-line bg-ink px-3" aria-hidden>
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
      </div>
      <div className="relative aspect-[1037/642]">
        <Image src={p.image} alt={p.alt} fill priority={priority} sizes="(min-width:1024px) 380px, 70vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="fade-in mb-6 text-sm text-mute" style={{ "--d": "100ms" } as React.CSSProperties}>
            {site.role}
          </p>
          <h1 className="font-display text-[clamp(2.6rem,7.5vw,5.6rem)] font-semibold leading-[1.02] tracking-tight">
            {words.map((w, i) => (
              <span key={i}>
                <span className="word">
                  <span style={{ "--d": `${200 + i * 110}ms` } as React.CSSProperties}>{w}</span>
                </span>{" "}
              </span>
            ))}
          </h1>
          <p className="fade-in mt-7 max-w-md text-lg leading-relaxed text-mute" style={{ "--d": "900ms" } as React.CSSProperties}>
            {site.intro}
          </p>
          <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ "--d": "1050ms" } as React.CSSProperties}>
            <a
              href="#projetos"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-lime px-6 font-medium text-ink transition hover:bg-white active:scale-[.97]"
            >
              Explorar projetos
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contato"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 font-medium transition hover:border-lime hover:text-lime active:scale-[.97]"
            >
              Entrar em contato
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-xl" aria-label="Capturas de tela de projetos">
          <Frame slug="catalina-reyes" delay={700} className="right-0 top-0 z-0 w-[68%] rotate-[4deg]" />
          <Frame slug="brain-and-body" delay={850} className="bottom-0 left-0 z-0 w-[68%] -rotate-[5deg]" />
          <Frame slug="klivo" delay={1000} priority className="left-[14%] top-[17%] z-10 w-[72%]" />
        </div>
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
