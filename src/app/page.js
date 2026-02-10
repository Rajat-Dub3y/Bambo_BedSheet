'use client'
import BrandStorySection from "./compoments/BrandStorySection";
import ContactSection from "./compoments/ContactSection";
import FAQSection from "./compoments/FAQSection";
import FeaturesSection from "./compoments/FeaturesSection";
import Header from "./compoments/Header";
import HeroSection from "./compoments/HeroSection";
import TestimonialsSection from "./compoments/TestimonialsSection";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <BrandStorySection/>
      <FAQSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </div>
  );
}
