import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappUrl } from "@/data/site";

export default function CtaBand() {
  const href = whatsappUrl || "#contato";
  return (
    <Reveal>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-y border-line py-10 sm:flex-row sm:items-center">
          <p className="max-w-lg font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Tem uma ideia para tirar do papel?
          </p>
          <a
            href={href}
            {...(whatsappUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-lime px-6 font-medium text-ink transition hover:bg-white active:scale-[.97]"
          >
            <MessageCircle size={18} aria-hidden />
            Vamos conversar
          </a>
        </div>
      </div>
    </Reveal>
  );
}
