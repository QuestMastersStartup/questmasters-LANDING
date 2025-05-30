
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, User, Users, BookOpen, Sparkles, Shield, Sword, Check, Crown, Star, Zap, Globe, Clock, Award, Quote, Lightbulb, Target, Rocket, Heart, TrendingUp, Brain, Wrench } from "lucide-react";

const Index = () => {
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
      description: "Crea y comparte contenido personalizado: clases, razas, hechizos y objetos únicos con la comunidad."
    }
  ];

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

  const visionItems = [
    {
      icon: Rocket,
      title: "El Futuro de D&D",
      description: "Expandimos D&D a nuevas audiencias, eliminando barreras y haciendo el juego accesible para millones de personas que nunca se han atrevido a probarlo."
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

  const faqs = [
    {
      question: "¿Cuándo estará disponible QuestMasters?",
      answer: "Estamos en fase de desarrollo activo. Los primeros usuarios beta tendrán acceso en los próximos meses. Mantente atento para ser notificado cuando esté listo."
    },
    {
      question: "¿Reemplazará completamente al Dungeon Master humano?",
      answer: "¡Para nada! QuestMasters está diseñado para potenciar tu creatividad, no reemplazarla. La IA maneja las tareas repetitivas para que te concentres en la narrativa y diversión."
    },
    {
      question: "¿Funcionará con mis campañas existentes?",
      answer: "Sí, podrás importar tus personajes y campañas existentes. QuestMasters se adaptará a tu estilo de juego y mundo existente."
    },
    {
      question: "¿Habrá una versión gratuita?",
      answer: "Sí, tendremos un plan gratuito robusto para que todos puedan experimentar la magia de QuestMasters, con opciones premium para funciones avanzadas."
    }
  ];

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
      price: "$10",
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
      price: "$20",
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
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/0272aeb2-f59d-4a66-bcf7-65f3d0a77256.png" 
                alt="QuestMasters Logo" 
                className="w-10 h-8 object-contain"
              />
              <h1 className="font-cinzel font-bold text-2xl gold-gradient">QuestMasters</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hover-glow">Acceso Directo</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-primary animate-pulse-glow" />
          </div>
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            🚀 En Desarrollo - Próximamente
          </Badge>
          <h1 className="font-cinzel font-bold text-5xl md:text-7xl mb-6 gold-gradient text-shadow">
            El Futuro de D&D está Aquí
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Estamos construyendo la plataforma definitiva para Dungeons & Dragons. 
            Con IA revolucionaria que transformará para siempre cómo juegas y diriges campañas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Rocket className="w-5 h-5 mr-2" />
              Acceso Directo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
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

      {/* Vision Section */}
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

      {/* Features Section */}
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

      {/* Demo Section - Ve QuestMasters en Acción */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
              Ve QuestMasters en Acción
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo nuestras herramientas transformarán tu experiencia de D&D
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-cinzel font-bold text-2xl mb-6">Persistencia Narrativa</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Memoria Continua</h4>
                    <p className="text-muted-foreground text-sm">La IA recuerda cada detalle de sesiones anteriores</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Narrativa Evolutiva</h4>
                    <p className="text-muted-foreground text-sm">Las decisiones pasadas influyen en futuros encuentros</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Consecuencias Persistentes</h4>
                    <p className="text-muted-foreground text-sm">Cada acción tiene impacto duradero en el mundo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500"></div>
              <div className="h-64 bg-gradient-to-br from-muted/50 to-primary/10 rounded-lg flex flex-col justify-center p-6 space-y-4">
                <div className="bg-background/80 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">🎲 QuestMaster IA - Sesión 1</p>
                  <p className="text-sm">"Recuerdas a Gareth, el herrero? Su hija desapareció hace una semana..."</p>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-600 mb-1">🎲 QuestMaster IA - Sesión 5</p>
                  <p className="text-sm">"Gareth se acerca con lágrimas en los ojos. 'Gracias por rescatar a mi hija. Este martillo de guerra es para ustedes, héroes.'"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
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

      {/* Testimonials Section */}
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

      {/* Pricing Section */}
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

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas saber sobre QuestMasters
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-effect mb-4 rounded-lg px-6">
                <AccordionTrigger className="font-cinzel font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <Card className="glass-effect fantasy-border">
            <CardContent className="p-12 text-center">
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6 gold-gradient">
                El Futuro del D&D Comienza Pronto
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Estamos preparando algo épico. Mantente atento para ser parte de la revolución cuando lancemos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Próximamente
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * La aventura está por comenzar.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/lovable-uploads/0272aeb2-f59d-4a66-bcf7-65f3d0a77256.png" 
                  alt="QuestMasters Logo" 
                  className="w-6 h-5 object-contain"
                />
                <span className="font-cinzel font-bold text-lg gold-gradient">QuestMasters</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Construyendo el futuro de D&D con inteligencia artificial. La revolución está llegando.
              </p>
            </div>
            <div>
              <h4 className="font-cinzel font-semibold mb-4">Desarrollo</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary">Blog de Desarrollo</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Roadmap Público</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Beta Testing</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Feedback</a>
              </div>
            </div>
            <div>
              <h4 className="font-cinzel font-semibold mb-4">Comunidad</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary">Discord</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Reddit</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Twitter</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Newsletter</a>
              </div>
            </div>
            <div>
              <h4 className="font-cinzel font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary">Términos Futuros</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Privacidad</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Contacto</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 QuestMasters - Startup en Desarrollo. D&D es una marca registrada de Wizards of the Coast.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
