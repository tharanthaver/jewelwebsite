import { useEffect, useRef, useState } from "react";
import { MessageCircle, Pencil, Package, ArrowRight } from "lucide-react";

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
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
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-xs uppercase tracking-ultra text-primary mb-6">
              Bespoke Service
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-foreground mb-8 leading-tight">
              Your Story,
              <br />
              <span className="italic">Our Craft</span>
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-12 max-w-md">
              Transform your imagination into a one-of-a-kind masterpiece with our bespoke service.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-6 items-start"
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 border border-primary/30 flex items-center justify-center">
                    <span className="font-serif text-xl text-primary">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-secondary-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-foreground/60 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-3 mt-12 group bg-primary text-primary-foreground"
            >
              Start Your Piece
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-8 -right-8 bg-background p-8 shadow-elevated">
              <p className="font-serif text-4xl text-primary mb-1">500+</p>
              <p className="text-xs uppercase tracking-super text-muted-foreground">
                Bespoke Pieces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomJewelrySection;
