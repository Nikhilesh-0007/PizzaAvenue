"use client";

import { motion } from "framer-motion";
import { Leaf, Flame, Heart, Wallet } from "lucide-react";

const features = [
  {
    icon: <Leaf size={32} />,
    title: "Fresh Ingredients",
    description: "We source local organic produce and authentic Italian imports to ensure the highest quality in every bite.",
  },
  {
    icon: <Flame size={32} />,
    title: "Authentic Taste",
    description: "Baked at extreme temperatures, our pizzas feature the signature blistered crust and smoky flavor of Naples.",
  },
  {
    icon: <Heart size={32} />,
    title: "Handmade Dough",
    description: "Our dough is fermented for 48 hours and hand-stretched daily by our master pizzaiolos.",
  },
  {
    icon: <Wallet size={32} />,
    title: "Affordable Pricing",
    description: "Premium quality shouldn't break the bank. Enjoy authentic taste at neighborhood-friendly prices.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-card relative z-10 border-y border-dark/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading tracking-[-0.02em] text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Why Choose <span className="text-primary italic">Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-3xl p-8 shadow-sm border border-dark/5 hover:shadow-[0_15px_40px_rgba(244,180,0,0.15)] hover:-translate-y-2 hover:border-secondary/30 transition-all duration-500 group text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-card shadow-inner border border-dark/5 text-primary flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:shadow-lg transition-all duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-dark/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
