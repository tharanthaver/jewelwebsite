import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

const StoreExperience = () => {
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
    <section id="visit" ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-modern">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div
            className={`relative h-[450px] lg:h-[550px] overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
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
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-72 bg-background p-5 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-serif text-lg">Fine Jewellery</p>
                  <p className="text-xs text-muted-foreground">Karol Bagh, Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-xs uppercase tracking-ultra text-primary mb-6">Visit Us</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-foreground mb-8 leading-tight">
              Experience
              <br />
              <span className="italic">Luxury</span>
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-10 max-w-md">
              Step into our elegantly designed showroom in the heart of Karol Bagh.
            </p>

            {/* Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-secondary-foreground mb-1">Address</p>
                  <p className="text-secondary-foreground/70 text-sm">
                    Shop No. 42, Main Market, Karol Bagh<br />
                    New Delhi - 110005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-secondary-foreground mb-1">Hours</p>
                  <p className="text-secondary-foreground/70 text-sm">
                    Mon - Sat: 10:30 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-secondary-foreground mb-1">Contact</p>
                  <a
                    href="tel:+919876543210"
                    className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/dir//Karol+Bagh,+New+Delhi,+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 bg-primary text-primary-foreground"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
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
