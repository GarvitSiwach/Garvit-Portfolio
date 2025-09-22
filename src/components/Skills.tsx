import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "JavaScript", percentage: 85, icon: "⚡" },
    { name: "React.js", percentage: 80, icon: "⚛️" },
    { name: "Java", percentage: 90, icon: "☕" },
    { name: "Python", percentage: 75, icon: "🐍" },
    { name: "Node.js", percentage: 70, icon: "🟢" },
    { name: "HTML/CSS", percentage: 95, icon: "🎨" },
    { name: "MySQL", percentage: 80, icon: "🗄️" },
    { name: "Git/GitHub", percentage: 90, icon: "📚" },
    { name: "Figma", percentage: 85, icon: "🎯" },
    { name: "Problem Solving", percentage: 95, icon: "🧩" },
    { name: "Data Structures", percentage: 88, icon: "📊" },
    { name: "Algorithms", percentage: 85, icon: "🔬" }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="section-title spaced-text text-black mb-16">
            S K I L L S
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{skill.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-purple-600 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.percentage}%`,
                        transform: 'translateX(-100%)',
                        animation: `slideIn 1s ease-out ${index * 0.1}s forwards`
                      }}
                    ></div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;