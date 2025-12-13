import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
// import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
<main className="max-w-6xl mx-auto px-5">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <TechStack />
      {/* <Experience /> */}
      <Footer />
    </main>
  );
}
