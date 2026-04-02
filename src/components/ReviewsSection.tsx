import { Star } from "lucide-react";

const reviews = [
  { name: "Marta Ballo", text: "La nostra pizzeria d'asporto di fiducia! Da quando hanno aperto ci siamo fidati di Silvia e Michele che con la loro gentilezza e semplicità ci fanno tornare sempre." },
  { name: "Lisa Pacchiella", text: "Pizza eccezionale, la migliore in zona: impasto eccellente, leggero, super digeribile e tanti prodotti di qualità." },
  { name: "Alessia Civiero", text: "Il posto è una piccola gemma. La pizza tonda sia napoletana che normale è buonissima, leggera e facile da digerire. Il menù è vario." },
  { name: "Jessica D'Imperio", text: "Staff accogliente e gentilissimo. La pizza è una bontà assoluta, leggera e digeribile." },
  { name: "Giacomo Zago", text: "Pizza top! Prodotti di alta qualità, prezzi giusti e staff giovane e super disponibile." },
  { name: "Elisa Roccato", text: "Impasto napoletano buonissimo, si sentono i prodotti di qualità. Personale gentilissimo." },
  { name: "Samantha Vivian", text: "La migliore pizzeria della zona, soprattutto pizza in pala e napoletana: squisite!" },
  { name: "Maria F. Pizzighello", text: "La vera pizza napoletana, viene voglia di fare il bis!" },
  { name: "Anne Crepaldi", text: "L'unica pizza di cui mangio anche i bordi! Super digeribile." },
  { name: "Simone", text: "Tra le pizze napoletane più buone mai mangiate. Puntualissimi e prezzi ottimi." },
  { name: "Valentina R.", text: "Sempre puntuali, sempre buonissima. Non la cambierei per nulla!" },
  { name: "Marco P.", text: "Qualità top e prezzi onesti. La carbonara è da provare assolutamente!" },
];

const ReviewsSection = () => {
  return (
    <section id="recensioni" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Recensioni</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Cosa dicono i nostri clienti
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
              <p className="font-semibold text-sm text-primary">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
