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
    image: "/images/menu/margherita.png",
    veg: true,
    bestseller: true
  },
  { 
    id: 2,
    name: "Chicken Alfredo Pizza", 
    price: "₹530", 
    description: "Creamy alfredo base, grilled chicken breast, mozzarella, and roasted garlic.",
    image: "/images/menu/chicken_alfredo.png",
    veg: false,
    bestseller: true
  },
  { 
    id: 3,
    name: "Tiramisu", 
    price: "₹300", 
    description: "Classic Italian dessert made with espresso-soaked ladyfingers and mascarpone cream.",
    image: "/images/menu/tiramisu.png",
    veg: true,
    bestseller: false
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
          <h2 className="font-heading tracking-[-0.02em] text-4xl md:text-5xl font-bold text-foreground mb-4">Featured <span className="text-primary italic">Favorites</span></h2>
          <p className="text-dark/70 max-w-2xl mx-auto font-medium">A taste of what we offer. Experience the authentic taste of Naples right here.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card border border-dark/5 rounded-3xl overflow-hidden hover:shadow-[0_15px_40px_rgba(198,40,40,0.1)] hover:-translate-y-2 transition-all duration-500 relative flex flex-col"
            >
              {item.bestseller && (
                <div className="absolute top-4 left-4 z-20 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Bestseller
                </div>
              )}
              
              <div className="relative h-64 w-full overflow-hidden bg-dark/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow relative bg-card">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className={item.veg ? "w-3 h-3 rounded-full border border-green-600 bg-green-500" : "w-3 h-3 rounded-full border border-red-600 bg-red-500"} title={item.veg ? "Vegetarian" : "Non-Vegetarian"} />
                    <h3 className="font-heading tracking-[-0.02em] text-2xl font-bold text-foreground leading-tight">{item.name}</h3>
                  </div>
                  <span className="text-primary font-heading font-extrabold text-xl whitespace-nowrap ml-4">{item.price}</span>
                </div>
                <p className="text-dark/70 text-sm mb-8 line-clamp-2 flex-grow">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/menu" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 min-w-[200px]">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
