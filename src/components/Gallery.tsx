"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Heart, MessageCircle } from "lucide-react";

const images = [
  "/g_1.png",
  "/g_2.png",
  "/g_3.png",
  "/images/menu/margherita.png",
  "/images/menu/chicken_alfredo.png",
  "/images/menu/tiramisu.png",
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card border-y border-dark/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading tracking-[-0.02em] text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Taste in <span className="text-primary italic">Pictures</span>
          </motion.h2>
          <p className="text-dark/70 max-w-2xl mx-auto font-medium">Get a glimpse of our artisanal process and mouth-watering creations.</p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                index === 0 || index === 3 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <div className="absolute inset-0 bg-dark/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
            >
              <X size={36} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl bg-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
