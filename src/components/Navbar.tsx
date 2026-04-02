import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Menu", href: "#menu" },
  { label: "Recensioni", href: "#recensioni" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-foreground/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-primary-foreground">
          Civico 74
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href="tel:+393274270314" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            <Phone className="w-4 h-4" />
            Ordina
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-muted-foreground/20 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-primary-foreground/80 hover:text-primary transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="tel:+393274270314" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold w-full justify-center">
            <Phone className="w-4 h-4" /> Ordina ora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
