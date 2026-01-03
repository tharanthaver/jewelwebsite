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
