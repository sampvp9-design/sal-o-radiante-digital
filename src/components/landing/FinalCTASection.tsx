import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";
import salonToolsImage from "@/assets/salon-tools.jpg";

const FinalCTASection = () => {
  const spotsLeft = 10;
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Quero saber mais sobre o pacote completo para salões 💇‍♀️";
  const bonusList = ["Pack de Design para Instagram", "Gestão de Redes por 2 meses", "Sessão de Fotos Profissional"];
  return <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={salonToolsImage} 
          alt="Ferramentas profissionais de salão de beleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 px-5 py-2 rounded-full mb-8 animate-pulse-soft">
            <Users className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Apenas {spotsLeft} vagas disponíveis!</span>
          </div>

          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você Paga <span className="text-primary">Só Pelo Site</span>
            <br />
            <span className="text-gold">12x de R$ 79,90</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            E recebe 3 bônus GRATUITOS que salão nenhum ganha por esse valor!
          </p>

          {/* Bonus checklist */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8 inline-block">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">
              Inclusos gratuitamente:
            </p>
            <ul className="space-y-3">
              {bonusList.map((bonus, index) => <li key={index} className="flex items-center gap-3 justify-center">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-foreground font-medium">{bonus}</span>
                  <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">GRÁTIS</span>
                </li>)}
            </ul>
          </div>

          {/* Spots indicator */}
          <div className="mb-10 bg-card/60 backdrop-blur-sm border border-gold/30 rounded-xl px-6 py-4 inline-block">
            <p className="text-sm text-muted-foreground mb-1">Vagas restantes</p>
            <p className="font-playfair text-4xl font-bold text-gold">{spotsLeft} de 10</p>
            <p className="text-xs text-muted-foreground mt-1">Seja uma das primeiras!</p>
          </div>

          {/* CTA Button */}
          <Button asChild size="lg" className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-accent-foreground font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Quero Agor
              Quero Meu Pacote Completo      
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Atendimento imediato pelo WhatsApp
          </p>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;