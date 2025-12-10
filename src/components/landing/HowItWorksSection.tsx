import { FileText, Camera, Palette, Smartphone } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Contrata o Site",
    description: "Você fecha o pacote e começamos a criar seu site profissional personalizado",
  },
  {
    icon: Camera,
    number: "02",
    title: "Sessão de Fotos",
    description: "Agendamos o fotógrafo para capturar as melhores imagens do seu salão",
  },
  {
    icon: Palette,
    number: "03",
    title: "Criamos os Designs",
    description: "Desenvolvemos templates exclusivos para suas redes sociais",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Gestão por 2 Meses",
    description: "Cuidamos das suas redes sociais enquanto você foca nas clientes",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente para transformar seu salão
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-gold to-primary" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number circle */}
                <div className="relative z-10 w-32 h-32 bg-background border-2 border-primary rounded-full flex flex-col items-center justify-center mb-6 group hover:border-gold transition-colors duration-300">
                  <span className="text-xs font-bold text-gold mb-1">{step.number}</span>
                  <step.icon className="w-10 h-10 text-primary group-hover:text-gold transition-colors duration-300" />
                </div>

                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;