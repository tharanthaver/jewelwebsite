import { useEffect, useRef, useState } from "react";
import { Shield, FileText, Repeat, Sparkles, Package, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "BIS Hallmarked",
    description: "Every piece carries the BIS hallmark — your guarantee of certified purity.",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    description: "Clear breakdown of weight, making charges, and GST. No hidden costs.",
  },
  {
    icon: Sparkles,
    title: "Lifetime Service",
    description: "Free cleaning, polishing, and minor repairs for life.",
  },
  {
    icon: Repeat,
    title: "Exchange Policy",
    description: "Full gold value on exchange at current market rates.",
  },
  {
    icon: Package,
    title: "Premium Packaging",
    description: "Presentation boxes with tamper-proof seals and certificates.",
  },
  {
    icon: Award,
    title: "Certified Diamonds",
    description: "IGI/GIA certified diamonds with detailed grading reports.",
  },
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="services" ref={sectionRef} className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-modern relative">
        <div
          className={`max-w-2xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            Why Us
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Trust Built Over
            <br />
            <span className="italic text-gradient">Generations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            For over 25 years, families across Delhi have trusted us for their most precious moments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative bg-background p-8 rounded-2xl group transition-all duration-700 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hoveredIndex === index ? "shadow-elevated -translate-y-2" : "shadow-soft"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredIndex === index ? "bg-primary scale-110" : ""
                }`}>
                  <feature.icon className={`w-6 h-6 transition-colors duration-500 ${
                    hoveredIndex === index ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full transition-all duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
