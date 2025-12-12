import { Globe, Palette, Users, Camera } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: Globe,
    title: "Site Profissional",
    description: "Seu salão com presença online profissional por 2 anos completos",
    value: "12x de R$ 79,90",
    highlight: false,
  },
  {
    icon: Palette,
    title: "Pack de Design Instagram",
    description: "Templates exclusivos para posts e stories do seu salão",
    value: "Vale R$ 119,90",
    highlight: true,
  },
  {
    icon: Users,
    title: "Gestão Social Media",
    description: "Cuidamos das suas redes sociais por 2 meses completos",
    value: "Vale 2x R$ 119,90",
    highlight: true,
  },
  {
    icon: Camera,
    title: "Fotógrafo Profissional",
    description: "Sessão de fotos profissional para seu salão e equipe",
    value: "Vale R$ 200,00",
    highlight: true,
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo Que Você <span className="text-primary">Recebe</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um pacote completo pensado para transformar a presença digital do seu salão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {benefit.highlight && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    BÔNUS
                  </span>
                </div>
              )}
              
              <div className="w-14 h-14 bg-rose-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {benefit.description}
              </p>
              
              <p className={`font-semibold ${benefit.highlight ? 'text-gold' : 'text-foreground'}`}>
                {benefit.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;