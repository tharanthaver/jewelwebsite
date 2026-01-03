import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: "rings",
    title: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    count: "120+ Designs",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    count: "85+ Designs",
  },
  {
    id: "earrings",
    title: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    count: "200+ Designs",
  },
  {
    id: "bridal",
    title: "Bridal",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    count: "Complete Sets",
  },
];

const FeaturedCollections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      ref={sectionRef}
      id="collections"
      className="section-padding bg-background"
    >
      <div className="container-modern">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-xs uppercase tracking-ultra text-primary mb-4">Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              Curated for You
            </h2>
          </div>
          <Link
            to="/products"
            className="mt-6 md:mt-0 text-sm font-medium flex items-center gap-2 text-foreground hover:text-primary transition-colors link-underline pb-0.5"
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/products?category=${collection.id}`}
              className={`group relative aspect-[3/4] overflow-hidden cursor-pointer transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-[10px] uppercase tracking-super text-white/60 mb-2">
                  {collection.count}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:translate-x-2 transition-transform duration-300">
                  {collection.title}
                </h3>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
