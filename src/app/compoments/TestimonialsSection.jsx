import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Verified Buyer",
    stars: 5,
    text: "I've never slept on anything this soft. It's like sleeping on a cloud. My husband and I both noticed how much cooler we stay at night. Absolutely worth every penny.",
    initials: "SM",
  },
  {
    name: "James Park",
    role: "Verified Buyer",
    stars: 5,
    text: "As someone with eczema, finding bedsheets that don't irritate my skin was a game changer. These bamboo sheets are incredibly gentle. Plus I love the sustainability angle.",
    initials: "JP",
  },
  {
    name: "Emma Rodriguez",
    role: "Verified Buyer",
    stars: 5,
    text: "Three washes in and they're even softer than when I first got them. The sage green colour is gorgeous. Already ordered a second set for the guest room!",
    initials: "ER",
  },
];

const trustBadges = [
  "🌿 OEKO-TEX Certified",
  "🌍 Carbon Neutral Shipping",
  "♻️ FSC Certified Bamboo",
  "💚 1% for the Planet Member",
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
            Customer Love
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            What Our Sleepers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">4.9 out of 5 from 2,400+ reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-semibold text-accent-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;