"use client";

import { Phone, Navigation, MenuSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-50"
        >
          <div className="bg-background/95 backdrop-blur-xl border border-dark/10 shadow-2xl rounded-full p-2 flex justify-between items-center gap-2">
            <Link
              href="tel:+919876543210"
              className="flex-1 flex flex-col items-center justify-center gap-1 p-2 text-dark/70 hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
            </Link>
            
            <Link
              href="https://maps.app.goo.gl/41e3kDZPPBzUGVKE9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-1 p-2 text-dark/70 hover:text-primary transition-colors"
            >
              <Navigation size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Map</span>
            </Link>

            <Link
              href="/menu"
              className="flex-1 flex flex-col items-center justify-center gap-1 p-2 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <MenuSquare size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Menu</span>
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="flex-1 flex flex-col items-center justify-center gap-1 p-2 text-dark/70 hover:text-primary transition-colors"
            >
              <InstagramIcon size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Insta</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
