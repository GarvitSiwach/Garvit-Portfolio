import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Start Exploring
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Projects, Skills, Experience - One Click Away
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-16">
          <a href="#projects">
            <Button size="lg" className="btn-gradient text-white border-0 text-lg px-8 py-3">
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </a>
          
          <a href="#contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-foreground hover:bg-muted text-lg px-8 py-3"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default FinalCTA;