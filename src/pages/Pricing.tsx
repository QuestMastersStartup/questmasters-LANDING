
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Shield } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "siempre",
      description: "Perfecto para comenzar tu aventura",
      icon: Shield,
      features: [
        "Máximo 5 personajes",
        "1 campaña con IA",
        "Uso limitado del chatbot (10 mensajes/día)",
        "Herramientas básicas de D&D",
        "Acceso a reglas básicas"
      ],
      limitations: [
        "Sin personalización avanzada",
        "Sin acceso a libros premium",
        "Sin tablero 2D"
      ],
      popular: false,
      buttonText: "Comenzar Gratis",
      color: "bg-muted"
    },
    {
      name: "Básico",
      price: "$9.99",
      period: "/mes",
      description: "Para aventureros dedicados",
      icon: Star,
      features: [
        "Personajes ilimitados",
        "Campañas ilimitadas con IA",
        "Chatbot mejorado (100 mensajes/día)",
        "Personalización de equipos base",
        "Trasfondos personalizables",
        "Rasgos y linaje personalizable",
        "Campañas ligeramente personalizables"
      ],
      limitations: [
        "Acceso limitado a libros premium",
        "Sin tablero 2D con IA"
      ],
      popular: true,
      buttonText: "Elegir Básico",
      color: "bg-primary/10"
    },
    {
      name: "Completo",
      price: "$19.99",
      period: "/mes",
      description: "Para Dungeon Masters profesionales",
      icon: Crown,
      features: [
        "Todo del plan Básico",
        "Chatbot ilimitado",
        "Acceso completo a libros de contenido",
        "Tablero 2D con integración de IA",
        "Personalización completa de campañas",
        "Herramientas avanzadas de DM",
        "Soporte prioritario",
        "Funciones experimentales"
      ],
      limitations: [],
      popular: false,
      buttonText: "Elegir Completo",
      color: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="text-center sm:text-left flex-1">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl md:text-4xl gold-gradient mb-2 sm:mb-4">
              Planes de Suscripción
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Elige el plan perfecto para tu estilo de juego
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`glass-effect relative ${plan.popular ? 'ring-2 ring-primary lg:scale-105' : ''} hover-glow transition-all duration-300`}>
              {plan.popular && (
                <Badge className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs sm:text-sm">
                  Más Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-lg flex items-center justify-center mb-3 sm:mb-4 ${plan.color}`}>
                  <plan.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <CardTitle className="font-cinzel text-xl sm:text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient">{plan.price}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">{plan.period}</span>
                </div>
                <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-green-400 text-sm sm:text-base">✓ Incluye:</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-muted-foreground text-sm sm:text-base">Limitaciones:</h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="w-3 h-3 sm:w-4 sm:h-4 text-center mt-0.5 flex-shrink-0">−</span>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button 
                  className={`w-full hover-glow text-sm sm:text-base ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Card className="glass-effect max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl mb-3 sm:mb-4">¿Necesitas algo más?</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Contáctanos para planes empresariales o funcionalidades específicas para tu grupo
              </p>
              <Button variant="outline" className="hover-glow text-sm sm:text-base">
                Contactar Ventas
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
