import { useState } from "react";

interface Pizza {
  name: string;
  ingredients: string;
  special?: boolean;
}

interface MenuCategory {
  title: string;
  emoji: string;
  items: Pizza[];
}

const menuData: MenuCategory[] = [
  {
    title: "Pizze Classiche",
    emoji: "🍕",
    items: [
      { name: "Margherita", ingredients: "Pomodoro, mozzarella, basilico" },
      { name: "Marinara", ingredients: "Pomodoro, aglio, origano, olio EVO" },
      { name: "Napoli", ingredients: "Pomodoro, mozzarella, acciughe, capperi" },
      { name: "Prosciutto", ingredients: "Pomodoro, mozzarella, prosciutto cotto" },
      { name: "Diavola", ingredients: "Pomodoro, mozzarella, salame piccante" },
      { name: "Quattro Stagioni", ingredients: "Pomodoro, mozzarella, funghi, carciofi, prosciutto, olive" },
      { name: "Capricciosa", ingredients: "Pomodoro, mozzarella, funghi, prosciutto, olive, carciofi" },
      { name: "Tonno e Cipolla", ingredients: "Pomodoro, mozzarella, tonno, cipolla" },
    ],
  },
  {
    title: "Pizze Bianche",
    emoji: "🧀",
    items: [
      { name: "Quattro Formaggi", ingredients: "Mozzarella, gorgonzola, fontina, parmigiano" },
      { name: "Mortazza", ingredients: "Mozzarella, mortadella, stracciatella, granella di pistacchio", special: true },
      { name: "Panna e Speck", ingredients: "Mozzarella, panna, speck, noci" },
    ],
  },
  {
    title: "Pizze Napoletane Moderne",
    emoji: "🔥",
    items: [
      { name: "Civico 74", ingredients: "Crema di zucca, salsiccia, provola affumicata, granella di nocciole", special: true },
      { name: "Carbonara", ingredients: "Crema di pecorino, guanciale croccante, tuorlo d'uovo, pepe nero", special: true },
      { name: "Parmigiana", ingredients: "Pomodoro, melanzane fritte, mozzarella, parmigiano, basilico" },
      { name: "Friarielli e Salsiccia", ingredients: "Mozzarella, friarielli, salsiccia napoletana" },
    ],
  },
  {
    title: "Pizze Speciali",
    emoji: "⭐",
    items: [
      { name: "Burrata e Crudo", ingredients: "Pomodorini, burrata, prosciutto crudo, rucola" },
      { name: "Tartufata", ingredients: "Mozzarella, funghi porcini, crema di tartufo, scaglie di parmigiano" },
      { name: "Sfiziosa", ingredients: "Mozzarella, zucchine, gamberetti, pomodorini" },
    ],
  },
  {
    title: "Pizza in Pala",
    emoji: "🫓",
    items: [
      { name: "Pala Classica", ingredients: "Pomodoro, mozzarella, basilico — impasto croccante romano" },
      { name: "Pala Gourmet", ingredients: "Crema di carciofi, provola, speck croccante" },
      { name: "Pala Ortolana", ingredients: "Verdure grigliate, mozzarella, origano" },
    ],
  },
  {
    title: "Baby Pizza",
    emoji: "👶",
    items: [
      { name: "Baby Margherita", ingredients: "Pomodoro, mozzarella — formato mini per i piccoli!" },
      { name: "Baby Wurstel", ingredients: "Pomodoro, mozzarella, wurstel" },
    ],
  },
];

const extras = [
  { name: "Bufala", desc: "Aggiunta di mozzarella di bufala DOP" },
  { name: "Impasto napoletano", desc: "Impasto a lunga lievitazione 48h" },
  { name: "Senza glutine", desc: "Impasto gluten free su richiesta" },
];

const doughTypes = [
  { name: "Classico", desc: "Impasto tradizionale, leggero e croccante" },
  { name: "Napoletano", desc: "Lievitazione 48h, bordo alto e soffice" },
  { name: "Pala Romana", desc: "Croccante fuori, morbido dentro" },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-20 bg-warm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Il Nostro</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Menu</h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuData.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {cat.emoji} {cat.title}
            </button>
          ))}
        </div>

        {/* Active category items */}
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {menuData[activeCategory].items.map((pizza) => (
              <div
                key={pizza.name}
                className={`flex justify-between items-start p-4 rounded-xl ${
                  pizza.special ? "bg-primary/5 border border-primary/20" : "bg-card"
                }`}
              >
                <div>
                  <h4 className="font-display text-lg font-semibold flex items-center gap-2">
                    {pizza.name}
                    {pizza.special && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-sans">
                        Speciale
                      </span>
                    )}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">{pizza.ingredients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dough types & extras */}
        <div className="max-w-3xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">🌾 Impasti</h3>
            <div className="space-y-3">
              {doughTypes.map((d) => (
                <div key={d.name} className="p-4 bg-card rounded-xl">
                  <p className="font-semibold">{d.name}</p>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">➕ Extra</h3>
            <div className="space-y-3">
              {extras.map((e) => (
                <div key={e.name} className="p-4 bg-card rounded-xl">
                  <p className="font-semibold">{e.name}</p>
                  <p className="text-sm text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
