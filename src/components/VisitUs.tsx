"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Link from "next/link";

export function VisitUs() {
  return (
    <section id="contact" className="py-24 bg-card relative z-10 border-y border-dark/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading tracking-[-0.02em] text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Visit <span className="text-primary italic">Us</span>
          </motion.h2>
          <p className="text-dark/70 max-w-2xl mx-auto font-medium">Come experience the authentic taste of Naples right here in Sainikpuri.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-background rounded-3xl p-8 shadow-sm border border-dark/5 space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-card shadow-inner border border-dark/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Location</h4>
                  <p className="text-dark/80 font-medium leading-relaxed">
                    123 Pizza Street, Sainikpuri,<br />
                    Secunderabad, Telangana 500094
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-card shadow-inner border border-dark/5 flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Opening Hours</h4>
                  <ul className="text-dark/80 font-medium space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Sat:</span> <span>4 PM - 10 PM</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>4 PM - 11 PM</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-card shadow-inner border border-dark/5 flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Contact</h4>
                  <p className="text-dark/80 font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Navigation size={20} />
                Get Directions
              </Link>
              <Link
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-background border border-dark/10 text-foreground rounded-xl font-bold hover:bg-dark/5 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <Phone size={20} />
                Call Now
              </Link>
            </div>
          </motion.div>

          {/* Map (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] bg-dark/5 rounded-[2rem] overflow-hidden shadow-inner border border-dark/5 relative group cursor-pointer"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.094595292416!2d78.5389023!3d17.4879641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bfe9a6d8d27%3A0x39d85afe322bd229!2sPizza%20Avenue!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
