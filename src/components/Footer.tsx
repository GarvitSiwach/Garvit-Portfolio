import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Social icons above the name */}
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://github.com/GarvitSiwach" 
            className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8 group-hover:text-purple-400 transition-colors" />
          </a>
          <a 
            href="http://www.linkedin.com/in/garvit-siwach" 
            className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8 group-hover:text-blue-300 transition-colors" />
          </a>
          <a 
            href="mailto:siwach.garvit10@gmail.com" 
            className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
            aria-label="Email"
          >
            <Mail className="w-8 h-8 group-hover:text-pink-300 transition-colors" />
          </a>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-6xl font-black mb-4 text-fluid-gradient">
            GARVIT SIWACH
          </h3>
          <p className="text-xl text-gray-400">
            Computer Science Student & Developer
          </p>
        </div>
        
        
        
        <div className="text-center border-t border-gray-800 pt-6">
          <p className="text-gray-400 mb-4">
            © 2025 Garvit Siwach. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;