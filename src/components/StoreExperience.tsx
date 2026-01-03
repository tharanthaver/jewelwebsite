import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Phone, Navigation, MessageCircle, Sparkles } from "lucide-react";

const StoreExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const details = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          Shop No. 42, Main Market, Karol Bagh<br />
          New Delhi - 110005
        </>
      ),
    },
    {
      icon: Clock,
      title: "Hours",
      content: (
        <>
          Mon - Sat: 10:30 AM - 8:00 PM<br />
          Sunday: 11:00 AM - 7:00 PM
        </>
      ),
    },
    {
      icon: Phone,
      title: "Contact",
      content: (
        <a
          href="tel:+919876543210"
          className="hover:text-primary transition-colors duration-300"
        >
          +91 98765 43210
        </a>
      ),
    },
  ];

  return (
    <section id="visit" ref={sectionRef} className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-modern relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative h-[450px] lg:h-[550px] overflow-hidden rounded-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-8 scale-95"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4844969927397!2d77.18847731508268!3d28.651912982413168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03598cb77c23%3A0x3b2e8a66dde3f43e!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
              className="grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
            />
            
            <div className={`absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-background p-6 shadow-elevated rounded-xl transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-serif text-xl">Fine Jewellery</p>
                  <p className="text-sm text-muted-foreground">Karol Bagh, Delhi</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-6 bg-primary/20 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              Visit Us
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-foreground mb-8 leading-tight">
              Experience
              <br />
              <span className="italic text-primary">Luxury</span>
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-10 max-w-md">
              Step into our elegantly designed showroom in the heart of Karol Bagh.
            </p>

            <div className="space-y-6 mb-10">
              {details.map((detail, index) => (
                <div 
                  key={detail.title}
                  className={`flex items-start gap-4 p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground mb-1">{detail.title}</p>
                    <p className="text-secondary-foreground/70 text-sm">
                      {detail.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className={`flex flex-wrap gap-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <a
                href="https://www.google.com/maps/dir//Karol+Bagh,+New+Delhi,+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 bg-primary text-primary-foreground group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                Get Directions
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-all duration-300 rounded-full group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreExperience;
