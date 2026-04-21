import heroPizza from "@/assets/hero-pizza.jpg";
import { Phone, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroPizza}
        alt="Pizza napoletana artigianale di Civico 74"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-primary font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          Civico 74 — Pizza Take Away
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 text-shadow-hero">
          La pizza buona a Porto Viro
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Impasti leggeri, ingredienti di qualità, passione autentica
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+393274270314"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Chiama ora
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/10 transition-colors"
          >
            Scopri il menu
          </a>
        </div>
      </div>

      <a href="#info" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-secondary" />
      </a>
    </section>
  );
};

export default HeroSection;
