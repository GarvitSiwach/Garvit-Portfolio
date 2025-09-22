import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="section-title spaced-text text-black mb-16">
            A B O U T
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Mission Card */}
          <div className="text-center group">
            <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-6 flex flex-col items-center justify-center ring-4 ring-white/30 shadow-2xl transition-transform duration-300 group-hover:shadow-[0_12px_40px_rgba(99,102,241,0.45)] group-hover:scale-[1.02]">
              <span className="text-7xl md:text-8xl drop-shadow-2xl">🎯</span>
              <h3 className="mt-3 text-white/95 text-2xl md:text-3xl font-extrabold tracking-wide uppercase drop-shadow">Mission</h3>
            </div>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              To deliver innovative, user-friendly solutions that empower individuals and businesses to thrive in the digital landscape through cutting-edge technology.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="text-center group">
            <div className="w-full h-64 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl mb-6 flex flex-col items-center justify-center ring-4 ring-white/30 shadow-2xl transition-transform duration-300 group-hover:shadow-[0_12px_40px_rgba(244,63,94,0.45)] group-hover:scale-[1.02]">
              <span className="text-7xl md:text-8xl drop-shadow-2xl">🚀</span>
              <h3 className="mt-3 text-white/95 text-2xl md:text-3xl font-extrabold tracking-wide uppercase drop-shadow">Vision</h3>
            </div>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              To create a digital ecosystem where every individual and business can seamlessly access and benefit from innovative software solutions to achieve sustainable growth.
            </p>
          </div>
          
          {/* Goal Card */}
          <div className="text-center group">
            <div className="w-full h-64 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-6 flex flex-col items-center justify-center ring-4 ring-white/30 shadow-2xl transition-transform duration-300 group-hover:shadow-[0_12px_40px_rgba(34,197,94,0.45)] group-hover:scale-[1.02]">
              <span className="text-7xl md:text-8xl drop-shadow-2xl">💡</span>
              <h3 className="mt-3 text-white/95 text-2xl md:text-3xl font-extrabold tracking-wide uppercase drop-shadow">Goal</h3>
            </div>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              To simplify complex problems through elegant code, enabling businesses of all sizes to enhance their operations and achieve their objectives efficiently.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8">
            The best way to predict the future is to create it
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: "⚡", label: "Web Development" },
            { icon: "🎨", label: "UI/UX Design" },
            { icon: "🧩", label: "Full-Stack Solutions" },
            { icon: "📱", label: "Mobile Apps" },
            { icon: "🧠", label: "Problem Solving" },
            { icon: "🌐", label: "Open Source" },
            { icon: "⚛️", label: "Frontend (React)" },
            { icon: "🟢", label: "Backend (Node.js)" },
            { icon: "☁️", label: "Cloud & DevOps" },
            { icon: "📊", label: "DS & Algorithms" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="aspect-square bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-xl animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-white text-center font-bold px-4">
                <span className="text-4xl md:text-5xl mb-3">{item.icon}</span>
                <span className="text-lg md:text-xl leading-tight">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Services marquee removed since content is now inside boxes */}
    </section>
  );
};

export default About;