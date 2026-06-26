import { HeroSection } from "@/components/HeroSection";
import { FeaturedPizzas } from "@/components/FeaturedPizzas";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { InstagramSection } from "@/components/InstagramSection";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-white">
      <HeroSection />
      <FeaturedPizzas />
      <AboutSection />
      <WhyChooseUs />
      <InstagramSection />
      <Reviews />
    </main>
  );
}
