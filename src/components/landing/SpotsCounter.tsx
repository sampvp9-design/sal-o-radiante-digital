import { Users } from "lucide-react";

const SpotsCounter = () => {
  const spotsLeft = 10;

  return (
    <div className="inline-flex flex-col items-center">
      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-destructive rounded-full animate-pulse-soft" />
        Vagas limitadas para esta oferta especial
      </p>
      <div className="bg-card border-2 border-gold/40 rounded-2xl px-8 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-gold" />
          </div>
          <div className="text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Restam apenas</p>
            <p className="font-playfair text-3xl font-bold text-gold">{spotsLeft} vagas</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Oferta exclusiva para os 10 primeiros salões
        </p>
      </div>
    </div>
  );
};

export default SpotsCounter;