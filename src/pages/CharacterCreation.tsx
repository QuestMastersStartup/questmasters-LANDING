import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface CharacterAbilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface Character {
  name: string;
  race: string;
  class: string;
  level: number;
  background: string;
  alignment: string;
  experience: number;
  abilities: CharacterAbilities;
  description: string;
}

const CharacterCreation = () => {
  const [character, setCharacter] = useState<Character>({
    name: '',
    race: '',
    class: '',
    level: 1,
    background: '',
    alignment: '',
    experience: 0,
    abilities: {
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8
    },
    description: ''
  });

  const rollAbilityScores = () => {
    const rollDice = () => {
      const rolls = Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => b - a);
      return rolls.slice(0, 3).reduce((sum, roll) => sum + roll, 0);
    };

    setCharacter(prev => ({
      ...prev,
      abilities: {
        strength: rollDice(),
        dexterity: rollDice(),
        constitution: rollDice(),
        intelligence: rollDice(),
        wisdom: rollDice(),
        charisma: rollDice()
      }
    }));
  };

  const calculateAbilityModifier = (score: number) => {
    return Math.floor((score - 10) / 2);
  };

  const calculatePointBuyTotal = () => {
    const costs: Record<number, number> = {
      8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
    };
    
    const abilities = character.abilities;
    return Object.values(abilities).reduce((total, score) => {
      const numericScore = typeof score === 'number' ? score : parseInt(score) || 8;
      return total + (costs[numericScore] || 0);
    }, 0);
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="flex-1 min-w-0">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient">
              Creación de Personaje
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Define los detalles de tu nuevo personaje
            </p>
          </div>
        </div>

        <Card className="glass-effect">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-cinzel text-lg sm:text-xl">
              Información del Personaje
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Detalles básicos de tu personaje
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input 
                  type="text" 
                  id="name" 
                  value={character.name}
                  onChange={e => setCharacter({...character, name: e.target.value})}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
              </div>
              <div>
                <Label htmlFor="race">Raza</Label>
                <Input 
                  type="text" 
                  id="race" 
                  value={character.race}
                  onChange={e => setCharacter({...character, race: e.target.value})}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
              </div>
              <div>
                <Label htmlFor="class">Clase</Label>
                <Input 
                  type="text" 
                  id="class"
                  value={character.class}
                  onChange={e => setCharacter({...character, class: e.target.value})}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
              </div>
              <div>
                <Label htmlFor="level">Nivel</Label>
                <Input 
                  type="number" 
                  id="level" 
                  value={character.level}
                  onChange={e => setCharacter({...character, level: parseInt(e.target.value)})}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
              </div>
              <div>
                <Label htmlFor="background">Trasfondo</Label>
                <Input 
                  type="text" 
                  id="background" 
                  value={character.background}
                  onChange={e => setCharacter({...character, background: e.target.value})}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
              </div>
              <div>
                <Label htmlFor="alignment">Alineamiento</Label>
                <Select onValueChange={(value) => setCharacter({...character, alignment: value})}>
                  <SelectTrigger className="bg-input border-border/50 focus:border-primary text-sm">
                    <SelectValue placeholder="Selecciona un alineamiento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Legal Bueno">Legal Bueno</SelectItem>
                    <SelectItem value="Neutral Bueno">Neutral Bueno</SelectItem>
                    <SelectItem value="Caótico Bueno">Caótico Bueno</SelectItem>
                    <SelectItem value="Legal Neutral">Legal Neutral</SelectItem>
                    <SelectItem value="Neutral">Neutral</SelectItem>
                    <SelectItem value="Caótico Neutral">Caótico Neutral</SelectItem>
                    <SelectItem value="Legal Malo">Legal Malo</SelectItem>
                    <SelectItem value="Neutral Malo">Neutral Malo</SelectItem>
                    <SelectItem value="Caótico Malo">Caótico Malo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect mt-6">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-cinzel text-lg sm:text-xl">
              Habilidades
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Establece las habilidades de tu personaje
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <Label htmlFor="strength">Fuerza</Label>
                <Input 
                  type="number" 
                  id="strength" 
                  value={character.abilities.strength}
                  onChange={e => setCharacter(prev => ({...prev, abilities: {...prev.abilities, strength: parseInt(e.target.value)}}))}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
                <p className="text-muted-foreground text-xs mt-1">Modificador: {calculateAbilityModifier(character.abilities.strength)}</p>
              </div>
              <div>
                <Label htmlFor="dexterity">Destreza</Label>
                <Input 
                  type="number" 
                  id="dexterity" 
                  value={character.abilities.dexterity}
                  onChange={e => setCharacter(prev => ({...prev, abilities: {...prev.abilities, dexterity: parseInt(e.target.value)}}))}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
                <p className="text-muted-foreground text-xs mt-1">Modificador: {calculateAbilityModifier(character.abilities.dexterity)}</p>
              </div>
              <div>
                <Label htmlFor="constitution">Constitución</Label>
                <Input 
                  type="number" 
                  id="constitution" 
                  value={character.abilities.constitution}
                  onChange={e => setCharacter(prev => ({...prev, abilities: {...prev.abilities, constitution: parseInt(e.target.value)}}))}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
                <p className="text-muted-foreground text-xs mt-1">Modificador: {calculateAbilityModifier(character.abilities.constitution)}</p>
              </div>
              <div>
                <Label htmlFor="intelligence">Inteligencia</Label>
                <Input 
                  type="number" 
                  id="intelligence" 
                  value={character.abilities.intelligence}
                  onChange={e => setCharacter(prev => ({...prev, abilities: {...prev.abilities, intelligence: parseInt(e.target.value)}}))}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
                <p className="text-muted-foreground text-xs mt-1">Modificador: {calculateAbilityModifier(character.abilities.intelligence)}</p>
              </div>
              <div>
                <Label htmlFor="wisdom">Sabiduría</Label>
                <Input 
                  type="number" 
                  id="wisdom" 
                  value={character.abilities.wisdom}
                  onChange={e => setCharacter(prev => ({...prev, abilities: {...prev.abilities, wisdom: parseInt(e.target.value)}}))}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
                <p className="text-muted-foreground text-xs mt-1">Modificador: {calculateAbilityModifier(character.abilities.wisdom)}</p>
              </div>
              <div>
                <Label htmlFor="charisma">Carisma</Label>
                <Input 
                  type="number" 
                  id="charisma" 
                  value={character.abilities.charisma}
                  onChange={e => setCharacter(prev => ({...prev, abilities: {...prev.abilities, charisma: parseInt(e.target.value)}}))}
                  className="bg-input border-border/50 focus:border-primary text-sm" 
                />
                <p className="text-muted-foreground text-xs mt-1">Modificador: {calculateAbilityModifier(character.abilities.charisma)}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Total de puntos: {calculatePointBuyTotal()}
              </p>
              <Button onClick={rollAbilityScores} className="hover-glow bg-secondary hover:bg-secondary/90 text-xs">
                Tirar Dados
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect mt-6">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-cinzel text-lg sm:text-xl">
              Descripción
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Añade una descripción a tu personaje
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div>
              <Label htmlFor="description">Descripción</Label>
              <Textarea 
                id="description" 
                value={character.description}
                onChange={e => setCharacter({...character, description: e.target.value})}
                className="bg-input border-border/50 focus:border-primary text-sm resize-none" 
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end">
          <Button className="hover-glow bg-primary hover:bg-primary/90">
            Crear Personaje
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CharacterCreation;
