const StatsSection = () => {
  const stats = [
    {
      number: "Github",
      label: "Open Source",
      description: "Contributions and personal projects",
      emoji: "🌐"
    },
    {
      number: "Resume",
      label: "Download CV",
      description: "Get my latest resume as PDF",
      emoji: "📄"
    },
    {
      number: "Contact",
      label: "Reach Out",
      description: "Phone, email, and social links",
      emoji: "📞"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Animated GIF placeholder */}
              <div className="w-32 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-border flex items-center justify-center">
                <span className="text-4xl">{stat.emoji}</span>
              </div>
              
              <div className="stats-number mb-2">{stat.number}</div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;