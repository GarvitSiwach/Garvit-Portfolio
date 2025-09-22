import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SwiftPay",
      description: "Biometric Payment System designed in Figma with fingerprint authentication, UPI PIN integration, voice assistant support, and fraud detection. Focused on creating a secure and intuitive user experience for phone-free payments.",
      image: "🔐",
      technologies: ["Figma", "UI/UX", "User Research", "Prototyping"],
      featured: true,
      demoUrl: "https://www.figma.com/proto/Sqzkurhp4wXFuZk5BzA0yr/BioPay...?node-id=61-390&p=f&t=KIODLWObHbfX4712-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A295",
      codeUrl: "https://www.figma.com/design/Sqzkurhp4wXFuZk5BzA0yr/BioPay...?node-id=0-1&p=f&t=9lUl25LoV3D6fCq3-0"
    },
    {
      title: "Neon ArcStar",
      description: "Interactive math-graph game built with JavaScript, HTML5 Canvas, CSS3, and Math.js. Features real-time equation parsing, neon visualizations, and gamified star-collection mechanics that blend mathematical learning with engaging gameplay.",
      image: "🎮",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Math.js"],
      featured: true,
      demoUrl: "https://garvitsiwach.github.io/Neon-Arc-Star/",
      codeUrl: "https://github.com/GarvitSiwach/Neon-Arc-Star"
    },
    {
      title: "ChargeXpress",
      description: "Responsive website prototype for a public charging hub concept featuring QR-based user access, solar power integration, and eco-friendly charging stations with secure payment systems.",
      image: "⚡",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      featured: false,
      demoUrl: "https://garvitsiwach.github.io/chargeXpress-Web-it-up-/",
      codeUrl: "https://github.com/GarvitSiwach/chargeXpress-Web-it-up-"
    },
    {
      title: "Death Clock",
      description: "Horror-themed web application that visualizes remaining life based on birthdate and life expectancy. Features glowing countdown, personalized motivational messages, and eerie UI design to encourage productivity.",
      image: "⏰",
      technologies: ["HTML", "CSS", "JavaScript", "Web APIs"],
      featured: false,
      demoUrl: "https://garvitsiwach.github.io/death-clock/",
      codeUrl: "https://github.com/GarvitSiwach/death-clock"
    },
    {
      title: "Screen Capture Tool",
      description: "Python desktop application for automatically capturing key screen visuals during video playback or lectures, enabling efficient digital note-taking and content organization.",
      image: "📸",
      technologies: ["Python", "OpenCV", "GUI Development"],
      featured: false,
      demoUrl: "https://github.com/GarvitSiwach/Automated-Screen-Capturing-Tool",
      codeUrl: "https://github.com/GarvitSiwach/Automated-Screen-Capturing-Tool"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="section-title spaced-text text-black mb-16">
            F E A T U R E D   P R O J E C T S
          </h2>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image/Icon */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="w-full h-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-500">
                    {project.image}
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-white text-black font-bold">
                      FEATURED
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-black mb-4 hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-gray-200 text-gray-800 hover:bg-purple-100 hover:text-purple-800 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.codeUrl ? (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="bg-white border-2 border-black text-black shadow-md hover:bg-black hover:text-white transition-colors group"
                        >
                          <Github className="w-5 h-5 mr-2 group-hover:text-white" />
                          View Code
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="bg-white border-2 border-black text-black shadow-md hover:bg-black hover:text-white transition-colors group"
                      >
                        <Github className="w-5 h-5 mr-2 group-hover:text-white" />
                        View Code
                      </Button>
                    )}
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button 
                          size="lg" 
                          className="btn-gradient text-white border-0 shadow-md hover:shadow-lg transition-colors group"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        size="lg" 
                        className="btn-gradient text-white border-0 shadow-md hover:shadow-lg transition-colors group"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <a href="https://github.com/GarvitSiwach?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="btn-gradient text-white border-0 text-xl px-8 py-4 shadow-md hover:shadow-lg"
            >
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;