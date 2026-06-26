"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

const instagramPosts = [
  { src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600&auto=format&fit=crop", likes: 342, comments: 24 },
  { src: "https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=600&auto=format&fit=crop", likes: 485, comments: 41 },
  { src: "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=600&auto=format&fit=crop", likes: 219, comments: 12 },
  { src: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=600&auto=format&fit=crop", likes: 512, comments: 56 },
];

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function InstagramSection() {
  return (
    <section className="py-24 bg-background relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading tracking-[-0.02em] text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              Follow Our <span className="text-primary italic">Pizza Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-dark/70 font-medium text-lg"
            >
              @the.pizza.avenue
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="https://www.instagram.com/the.pizza.avenue?igsh=Z2N5cnN2bnk1ZzU1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <InstagramIcon size={20} />
              Follow on Instagram
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md"
            >
              <Image
                src={post.src}
                alt={`Instagram post ${index + 1}`}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2 font-semibold">
                  <Heart size={24} className="fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <MessageCircle size={24} className="fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}