import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set deadline to 7 days from now
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-card border border-border rounded-lg px-4 py-3 min-w-[70px] shadow-md">
        <span className="font-playfair text-2xl md:text-3xl font-bold text-gold">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="inline-flex flex-col items-center">
      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-destructive rounded-full animate-pulse-soft" />
        Oferta válida por tempo limitado
      </p>
      <div className="flex items-center gap-3">
        <TimeBox value={timeLeft.days} label="Dias" />
        <span className="text-2xl font-bold text-muted-foreground">:</span>
        <TimeBox value={timeLeft.hours} label="Horas" />
        <span className="text-2xl font-bold text-muted-foreground">:</span>
        <TimeBox value={timeLeft.minutes} label="Min" />
        <span className="text-2xl font-bold text-muted-foreground">:</span>
        <TimeBox value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
};

export default CountdownTimer;