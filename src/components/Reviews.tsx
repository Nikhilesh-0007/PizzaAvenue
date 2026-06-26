"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Amit",
    rating: 5,
    text: "Amazing Neapolitan pizza with a perfect soft crust and rich flavors. Great value for money and a must-visit in Sainikpuri.",
  },
  {
    name: "Priya",
    rating: 5,
    text: "Loved the half-and-half option and the freshness of the pizza. The taste, quality, and pricing make it stand out.",
  },
  {
    name: "Rahul",
    rating: 5,
    text: "A hidden gem for pizza lovers. Authentic Italian-style pizza, hygienic setup, and very budget-friendly.",
  },
  {
    name: "Sneha",
    rating: 5,
    text: "Excellent taste, quick service, and really affordable prices. The classic Neapolitan pizza is a must-try.",
  },
  {
    name: "Arjun",
    rating: 5,
    text: "Great place for street-style artisan pizza. Freshly made, flavorful, and definitely worth the visit.",
  },
];

export function Reviews() {
  // Duplicate reviews for seamless infinite scrolling
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-background relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading tracking-[-0.02em] text-3xl md:text-5xl font-bold text-white mb-4"
          >
            What Our <span className="text-primary italic">Guests</span> Say
          </motion.h2>
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Gradient Masks for fading edges */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
          className="flex w-max gap-8 px-4 group-hover:[animation-play-state:paused]"
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-colors duration-300 relative w-[350px] md:w-[400px] shrink-0 flex flex-col"
            >
              <Quote size={40} className="absolute top-6 right-6 text-white/5 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 leading-relaxed flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <span className="text-sm text-gray-500">Local Guide</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
