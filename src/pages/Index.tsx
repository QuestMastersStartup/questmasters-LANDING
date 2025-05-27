
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, User, Users, BookOpen, Sparkles, Shield, Sword } from "lucide-react";
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
              <Link to="/register">
                <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Crear Cuenta Gratis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-cinzel font-bold text-lg gold-gradient">QuestMasters</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 QuestMasters. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
