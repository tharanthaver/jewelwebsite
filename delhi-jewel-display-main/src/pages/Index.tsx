import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import FeaturedCollections from "@/components/FeaturedCollections";
import CustomJewelrySection from "@/components/CustomJewelrySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import StoreExperience from "@/components/StoreExperience";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";

const goldImages = [
  {
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1280&q=80",
    alt: "Gold Diamond Necklace",
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1280&q=80",
    alt: "Gold Wedding Rings",
  },
  {
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1280&q=80",
    alt: "Gold Bracelet",
  },
  {
    src: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1280&q=80",
    alt: "Gold Earrings",
  },
  {
    src: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1280&q=80",
    alt: "Gold Pendant",
  },
  {
    src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1280&q=80",
    alt: "Gold Jewelry Crafting",
  },
  {
    src: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1280&q=80",
    alt: "Luxury Gold Watch Detail",
  },
];

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background texture-noise">
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Social Proof Strip */}
        <SocialProofStrip />
        
        {/* Featured Collections */}
        <FeaturedCollections />
        
        {/* Custom Jewelry / Bespoke */}
        <CustomJewelrySection />

        {/* Zoom Parallax Experience */}
        <section className="relative overflow-hidden">
          <div className="absolute top-10 left-0 w-full z-20 pointer-events-none">
            <div className="container-modern flex flex-col items-center justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4 animate-pulse">
                Immersive Experience
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-center mb-2">The Golden Journey</h2>
              <p className="text-muted-foreground text-center text-sm md:text-base mb-8">
                Keep scrolling to explore our gold jewelry collection
              </p>
              <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
            </div>
          </div>
          <ZoomParallax images={goldImages} />
        </section>
        
        {/* Why Choose Us */}
        <WhyChooseUs />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Store Experience / Visit Us */}
        <StoreExperience />
        
        {/* Appointment Form */}
        <AppointmentForm />
        
        {/* FAQ */}
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
