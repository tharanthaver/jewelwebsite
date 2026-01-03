import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const interests = [
  "Engagement Rings",
  "Bridal Collection",
  "Gold Jewelry",
  "Diamond Pieces",
  "Custom Design",
  "General Inquiry",
];

const timeSlots = [
  "10:30 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const AppointmentForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    interest: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({ title: "Appointment requested", description: "We'll call you within 30 minutes." });
  };

  if (isSubmitted) {
    return (
      <section id="contact" ref={sectionRef} className="section-padding bg-muted/30">
        <div className="container-modern">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-primary/10">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-serif text-4xl font-medium mb-4">Thank You!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We'll contact you within 30 minutes during business hours.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Or chat with us on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-modern">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-xs uppercase tracking-ultra text-primary mb-6">Book a Visit</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
              Let's Create
              <br />
              <span className="italic">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Schedule a personalized consultation with our jewelry experts.
            </p>

            <div className="space-y-4">
              {["Personal consultation with experts", "View exclusive collections", "No obligation experience"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10 shadow-soft">
              <h3 className="font-serif text-2xl mb-8">Request Appointment</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-modern"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 bg-muted border border-r-0 border-border text-muted-foreground text-sm">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[6-9][0-9]{9}"
                      className="input-modern border-l-0"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="input-modern"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="input-modern"
                  >
                    <option value="">Select interest</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Request Appointment
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll call you within 30 minutes during business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
