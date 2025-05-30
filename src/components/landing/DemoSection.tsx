
import { Zap, Globe, Clock } from "lucide-react";

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
      </div>
    </section>
  );
};
