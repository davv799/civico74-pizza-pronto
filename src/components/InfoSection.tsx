import { MapPin, Phone, Clock } from "lucide-react";

const InfoSection = () => {
  const infos = [
    {
      icon: MapPin,
      title: "Dove siamo",
      content: "Via Contarini, 74, 45014 Porto Viro (RO)",
      link: "https://maps.google.com/?q=Via+Contarini+74+Porto+Viro",
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "327 4270314",
      link: "tel:+393274270314",
    },
    {
      icon: Clock,
      title: "Orari",
      content: "",
      schedule: [
        { day: "Lunedì", hours: "Chiuso" },
        { day: "Mar – Dom", hours: "17:00 – 21:00" },
      ],
    },
  ];

  return (
    <section id="info" className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {infos.map((info) => (
            <div key={info.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors" target={info.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {info.content}
                </a>
              ) : (
                <div className="text-muted-foreground space-y-1">
                  {info.schedule?.map((s) => (
                    <p key={s.day}>
                      <span className="font-medium text-foreground">{s.day}:</span> {s.hours}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
