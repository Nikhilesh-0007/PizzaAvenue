"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-dark/10 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
            <Image
              src="/pizza_logo.png"
              alt="Pizza Avenue Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="hidden sm:flex flex-col ml-2">
            <span className={cn(
              "font-heading tracking-[-0.02em] text-2xl font-bold tracking-wide leading-none transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Pizza<span className="text-primary">Avenue</span>
            </span>
            <span className={cn(
              "text-[10px] tracking-widest uppercase mt-1 transition-colors",
              isScrolled ? "text-foreground/60" : "text-white/80"
            )}>
              The only route to real flavor
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider",
                  isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link
            href="/contact"
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Visit Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden transition-colors", isScrolled ? "text-foreground" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-dark/10 md:hidden shadow-lg"
          >
            <nav className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold shadow-md mt-4"
              >
                Visit Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
