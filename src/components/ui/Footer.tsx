import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <span className="font-heading tracking-[-0.02em] text-3xl font-bold text-white tracking-wide">
              Pizza<span className="text-primary">Avenue</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Authentic Neapolitan Pizza, Fresh Every Day. Handcrafted with passion in the heart of Sainikpuri.
          </p>
          <div className="flex gap-4 pt-2 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading tracking-[-0.02em] text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "Menu", "About", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="font-heading tracking-[-0.02em] text-lg font-semibold text-white mb-6">Opening Hours</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex justify-between">
              <span>Monday - Friday:</span>
              <span className="text-white">11:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday - Sunday:</span>
              <span className="text-white">12:00 PM - 11:30 PM</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading tracking-[-0.02em] text-lg font-semibold text-white mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary shrink-0" />
              <span>123 Pizza Street, Sainikpuri,<br />Hyderabad, 500094</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary shrink-0" />
              <span>hello@pizzaavenue.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Pizza Avenue. All rights reserved.</p>
      </div>
    </footer>
  );
}
