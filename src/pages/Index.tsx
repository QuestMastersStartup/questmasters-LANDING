
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, User, Users, BookOpen, Sparkles, Shield, Sword, Check, Crown, Star, Zap, Globe, Clock, Award, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Chatbot Dungeon Master",
      description: "IA especializada que actúa como tu DM personal, creando aventuras épicas y gestionando campañas automáticamente."
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
      description: "Accede a una vasta colección de libros, reglas y contenido oficial de D&D."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Usuarios Activos" },
    { number: "50,000+", label: "Campañas Creadas" },
    { number: "100,000+", label: "Personajes Generados" },
    { number: "24/7", label: "Soporte IA" }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Dungeon Master",
      content: "QuestMasters ha revolucionado la forma en que gestiono mis campañas. La IA es increíblemente útil para generar contenido rápidamente.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Jugador Veterano",
      content: "La gestión de personajes es intuitiva y completa. Nunca había sido tan fácil llevar el control de mi inventario y estadísticas.",
      rating: 5
    },
    {
      name: "Ana López",
      role: "DM Principiante",
      content: "Como nueva DM, el chatbot me ha ayudado enormemente a crear historias épicas sin la presión de improvisarlo todo.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funciona el chatbot Dungeon Master?",
      answer: "Nuestro chatbot utiliza IA avanzada entrenada específicamente en las reglas de D&D 5e. Puede generar NPCs, crear encuentros, manejar tiradas de dados y desarrollar narrativas coherentes basadas en las acciones de tus jugadores."
    },
    {
      question: "¿Puedo usar QuestMasters sin experiencia previa en D&D?",
      answer: "¡Absolutamente! QuestMasters está diseñado para ser accesible tanto para veteranos como para principiantes. Incluimos guías, tutoriales y asistencia de IA para ayudarte a aprender mientras juegas."
    },
    {
      question: "¿Qué incluye la biblioteca de contenido?",
      answer: "Nuestra biblioteca incluye libros oficiales de D&D, aventuras pregeneradas, bestiarios, objetos mágicos y contenido homebrew de la comunidad. El acceso completo está disponible en nuestro plan Completo."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario. No hay compromisos a largo plazo ni penalizaciones por cancelación."
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
      popular: false,
      buttonText: "Comenzar Gratis",
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
      popular: true,
      buttonText: "Elegir Básico",
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
      popular: false,
      buttonText: "Elegir Completo",
      color: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="font-cinzel font-bold text-2xl gold-gradient">QuestMasters</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="hover-glow">Iniciar Sesión</Button>
              </Link>
              <Link to="/register">
                <Button className="hover-glow bg-primary hover:bg-primary/90">Registrarse</Button>
              </Link>
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
          <h1 className="font-cinzel font-bold text-5xl md:text-7xl mb-6 gold-gradient text-shadow">
            Domina Tus Aventuras
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            La plataforma definitiva para gestionar campañas de Dungeons & Dragons. 
            Con IA avanzada, herramientas intuitivas y una experiencia mágica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <MessageSquare className="w-5 h-5 mr-2" />
                Comenzar Aventura
              </Button>
            </Link>
            <Link to="/chatbot">
              <Button size="lg" variant="outline" className="hover-glow text-lg px-8 py-6">
                <Sword className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
              Herramientas Épicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para crear y gestionar campañas inolvidables
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Demo Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
              Ve QuestMasters en Acción
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo nuestras herramientas transforman tu experiencia de D&D
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-cinzel font-bold text-2xl mb-6">Chatbot Dungeon Master</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Generación Automática</h4>
                    <p className="text-muted-foreground text-sm">Crea NPCs, encuentros y tramas al instante</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Mundo Coherente</h4>
                    <p className="text-muted-foreground text-sm">Mantiene la continuidad narrativa en todas las sesiones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Respuesta Inmediata</h4>
                    <p className="text-muted-foreground text-sm">Obtén ayuda instantánea durante el juego</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Demo del Chatbot</p>
                  <p className="text-sm text-muted-foreground">Interfaz interactiva aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
              Lo Que Dicen Nuestros Usuarios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Historias reales de aventureros que han transformado sus campañas
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
              Planes de Suscripción
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige el plan perfecto para tu estilo de juego
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`glass-effect relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''} hover-glow transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Más Popular
                  </Badge>
                )}
                
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
                    className={`w-full hover-glow ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
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
              Resolvemos tus dudas sobre QuestMasters
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

      {/* Integration Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
              Integración Completa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todas las herramientas trabajando en conjunto para una experiencia perfecta
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="glass-effect hover-glow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-cinzel font-bold text-xl mb-3">Gestión Unificada</h3>
                <p className="text-muted-foreground mb-4">
                  Personajes, campañas y libros conectados en un solo ecosistema
                </p>
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Vista previa de interfaz</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-glow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-cinzel font-bold text-xl mb-3">IA Inteligente</h3>
                <p className="text-muted-foreground mb-4">
                  La IA aprende de tus preferencias y mejora con cada sesión
                </p>
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Gráfico de progreso IA</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-glow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-cinzel font-bold text-xl mb-3">Experiencia Mágica</h3>
                <p className="text-muted-foreground mb-4">
                  Interfaz intuitiva que se adapta a tu estilo de juego
                </p>
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Personalización UI</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="glass-effect fantasy-border">
            <CardContent className="p-12 text-center">
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6 gold-gradient">
                ¿Listo para la Aventura?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Únete a miles de Dungeon Masters que ya están creando historias épicas con QuestMasters
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                    Crear Cuenta Gratis
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="hover-glow text-lg px-8 py-6">
                    Ver Planes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-cinzel font-bold text-lg gold-gradient">QuestMasters</span>
              </div>
              <p className="text-muted-foreground text-sm">
                La plataforma definitiva para gestionar tus aventuras de D&D con el poder de la inteligencia artificial.
              </p>
            </div>
            <div>
              <h4 className="font-cinzel font-semibold mb-4">Producto</h4>
              <div className="space-y-2 text-sm">
                <Link to="/chatbot" className="block text-muted-foreground hover:text-primary">Chatbot DM</Link>
                <Link to="/characters" className="block text-muted-foreground hover:text-primary">Personajes</Link>
                <Link to="/campaigns" className="block text-muted-foreground hover:text-primary">Campañas</Link>
                <Link to="/books" className="block text-muted-foreground hover:text-primary">Biblioteca</Link>
              </div>
            </div>
            <div>
              <h4 className="font-cinzel font-semibold mb-4">Soporte</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary">Centro de Ayuda</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Comunidad</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Contacto</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Estado del Servicio</a>
              </div>
            </div>
            <div>
              <h4 className="font-cinzel font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary">Términos de Servicio</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Política de Privacidad</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Cookies</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 QuestMasters. Todos los derechos reservados. D&D es una marca registrada de Wizards of the Coast.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
