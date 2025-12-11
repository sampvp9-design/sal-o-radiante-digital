import { Award, Shield, Heart, Sparkles } from "lucide-react";
import stylistImage from "@/assets/stylist-working.jpg";

const AuthoritySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">Especialistas em Beleza Digital</span>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por Que Confiar em <span className="text-primary">Nós</span>?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left side - Image */}
            <div className="hidden lg:block">
              <img 
                src={stylistImage} 
                alt="Cabeleireira profissional trabalhando em salão de beleza"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            {/* Middle - Text content */}
            <div className="space-y-6 opacity-0 animate-fade-in-left">
              <p className="text-lg text-foreground leading-relaxed">
                Somos especialistas em <span className="font-semibold text-primary">marketing digital para salões de beleza</span>. 
                Entendemos o mercado, conhecemos o público e sabemos exatamente o que funciona para fazer seu negócio crescer.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Nossa missão é fazer seu salão brilhar online tanto quanto brilha no atendimento presencial. 
                Por isso criamos este pacote especial para os <span className="font-semibold text-gold">10 primeiros salões</span> que 
                acreditarem no nosso trabalho.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">Pacote exclusivo</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Atendimento personalizado</span>
                </div>
              </div>
            </div>

            {/* Right side - Trust badges */}
            <div className="space-y-4 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              {/* Specialist badge */}
              <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Especialista em Salões e Estúdios de Beleza
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Foco total no segmento de beleza e estética
                  </p>
                </div>
              </div>

              {/* Guarantee badge */}
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 bg-rose-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Garantia de Satisfação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Se em 30 dias você não estiver satisfeita, devolvemos seu dinheiro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;