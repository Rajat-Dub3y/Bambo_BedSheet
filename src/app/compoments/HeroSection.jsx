import { ArrowDown } from "lucide-react";
import heroImage from "../assets/hero-bedsheets.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt='Luxurious bamboo bedsheets in sage green and cream on a minimalist bed'
          fill
          sizes="100vw"
          className='object-cover'
          loading='eager'
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-8 py-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 animate-fade-in">
            100% Organic Bamboo
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up">
            Sleep in Nature's
            <br />
            <span className="italic text-primary">Softest</span> Embrace
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Our bamboo bedsheets are silky-soft, temperature-regulating, and made from sustainably harvested bamboo. Better sleep, better planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Shop Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-accent transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to features"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
