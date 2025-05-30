
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, User, Users, BookOpen, Wrench } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Chatbot Dungeon Master",
      description: "IA especializada que actuará como tu DM personal, creando aventuras épicas y gestionando campañas automáticamente."
    },
    {
      icon: User,
      title: "Gestión de Personajes",
      description: "Crea y administra fichas de personajes completas con estadísticas, inventario y progresión de nivel."
    },
    {
      icon: Users,
      title: "Campañas Organizadas",
      description: "Planifica y sigue el progreso de tus campañas con herramientas intuitivas de gestión."
    },
    {
      icon: BookOpen,
      title: "Biblioteca de Contenido",
      description: "Acceso a una vasta colección de libros, reglas y contenido oficial de D&D."
    },
    {
      icon: Wrench,
      title: "Homebrew Creator",
      description: "Crea y comparte contenido personalizado: clases, razas, hechizos y objetos únicos. Workshop comunitario donde puedes descubrir, calificar y usar creaciones de otros jugadores."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
            Herramientas Épicas en Desarrollo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos construyendo las herramientas que siempre has soñado tener
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect hover-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-cinzel font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
