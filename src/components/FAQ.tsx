import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I verify the authenticity of gold jewelry?",
    answer:
      "Every gold piece carries the official BIS hallmark including purity grade (916 for 22K), assaying center mark, and our identification. We provide detailed invoices with certificates of authenticity.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Complete transparency: gold weight × current rate + making charges + stones + GST. No hidden fees. We explain every line item before purchase.",
  },
  {
    question: "Do you offer resizing services?",
    answer:
      "Yes, first resize within 6 months is complimentary. Our craftsmen ensure resizing doesn't affect aesthetics for intricate designs.",
  },
  {
    question: "What is your exchange and buyback policy?",
    answer:
      "100% gold value on exchange. Up to 95% market rate on buyback. Diamond values assessed separately. Valid for our pieces and certified external jewelry.",
  },
  {
    question: "How long does custom jewelry take?",
    answer:
      "3-4 weeks typically: consultation (2 days), CAD design (7 days), approval, crafting (14 days). For bridal sets, start 6-8 weeks early.",
  },
  {
    question: "Do you offer lifetime maintenance?",
    answer:
      "Yes! Free cleaning, polishing, rhodium plating, and minor repairs for life. We recommend service every 6-12 months.",
  },
];

const FAQ = () => {
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
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container-modern">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Header */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs uppercase tracking-ultra text-primary mb-6">FAQ</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
              Questions
              <br />
              <span className="italic">Answered</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Transparency is at the heart of everything we do. Here are answers to common questions.
            </p>

            <div className="mt-10 p-6 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Still have questions?</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary font-medium transition-colors link-underline pb-0.5"
              >
                Chat with us on WhatsApp →
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-serif text-lg py-5 hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
