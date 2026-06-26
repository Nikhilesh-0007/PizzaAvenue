"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const highlights = [
    "Fresh handcrafted dough",
    "Premium imported cheese",
    "Traditional family recipes",
    "Your neighborhood café"
  ];

  return (
    <section id="about" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="font-heading tracking-[-0.02em] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary italic">Story</span>
            </h2>
            <p className="text-dark/80 leading-relaxed text-lg font-medium">
              Born from a passion for authentic Italian cuisine, <strong className="text-dark">Pizza Avenue</strong> brings the traditional taste of Naples right to the heart of Sainikpuri. Our journey started with a simple goal: to serve the perfect pizza.
            </p>
            <p className="text-dark/80 leading-relaxed text-lg font-medium">
              We believe in doing things the hard way. Our dough is prepared fresh daily and allowed to ferment for 48 hours. Baked in our custom-built oven, the result is a light, airy crust that melts in your mouth.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-dark font-semibold">
                  <CheckCircle2 className="text-secondary w-6 h-6" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <div className="flex items-center gap-4 text-dark">
                <div className="w-16 h-[2px] bg-primary" />
                <span className="font-heading tracking-[-0.02em] italic text-xl text-primary font-bold">Pizza Avenue Family</span>
              </div>
            </div>
          </motion.div>

          {/* Image (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2 group"
          >
            <div className="absolute inset-0 bg-dark/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
            <Image
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop"
              alt="Pizza preparation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
