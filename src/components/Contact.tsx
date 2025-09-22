import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="section-title spaced-text text-black mb-16">
            C O N T A C T
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-black text-black mb-8">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Ready to bring your ideas to life? Whether it's a web application, 
                UI/UX design, or solving complex problems, I'm here to help you 
                build something extraordinary.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black text-lg">Email</p>
                  <a 
                    href="mailto:Siwach.garvit10@gmail.com" 
                    className="text-gray-600 hover:text-purple-600 transition-colors text-lg"
                  >
                    Siwach.garvit10@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black text-lg">Phone</p>
                  <a 
                    href="tel:+918527503955" 
                    className="text-gray-600 hover:text-purple-600 transition-colors text-lg"
                  >
                    +91 8527503955
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black text-lg">Location</p>
                  <p className="text-gray-600 text-lg">
                    Gurugram, Haryana, India
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-2xl font-bold text-black mb-6">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/GarvitSiwach" 
                  className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
                >
                  <Github className="w-6 h-6 text-white group-hover:text-purple-300" />
                </a>
                <a 
                  href="http://www.linkedin.com/in/garvit-siwach" 
                  className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
                >
                  <Linkedin className="w-6 h-6 text-white group-hover:text-blue-300" />
                </a>
              </div>
              <div className="mt-6">
                <a href="/Garvit_Siwach_Resume.pdf" download="Garvit_Siwach_Resume.pdf">
                  <Button className="bg-black text-white hover:bg-purple-600 transition-colors text-lg py-4 rounded-xl font-bold">
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-black mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-2 border-gray-300 focus:border-purple-500 rounded-xl p-4 text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-2 border-gray-300 focus:border-purple-500 rounded-xl p-4 text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="border-2 border-gray-300 focus:border-purple-500 rounded-xl p-4 text-lg"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or opportunity..." 
                  rows={6}
                  className="border-2 border-gray-300 focus:border-purple-500 rounded-xl p-4 text-lg"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-black text-white hover:bg-purple-600 transition-colors text-lg py-4 rounded-xl font-bold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;