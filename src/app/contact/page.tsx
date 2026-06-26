import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-white pt-24">
      <ContactSection />
    </main>
  );
}
