import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded bg-lime px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
