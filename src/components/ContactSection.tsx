"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading tracking-[-0.02em] text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Visit <span className="text-primary italic">Us</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Drop by for a slice of Naples right here in Hyderabad.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col justify-center"
          >
            <h3 className="font-heading tracking-[-0.02em] text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400 leading-relaxed">123 Pizza Street, Sainikpuri<br />Hyderabad, Telangana 500094</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Mon-Fri: 11:00 AM - 10:00 PM<br />Sat-Sun: 12:00 PM - 11:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <button className="mt-12 w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all duration-300 flex items-center justify-center gap-2">
              <Navigation size={20} />
              <span>Get Directions</span>
            </button>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-3xl overflow-hidden min-h-[400px] relative flex items-center justify-center"
          >
            {/* Fake Map iframe placeholder styling to look good */}
            <div className="absolute inset-0 bg-background/50 z-10 pointer-events-none" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.094595292416!2d78.5323533!3d17.4824976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9baf2f5c76db%3A0xc3c51121ab9dcb!2sSainikpuri%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(1) invert(0.9) hue-rotate(180deg)" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
