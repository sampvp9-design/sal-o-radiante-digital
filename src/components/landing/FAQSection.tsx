import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o fotógrafo profissional?",
    answer: "Após a contratação, agendamos uma sessão de fotos no seu salão em um horário conveniente. O fotógrafo captura imagens profissionais do espaço, dos serviços sendo realizados e da sua equipe. Você recebe todas as fotos editadas para usar onde quiser.",
  },
  {
    question: "O site é realmente por 2 anos?",
    answer: "Sim! O site fica ativo e funcionando por 2 anos completos, com hospedagem, domínio e manutenção inclusos. Após esse período, você pode renovar por um valor especial.",
  },
  {
    question: "É obrigatório continuar depois dos 2 meses de gestão?",
    answer: "Não! Os 2 meses de gestão de redes sociais são um bônus gratuito sem compromisso. Após esse período, se quiser continuar com nossa gestão, apresentamos planos mensais. Mas não há obrigatoriedade.",
  },
  {
    question: "Como recebo os designs do pack?",
    answer: "Os templates são enviados em formatos editáveis (Canva) para que você possa personalizar com suas fotos e textos. Inclui tutorial de uso e suporte para dúvidas.",
  },
  {
    question: "A gestão de redes cobre quantos posts?",
    answer: "Durante os 2 meses, fazemos 3 posts por semana no seu Instagram (feed e/ou stories), totalizando cerca de 24 publicações com legendas profissionais e hashtags estratégicas.",
  },
  {
    question: "Em quanto tempo fica tudo pronto?",
    answer: "O site fica pronto em até 15 dias úteis. A sessão de fotos é agendada conforme sua disponibilidade, e os designs são entregues junto com o início da gestão das redes.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o pacote completo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;