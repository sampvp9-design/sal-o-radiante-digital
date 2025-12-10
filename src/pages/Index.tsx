import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FreeBonusSection from "@/components/landing/FreeBonusSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <FreeBonusSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <AuthoritySection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;