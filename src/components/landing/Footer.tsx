import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">
                MODERNIZE 
              </h3>
              <p className="text-background/70 text-sm">
                Transformando salões de beleza com presença digital profissional.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-gold transition-colors text-sm">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/belezadigital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-gold transition-colors text-sm">
                    <Instagram className="w-4 h-4" />
                    @belezadigital
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@belezadigital.com" className="flex items-center gap-2 text-background/70 hover:text-gold transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    contato@belezadigital.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#beneficios" className="text-background/70 hover:text-gold transition-colors text-sm">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-background/70 hover:text-gold transition-colors text-sm">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-background/70 hover:text-gold transition-colors text-sm">
                    Dúvidas Frequentes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/50 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Beleza Digital. Feito com{" "}
              <Heart className="w-4 h-4 text-primary fill-primary" /> para salões de beleza.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;