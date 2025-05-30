
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Lightbulb, Heart } from "lucide-react";

export const VisionSection = () => {
  const visionItems = [
    {
      icon: Rocket,
      title: "El Futuro de D&D",
      description: "Expandimos D&D a nuevas audiencias, eliminando barreras y haciendo el juego accesible para millones de personas que nunca han tenido la oportunidad de probarlo."
    },
    {
      icon: Lightbulb,
      title: "Creatividad Amplificada",
      description: "La IA no reemplaza tu creatividad, la potencia. Genera ideas base que puedes personalizar y hacer tuyas."
    },
    {
      icon: Heart,
      title: "Comunidad Conectada",
      description: "Conectamos jugadores de todo el mundo, facilitando encontrar tu grupo perfecto y compartir aventuras épicas."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
            Nuestra Visión
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Democratizar el arte de ser Dungeon Master y hacer D&D accesible para todos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <Card key={index} className="glass-effect hover-glow transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-cinzel font-semibold text-xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
