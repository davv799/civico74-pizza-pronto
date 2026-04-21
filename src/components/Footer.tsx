import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-muted-foreground/20 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-background/80">
          <div>
            <h3 className="font-display text-xl text-background font-semibold mb-4">Civico 74</h3>
            <p className="text-sm leading-relaxed">
              Pizza Take Away — La pizza buona a Porto Viro.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Indirizzo
            </h4>
            <p className="text-sm">Via Contarini, 74<br />45014 Porto Viro (RO)</p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Contatti
            </h4>
            <a href="tel:+393274270314" className="text-sm hover:text-primary transition-colors">
              327 4270314
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Orari
            </h4>
            <p className="text-sm">Lunedì: Chiuso</p>
            <p className="text-sm">Mar – Dom: 17:00 – 21:00</p>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} Civico 74 Pizza Take Away. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
