import { useState, useEffect } from "react";
import { Menu, X, Heart, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-modern">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Navigation - Left */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors link-underline pb-0.5"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors link-underline pb-0.5"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Logo - Center */}
          <Link
            to="/"
            className="flex flex-col items-center group"
          >
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide">
              Fine Jewellery
            </span>
            <span className="text-[9px] uppercase tracking-ultra text-muted-foreground mt-0.5">
              Delhi
            </span>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(2).map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors link-underline pb-0.5"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors link-underline pb-0.5"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Icons - Right */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 text-foreground hover:text-primary transition-colors hidden sm:block"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/wishlist"
              className="p-2 text-foreground hover:text-primary transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container-modern py-8 space-y-1">
          {navLinks.map((link) => (
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="pt-6 mt-6 border-t border-border">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="btn-primary inline-block text-sm"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
