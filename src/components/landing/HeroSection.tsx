
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src="/lovable-uploads/d8accbc9-1526-4bd7-b2fb-268ad83752ea.png" 
                alt="QuestMasters Icon" 
                className="w-20 h-20 animate-pulse-glow filter drop-shadow-lg object-contain"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 30px rgba(255, 215, 0, 0.4)) drop-shadow(0 0 45px rgba(255, 215, 0, 0.2))'
                }}
              />
            </div>
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              🚀 En Desarrollo - Próximamente
            </Badge>
            <h1 className="font-cinzel font-bold text-5xl md:text-7xl mb-6 gold-gradient text-shadow">
              El Futuro de D&D está Aquí
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Estamos construyendo la plataforma definitiva para Dungeons & Dragons. 
              Con IA revolucionaria que transformará para siempre cómo juegas y diriges campañas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Rocket className="w-5 h-5 mr-2" />
                Acceso Directo
              </Button>
              <Button size="lg" variant="outline" className="hover-glow text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Simulación de la herramienta */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden shadow-2xl">
              {/* Barra superior simulando una aplicación */}
              <div className="bg-primary/10 border-b border-border/30 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-medium text-primary">QuestMasters AI - Creación de Campaña</span>
                </div>
              </div>

              {/* Contenido simulado */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">🧙‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">IA QuestMaster</h3>
                    <p className="text-xs text-muted-foreground">Generando tu campaña épica...</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-background/60 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm text-foreground">
                      <strong className="text-primary">🎲 Escenario Generado:</strong><br/>
                      "La antigua ciudad de Valorhaven ha sido envuelta por una misteriosa niebla dorada. Los ciudadanos hablan en susurros sobre figuras sombrias que emergen de la bruma..."
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-sm text-foreground">
                      <strong className="text-green-400">⚔️ NPCs Creados:</strong><br/>
                      Capitán Elena Forjacero (Guerrera Élfica), Mago Theron el Sabio, Posadero Gareth...
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-foreground">
                      <strong className="text-blue-400">🗺️ Mapa Generado:</strong><br/>
                      Región de Valorhaven completada con 12 ubicaciones clave y 8 mazmorras...
                    </p>
                  </div>
                </div>

                {/* Simulación de progreso */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Generando contenido...</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Efectos visuales adicionales */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500/20 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Sección de características visuales */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎲</span>
            </div>
            <h3 className="font-cinzel font-bold text-lg mb-2 gold-gradient">IA Narrativa</h3>
            <p className="text-muted-foreground text-sm">Genera historias épicas adaptadas a tu estilo de juego</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="font-cinzel font-bold text-lg mb-2 gold-gradient">Mapas Dinámicos</h3>
            <p className="text-muted-foreground text-sm">Crea mundos detallados con un solo clic</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-cinzel font-bold text-lg mb-2 gold-gradient">NPCs Inteligentes</h3>
            <p className="text-muted-foreground text-sm">Personajes con personalidades únicas y memorables</p>
          </div>
        </div>
      </div>
    </section>
  );
};
