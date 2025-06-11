import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Edit, Shield, Sword, Heart, Zap, Eye, Brain, Dumbbell, Feather, MessageSquare, Users, Target, Coins, User, Scroll, Plus, Upload } from "lucide-react";
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
    tempHp: 0,
    ac: 18,
    initiative: 1,
    speed: 25,
    proficiencyBonus: 3,
    avatar: "🛡️",
    hitDice: "8d10",
    campaign: "Los Secretos de Waterdeep",
    passivePerception: 14,
    inspiration: 0
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

  const allSkills = [
    { name: "Acrobacias", ability: "DES", value: 1, proficient: false },
    { name: "Arcanos", ability: "INT", value: 0, proficient: false },
    { name: "Atletismo", ability: "FUE", value: 6, proficient: true },
    { name: "Engaño", ability: "CAR", value: -1, proficient: false },
    { name: "Historia", ability: "INT", value: 0, proficient: false },
    { name: "Intimidación", ability: "CAR", value: 2, proficient: true },
    { name: "Interpretación", ability: "CAR", value: -1, proficient: false },
    { name: "Investigación", ability: "INT", value: 0, proficient: false },
    { name: "Juego de Manos", ability: "DES", value: 1, proficient: false },
    { name: "Medicina", ability: "SAB", value: 1, proficient: false },
    { name: "Naturaleza", ability: "INT", value: 0, proficient: false },
    { name: "Percepción", ability: "SAB", value: 4, proficient: true },
    { name: "Perspicacia", ability: "SAB", value: 1, proficient: false },
    { name: "Persuasión", ability: "CAR", value: -1, proficient: false },
    { name: "Religión", ability: "INT", value: 0, proficient: false },
    { name: "Sigilo", ability: "DES", value: 1, proficient: false },
    { name: "Supervivencia", ability: "SAB", value: 1, proficient: false },
    { name: "Trato con Animales", ability: "SAB", value: 1, proficient: false }
  ];

  const attacks = [
    {
      name: "Martillo de Guerra +1",
      atkBonus: "+8",
      damage: "1d8+4 contundente"
    },
    {
      name: "Jabalina",
      atkBonus: "+6",
      damage: "1d6+3 perforante"
    }
  ];

  const currencies = [
    { name: "PC", value: 12 },
    { name: "PP", value: 8 },
    { name: "PE", value: 15 },
    { name: "PO", value: 50 },
    { name: "PPT", value: 2 }
  ];

  const equipment = [
    "Armadura de Placas",
    "Martillo de Guerra +1",
    "Escudo",
    "Jabalinas (5)",
    "Kit de Soldado",
    "Cuerda de cáñamo (50 pies)",
    "Raciones de viaje (10 días)",
    "Yesca y pedernal"
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

  const personalityTraits = {
    traits: "Siempre mantengo mi palabra y defiendo a mis compañeros.",
    ideals: "Honor. Actúo con honor y respeto hacia mis aliados.",
    bonds: "Mi martillo familiar es mi posesión más preciada.",
    flaws: "Mi orgullo a veces me mete en problemas."
  };

  const spellcasting = {
    spellcastingClass: "Paladín",
    spellcastingAbility: "Carisma",
    spellSaveDC: 11,
    spellAttackBonus: 3
  };

  const spells = {
    cantrips: [
      { name: "Luz", description: "Crea una luz brillante en un objeto" },
      { name: "Reparar", description: "Repara un objeto roto simple" }
    ],
    level1: [
      { name: "Curar Heridas", description: "Restaura 1d8+3 puntos de vida", prepared: true },
      { name: "Detectar Mal y Bien", description: "Detecta presencias celestiales, demoniacas o no muertas", prepared: false }
    ],
    level2: [
      { name: "Ayuda", description: "Otorga ventaja en una tirada", prepared: true }
    ]
  };

  const backgroundInfo = {
    appearance: {
      age: "45 años",
      height: "1.35m",
      weight: "75kg",
      eyes: "Marrones",
      skin: "Bronceada",
      hair: "Negro con canas"
    },
    backstory: "Thorin sirvió durante décadas en las fuerzas militares del reino enano. Su experiencia en batalla lo convirtió en un líder natural y un estratega respetado. Tras retirarse del servicio activo, decidió aventurarse por el mundo en busca de nuevos desafíos.",
    allies: [
      { name: "Hermandad de Acero", description: "Organización militar enana", symbol: "⚔️" },
      { name: "Gremio de Herreros", description: "Asociación de artesanos", symbol: "🔨" }
    ],
    additionalFeatures: "Resistencia al veneno heredada de su linaje enano. Conocimiento profundo de tácticas militares y forjado de armas.",
    treasure: "Anillo familiar con el sello del clan Martillo de Hierro. Mapa antiguo de las minas perdidas de Khaz Modan."
  };

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
          <div className="flex gap-2">
            <Button variant="outline" className="hover-glow">
              <User className="w-4 h-4 mr-2" />
              Transfondo
            </Button>
            <Button variant="outline" className="hover-glow">
              <Scroll className="w-4 h-4 mr-2" />
              Conjuros
            </Button>
            <Button className="hover-glow bg-primary hover:bg-primary/90">
              <Edit className="w-4 h-4 mr-2" />
              Editar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* Left Column - Character Info */}
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
                    <span className="text-muted-foreground">Experiencia:</span>
                    <span className="font-medium">{character.experience.toLocaleString()}</span>
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
                <div className="space-y-3">
                  {/* HP */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">PV Actuales</p>
                      <Input className="text-center text-lg font-bold bg-transparent border-none p-0 h-auto" defaultValue={character.hp} />
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">PV Máximos</p>
                      <p className="text-lg font-bold">{character.maxHp}</p>
                    </div>
                  </div>
                  
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">PV Temporales</p>
                    <Input className="text-center text-lg font-bold bg-transparent border-none p-0 h-auto" defaultValue={character.tempHp} />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">CA</p>
                      <p className="text-lg font-bold">{character.ac}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Iniciativa</p>
                      <p className="text-lg font-bold">{formatModifier(character.initiative)}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Velocidad</p>
                      <p className="text-lg font-bold">{character.speed}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Bonif. Comp.</p>
                      <p className="text-lg font-bold">+{character.proficiencyBonus}</p>
                    </div>
                  </div>

                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">Percepción Pasiva</p>
                    <p className="text-lg font-bold">{character.passivePerception}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Death Saves */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-base sm:text-lg">Salvaciones de Muerte</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Éxitos</p>
                    <div className="flex gap-2">
                      <div className="w-4 h-4 border-2 border-green-400 rounded-full"></div>
                      <div className="w-4 h-4 border-2 border-green-400 rounded-full"></div>
                      <div className="w-4 h-4 border-2 border-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Fallos</p>
                    <div className="flex gap-2">
                      <div className="w-4 h-4 border-2 border-red-400 rounded-full"></div>
                      <div className="w-4 h-4 border-2 border-red-400 rounded-full"></div>
                      <div className="w-4 h-4 border-2 border-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Proficiencies & Languages */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-base sm:text-lg">Otras Competencias e Idiomas</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Idiomas</h4>
                    <p className="text-sm text-muted-foreground">Común, Enano</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Competencias con Armaduras</h4>
                    <p className="text-sm text-muted-foreground">Todas las armaduras, escudos</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Competencias con Armas</h4>
                    <p className="text-sm text-muted-foreground">Armas simples, marciales</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Herramientas</h4>
                    <p className="text-sm text-muted-foreground">Herramientas de herrero, vehículos terrestres</p>
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
                  <div className="space-y-1 max-h-64 overflow-y-auto">
                    {allSkills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between p-1 bg-muted/50 rounded text-sm">
                        <div className="flex items-center gap-2">
                          {skill.proficient && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                          <span>{skill.name}</span>
                          <span className="text-xs text-muted-foreground">({skill.ability})</span>
                        </div>
                        <span className="font-medium">{formatModifier(skill.value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Attacks & Spellcasting */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-base sm:text-lg flex items-center gap-2">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ataques y Conjuros
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  {attacks.map((attack, index) => (
                    <div key={index} className="grid grid-cols-3 gap-3 p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="text-xs text-muted-foreground">Nombre</p>
                        <p className="font-medium text-sm">{attack.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Bonif. Ataque</p>
                        <p className="font-medium text-sm">{attack.atkBonus}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Daño/Tipo</p>
                        <p className="font-medium text-sm">{attack.damage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Equipment & Money */}
              <Card className="glass-effect">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-cinzel text-base sm:text-lg flex items-center gap-2">
                    <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
                    Equipamiento y Monedas
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  {/* Currencies */}
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {currencies.map((currency) => (
                      <div key={currency.name} className="text-center p-2 bg-muted/50 rounded">
                        <p className="text-xs text-muted-foreground">{currency.name}</p>
                        <Input className="text-center text-sm font-bold bg-transparent border-none p-0 h-auto" defaultValue={currency.value} />
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  {/* Equipment List */}
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {equipment.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features & Traits */}
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
            </div>

            {/* Personality Traits */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-base sm:text-lg">Rasgos de Personalidad</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Rasgos de Personalidad</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">{personalityTraits.traits}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Ideales</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">{personalityTraits.ideals}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Vínculos</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">{personalityTraits.bonds}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Defectos</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">{personalityTraits.flaws}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background Section */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-base sm:text-lg flex items-center gap-2">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  Transfondo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-6">
                  {/* Appearance */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-sm">Apariencia</h4>
                      <Button variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Subir Foto
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-muted/50 p-3 rounded">
                        <p className="text-xs text-muted-foreground">Edad</p>
                        <p className="text-sm font-medium">{backgroundInfo.appearance.age}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded">
                        <p className="text-xs text-muted-foreground">Altura</p>
                        <p className="text-sm font-medium">{backgroundInfo.appearance.height}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded">
                        <p className="text-xs text-muted-foreground">Peso</p>
                        <p className="text-sm font-medium">{backgroundInfo.appearance.weight}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded">
                        <p className="text-xs text-muted-foreground">Ojos</p>
                        <p className="text-sm font-medium">{backgroundInfo.appearance.eyes}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded">
                        <p className="text-xs text-muted-foreground">Piel</p>
                        <p className="text-sm font-medium">{backgroundInfo.appearance.skin}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded">
                        <p className="text-xs text-muted-foreground">Cabello</p>
                        <p className="text-sm font-medium">{backgroundInfo.appearance.hair}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Backstory */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Historia</h4>
                    <Textarea 
                      className="bg-muted/50 border-none resize-none" 
                      defaultValue={backgroundInfo.backstory}
                      rows={4}
                    />
                  </div>

                  <Separator />

                  {/* Allies & Organizations */}
                  <div>
                    <h4 className="font-medium text-sm mb-3">Aliados y Organizaciones</h4>
                    <div className="space-y-3">
                      {backgroundInfo.allies.map((ally, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-lg">
                            {ally.symbol}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{ally.name}</p>
                            <p className="text-xs text-muted-foreground">{ally.description}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Upload className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Features */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Rasgos y Atributos Adicionales</h4>
                    <Textarea 
                      className="bg-muted/50 border-none resize-none" 
                      defaultValue={backgroundInfo.additionalFeatures}
                      rows={3}
                    />
                  </div>

                  <Separator />

                  {/* Treasure */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Tesoro</h4>
                    <Textarea 
                      className="bg-muted/50 border-none resize-none" 
                      defaultValue={backgroundInfo.treasure}
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spells Section */}
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-base sm:text-lg flex items-center gap-2">
                  <Scroll className="w-4 h-4 sm:w-5 sm:h-5" />
                  Conjuros
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-6">
                  {/* Spellcasting Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-muted/50 p-3 rounded text-center">
                      <p className="text-xs text-muted-foreground">Clase de Lanzador</p>
                      <p className="text-sm font-medium">{spellcasting.spellcastingClass}</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded text-center">
                      <p className="text-xs text-muted-foreground">Característica</p>
                      <p className="text-sm font-medium">{spellcasting.spellcastingAbility}</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded text-center">
                      <p className="text-xs text-muted-foreground">CD de Salvación</p>
                      <p className="text-sm font-medium">{spellcasting.spellSaveDC}</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded text-center">
                      <p className="text-xs text-muted-foreground">Bonif. Ataque</p>
                      <p className="text-sm font-medium">+{spellcasting.spellAttackBonus}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Cantrips */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-sm">Trucos (Nivel 0)</h4>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {spells.cantrips.map((spell, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded">
                          <p className="font-medium text-sm">{spell.name}</p>
                          <p className="text-xs text-muted-foreground">{spell.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Level 1 Spells */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-sm">Conjuros de Nivel 1</h4>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {spells.level1.map((spell, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            defaultChecked={spell.prepared}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{spell.name}</p>
                            <p className="text-xs text-muted-foreground">{spell.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Level 2 Spells */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-sm">Conjuros de Nivel 2</h4>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {spells.level2.map((spell, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            defaultChecked={spell.prepared}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{spell.name}</p>
                            <p className="text-xs text-muted-foreground">{spell.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CharacterSheet;

</edits_to_apply>
