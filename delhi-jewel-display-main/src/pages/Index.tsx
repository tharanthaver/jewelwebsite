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
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
    alt: "Elegant Gold Necklace",
  },
  {
    src: "https://images.unsplash.com/photo-1611085583191-a3b13b24424a?w=1200&q=80",
    alt: "Classic Golden Chain",
  },
  {
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80",
    alt: "Gold Link Bracelet",
  },
  {
    src: "https://images.unsplash.com/photo-1626245917194-7340cc7ad47c?w=1200&q=80",
    alt: "Fine Gold Jewelry",
  },
  {
    src: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1200&q=80",
    alt: "Artisan Gold Work",
  },
  {
    src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&q=80",
    alt: "Luxury Gold Chain",
  },
  {
    src: "https://images.unsplash.com/photo-1616113113197-293e54f7a28e?w=1200&q=80",
    alt: "Layered Gold Chains",
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
              <div className="bg-white/95 p-10 md:p-14 rounded-[3rem] shadow-xl flex flex-col items-center max-w-xl mx-auto border border-stone-100">
                <span className="inline-block px-5 py-1.5 rounded-full bg-[#FDF2F0] text-[#E08A74] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-[#FDF2F0]">
                  Immersive Experience
                </span>
                <h2 className="font-serif text-5xl md:text-7xl text-center mb-6 text-stone-900 tracking-tight">The Golden Journey</h2>
                <p className="text-stone-600 text-center text-lg md:text-xl mb-12 font-medium">
                  Experience the artistry of our golden chains
                </p>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-[#E08A74] text-[11px] font-bold tracking-[0.2em] uppercase">
                    Keep Scrolling
                  </span>
                  <div className="w-[1.5px] h-20 bg-[#E08A74]/30" />
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
