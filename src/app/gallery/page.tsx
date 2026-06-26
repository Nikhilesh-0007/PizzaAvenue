import { Gallery } from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-white pt-24">
      <Gallery />
    </main>
  );
}
