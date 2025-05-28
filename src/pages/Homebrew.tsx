
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Star, Download, Sparkles, Sword, Shield, Scroll, Zap } from "lucide-react";
import { useState } from "react";

interface HomebrewItem {
  id: number;
  name: string;
  type: 'class' | 'race' | 'spell' | 'item' | 'monster';
  description: string;
  author: string;
  rating: number;
  downloads: number;
  price: number;
  isPremium: boolean;
  tags: string[];
}

const Homebrew = () => {
  const [homebrewItems] = useState<HomebrewItem[]>([
    {
      id: 1,
      name: "Clase: Necromante de Batalla",
      type: 'class',
      description: "Una clase híbrida que combina magia necromántica con habilidades de combate cuerpo a cuerpo.",
      author: "MaestroOscuro",
      rating: 4.8,
      downloads: 1234,
      price: 4.99,
      isPremium: true,
      tags: ['necromancia', 'combate', 'magia']
    },
    {
      id: 2,
      name: "Raza: Dracónidos de Cristal",
      type: 'race',
      description: "Descendientes de dragones de cristal con habilidades únicas de manipulación de gemas.",
      author: "CreadoresDeFaerun",
      rating: 4.6,
      downloads: 856,
      price: 2.99,
      isPremium: true,
      tags: ['dragón', 'cristal', 'gemas']
    },
    {
      id: 3,
      name: "Hechizo: Tormenta de Meteoritos",
      type: 'spell',
      description: "Un poderoso hechizo de 9º nivel que invoca una lluvia devastadora de meteoritos.",
      author: "ArchimagoSupremo",
      rating: 4.9,
      downloads: 2341,
      price: 1.99,
      isPremium: true,
      tags: ['destrucción', 'fuego', 'área']
    },
    {
      id: 4,
      name: "Objeto: Espada del Tiempo",
      type: 'item',
      description: "Una espada legendaria que permite manipular el flujo del tiempo en combate.",
      author: "ForjadorLegendario",
      rating: 4.7,
      downloads: 1789,
      price: 3.99,
      isPremium: true,
      tags: ['tiempo', 'legendario', 'espada']
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const categories = {
    all: 'Todo',
    class: 'Clases',
    race: 'Razas',
    spell: 'Hechizos',
    item: 'Objetos',
    monster: 'Monstruos'
  };

  const filteredItems = homebrewItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || item.type === activeTab;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    const icons: Record<string, any> = {
      'class': Sword,
      'race': Shield,
      'spell': Sparkles,
      'item': Zap,
      'monster': Scroll
    };
    return icons[type] || Scroll;
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'class': 'bg-red-500/20 text-red-400',
      'race': 'bg-blue-500/20 text-blue-400',
      'spell': 'bg-purple-500/20 text-purple-400',
      'item': 'bg-yellow-500/20 text-yellow-400',
      'monster': 'bg-green-500/20 text-green-400'
    };
    return colors[type] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4 mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="flex-1">
            <h1 className="font-cinzel font-bold text-3xl gold-gradient">
              Contenido Homebrew
            </h1>
            <p className="text-muted-foreground">
              Crea y descubre contenido personalizado para tus campañas
            </p>
          </div>
          <Button className="hover-glow bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Crear Homebrew
          </Button>
        </div>

        {/* Pricing Notice */}
        <Card className="glass-effect mb-6 border-primary/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold">Contenido Premium Homebrew</h3>
                <p className="text-sm text-muted-foreground">
                  El contenido homebrew premium tiene un costo adicional y requiere una suscripción activa para ser usado en campañas.
                </p>
              </div>
              <Button variant="outline" className="hover-glow">
                Ver Precios
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <Card className="glass-effect mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar contenido homebrew..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border/50 focus:border-primary"
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-6">
            {Object.entries(categories).map(([key, label]) => (
              <TabsTrigger key={key} value={key}>{label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <Card key={item.id} className="glass-effect hover-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(item.type)}`}>
                        <TypeIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-cinzel text-lg leading-tight">{item.name}</CardTitle>
                        <CardDescription className="text-sm">
                          por {item.author}
                        </CardDescription>
                      </div>
                    </div>
                    {item.isPremium && (
                      <Badge className="bg-primary/20 text-primary">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{item.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold gold-gradient">
                      ${item.price}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover-glow">
                        Vista Previa
                      </Button>
                      <Button size="sm" className="hover-glow bg-primary hover:bg-primary/90">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <Card className="glass-effect">
            <CardContent className="p-12 text-center">
              <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-cinzel font-semibold text-lg mb-2">No se encontró contenido</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm ? 'Intenta con un término diferente' : 'No hay contenido en esta categoría'}
              </p>
              <Button className="hover-glow bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Crear tu Propio Homebrew
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Creator Section */}
        <Card className="glass-effect mt-8">
          <CardHeader>
            <CardTitle className="font-cinzel">¿Quieres crear tu propio contenido?</CardTitle>
            <CardDescription>
              Comparte tus creaciones con la comunidad y monetiza tu creatividad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-muted/50">
                <CardContent className="p-4 text-center">
                  <Sword className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1">Crea</h4>
                  <p className="text-sm text-muted-foreground">Diseña clases, razas, hechizos y más</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1">Comparte</h4>
                  <p className="text-sm text-muted-foreground">Publica en el marketplace</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4 text-center">
                  <Download className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1">Monetiza</h4>
                  <p className="text-sm text-muted-foreground">Gana dinero con tus creaciones</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Homebrew;
