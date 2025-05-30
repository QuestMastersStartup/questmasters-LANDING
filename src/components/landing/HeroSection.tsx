
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/d8accbc9-1526-4bd7-b2fb-268ad83752ea.png" 
            alt="QuestMasters Icon" 
            className="w-16 h-16 animate-pulse-glow filter drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))'
            }}
          />
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
  );
};
