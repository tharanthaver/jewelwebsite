import { useEffect, useRef, useState } from "react";
import { MessageCircle, Pencil, Package, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description: "Share your vision with our designers. We understand your style, occasion, and budget.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description: "Review detailed sketches and 3D renders. Adjust until every detail is perfect.",
  },
  {
    number: "03",
    icon: Package,
    title: "Craft",
    description: "Master artisans handcraft your piece with certified materials and full documentation.",
  },
];

const CustomJewelrySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="custom"
      ref={sectionRef}
      className="section-padding bg-secondary relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-modern relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-6 bg-primary/20 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              Bespoke Service
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-foreground mb-8 leading-tight">
              Your Story,
              <br />
              <span className="italic text-primary">Our Craft</span>
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-12 max-w-md">
              Transform your imagination into a one-of-a-kind masterpiece with our bespoke service.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex gap-6 items-start p-5 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${hoveredStep === index ? "bg-secondary-foreground/10" : ""}`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={`flex-shrink-0 w-16 h-16 border rounded-xl flex items-center justify-center transition-all duration-500 ${
                    hoveredStep === index ? "border-primary bg-primary" : "border-primary/30"
                  }`}>
                    <span className={`font-serif text-xl transition-colors duration-500 ${
                      hoveredStep === index ? "text-primary-foreground" : "text-primary"
                    }`}>{step.number}</span>
                  </div>
                  <div>
                    <h3 className={`font-serif text-xl mb-2 transition-colors duration-300 ${
                      hoveredStep === index ? "text-primary" : "text-secondary-foreground"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className={`btn-primary inline-flex items-center gap-3 mt-10 group bg-primary text-primary-foreground transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              <Sparkles className="w-4 h-4" />
              Start Your Piece
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl group">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-transparent to-transparent rounded-2xl" />
            </div>
            
            <div className={`absolute -bottom-6 -right-6 bg-background p-8 shadow-elevated rounded-xl transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <p className="font-serif text-4xl text-primary mb-1">500+</p>
              <p className="text-xs uppercase tracking-super text-muted-foreground">
                Bespoke Pieces
              </p>
            </div>
            
            <div className={`absolute -top-4 -left-4 bg-primary text-primary-foreground p-4 shadow-glow rounded-full transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}>
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomJewelrySection;
