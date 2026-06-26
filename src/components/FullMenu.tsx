"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Using known valid Unsplash IDs for pizza, pasta, and sides to avoid 404s
const PIZZA_IMG = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop";
const PIZZA2_IMG = "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400&auto=format&fit=crop";
const PASTA_IMG = "https://images.unsplash.com/photo-1621996311210-2a1330c6c1c4?q=80&w=400&auto=format&fit=crop";
const BREAD_IMG = "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=400&auto=format&fit=crop";
const DIP_IMG = "https://images.unsplash.com/photo-1512152596590-b6ab2dbdf92b?q=80&w=400&auto=format&fit=crop";
const CHEESE_IMG = "https://images.unsplash.com/photo-1589134764834-4530fcb7e408?q=80&w=400&auto=format&fit=crop";
const DESSERT_IMG = "https://images.unsplash.com/photo-1571115177098-24edf3f14fa7?q=80&w=400&auto=format&fit=crop";

const menuCategories = [
  {
    category: "Veggie Haven",
    items: [
      { name: "Classic Margherita Pizza", price: "₹380", image: "/images/menu/margherita.png" },
      { name: "Mushroom Alfredo Pizza", price: "₹450", image: "/images/menu/mushroom.png" },
      { name: "Pesto Pizza", price: "₹520", image: "/images/menu/pesto.png" },
      { name: "Paneer Makhani Pizza", price: "₹420", image: "/images/menu/paneer.png" },
      { name: "Farmhouse Pizza", price: "₹520", image: "/images/menu/farmhouse.png" },
      { name: "Corn Pizza", price: "₹400", image: "/images/menu/corn.png" },
    ]
  },
  {
    category: "Non-Veg Paradise",
    items: [
      { name: "Chicken Pepperoni Pizza", price: "₹480", image: "/images/menu/chicken_pepperoni.png" },
      { name: "Chicken Alfredo Pizza", price: "₹530", image: "/images/menu/chicken_alfredo.png" },
      { name: "Chicken Makhani Pizza", price: "₹520", image: "/images/menu/chicken_makhani.png" },
      { name: "Meat Lovers Pizza", price: "₹600", image: "/images/menu/meat_lovers.png" },
    ]
  },
  {
    category: "Pasta Tossed & Sauced",
    items: [
      { name: "Alfredo Pasta", price: "Reg ₹370 | Lrg ₹450", image: "/images/menu/alfredo_pasta.png" },
      { name: "Pesto Pasta", price: "Reg ₹410 | Lrg ₹480", image: "/images/menu/pesto_pasta.png" },
      { name: "Arrabbiata Pasta", price: "Reg ₹370 | Lrg ₹450", image: "/images/menu/arrabbiata.png" },
      { name: "Spaghetti Aglio e Olio", price: "₹350", image: "/images/menu/aglio_e_olio.png" },
    ]
  },
  {
    category: "Breads & Sides",
    items: [
      { name: "Focaccia", price: "₹250", image: "/images/menu/focaccia.png" },
      { name: "Garlic Knots", price: "₹250", image: "/images/menu/garlic_knots.png" },
      { name: "Garlic Bread", price: "₹250", image: "/images/menu/garlic_bread.png" },
      { name: "Pepperoni Garlic Bread", price: "₹300", image: "/images/menu/pepperoni_bread.png" },
    ]
  },
  {
    category: "Dunk & Dip",
    items: [
      { name: "Viva Rosso", price: "₹65", image: "/images/menu/viva_rosso.png" },
      { name: "Pesto", price: "₹65", image: "/images/menu/pesto_dip.png" },
    ]
  },
  {
    category: "Top It Off",
    items: [
      { name: "Fresh Mozzarella", price: "₹100", image: "/images/menu/mozzarella.png" },
      { name: "Burrata", price: "₹200", image: "/images/menu/burrata.png" },
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Tiramisu", price: "₹300", image: "/images/menu/tiramisu.png" },
    ]
  }
];

export function FullMenu() {
  return (
    <section className="py-24 bg-background relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading tracking-[-0.02em] text-4xl md:text-5xl font-bold text-white mb-4">Full <span className="text-primary italic">Menu</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the authentic taste of Naples. Explore our entire selection of handcrafted pizzas, pastas, sides, and desserts.</p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {menuCategories.map((category, catIndex) => (
            <div key={category.category}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-heading tracking-[-0.02em] text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="group relative bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300 flex items-center h-32"
                  >
                    <div className="relative h-full w-32 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="128px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col justify-center h-full bg-gradient-to-l from-transparent to-card">
                      <h4 className="font-heading tracking-[-0.02em] text-lg font-bold text-white leading-tight mb-2">{item.name}</h4>
                      <span className="text-primary font-heading font-extrabold text-md">{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
