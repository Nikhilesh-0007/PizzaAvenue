import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { MobileStickyBar } from "@/components/ui/MobileStickyBar";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pizza Avenue | Premium Neapolitan Pizza",
  description: "Authentic Neapolitan Pizza, Fresh Every Day. Handcrafted pizzas made with fresh ingredients, rich flavors, and baked to perfection in Sainikpuri, Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground leading-[1.6]">
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
