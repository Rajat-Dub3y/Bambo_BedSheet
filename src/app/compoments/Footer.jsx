import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            <span className="font-display text-lg font-semibold text-background">The Eco Shop</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#features" className="hover:text-background transition-colors">Features</a>
            <a href="#story" className="hover:text-background transition-colors">Our Story</a>
            <a href="#reviews" className="hover:text-background transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-background transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </nav>
          <p className="text-sm text-background/60">
            © 2026 The Eco Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;