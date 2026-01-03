import { useState, useEffect } from "react";
import { Menu, X, Heart, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/products" },
  { name: "Bespoke", href: "#custom" },
  { name: "About", href: "#about" },
  { name: "Visit", href: "#visit" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "glass py-3 shadow-soft" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-modern">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex flex-col items-start group relative"
          >
            <div className="absolute -left-2 -top-1 w-8 h-8 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500" />
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide relative">
              Fine Jewellery
            </span>
            <span className="text-[9px] uppercase tracking-ultra text-muted-foreground mt-0.5 group-hover:text-primary transition-colors duration-300">
              Delhi
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="relative px-5 py-2.5 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 rounded-full" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-6 transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 group ${
                    isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute inset-0 transition-all duration-300 rounded-full ${
                    isActive(link.href) ? "bg-primary/10" : "bg-primary/0 group-hover:bg-primary/5"
                  }`} />
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.href) ? "w-6" : "w-0 group-hover:w-6"
                  }`} />
                </Link>
              )
            ))}
            
            <Link
              to="/products"
              className="ml-4 flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-shimmer -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Explore</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/wishlist"
              className="p-2.5 text-foreground hover:text-primary transition-all duration-300 relative group"
              aria-label="Wishlist"
            >
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-full scale-0 group-hover:scale-100" />
              <Heart className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-foreground hover:text-primary transition-colors relative group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-full" />
              <div className="relative z-10">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container-modern py-8 space-y-1">
          {navLinks.map((link, index) => (
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-4 text-lg font-medium text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300"
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-4 text-lg font-medium hover:translate-x-2 transition-all duration-300 ${
                  isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {link.name}
              </Link>
            )
          ))}
          <div 
            className="pt-6 mt-6 border-t border-border"
            style={{ 
              transitionDelay: isMobileMenuOpen ? '250ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            <Link
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Explore Collections
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
