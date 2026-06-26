import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-8 text-white relative z-10 border-t-4 border-primary">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <span className="font-heading tracking-[-0.02em] text-4xl font-bold tracking-wide">
              Pizza<span className="text-primary">Avenue</span>
            </span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs font-medium">
            Authentic Neapolitan Pizza, Fresh Every Day. Handcrafted with passion in the heart of Sainikpuri.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/the.pizza.avenue?igsh=Z2N5cnN2bnk1ZzU1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <InstagramIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <FacebookIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading tracking-[-0.02em] text-xl font-bold mb-6 text-secondary">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Menu", "About", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all font-medium text-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="font-heading tracking-[-0.02em] text-xl font-bold mb-6 text-secondary">Opening Hours</h4>
          <ul className="space-y-4 text-sm text-white/70 font-medium">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/70 font-medium">Mon - Sat</span>
              <span className="text-white font-semibold">4 PM - 10 PM</span>
            </li>
            <li className="flex justify-between">
              <span className="text-white/70 font-medium">Sunday</span>
              <span className="text-white font-semibold">4 PM - 11 PM</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading tracking-[-0.02em] text-xl font-bold mb-6 text-secondary">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/70 font-medium">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary shrink-0" />
              <a 
                href="https://maps.app.goo.gl/41e3kDZPPBzUGVKE9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                123 Pizza Street, Sainikpuri,<br />Hyderabad, 500094
              </a>
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

      <div className="container mx-auto px-6 md:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 font-medium">
        <p>&copy; {new Date().getFullYear()} Pizza Avenue. All rights reserved.</p>
        <p>Made with ❤️ in Hyderabad</p>
      </div>
    </footer>
  );
}
