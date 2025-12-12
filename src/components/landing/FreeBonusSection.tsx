import { Gift, Palette, Users, Camera, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const bonuses = [
  {
    icon: Palette,
    title: "Pack de Design",
    subtitle: "para Instagram",
    features: ["30+ templates editáveis", "Stories e posts", "Paleta de cores personalizada"],
    originalValue: "R$ 119,90",
  },
  {
    icon: Users,
    title: "Gestão de Redes",
    subtitle: "por 2 meses",
    features: ["Posts semanais", "Legendas profissionais", "Hashtags estratégicas"],
    originalValue: "2x R$ 119,90",
  },
  {
    icon: Camera,
    title: "Sessão de Fotos",
    subtitle: "profissional",
    features: ["Fotógrafo especializado", "Fotos do salão", "Fotos da equipe"],
    originalValue: "R$ 200,00",
  },
];

const FreeBonusSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section ref={ref} className="py-20 bg-gradient-rose relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-primary/20 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Exclusivo nesta oferta</span>
          </div>
          
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Você Paga <span className="text-primary">Só Pelo Site</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            E leva <span className="text-gold font-semibold">3 bônus incríveis</span> totalmente de graça!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 border-gold/30 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* GRÁTIS badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-gold to-gold-light text-accent-foreground font-bold px-6 py-2 rounded-full shadow-lg text-lg">
                  GRÁTIS
                </span>
              </div>

              <div className="pt-4">
                <div className="w-16 h-16 bg-rose-light rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <bonus.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-playfair text-2xl font-bold text-foreground text-center mb-1">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  {bonus.subtitle}
                </p>

                <ul className="space-y-3 mb-6">
                  {bonus.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">Valor real:</p>
                  <p className="text-lg font-semibold text-muted-foreground line-through">
                    {bonus.originalValue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeBonusSection;