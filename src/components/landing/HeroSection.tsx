import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import SpotsCounter from "./SpotsCounter";
import heroSalonImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Quero saber mais sobre o pacote completo para salões 💇‍♀️";
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroSalonImage} 
          alt="Salão de beleza moderno com decoração rosa e dourada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gold rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-gold-light rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground">Oferta Exclusiva - Apenas 10 Vagas</span>
          </div>

          {/* Main headline */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            Seu Salão na Internet com{" "}
            <span className="text-primary">Presença Profissional</span>
            <br />— e Você Ainda Leva{" "}
            <span className="text-gold">3 Bônus GRÁTIS!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Site profissional por 2 anos + Pack de Design para Instagram + Gestão de Redes Sociais + Sessão de Fotos Profissional. Tudo isso por apenas:
          </p>

          {/* Price highlight */}
          <div className="mb-8 animate-scale-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="inline-block bg-card border-2 border-gold/30 rounded-2xl px-8 py-6 shadow-lg">
              <p className="text-sm text-muted-foreground mb-1">Apenas</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-semibold text-foreground">12x de</span>
                <span className="font-playfair text-5xl md:text-6xl font-bold text-gold">R$ 79,90</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">pelo site profissional</p>
            </div>
          </div>

          {/* Spots Counter */}
          <div className="mb-8 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <SpotsCounter />
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-rose-dark hover:from-rose-dark hover:to-primary text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                
                Quero Meu Pacote Completo
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              💬 Atendimento direto pelo WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;