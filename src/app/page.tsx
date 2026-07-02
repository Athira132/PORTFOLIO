import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      {/* Background Interactive Visualizations */}
      <BackgroundEffects />
      
      {/* Interactive Custom Cursor dot follower */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Editorial Sections */}
      <main className="flex-1 w-full relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </>
  );
}
