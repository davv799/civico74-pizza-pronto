import pizzaAbout from "@/assets/pizza-about.jpg";

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={pizzaAbout}
              alt="Pizza dal forno a legna di Civico 74"
              className="w-full h-[400px] object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
          <div>
            <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Chi siamo</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Passione, qualità e tradizione
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Civico 74 è una pizzeria d'asporto nata dalla passione di Silvia e Michele. 
              Offriamo impasti altamente digeribili e ingredienti selezionati, con un perfetto 
              equilibrio tra tradizione napoletana e innovazione.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Impasto leggero", icon: "🌾" },
                { label: "Ingredienti top", icon: "🍅" },
                { label: "Fatto con ❤️", icon: "👨‍🍳" },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-card rounded-xl">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
