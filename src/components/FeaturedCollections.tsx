import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: "rings",
    title: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    count: "120+ Designs",
    description: "From engagement to everyday elegance"
  },
  {
    id: "necklaces",
    title: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    count: "85+ Designs",
    description: "Statement pieces that captivate"
  },
  {
    id: "earrings",
    title: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    count: "200+ Designs",
    description: "From subtle studs to chandelier drops"
  },
  {
    id: "bridal",
    title: "Bridal",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    count: "Complete Sets",
    description: "Make your special day unforgettable"
  },
];

const FeaturedCollections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      ref={sectionRef}
      id="collections"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative">
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-4 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              Collections
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              Curated
              <br />
              <span className="italic text-gradient">for You</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="mt-6 md:mt-0 group inline-flex items-center gap-3 px-6 py-3 bg-noir text-white text-sm font-medium hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Collections
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/products?category=${collection.id}`}
              className={`group relative aspect-[3/4] overflow-hidden cursor-pointer transition-all duration-1000 rounded-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredId === collection.id ? "scale-110 brightness-110" : "scale-100"
                }`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-transparent" />
              
              <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${
                hoveredId === collection.id ? "opacity-100" : "opacity-0"
              }`} />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className={`self-end transition-all duration-500 ${
                  hoveredId === collection.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-noir" />
                  </div>
                </div>
                
                <div>
                  <p className={`text-[10px] uppercase tracking-super mb-2 transition-all duration-300 ${
                    hoveredId === collection.id ? "text-white" : "text-white/60"
                  }`}>
                    {collection.count}
                  </p>
                  <h3 className={`font-serif text-2xl md:text-3xl text-white mb-2 transition-transform duration-300 ${
                    hoveredId === collection.id ? "translate-x-2" : ""
                  }`}>
                    {collection.title}
                  </h3>
                  <p className={`text-sm text-white/70 transition-all duration-500 ${
                    hoveredId === collection.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    {collection.description}
                  </p>
                </div>
              </div>

              <div className={`absolute inset-0 border-2 transition-colors duration-300 rounded-2xl ${
                hoveredId === collection.id ? "border-white/40" : "border-white/0"
              }`} />
            </Link>
          ))}
        </div>

        <div 
          className={`mt-16 p-8 md:p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl mb-2">
                Can't find what you're looking for?
              </h3>
              <p className="text-muted-foreground">
                Let us create a custom piece just for you.
              </p>
            </div>
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              Explore All Pieces
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
