
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid3X3, Users, Bot, Dice6, Move, Zap, Settings } from "lucide-react";
import { useState } from "react";

const Board2D = () => {
  const [selectedTool, setSelectedTool] = useState('move');
  const [aiMode, setAiMode] = useState(false);

  const tools = [
    { id: 'move', name: 'Mover', icon: Move },
    { id: 'attack', name: 'Atacar', icon: Zap },
    { id: 'dice', name: 'Tirar Dados', icon: Dice6 },
    { id: 'ai', name: 'IA Asistente', icon: Bot }
  ];

  const characters = [
    { id: 1, name: 'Thorin', x: 3, y: 4, color: 'bg-red-500' },
    { id: 2, name: 'Lyra', x: 5, y: 6, color: 'bg-blue-500' },
    { id: 3, name: 'Morgana', x: 7, y: 3, color: 'bg-purple-500' }
  ];

  const enemies = [
    { id: 1, name: 'Goblin', x: 8, y: 8, color: 'bg-orange-500' },
    { id: 2, name: 'Orc', x: 2, y: 9, color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4 mb-6">
          <SidebarTrigger className="hover-glow" />
          <div className="flex-1">
            <h1 className="font-cinzel font-bold text-3xl gold-gradient">
              Tablero 2D
            </h1>
            <p className="text-muted-foreground">
              Gestiona encuentros con integración de IA
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={aiMode ? "default" : "outline"} className="cursor-pointer" onClick={() => setAiMode(!aiMode)}>
              <Bot className="w-4 h-4 mr-1" />
              IA {aiMode ? 'Activa' : 'Inactiva'}
            </Badge>
            <Button variant="outline" className="hover-glow">
              <Settings className="w-4 h-4 mr-2" />
              Configurar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tools Panel */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center gap-2">
                <Grid3X3 className="w-5 h-5" />
                Herramientas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {tools.map((tool) => (
                <Button
                  key={tool.id}
                  variant={selectedTool === tool.id ? "default" : "outline"}
                  className="w-full justify-start hover-glow"
                  onClick={() => setSelectedTool(tool.id)}
                >
                  <tool.icon className="w-4 h-4 mr-2" />
                  {tool.name}
                </Button>
              ))}
              
              <div className="pt-4 border-t border-border/50">
                <h4 className="font-semibold mb-2">Acciones Rápidas</h4>
                <Button size="sm" variant="outline" className="w-full mb-2 hover-glow">
                  Iniciar Combate
                </Button>
                <Button size="sm" variant="outline" className="w-full hover-glow">
                  Terminar Turno
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Board */}
          <Card className="glass-effect lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-cinzel">Tablero de Encuentro</CardTitle>
              <CardDescription>
                Mazmorra: Ruinas Ancestrales - Sala Principal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative bg-muted/20 rounded-lg overflow-hidden border border-border/50">
                {/* Grid */}
                <div className="grid grid-cols-10 grid-rows-10 gap-0">
                  {Array.from({ length: 100 }).map((_, index) => {
                    const x = index % 10;
                    const y = Math.floor(index / 10);
                    const hasCharacter = characters.find(c => c.x === x && c.y === y);
                    const hasEnemy = enemies.find(e => e.x === x && e.y === y);
                    
                    return (
                      <div
                        key={index}
                        className="aspect-square border border-border/30 hover:bg-primary/20 transition-colors cursor-pointer relative"
                      >
                        {hasCharacter && (
                          <div className={`absolute inset-1 rounded-full ${hasCharacter.color} flex items-center justify-center text-xs font-bold text-white`}>
                            {hasCharacter.name[0]}
                          </div>
                        )}
                        {hasEnemy && (
                          <div className={`absolute inset-1 rounded-sm ${hasEnemy.color} flex items-center justify-center text-xs font-bold text-white`}>
                            {hasEnemy.name[0]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Initiative & Characters */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center gap-2">
                <Users className="w-5 h-5" />
                Iniciativa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-400">Personajes</h4>
                {characters.map((character) => (
                  <div key={character.id} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                    <div className={`w-6 h-6 rounded-full ${character.color}`}></div>
                    <span className="text-sm font-medium">{character.name}</span>
                    <Badge variant="outline" className="ml-auto text-xs">20</Badge>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-red-400">Enemigos</h4>
                {enemies.map((enemy) => (
                  <div key={enemy.id} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                    <div className={`w-6 h-6 rounded-sm ${enemy.color}`}></div>
                    <span className="text-sm font-medium">{enemy.name}</span>
                    <Badge variant="outline" className="ml-auto text-xs">15</Badge>
                  </div>
                ))}
              </div>

              {aiMode && (
                <div className="pt-4 border-t border-border/50">
                  <Card className="bg-primary/10 border-primary/50">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">IA Sugerencia</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        El goblin debería moverse hacia Thorin y atacar en su próximo turno.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Combat Log */}
        <Card className="glass-effect mt-6">
          <CardHeader>
            <CardTitle className="font-cinzel">Registro de Combate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              <div className="text-sm p-2 bg-muted/50 rounded">
                <span className="font-medium text-blue-400">Lyra</span> ataca al <span className="font-medium text-orange-400">Goblin</span> con arco élfico. Tirada: 18 (+5) = 23. ¡Impacto! Daño: 8 puntos.
              </div>
              <div className="text-sm p-2 bg-muted/50 rounded">
                <span className="font-medium text-orange-400">Goblin</span> se mueve hacia <span className="font-medium text-red-400">Thorin</span>.
              </div>
              <div className="text-sm p-2 bg-muted/50 rounded">
                <span className="font-medium text-red-400">Thorin</span> usa Ataque de Oportunidad. Tirada: 15 (+8) = 23. ¡Impacto crítico!
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Board2D;
