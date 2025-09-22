import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Creating robust, scalable applications with modern technologies.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges with innovative algorithmic solutions.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Web Applications",
      description: "Building interactive web apps with cutting-edge frameworks.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Optimizing performance through efficient data structure implementation.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "And much more...",
      description: "For more enquiry feel free to contact me",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 border-none shadow-none bg-transparent group cursor-pointer"
            >
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 group-hover:scale-105 transition-transform">
                  {service.title}
                </h3>
                
                {service.title !== "And much more..." ? (
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                ) : (
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-black mb-4">
                      {service.description.split(' ').slice(0, 7).join(' ')}
                    </p>
                    <a 
                      href="#contact" 
                      className="text-blue-600 hover:text-blue-800 underline text-lg font-semibold"
                    >
                      contact me
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;