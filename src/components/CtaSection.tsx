import { Phone, MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-background mb-4">
          Ordina ora la tua pizza
        </h2>
        <p className="text-muted mb-8 text-lg">
          Chiama o scrivici su WhatsApp per ordinare!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+393274270314"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Chiama 327 4270314
          </a>
          <a
            href="https://wa.me/393274270314"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-background text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-background/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
