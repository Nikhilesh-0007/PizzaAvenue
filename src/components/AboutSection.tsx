"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wheat, Flame, Heart, Pizza, MapPin } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const features = [
    {
      title: "Fresh Dough",
      desc: "Prepared fresh every day for the perfect texture.",
      icon: <Wheat className="w-6 h-6 text-[#C62828]" />,
    },
    {
      title: "Premium Ingredients",
      desc: "Fresh mozzarella, rich sauces, and carefully selected toppings.",
      icon: <Pizza className="w-6 h-6 text-[#C62828]" />,
    },
    {
      title: "Neapolitan Inspired",
      desc: "Authentic flavors inspired by traditional Italian pizza making.",
      icon: <Flame className="w-6 h-6 text-[#C62828]" />,
    },
    {
      title: "Made With Passion",
      desc: "Every pizza is handcrafted with care and baked fresh.",
      icon: <Heart className="w-6 h-6 text-[#C62828]" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side - Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 relative h-[700px] w-full"
          >
            {/* Large Main Image */}
            <div className="absolute top-0 left-0 w-[80%] h-[75%] rounded-[24px] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop"
                alt="Delicious cheese pull pizza"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80"></div>
            </div>

            {/* Bottom Right Small Image */}
            <div className="absolute bottom-0 right-0 w-[45%] h-[40%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-background group z-10">
              <Image
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop"
                alt="Wood-fired pizza oven"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Top Right Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-[35%] h-[30%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-background group hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=600&auto=format&fit=crop"
                alt="Fresh ingredients and dough"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-primary/30 rounded-full shadow-sm backdrop-blur-sm">
              <span className="text-lg">🍕</span>
              <span className="text-primary font-bold text-sm tracking-widest font-heading">EST. 2025</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="font-heading font-extrabold text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
              The Only Route to <br/><span className="text-primary">Real Flavor</span>
            </motion.h2>

            {/* Story Paragraph */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-white/80 font-body text-lg leading-relaxed">
                Every pizza at Pizza Avenue begins with freshly prepared dough, premium ingredients, rich mozzarella, and handcrafted care. Inspired by authentic Neapolitan-style pizzas, we focus on creating bold flavors and unforgettable moments. Every pizza is freshly prepared, baked to perfection, and served with the warmth of a neighborhood café.
              </p>
              <p className="text-white/80 font-body text-lg leading-relaxed">
                Whether you&apos;re meeting friends, enjoying family time, or simply craving great pizza, Pizza Avenue is where fresh ingredients, authentic recipes, and passion come together in every slice.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(198,40,40,0.3)" }}
                  className="bg-card backdrop-blur-md border border-white/10 p-5 rounded-[20px] shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 shadow-inner border border-primary/20">
                    {feature.icon}
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg mb-2">{feature.title}</h4>
                  <p className="font-body text-white/70 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Signature Quote */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-6 pb-2">
              <div className="text-3xl">🍕</div>
              <blockquote className="font-heading italic font-semibold text-2xl text-white border-l-4 border-accent pl-6 py-1">
                &quot;The Only Route to Real Flavor.&quot;
              </blockquote>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="font-heading font-bold text-white text-xl mb-6">Ready for Your Next Favorite Pizza?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:shadow-[0_8px_25px_rgba(198,40,40,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span>🍕</span> Explore Menu
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-white hover:shadow-[0_8px_20px_rgba(198,40,40,0.2)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" /> Visit Pizza Avenue
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
