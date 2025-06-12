
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Star, Crown, Check } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mes",
      description: "Perfecto para comenzar tu aventura",
      icon: Shield,
      features: [
        "Máximo 5 personajes",
        "1 campaña con IA",
        "Uso limitado del chatbot",
        "Herramientas básicas de D&D",
        "Acceso a reglas básicas"
      ],
      buttonText: "Acceso Directo",
      color: "bg-muted"
    },
    {
      name: "Básico",
      price: "$5",
      period: "/mes",
      description: "Para aventureros dedicados",
      icon: Star,
      features: [
        "Personajes ilimitados",
        "Más opciones de personalización",
        "Personalización de equipo base",
        "Trasfondos personalizables",
        "Rasgos y linaje personalizable",
        "Más usos del chatbot",
        "Campañas ligeramente personalizables"
      ],
      buttonText: "Acceso Directo",
      color: "bg-primary/10"
    },
    {
      name: "Completo",
      price: "$25",
      period: "/mes",
      description: "Para Dungeon Masters profesionales",
      icon: Crown,
      features: [
        "Todo del plan Básico",
        "Personalización completa de campañas",
        "Muchos más usos del chatbot",
        "Acceso completo a libros adicionales",
        "Integración de IA en tablero 2D",
        "Mayor personalización de campaña",
        "Soporte prioritario"
      ],
      buttonText: "Acceso Directo",
      color: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
            Planes Futuros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Precios estimados - sujetos a cambio durante el desarrollo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="glass-effect hover-glow transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4 ${plan.color}`}>
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-cinzel text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gold-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full hover-glow"
                  variant="outline"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
