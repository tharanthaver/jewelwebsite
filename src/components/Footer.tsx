import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Collections", href: "/products" },
  { name: "Bespoke", href: "#custom" },
  { name: "About", href: "#about" },
  { name: "Visit", href: "#visit" },
  { name: "Wishlist", href: "/wishlist" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-modern py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-medium">Fine Jewellery</span>
              <p className="text-xs uppercase tracking-ultra text-secondary-foreground/50 mt-1">Delhi</p>
            </Link>
            <p className="text-secondary-foreground/70 max-w-sm mb-8 leading-relaxed">
              For over 25 years, we've been crafting timeless jewelry for Delhi's most discerning families.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["BIS Hallmarked", "IGI Certified", "4.9★ Rated"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 border border-primary/30 text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-secondary-foreground/70 text-sm">
                  Shop No. 42, Main Market<br />
                  Karol Bagh, New Delhi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@finejewellery.com"
                  className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                >
                  hello@finejewellery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-modern py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-secondary-foreground/50">
              © {new Date().getFullYear()} Fine Jewellery. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-secondary-foreground/50">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
