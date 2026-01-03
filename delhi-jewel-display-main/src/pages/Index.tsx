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
    src: "https://images.unsplash.com/photo-1611085583191-a3b13b24424a?w=1280&q=80",
    alt: "Classic Golden Chain",
  },
  {
    src: "https://images.unsplash.com/photo-1626245917194-7340cc7ad47c?w=1280&q=80",
    alt: "Fine Gold Jewelry",
  },
  {
    src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1280&q=80",
    alt: "Luxury Gold Chain",
  },
  {
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1280&q=80",
    alt: "Gold Link Bracelet",
  },
  {
    src: "https://images.unsplash.com/photo-1616113113197-293e54f7a28e?w=1280&q=80",
    alt: "Layered Gold Chains",
  },
  {
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1280&q=80",
    alt: "Elegant Gold Necklace",
  },
  {
    src: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1280&q=80",
    alt: "Artisan Gold Work",
  },
];

const Index = () => {
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
        <section className="relative overflow-hidden bg-background">
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="container-modern flex flex-col items-center justify-center">
              <div className="backdrop-blur-md bg-background/40 p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl flex flex-col items-center max-w-2xl mx-auto">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6 animate-pulse border border-primary/20">
                  Immersive Experience
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-center mb-4 text-foreground drop-shadow-sm">The Golden Journey</h2>
                <p className="text-foreground/80 text-center text-base md:text-lg mb-10 font-medium">
                  Experience the artistry of our golden chains
                </p>
                <div className="flex flex-col items-center gap-3">
                  <span className="text-primary text-sm font-bold tracking-widest uppercase animate-bounce">
                    Keep Scrolling
                  </span>
                  <div className="w-px h-16 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                </div>
              </div>
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
