
import { Card, CardContent } from "@/components/ui/card";
import { Target, Brain, Users } from "lucide-react";

export const ProblemSolutionSection = () => {
  const problemSolutions = [
    {
      icon: Target,
      title: "Preparación Instantánea",
      solution: "IA genera contenido automáticamente",
      description: "Reduce el tiempo de preparación de sesiones a solo minutos"
    },
    {
      icon: Brain,
      title: "Narrativa Consistente",
      solution: "Sistema de memoria inteligente",
      description: "La IA mantiene continuidad perfecta en tu mundo y personajes"
    },
    {
      icon: Users,
      title: "Organización Simplificada",
      solution: "Herramientas de coordinación integradas",
      description: "Gestiona horarios y mantén a todos conectados fácilmente"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
            Mejoras que Ofrecemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Optimizamos cada aspecto de tu experiencia D&D con tecnología de vanguardia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problemSolutions.map((item, index) => (
            <Card key={index} className="glass-effect hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-cinzel font-semibold text-lg mb-2 text-green-400">✅ {item.title}</h3>
                <p className="text-sm font-medium mb-2">{item.solution}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
