import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "South Delhi",
    rating: 5,
    text: "Bought my entire bridal set here. The designs were exactly what I dreamed of, and the transparent billing gave us complete peace of mind.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 2,
    name: "Rajesh Gupta",
    location: "Karol Bagh",
    rating: 5,
    text: "We've been customers for 15 years. Every anniversary, birthday, and milestone — they've been there. The quality is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    id: 3,
    name: "Ananya Mehta",
    location: "Rajouri Garden",
    rating: 5,
    text: "The custom engagement ring exceeded all expectations. From consultation to the final reveal, the experience was magical.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    location: "Punjabi Bagh",
    rating: 5,
    text: "Bought a diamond necklace for my wife's anniversary. The certification, quality, and after-sales service speaks of their commitment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="section-padding bg-background">
      <div className="container-modern">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-ultra text-primary mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            Stories That
            <br />
            <span className="italic">Sparkle</span>
          </h2>
        </div>

        {/* Testimonial */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10 text-foreground">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    currentIndex === index ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
