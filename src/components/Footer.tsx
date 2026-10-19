import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-mute sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.role}.
        </p>
        <a href="#inicio" className="transition-colors hover:text-white">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
