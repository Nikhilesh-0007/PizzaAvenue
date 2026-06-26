"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background z-10" />
        <Image
          src="/hero-bg.png"
          alt="Authentic Neapolitan Pizza"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </motion.div>

      {/* Particles Effects (Rendered only on client to avoid hydration mismatch) */}
      {mounted && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Flour Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`flour-${i}`}
              className="absolute bg-white/40 rounded-full blur-[1px]"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Embers */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute bg-secondary/80 rounded-full blur-[2px]"
              style={{
                width: Math.random() * 6 + 3 + "px",
                height: Math.random() * 6 + 3 + "px",
                left: Math.random() * 100 + "%",
                bottom: "-10%",
              }}
              animate={{
                y: [0, -400],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [1, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Smoke/Steam */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`smoke-${i}`}
              className="absolute bg-white/10 blur-[40px] rounded-full"
              style={{
                width: "200px",
                height: "200px",
                left: 30 * i + 10 + "%",
                bottom: "-20%",
              }}
              animate={{
                y: [0, -300],
                x: [0, 50, -50, 0],
                opacity: [0, 0.4, 0],
                scale: [1, 2, 3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 3,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading tracking-[-0.02em] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight max-w-5xl drop-shadow-2xl"
        >
          Authentic <span className="text-primary italic">Neapolitan</span> Pizza
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl drop-shadow-md font-medium"
        >
          Freshly handcrafted pizzas made every evening using premium ingredients and baked to perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/menu"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg shadow-[0_4px_20px_rgba(198,40,40,0.4)] hover:shadow-[0_6px_25px_rgba(198,40,40,0.6)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Explore Menu
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-lg hover:bg-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Visit Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
