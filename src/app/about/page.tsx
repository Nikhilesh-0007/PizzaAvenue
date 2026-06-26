import { AboutSection } from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-white pt-24">
      <AboutSection />
    </main>
  );
}
