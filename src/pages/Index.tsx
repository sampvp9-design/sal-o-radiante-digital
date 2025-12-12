import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FreeBonusSection from "@/components/landing/FreeBonusSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <main className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <HeroSection />
        <BenefitsSection />
        <FreeBonusSection />
        <HowItWorksSection />
        <AuthoritySection />
        <FinalCTASection />
        <FAQSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;