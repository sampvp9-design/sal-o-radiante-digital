import { useEffect, useState } from "react";
import { Scissors } from "lucide-react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated logo */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center animate-pulse">
          <Scissors className="w-12 h-12 text-background animate-spin-slow" />
        </div>
        <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-gold/30 animate-ping" />
      </div>

      {/* Brand name */}
      <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
        Beleza <span className="text-primary">Digital</span>
      </h1>
      <p className="text-muted-foreground text-sm mb-8">Transformando salões online</p>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-gold transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-3">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
