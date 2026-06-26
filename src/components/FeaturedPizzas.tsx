"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Using known valid Unsplash IDs
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop";

const featuredItems = [
  { 
    id: 1,
    name: "Classic Margherita Pizza", 
    price: "₹380", 
    description: "San Marzano tomato sauce, fresh mozzarella di bufala, basil, and extra virgin olive oil.",
    image: "/images/menu/margherita.png"
  },
  { 
    id: 2,
    name: "Chicken Alfredo Pizza", 
    price: "₹530", 
    description: "Creamy alfredo base, grilled chicken breast, mozzarella, and roasted garlic.",
    image: "/images/menu/chicken_alfredo.png"
  },
  { 
    id: 3,
    name: "Tiramisu", 
    price: "₹300", 
    description: "Classic Italian dessert made with espresso-soaked ladyfingers and mascarpone cream.",
    image: "/images/menu/tiramisu.png"
  },
];

export function FeaturedPizzas() {
  return (
    <section id="menu" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading tracking-[-0.02em] text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-primary italic">Favorites</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A taste of what we offer. Experience the authentic taste of Naples right here.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-card border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10 pointer-events-none" />
              
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="relative z-20 p-8 -mt-12">
                <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-xl group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading tracking-[-0.02em] text-2xl font-bold text-white leading-tight">{item.name}</h3>
                    <span className="text-primary font-heading font-extrabold text-lg whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/menu" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[200px]">
            View Full Menu
          </Link>
          <Link href="#contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 min-w-[200px]">
            Visit Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
