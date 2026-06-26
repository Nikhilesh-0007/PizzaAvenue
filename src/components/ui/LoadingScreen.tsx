"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const path1 = "M50,5 C74.8,5 95,25.2 95,50 C95,74.8 74.8,95 50,95 C25.2,95 5,74.8 5,50 C5,25.2 25.2,5 50,5 Z";
const path2 = "M50,10 C78,6 92,28 90,50 C88,72 75,92 50,90 C25,88 8,75 10,50 C12,25 22,14 50,10 Z";
const path3 = "M50,2 C70,12 98,22 95,50 C92,78 78,98 50,95 C22,92 2,75 5,50 C8,22 30,8 50,2 Z";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // GSAP Curve/Wobble Animation
    if (pathRef.current) {
      // 1. Draw the circle in
      gsap.fromTo(
        pathRef.current,
        { strokeDasharray: 300, strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }
      );

      // 2. Waving / Wobbling animation loop using standard GSAP attribute interpolation
      const tl = gsap.timeline({ repeat: -1, delay: 1.5 });
      tl.to(pathRef.current, { attr: { d: path2 }, duration: 0.8, ease: "sine.inOut" })
        .to(pathRef.current, { attr: { d: path3 }, duration: 0.8, ease: "sine.inOut" })
        .to(pathRef.current, { attr: { d: path1 }, duration: 0.8, ease: "sine.inOut" });
        
      // 3. Slowly rotate the whole SVG for an extra organic feel
      gsap.to(pathRef.current, {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 10,
        repeat: -1,
        ease: "linear"
      });
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds to showcase the animation

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf(pathRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-background/50 z-10" />
            <Image
              src="/background.png"
              alt="Loading Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative w-96 h-96 flex items-center justify-center z-10">
            {/* The Logo Image */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-64 h-64 rounded-full overflow-hidden z-10 shadow-2xl flex items-center justify-center bg-white"
            >
              <Image 
                src="/pizza_logo.png" 
                alt="Pizza Avenue Logo" 
                fill
                className="object-contain p-2"
                priority
              />
            </motion.div>
            
            {/* The GSAP SVG Wavy Circle */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full stroke-white overflow-visible drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] z-20 pointer-events-none"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                ref={pathRef}
                d={path1}
              />
            </svg>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 text-sm tracking-[0.3em] uppercase z-20"
          >
            Baking...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
