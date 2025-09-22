import ReactBitsHero from "@/components/ReactBitsHero";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ReactBitsHero />
      <StatsSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
