import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Instagram, Globe, Calendar, Link2, ArrowRight, Smartphone, ExternalLink } from "lucide-react";

const DemoPreviewPopup = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "1. Seu Instagram Profissional",
      description: "Seu perfil terá um link personalizado na bio que leva direto para o seu hub de links",
      content: (
        <div className="bg-gradient-to-b from-muted to-card rounded-2xl p-4 max-w-xs mx-auto">
          {/* Instagram Profile Mock */}
          <div className="bg-card rounded-xl p-4 shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center">
                <span className="text-2xl">💇‍♀️</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">@seu_salao</h4>
                <p className="text-xs text-muted-foreground">Salão de Beleza</p>
              </div>
            </div>
            <p className="text-sm text-foreground mb-2">✨ Transformando sua beleza</p>
            <p className="text-sm text-foreground mb-2">📍 Brasília - DF</p>
            <p className="text-sm text-foreground mb-3">📞 (61) 99999-9999</p>
            <div className="bg-primary/20 border border-primary/40 rounded-lg p-2 text-center">
              <p className="text-xs text-primary font-medium flex items-center justify-center gap-1">
                <Link2 className="w-3 h-3" />
                seusalao.site/links
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. Seu Hub de Links",
      description: "Ao clicar no link da bio, seus clientes acessam todos os seus serviços em um só lugar",
      content: (
        <div className="bg-gradient-to-b from-muted to-card rounded-2xl p-4 max-w-xs mx-auto">
          {/* Linktree-style Mock */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-gold mx-auto mb-3 flex items-center justify-center">
                <span className="text-3xl">💇‍♀️</span>
              </div>
              <h4 className="font-playfair font-bold text-foreground">Seu Salão</h4>
              <p className="text-xs text-muted-foreground">@seu_salao</p>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-primary to-rose-dark text-primary-foreground py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 shadow-md">
                <Calendar className="w-4 h-4" />
                Agendar Horário
              </button>
              <button className="w-full bg-gradient-to-r from-gold to-gold-light text-foreground py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 shadow-md">
                <Globe className="w-4 h-4" />
                Ver Site Completo
              </button>
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 shadow-md">
                <Instagram className="w-4 h-4" />
                Seguir no Instagram
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3. Seu Site Profissional",
      description: "Um site completo com todos os seus serviços, preços e informações do salão",
      content: (
        <div className="bg-gradient-to-b from-muted to-card rounded-2xl p-4 max-w-sm mx-auto">
          {/* Website Mock */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
            {/* Browser bar */}
            <div className="bg-muted px-3 py-2 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-destructive/60" />
                <div className="w-2 h-2 rounded-full bg-gold/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-background rounded px-2 py-1">
                <p className="text-xs text-muted-foreground">seusalao.com.br</p>
              </div>
            </div>
            
            {/* Website content */}
            <div className="p-4">
              <div className="h-24 bg-gradient-to-r from-primary/20 to-gold/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <h5 className="font-playfair font-bold text-foreground">Seu Salão</h5>
                  <p className="text-xs text-muted-foreground">Beleza & Estilo</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-muted rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-foreground">Corte</p>
                  <p className="text-xs text-gold">R$ 80</p>
                </div>
                <div className="bg-muted rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-foreground">Coloração</p>
                  <p className="text-xs text-gold">R$ 150</p>
                </div>
                <div className="bg-muted rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-foreground">Manicure</p>
                  <p className="text-xs text-gold">R$ 40</p>
                </div>
                <div className="bg-muted rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-foreground">Escova</p>
                  <p className="text-xs text-gold">R$ 60</p>
                </div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-medium">
                Agendar Agora
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog onOpenChange={() => setCurrentStep(0)}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-primary/50 text-primary hover:bg-primary/10 font-medium px-6 py-6 rounded-full"
        >
          <Eye className="w-5 h-5 mr-2" />
          Ver Como Vai Ficar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl text-center text-foreground">
            Veja Como Vai Funcionar
          </DialogTitle>
        </DialogHeader>
        
        {/* Step indicators */}
        <div className="flex justify-center gap-2 mb-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Current step content */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{steps[currentStep].title}</span>
          </div>
          <p className="text-sm text-muted-foreground">{steps[currentStep].description}</p>
        </div>

        {/* Visual mockup */}
        <div className="transition-all duration-300">
          {steps[currentStep].content}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="text-muted-foreground"
          >
            Anterior
          </Button>
          
          <div className="text-sm text-muted-foreground">
            {currentStep + 1} de {steps.length}
          </div>
          
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={nextStep}
              className="bg-primary text-primary-foreground"
            >
              Próximo
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-rose-dark text-primary-foreground"
            >
              <a 
                href="https://wa.me/5561981015440?text=Olá! Quero o pacote completo para salões 💇‍♀️" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quero Agora!
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          )}
        </div>

        {/* Info text */}
        <p className="text-xs text-center text-muted-foreground mt-4">
          ✨ Tudo isso integrado e funcionando em até 7 dias úteis
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default DemoPreviewPopup;
