
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Edit, Shield, Sword, Heart, Zap, Eye, Brain, Dumbbell, Feather, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CharacterSheet = () => {
  const character = {
    name: "Thorin Martillo de Hierro",
    class: "Guerrero",
    race: "Enano",
    background: "Soldado",
    alignment: "Legal Bueno",
    level: 8,
    experience: 34500,
    maxExperience: 48000,
    hp: 68,
    maxHp: 75,
    ac: 18,
    speed: 25,
    proficiencyBonus: 3,
    avatar: "🛡️",
    hitDice: "8d10",
    campaign: "Los Secretos de Waterdeep"
  };

  const abilities = [
    { name: "Fuerza", short: "FUE", value: 16, modifier: 3, icon: Dumbbell },
    { name: "Destreza", short: "DES", value: 12, modifier: 1, icon: Feather },
    { name: "Constitución", short: "CON", value: 15, modifier: 2, icon: Heart },
    { name: "Inteligencia", short: "INT", value: 10, modifier: 0, icon: Brain },
    { name: "Sabiduría", short: "SAB", value: 13, modifier: 1, icon: Eye },
    { name: "Carisma", short: "CAR", value: 8, modifier: -1, icon: MessageSquare }
  ];

  const savingThrows = [
    { name: "Fuerza", value: 6, proficient: true },
    { name: "Destreza", value: 1, proficient: false },
    { name: "Constitución", value: 5, proficient: true },
    { name: "Inteligencia", value: 0, proficient: false },
    { name: "Sabiduría", value: 1, proficient: false },
    { name: "Carisma", value: -1, proficient: false }
  ];

  const skills = [
    { name: "Atletismo", ability: "FUE", value: 6, proficient: true },
    { name: "Intimidación", ability: "CAR", value: 2, proficient: true },
    { name: "Percepción", ability: "SAB", value: 4, proficient: true },
    { name: "Supervivencia", ability: "SAB", value: 1, proficient: false }
  ];

  const equipment = [
    "Armadura de Placas",
    "Martillo de Guerra +1",
    "Escudo",
    "Jabalinas (5)",
    "Kit de Soldado",
    "50 monedas de oro"
  ];

  const features = [
    {
      name: "Segundo Aliento",
      description: "Puedes usar una acción adicional para recuperar 1d10+8 puntos de vida."
    },
    {
      name: "Oleada de Acción", 
      description: "Puedes realizar una acción adicional en tu turno."
    },
    {
      name: "Resistencia Enana",
      description: "Ventaja en tiradas de salvación contra veneno."
    }
  ];

  const formatModifier = (modifier: number) => {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover-glow" />
            <Link to="/characters">
              <Button variant="outline" size="sm" className="hover-glow">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient">
              {character.name}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Nivel {character.level} {character.race} {character.class}
            </p>
          </div>
          <Button className="hover-glow bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <Edit className="w-4 h-4 mr-2" />
            Editar Personaje
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* Character Info */}
          <div className="xl:col-span-1 space-y-4 sm:space-y-6">
            {/* Basic Info */}
            <Card className="glass-effect">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                  {character.avatar}
                </div>
                <CardTitle className="font-cinzel text-lg sm:text-xl">{character.name}</CardTitle>
                <CardDescription className="text-sm">
                  {character.background} • {character.alignment}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Clase:</span>
                    <Badge className="bg-red-500/20 text-red-400">{character.class}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Raza:</span>
                    <span className="font-medium">{character.race}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Nivel:</span>
                    <span className="font-medium">{character.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Campaña:</span>
                    <span className="font-medium text-xs">{character.campaign}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Combat Stats */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-base sm:text-lg flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  Combate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">Puntos de Vida</p>
                    <p className="text-lg sm:text-xl font-bold text-red-400">{character.hp}/{character.maxHp}</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">Clase de Armadura</p>
                    <p className="text-lg sm:text-xl font-bold">{character.ac}</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">Velocidad</p>
                    <p className="text-lg sm:text-xl font-bold">{character.speed} pies</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">Bonif. Competencia</p>
                    <p className="text-lg sm:text-xl font-bold">+{character.proficiencyBonus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-3 space-y-4 sm:space-y-6">
            {/* Ability Scores */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-lg sm:text-xl">Puntuaciones de Habilidad</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                  {abilities.map((ability) => (
                    <div key={ability.name} className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <ability.icon className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-2 text-primary" />
                      <p className="text-xs font-medium">{ability.short}</p>
                      <p className="text-lg sm:text-xl font-bold">{ability.value}</p>
                      <p className="text-xs text-muted-foreground">{formatModifier(ability.modifier)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Saving Throws */}
              <Card className="glass-effect">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-cinzel text-base sm:text-lg">Tiradas de Salvación</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    {savingThrows.map((save) => (
                      <div key={save.name} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center gap-2">
                          {save.proficient && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                          <span className="text-sm">{save.name}</span>
                        </div>
                        <span className="font-medium">{formatModifier(save.value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="glass-effect">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-cinzel text-base sm:text-lg">Habilidades</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center gap-2">
                          {skill.proficient && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">({skill.ability})</span>
                        </div>
                        <span className="font-medium">{formatModifier(skill.value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Features */}
              <Card className="glass-effect">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-cinzel text-base sm:text-lg">Características y Rasgos</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    {features.map((feature, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-sm sm:text-base mb-1">{feature.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                        {index < features.length - 1 && <Separator className="mt-3 sm:mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Equipment */}
              <Card className="glass-effect">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-cinzel text-base sm:text-lg">Equipamiento</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    {equipment.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                        <Sword className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CharacterSheet;
