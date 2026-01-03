import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

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
  const [direction, setDirection] = useState<'left' | 'right'>('right');
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

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="reviews" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-modern relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            Stories That
            <br />
            <span className="italic text-gradient">Sparkle</span>
          </h2>
        </div>

        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-muted/30 rounded-3xl p-8 md:p-16 overflow-hidden">
            <Quote className="absolute top-8 left-8 w-20 h-20 text-primary/10" />
            
            <div className="relative min-h-[320px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${direction === 'right' ? '-translate-x-8' : 'translate-x-8'} absolute inset-0 pointer-events-none`
                  }`}
                >
                  <div className="text-center">
                    <div className="flex justify-center gap-1.5 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-primary text-primary animate-pulse" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 text-foreground">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-background shadow-elevated"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 'right' : 'left');
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentIndex === index ? "bg-primary w-8" : "bg-border w-2 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
