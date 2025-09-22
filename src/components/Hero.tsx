import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 fluid-gradient"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white/10 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-6 mb-20">
          <div className="text-2xl font-bold text-white">
            GARVIT<br />
            <span className="text-lg">™</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white/80">
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>
          <div className="text-white">100%</div>
        </nav>

        {/* Hero Content */}
        <div className="text-center">
          <h1 className="hero-text spaced-text text-white mb-8">
            G A R V I T S I W A C H ™
          </h1>
          
          <p className="text-2xl text-white/90 font-bold mb-8">
            PORTFOLIO
          </p>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8">
              Welcome
            </h2>
            
            <p className="text-lg text-white/80 mb-4">
              ✦ You're in the right place to see innovative CS projects come to life ✦
            </p>
            
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Hey there! I'm passionate about bringing fresh ideas to life through code. I build applications that not only look amazing but feel amazing to use. From smooth animations to scalable architectures, I focus on the details that make software stand out. Need a full-stack web app? A creative UI/UX design? Or maybe an innovative tool? I've got you covered. Let's team up and create something that truly pushes boundaries!
            </p>
          </div>

          {/* Trusted by section */}
          <div className="mb-16">
            <h3 className="text-2xl text-white/80 mb-8">Skilled in</h3>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="glass-card px-6 py-3 text-white font-semibold">React</div>
              <div className="glass-card px-6 py-3 text-white font-semibold">JavaScript</div>
              <div className="glass-card px-6 py-3 text-white font-semibold">Node.js</div>
              <div className="glass-card px-6 py-3 text-white font-semibold">Python</div>
              <div className="glass-card px-6 py-3 text-white font-semibold">Java</div>
              <div className="glass-card px-6 py-3 text-white font-semibold">Figma</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="marquee text-black font-bold text-xl py-2 bg-white">
          <div className="marquee-content">
            ✺ Scroll to explore ✺ Scroll to explore ✺ Scroll to explore ✺ Scroll to explore ✺ Scroll to explore ✺ Scroll to explore ✺ Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;