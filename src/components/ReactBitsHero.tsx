import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Github } from "lucide-react";

const ReactBitsHero = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="floating-shapes">
        <div 
          className="floating-shape w-96 h-96 -top-48 -left-48"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="floating-shape w-64 h-64 top-1/4 right-1/4"
          style={{ animationDelay: '5s' }}
        />
        <div 
          className="floating-shape w-80 h-80 bottom-1/4 left-1/3"
          style={{ animationDelay: '10s' }}
        />
        <div 
          className="floating-shape w-48 h-48 -bottom-24 -right-24"
          style={{ animationDelay: '15s' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center">
          <span className="text-xl font-semibold text-foreground">Garvit Siwach</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

        <a href="/Garvit_Siwach_Resume.pdf" download="Garvit_Siwach_Resume.pdf">
          <Button className="btn-gradient text-white border-0">
            <Star className="w-4 h-4 mr-2" />
            View Resume
          </Button>
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        {/* New Badge */}
        <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
          <span className="mr-2">🎉</span>
          New Projects Available
        </Badge>

        {/* Hero Title */}
        <h1 className="hero-title text-foreground mb-8 max-w-6xl">
          Creative Developer &
          <br />
          <span className="text-gradient">Problem Solver</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-muted-foreground mb-12 max-w-2xl">
          Building innovative solutions through elegant code, 
          creating applications that not only look amazing but feel amazing to use
        </p>

        {/* CTA Button */}
        <a href="#projects">
          <Button size="lg" className="btn-gradient text-white border-0 text-lg px-8 py-3">
            View My Work
          </Button>
        </a>

        {/* Animated GIF placeholder */}
        <div className="mt-16 w-64 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center">
          <span className="text-6xl">💻</span>
        </div>
      </main>
    </div>
  );
};

export default ReactBitsHero;