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
    <section id="services" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-modern">
        {/* Header */}
        <div
          className={`max-w-2xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-ultra text-primary mb-4">Why Us</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Trust Built Over
            <br />
            <span className="italic">Generations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            For over 25 years, families across Delhi have trusted us for their most precious moments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-background p-10 group hover:bg-muted/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
