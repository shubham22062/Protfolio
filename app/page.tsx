import Landing from "@/components/Landing";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <main
        id="scroll-container"
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <section className="h-screen snap-start">
          <Landing />
        </section>

        <section className="h-screen snap-start">
          <Hero />
        </section>

        <section className="h-screen snap-start">
          <About />
        </section>

        <section className="h-screen snap-start">
          <Experience/>
        </section>

        <section className="h-screen snap-start">
          <Projects/>
        </section>
      </main>
    </div>
  );
}