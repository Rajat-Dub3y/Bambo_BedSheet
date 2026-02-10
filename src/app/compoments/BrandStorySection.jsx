import bambooForest from "../assets/bamboo-forest.jpg";
import Image from "next/image";

const BrandStorySection = () => {
  return (
    <section id="story" className="py-24 bg-accent/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={bambooForest}
                alt="Sunlit bamboo forest representing sustainable sourcing"
                className="w-full h-100 lg:h-125 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hidden sm:block">
              <p className="font-display text-2xl font-bold">3ft/day</p>
              <p className="text-sm opacity-90">Bamboo growth rate</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6 leading-tight">
              From Forest to
              <br />
              <span className="italic">Your Bedroom</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"The Eco Shop was born from a simple belief: the products we sleep in every night shouldn't cost the earth. We started our journey in 2019, frustrated by an industry built on synthetic fabrics, harsh chemicals, and unsustainable farming."}
              </p>
              <p>
                Our bamboo is ethically harvested from FSC-certified forests, processed using a closed-loop system that recycles 99.5% of the water used. No pesticides. No harmful dyes. Just pure, natural luxury.
              </p>
              <p>
                {"Every set of sheets you buy plants one tree through our partnership with One Tree Planted. So far, we've planted over"} <strong className="text-foreground">25,000 trees</strong> across three continents.
              </p>
            </div>

            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl font-bold text-primary">25K+</p>
                <p className="text-sm text-muted-foreground">Trees planted</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">99.5%</p>
                <p className="text-sm text-muted-foreground">Water recycled</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">0</p>
                <p className="text-sm text-muted-foreground">Chemicals used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;