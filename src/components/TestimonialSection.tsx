const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Garvit's work on our payment system was exceptional. The attention to detail and user experience was outstanding.",
      author: "@TechLeadX",
      avatar: "👨‍💼"
    },
    {
      text: "Amazing developer with great problem-solving skills. Delivered our project ahead of schedule with perfect execution.",
      author: "@StartupFounder",
      avatar: "👩‍💻"
    },
    {
      text: "The interactive game he built for our math platform was incredibly engaging. Students love it!",
      author: "@EduTechCEO",
      avatar: "👨‍🏫"
    },
    {
      text: "Professional, creative, and reliable. Garvit brings fresh ideas to every project he works on.",
      author: "@DesignStudio",
      avatar: "🎨"
    },
    {
      text: "His full-stack skills are impressive. From frontend animations to backend architecture, he delivers quality.",
      author: "@DevManager",
      avatar: "👨‍💻"
    },
    {
      text: "Working with Garvit was a pleasure. Great communication and even better results. Highly recommended!",
      author: "@ClientHappy",
      avatar: "⭐"
    }
  ];

  // Duplicate for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-semibold text-center text-foreground mb-4">
          Loved by developers & clients worldwide
        </h2>
        <p className="text-center text-muted-foreground text-lg">
          See what people are saying about working with me
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex space-x-6 testimonial-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 p-6 bg-card border border-border rounded-xl"
            >
              <p className="text-card-foreground mb-4 leading-relaxed">
                {testimonial.text}
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border border-border">
                  <span className="text-lg">{testimonial.avatar}</span>
                </div>
                <span className="text-sm font-medium text-primary">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;