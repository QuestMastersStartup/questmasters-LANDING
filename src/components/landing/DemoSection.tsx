
import { Zap, Globe, Clock, Play, Image, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const DemoSection = () => {
  return (
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

        {/* Video demo simulado */}
        <div className="mb-16">
          <Card className="glass-effect fantasy-border overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-purple-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center hover-glow cursor-pointer">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-cinzel font-bold text-xl mb-2 gold-gradient">Demo Interactivo</h3>
                    <p className="text-muted-foreground">Ve cómo la IA crea una campaña completa en minutos</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">LIVE</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
            <div className="h-80 bg-gradient-to-br from-muted/50 to-primary/10 rounded-lg flex flex-col justify-center p-6 space-y-4">
              <div className="bg-background/80 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm font-medium text-primary mb-1">🎲 QuestMaster IA - Sesión 1</p>
                <p className="text-sm">"Al entrar a la posada 'El Dragón Dorado', notan que el posadero Gareth tiene una expresión sombría. Les cuenta que su hija Elena desapareció hace tres días mientras recogía hierbas en el bosque cercano."</p>
              </div>
              <div className="bg-background/80 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-sm font-medium text-blue-600 mb-1">🎲 QuestMaster IA - Sesión 3</p>
                <p className="text-sm">"Después de rescatar a Elena de los goblins, regresan a 'El Dragón Dorado'. Gareth llora de alegría al ver a su hija sana y salva. 'No tengo oro suficiente para pagarles, pero este martillo de guerra fue de mi abuelo. Úsenlo bien, héroes.'"</p>
              </div>
              <div className="bg-background/80 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-sm font-medium text-green-600 mb-1">🎲 QuestMaster IA - Sesión 8</p>
                <p className="text-sm">"Al llegar al pueblo después de semanas de aventuras, Elena los saluda con una sonrisa. 'Han pasado tantas cosas desde que me salvaron. Padre ha estado presumiendo a todos sobre sus héroes locales.'"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería de herramientas simuladas */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-effect hover-glow cursor-pointer group">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                <Image className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-cinzel font-bold text-lg mb-2 gold-gradient">Generador de Mapas</h3>
              <p className="text-muted-foreground text-sm">Crea mapas detallados con biomas, ciudades y mazmorras automáticamente</p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover-glow cursor-pointer group">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-cinzel font-bold text-lg mb-2 gold-gradient">Creador de NPCs</h3>
              <p className="text-muted-foreground text-sm">Genera personajes únicos con trasfondos, voces y motivaciones</p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover-glow cursor-pointer group">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                <Zap className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-cinzel font-bold text-lg mb-2 gold-gradient">Asistente de Combate</h3>
              <p className="text-muted-foreground text-sm">IA que gestiona iniciativa, estados y efectos automáticamente</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90">
            <Play className="w-5 h-5 mr-2" />
            Explorar Todas las Herramientas
          </Button>
        </div>
      </div>
    </section>
  );
};
