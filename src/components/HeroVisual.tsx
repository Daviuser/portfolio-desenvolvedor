"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { MonitorSmartphone, Layers } from "lucide-react";
import { projects } from "@/data/projects";

const get = (s: string) => projects.find((p) => p.slug === s)!;

function Frame({
  slug,
  pos,
  tilt,
  depth,
  delay,
  priority = false,
}: {
  slug: string;
  pos: string;
  tilt: string;
  depth: number;
  delay: number;
  priority?: boolean;
}) {
  const p = get(slug);
  return (
    <div
      className={`absolute transition-transform duration-300 ease-out ${pos}`}
      style={{ transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)` }}
    >
      <div
        style={{ "--d": `${delay}ms` } as CSSProperties}
        className={`fade-in overflow-hidden rounded-xl border border-line bg-panel shadow-[0_30px_60px_-20px_rgba(0,0,0,.85)] ${tilt}`}
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
    </div>
  );
}

function Chip({ children, pos, depth, delay }: { children: React.ReactNode; pos: string; depth: number; delay: number }) {
  return (
    <div
      className={`absolute z-20 transition-transform duration-300 ease-out ${pos}`}
      style={{ transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)` }}
    >
      <div
        style={{ "--d": `${delay}ms` } as CSSProperties}
        className="fade-in flex items-center gap-2 rounded-full border border-line bg-ink/85 px-3.5 py-2 text-xs backdrop-blur"
      >
        {children}
      </div>
    </div>
  );
}

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
    el.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--mx", "0");
    ref.current?.style.setProperty("--my", "0");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto aspect-[5/4] w-full max-w-xl"
      role="img"
      aria-label="Composição com capturas de tela de projetos publicados"
    >
      <Frame slug="catalina-reyes" pos="right-0 top-0 z-0 w-[66%]" tilt="rotate-[4deg]" depth={-14} delay={650} />
      <Frame slug="brain-and-body" pos="bottom-0 left-0 z-0 w-[66%]" tilt="-rotate-[5deg]" depth={-8} delay={800} />
      <Frame slug="klivo" pos="left-[14%] top-[16%] z-10 w-[72%]" tilt="" depth={12} delay={950} priority />
      <Chip pos="left-0 top-[6%]" depth={26} delay={1250}>
        <MonitorSmartphone size={14} className="text-lime" aria-hidden />
        Responsivo em qualquer tela
      </Chip>
      <Chip pos="bottom-[8%] right-0" depth={22} delay={1400}>
        <Layers size={14} className="text-lime" aria-hidden />
        {projects.length} projetos publicados
      </Chip>
    </div>
  );
}
