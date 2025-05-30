
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Award, TrendingUp } from "lucide-react";

export const UpcomingFeaturesSection = () => {
  const upcomingFeatures = [
    {
      icon: Globe,
      title: "Mundos Compartidos",
      description: "Conecta tus campañas con otros DMs y crea universos épicos colaborativos",
      timeline: "Q2 2025"
    },
    {
      icon: Award,
      title: "Sistema de Logros",
      description: "Recompensas y reconocimientos por tus aventuras más épicas",
      timeline: "Q3 2025"
    },
    {
      icon: TrendingUp,
      title: "Analytics de Campaña",
      description: "Métricas detalladas sobre la diversión y engagement de tus sesiones",
      timeline: "Q4 2025"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
            Próximas Funciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            El roadmap del futuro - estas son solo algunas de las increíbles funciones que vienen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <Card key={index} className="glass-effect hover-glow relative">
              <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500">
                {feature.timeline}
              </Badge>
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
