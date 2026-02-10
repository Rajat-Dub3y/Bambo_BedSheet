import { Droplets, Thermometer, Sparkles, ShieldCheck, Recycle } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Silky Soft Touch",
    description: "Bamboo fibres are naturally round and smooth, creating a buttery soft fabric that feels like a gentle caress against your skin.",
  },
  {
    icon: Thermometer,
    title: "Temperature Regulating",
    description: "Micro-gaps in bamboo fibre naturally adapt to your body temperature — cool in summer, warm in winter.",
  },
  {
    icon: Sparkles,
    title: "Hypoallergenic",
    description: "Naturally antibacterial and resistant to dust mites, making bamboo bedsheets perfect for sensitive skin and allergy sufferers.",
  },
  {
    icon: ShieldCheck,
    title: "Incredibly Durable",
    description: "Bamboo fibre is stronger than cotton and becomes softer with every wash. Built to last for years of restful sleep.",
  },
  {
    icon: Recycle,
    title: "100% Sustainable",
    description: "Bamboo grows up to 3 feet per day, requires no pesticides, and uses 1/3 the water of cotton. A truly renewable resource.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
            Why Bamboo?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Nature Designed the Perfect Bedsheet
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every detail of our bamboo bedsheets is crafted to give you the most luxurious, eco-conscious sleep experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;