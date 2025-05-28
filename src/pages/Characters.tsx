
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Plus, Search, Edit, Trash2, Sword, Shield, Heart, Star, Upload, Image } from "lucide-react";
import { useState } from "react";

interface Character {
  id: number;
  name: string;
  class: string;
  race: string;
  level: number;
  experience: number;
  maxExperience: number;
  hp: number;
  maxHp: number;
  campaign: string;
  avatar: string;
  isCustomAvatar: boolean;
}

const Characters = () => {
  const [characters] = useState<Character[]>([
    {
      id: 1,
      name: "Thorin Martillo de Hierro",
      class: "Guerrero",
      race: "Enano",
      level: 8,
      experience: 34500,
      maxExperience: 48000,
      hp: 68,
      maxHp: 75,
      campaign: "Los Secretos de Waterdeep",
      avatar: "🛡️",
      isCustomAvatar: false
    },
    {
      id: 2,
      name: "Lyralei Viento Susurrante",
      class: "Explorador",
      race: "Elfo",
      level: 6,
      experience: 14250,
      maxExperience: 23000,
      hp: 42,
      maxHp: 48,
      campaign: "La Corona Perdida",
      avatar: "/placeholder.svg",
      isCustomAvatar: true
    },
    {
      id: 3,
      name: "Morgana Sombraluna",
      class: "Mago",
      race: "Humano",
      level: 7,
      experience: 24800,
      maxExperience: 34000,
      hp: 35,
      maxHp: 42,
      campaign: "Los Secretos de Waterdeep",
      avatar: "🔮",
      isCustomAvatar: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.race.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getClassColor = (className: string) => {
    const colors: Record<string, string> = {
      'Guerrero': 'bg-red-500/20 text-red-400',
      'Mago': 'bg-blue-500/20 text-blue-400',
      'Explorador': 'bg-green-500/20 text-green-400',
      'Clérigo': 'bg-yellow-500/20 text-yellow-400',
      'Pícaro': 'bg-purple-500/20 text-purple-400'
    };
    return colors[className] || 'bg-gray-500/20 text-gray-400';
  };

  const getExperienceProgress = (current: number, max: number) => {
    return (current / max) * 100;
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4 mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="flex-1">
            <h1 className="font-cinzel font-bold text-3xl gold-gradient">
              Gestión de Personajes
            </h1>
            <p className="text-muted-foreground">
              Administra las fichas de tus personajes de D&D
            </p>
          </div>
          <Button className="hover-glow bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Personaje
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="glass-effect mb-6">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar personajes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-input border-border/50 focus:border-primary"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((character) => (
            <Card key={character.id} className="glass-effect hover-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                      {character.isCustomAvatar ? (
                        <img 
                          src={character.avatar} 
                          alt={character.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>{character.avatar}</span>
                      )}
                      <Button size="sm" variant="ghost" className="absolute -bottom-1 -right-1 w-5 h-5 p-0 bg-muted rounded-full hover-glow">
                        <Upload className="w-3 h-3" />
                      </Button>
                    </div>
                    <div>
                      <CardTitle className="font-cinzel text-lg">{character.name}</CardTitle>
                      <CardDescription>
                        Nivel {character.level} {character.race} {character.class}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="hover-glow">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="hover-glow text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Heart className="w-4 h-4 text-red-400" />
                    <div>
                      <p className="text-sm font-medium">{character.hp}/{character.maxHp}</p>
                      <p className="text-xs text-muted-foreground">Puntos de Vida</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <div>
                      <p className="text-sm font-medium">{character.experience.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Experiencia</p>
                    </div>
                  </div>
                </div>

                {/* Experience Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progreso de Nivel</span>
                    <span className="text-sm text-muted-foreground">
                      {character.experience.toLocaleString()} / {character.maxExperience.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getExperienceProgress(character.experience, character.maxExperience)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Class Badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className={getClassColor(character.class)}>
                    {character.class}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Nivel {character.level}</span>
                </div>

                {/* Campaign */}
                <div className="text-sm text-muted-foreground mb-4">
                  <strong>Campaña:</strong> {character.campaign}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 hover-glow bg-primary hover:bg-primary/90">
                    <User className="w-4 h-4 mr-1" />
                    Ver Ficha
                  </Button>
                  <Button size="sm" variant="outline" className="hover-glow">
                    <Sword className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="hover-glow">
                    <Image className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCharacters.length === 0 && (
          <Card className="glass-effect">
            <CardContent className="p-12 text-center">
              <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-cinzel font-semibold text-lg mb-2">No se encontraron personajes</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm ? 'Intenta con un término de búsqueda diferente' : 'Crea tu primer personaje para comenzar'}
              </p>
              <Button className="hover-glow bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Crear Personaje
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Characters;
