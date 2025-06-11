
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Upload, Save, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface CharacterFormData {
  name: string;
  race: string;
  subrace?: string;
  characterClass: string;
  level: number;
  statsMethod: 'pointBuy' | 'dice';
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  age: string;
  height: string;
  weight: string;
  skin: string;
  eyes: string;
  hair: string;
  backgroundType: 'standard' | 'custom';
  backgroundName: string;
  trait: string;
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;
  backstory: string;
  languages: string;
  alliesOrganizations: string;
  additionalTraits: string;
}

const CharacterCreation = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [pointsRemaining, setPointsRemaining] = useState(27);
  
  const form = useForm<CharacterFormData>({
    defaultValues: {
      level: 1,
      statsMethod: 'pointBuy',
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8,
      backgroundType: 'standard'
    }
  });

  const races = [
    "Humano", "Elfo", "Enano", "Mediano", "Dragonborn", "Gnomo", "Semielfo", "Semiorco", "Tiefling"
  ];

  const subraces: Record<string, string[]> = {
    "Elfo": ["Alto Elfo", "Elfo de los Bosques", "Elfo Oscuro"],
    "Enano": ["Enano de las Montañas", "Enano de las Colinas"],
    "Mediano": ["Piesligeros", "Fuertes"],
    "Gnomo": ["Gnomo de los Bosques", "Gnomo de las Rocas"]
  };

  const classes = [
    "Bárbaro", "Bardo", "Clérigo", "Druida", "Explorador", "Guerrero", 
    "Hechicero", "Mago", "Monje", "Paladín", "Pícaro", "Brujo"
  ];

  const standardBackgrounds = [
    "Acólito", "Criminal", "Artista", "Erudito", "Ermitaño", "Héroe del Pueblo",
    "Noble", "Forastero", "Marinero", "Soldado", "Charlatán", "Artesano"
  ];

  const calculatePointCost = (score: number) => {
    if (score <= 13) return score - 8;
    if (score === 14) return 7;
    if (score === 15) return 9;
    return 0;
  };

  const rollDice = () => {
    const roll = () => {
      const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => b - a);
      return rolls.slice(0, 3).reduce((sum, val) => sum + val, 0);
    };

    form.setValue('strength', roll());
    form.setValue('dexterity', roll());
    form.setValue('constitution', roll());
    form.setValue('intelligence', roll());
    form.setValue('wisdom', roll());
    form.setValue('charisma', roll());
  };

  const onSubmit = (data: CharacterFormData) => {
    console.log('Character data:', data);
    // Aquí se enviaría la data al backend
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="flex-1 min-w-0">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient">
              Crear Nuevo Personaje
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Completa los detalles de tu nuevo personaje de D&D
            </p>
          </div>
          <Link to="/characters">
            <Button variant="outline" className="hover-glow w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Personajes
            </Button>
          </Link>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Básico</TabsTrigger>
                <TabsTrigger value="stats">Características</TabsTrigger>
                <TabsTrigger value="appearance">Apariencia</TabsTrigger>
                <TabsTrigger value="background">Trasfondo</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="font-cinzel">Información Básica</CardTitle>
                    <CardDescription>Define los aspectos fundamentales de tu personaje</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre del Personaje</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: Thorin Martillo de Hierro" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="level"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nivel</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" max="20" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="race"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Raza</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona una raza" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {races.map((race) => (
                                  <SelectItem key={race} value={race}>
                                    {race}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {form.watch('race') && subraces[form.watch('race')] && (
                        <FormField
                          control={form.control}
                          name="subrace"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subraza</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona una subraza" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {subraces[form.watch('race')].map((subrace) => (
                                    <SelectItem key={subrace} value={subrace}>
                                      {subrace}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      <FormField
                        control={form.control}
                        name="characterClass"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Clase</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona una clase" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {classes.map((characterClass) => (
                                  <SelectItem key={characterClass} value={characterClass}>
                                    {characterClass}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="stats" className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="font-cinzel">Características</CardTitle>
                    <CardDescription>Elige el método para determinar las puntuaciones de características</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="statsMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Método de Generación</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="pointBuy" id="pointBuy" />
                                <Label htmlFor="pointBuy">Compra de Puntos (27 puntos)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="dice" id="dice" />
                                <Label htmlFor="dice">Tirada de Dados (4d6, descartar el menor)</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {form.watch('statsMethod') === 'dice' && (
                      <div className="flex items-center gap-4">
                        <Button type="button" onClick={rollDice} className="hover-glow">
                          <Dice1 className="w-4 h-4 mr-2" />
                          Tirar Dados
                        </Button>
                        <span className="text-sm text-muted-foreground">
                          Genera valores aleatorios para todas las características
                        </span>
                      </div>
                    )}

                    {form.watch('statsMethod') === 'pointBuy' && (
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          Puntos restantes: {pointsRemaining}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Puedes distribuir 27 puntos entre las características (8-15)
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'].map((stat) => (
                        <FormField
                          key={stat}
                          control={form.control}
                          name={stat as keyof CharacterFormData}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="capitalize">
                                {stat === 'strength' && 'Fuerza'}
                                {stat === 'dexterity' && 'Destreza'}
                                {stat === 'constitution' && 'Constitución'}
                                {stat === 'intelligence' && 'Inteligencia'}
                                {stat === 'wisdom' && 'Sabiduría'}
                                {stat === 'charisma' && 'Carisma'}
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min={form.watch('statsMethod') === 'pointBuy' ? 8 : 3}
                                  max={form.watch('statsMethod') === 'pointBuy' ? 15 : 18}
                                  {...field}
                                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                                />
                              </FormControl>
                              <div className="text-xs text-muted-foreground">
                                Modificador: {Math.floor((field.value - 10) / 2) >= 0 ? '+' : ''}{Math.floor((field.value - 10) / 2)}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="font-cinzel">Apariencia</CardTitle>
                    <CardDescription>Describe la apariencia física de tu personaje</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                        <Upload className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <Button type="button" variant="outline" className="hover-glow">
                        <Upload className="w-4 h-4 mr-2" />
                        Subir Foto del Personaje
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Edad</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: 25 años" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="height"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Altura</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: 1.75m" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Peso</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: 70kg" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="skin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Piel</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: Morena clara" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eyes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ojos</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: Azules" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="hair"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cabello</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: Castaño rizado" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="background" className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="font-cinzel">Trasfondo</CardTitle>
                    <CardDescription>Define la historia y personalidad de tu personaje</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="backgroundType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Trasfondo</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="standard" id="standard" />
                                <Label htmlFor="standard">Trasfondo Estándar</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="custom" id="custom" />
                                <Label htmlFor="custom">Trasfondo Personalizado</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {form.watch('backgroundType') === 'standard' ? (
                      <FormField
                        control={form.control}
                        name="backgroundName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trasfondo</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona un trasfondo" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {standardBackgrounds.map((bg) => (
                                  <SelectItem key={bg} value={bg}>
                                    {bg}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <FormField
                        control={form.control}
                        name="backgroundName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre del Trasfondo</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: Mercader Viajero" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="trait"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Rasgo</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Describe un rasgo distintivo de tu personaje..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="personality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Personalidad</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Describe la personalidad de tu personaje..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="ideals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ideales</FormLabel>
                            <FormControl>
                              <Textarea placeholder="¿Qué principios guían a tu personaje?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bonds"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vínculos</FormLabel>
                            <FormControl>
                              <Textarea placeholder="¿Qué o quién es importante para tu personaje?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="flaws"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Defectos</FormLabel>
                          <FormControl>
                            <Textarea placeholder="¿Cuáles son las debilidades de tu personaje?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="backstory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Historia</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Cuenta la historia de tu personaje..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="languages"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Idiomas</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Común, Élfico, Enano" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="alliesOrganizations"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Aliados y Organizaciones</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe aliados, organizaciones o facciones..." {...field} />
                          </FormControl>
                          <div className="mt-2">
                            <Button type="button" variant="outline" size="sm" className="hover-glow">
                              <Upload className="w-4 h-4 mr-2" />
                              Subir Emblema/Símbolo
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalTraits"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rasgos y Atributos Adicionales</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe características especiales, habilidades únicas..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between items-center pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const tabs = ["basic", "stats", "appearance", "background"];
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex > 0) {
                    setActiveTab(tabs[currentIndex - 1]);
                  }
                }}
                disabled={activeTab === "basic"}
                className="hover-glow"
              >
                Anterior
              </Button>

              <div className="flex gap-2">
                {activeTab !== "background" ? (
                  <Button
                    type="button"
                    onClick={() => {
                      const tabs = ["basic", "stats", "appearance", "background"];
                      const currentIndex = tabs.indexOf(activeTab);
                      if (currentIndex < tabs.length - 1) {
                        setActiveTab(tabs[currentIndex + 1]);
                      }
                    }}
                    className="hover-glow"
                  >
                    Siguiente
                  </Button>
                ) : (
                  <Button type="submit" className="hover-glow bg-primary hover:bg-primary/90">
                    <Save className="w-4 h-4 mr-2" />
                    Crear Personaje
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default CharacterCreation;
