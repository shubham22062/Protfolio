import Landing from "@/components/Landing";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Fixedlogo from "@/components/Fixedlogo";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

     <main
  id="scroll-container"
  className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth"
>
  <section className="min-h-[100dvh] snap-start">
    <Landing />
  </section>

  <section id="home" className="min-h-[100dvh] snap-start">
    <Hero />
  </section>

  <section id="about" className="min-h-[100dvh] snap-start">
    <About />
  </section>

  <section id="experience" className="min-h-[100dvh] snap-start">
    <Experience />
  </section>

  <section id="projects" className="min-h-[100dvh] snap-start">
    <Projects />
  </section>

  <section id="skills" className="min-h-[100dvh] snap-start">
    <Skills />
  </section>

  <section id="contact" className="min-h-[100dvh] snap-start">
    <ContactMe />
  </section>

  <section className="snap-start pt-10 sm:pt-40">
    <Footer />
  </section>

  <section className="flex items-center justify-center">
    <Fixedlogo />
  </section>
</main>
    </div>
  );
}