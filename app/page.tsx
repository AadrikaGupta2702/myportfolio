import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Awards from "@/components/Awards";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        {/* Hero should be full width */}
        <section className="w-full">
          <Hero />
        </section>

        {/* Wrap other sections in the container for consistent layout */}
        <div className="container mx-auto px-4">
          <About />
          {/* <Services /> */}
          <Projects />
          <Awards />
          <Contact />
        </div>
      </main>
    </div>
  );
}
