import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-float delay-300" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-modern relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <p
              className={`text-xs uppercase tracking-ultra text-muted-foreground mb-8 transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Artisan Crafted • Delhi
            </p>

            {/* Main Headline */}
            <h1
              className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8 transition-all duration-1000 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Where
              <br />
              <span className="italic text-primary">Elegance</span>
              <br />
              Meets Soul
            </h1>

            {/* Subtext */}
            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Handcrafted jewelry that celebrates your most precious moments. 
              Each piece tells a story of timeless beauty.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                to="/products"
                className="btn-primary inline-flex items-center justify-center gap-3 group"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center gap-3"
              >
                Book Visit
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex items-center gap-8 mt-14 justify-center lg:justify-start transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center">
                <p className="font-serif text-3xl font-medium">25+</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Years</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-serif text-3xl font-medium">10K+</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Clients</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-serif text-3xl font-medium">4.9</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Elegant gold necklace with diamonds"
                className="w-full h-full object-cover animate-slow-zoom"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-elevated">
              <p className="text-xs uppercase tracking-super text-muted-foreground mb-1">Hallmarked</p>
              <p className="font-serif text-2xl">916 Gold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-3 animate-float">
          <span className="text-[10px] uppercase tracking-ultra text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
