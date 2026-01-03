import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float transition-transform duration-1000"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-float delay-300 transition-transform duration-1000"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />

      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-modern relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-8 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                Artisan Crafted in Delhi
              </p>
            </div>

            <h1
              className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8 transition-all duration-1000 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Where
              <br />
              <span className="italic text-gradient">Elegance</span>
              <br />
              Meets Soul
            </h1>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Handcrafted jewelry that celebrates your most precious moments. 
              Each piece tells a story of timeless beauty.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                to="/products"
                className="btn-primary inline-flex items-center justify-center gap-3 group"
              >
                <Sparkles className="w-4 h-4" />
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

            <div
              className={`flex items-center gap-8 mt-14 justify-center lg:justify-start transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { value: "25+", label: "Years" },
                { value: "10K+", label: "Clients" },
                { value: "4.9", label: "Rating" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <p className="font-serif text-3xl font-medium group-hover:text-primary transition-colors duration-300">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{stat.label}</p>
                  {index < 2 && <div className="hidden" />}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
          >
            <div 
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-elevated group"
              style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Elegant gold necklace with diamonds"
                className="w-full h-full object-cover animate-slow-zoom group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-transparent to-transparent" />
              
              <Link 
                to="/products" 
                className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 py-4 bg-background/95 backdrop-blur-sm text-foreground font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Sparkles className="w-4 h-4" />
                View Collection
              </Link>
            </div>
            
            <div 
              className={`absolute -bottom-6 -left-6 bg-card p-6 shadow-elevated rounded-xl transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }}
            >
              <p className="text-xs uppercase tracking-super text-muted-foreground mb-1">Hallmarked</p>
              <p className="font-serif text-2xl">916 Gold</p>
            </div>
            
            <div 
              className={`absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 shadow-glow rounded-full transition-all duration-1000 delay-600 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
            >
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#collections" className="flex flex-col items-center gap-3 group cursor-pointer">
          <span className="text-[10px] uppercase tracking-ultra text-muted-foreground group-hover:text-primary transition-colors duration-300">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
