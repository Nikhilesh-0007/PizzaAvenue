"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
            <Image
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop"
              alt="Pizza preparation"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-heading tracking-[-0.02em] text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary italic">Story</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Born from a passion for authentic Italian cuisine, <strong className="text-white">Pizza Avenue</strong> brings the traditional taste of Naples right to the heart of Sainikpuri. Our journey started with a simple goal: to serve the perfect pizza.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              We believe in doing things the hard way. Our dough is prepared fresh daily using imported 00 flour and allowed to ferment for 48 hours. Baked in our custom-built oven, the result is a light, airy crust that melts in your mouth.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-16 h-[1px] bg-primary" />
                <span className="font-heading tracking-[-0.02em] italic text-xl text-secondary">Chef Antonio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
