
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Braulio Avalos",
      role: "DM con 5 años de experiencia",
      content: "Esta herramienta sería un cambio total para mi forma de preparar sesiones. Me encantaría poder probarla.",
      rating: 5
    },
    {
      name: "Eduardo Fonseca",
      role: "Jugador Veterano",
      content: "He estado esperando algo así durante años. La gestión de personajes se ve increíblemente útil.",
      rating: 5
    },
    {
      name: "Fabricio Ruiz",
      role: "Quiere empezar a jugar D&D",
      content: "Como principiante, esto me daría la confianza para finalmente probar ser DM. ¡Quiero acceso temprano!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
            La Comunidad Ya Está Emocionada
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reacciones reales de la comunidad D&D sobre QuestMasters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-effect hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
