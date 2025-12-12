import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Marina Oliveira",
    role: "Studio Beleza & Cia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Meu salão ganhou uma presença digital incrível! O número de clientes novos pelo Instagram triplicou no primeiro mês.",
    rating: 5,
  },
  {
    name: "Fernanda Santos",
    role: "Salão Elegance Hair",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "As fotos profissionais fizeram toda a diferença! Agora tenho material de qualidade para usar em todas as redes.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    role: "Espaço Beleza Premium",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    text: "A gestão de redes sociais me deu tempo para focar no que sei fazer: cuidar das minhas clientes. Super recomendo!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossas <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de salões que transformaram sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-rose-light" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Before/After showcase */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl font-bold text-foreground text-center mb-10">
            Transformações <span className="text-gold">Reais</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-card border border-border rounded-2xl p-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Antes</span>
                <span className="text-xs text-muted-foreground">127 seguidores</span>
              </div>
              <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-muted-foreground/20 rounded-full mx-auto mb-4" />
                  <div className="h-3 bg-muted-foreground/20 rounded w-2/3 mx-auto mb-2" />
                  <div className="h-2 bg-muted-foreground/10 rounded w-1/2 mx-auto" />
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-muted-foreground/10 rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-card border-2 border-gold/30 rounded-2xl p-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gold uppercase tracking-wide">Depois</span>
                <span className="text-xs text-gold">2.400+ seguidores</span>
              </div>
              <div className="aspect-square bg-gradient-rose rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-4 border-2 border-primary" />
                  <div className="h-3 bg-primary/40 rounded w-2/3 mx-auto mb-2" />
                  <div className="h-2 bg-primary/20 rounded w-1/2 mx-auto" />
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-primary/20 rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;