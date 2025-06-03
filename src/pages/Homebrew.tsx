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
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="text-center sm:text-left flex-1 min-w-0">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient">
              Contenido Homebrew
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Crea y descubre contenido personalizado para tus campañas
            </p>
          </div>
          <Button className="hover-glow bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Crear Homebrew
          </Button>
        </div>

        {/* Pricing Notice */}
        <Card className="glass-effect mb-4 sm:mb-6 border-primary/50">
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">Contenido Premium Homebrew</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  El contenido homebrew premium tiene un costo adicional y requiere una suscripción activa para ser usado en campañas.
                </p>
              </div>
              <Button variant="outline" className="hover-glow w-full sm:w-auto" size="sm">
                Ver Precios
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <Card className="glass-effect mb-4 sm:mb-6">
          <CardContent className="p-3 sm:p-4">
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4 sm:mb-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 gap-1">
            {Object.entries(categories).map(([key, label]) => (
              <TabsTrigger key={key} value={key} className="text-xs sm:text-sm px-2 sm:px-3">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <Card key={item.id} className="glass-effect hover-glow transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getTypeColor(item.type)}`}>
                        <TypeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="font-cinzel text-base sm:text-lg leading-tight line-clamp-2">{item.name}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">
                          por {item.author}
                        </CardDescription>
                      </div>
                    </div>
                    {item.isPremium && (
                      <Badge className="bg-primary/20 text-primary flex-shrink-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">Premium</span>
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{item.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-lg font-bold gold-gradient">
                      ${item.price}
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Button size="sm" variant="outline" className="hover-glow flex-1 sm:flex-none">
                        <span className="hidden sm:inline">Vista Previa</span>
                        <span className="sm:hidden">Vista</span>
                      </Button>
                      <Button size="sm" className="hover-glow bg-primary hover:bg-primary/90 flex-1 sm:flex-none">
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
            <CardContent className="p-8 sm:p-12 text-center">
              <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-cinzel font-semibold text-lg mb-2">No se encontró contenido</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
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
        <Card className="glass-effect mt-6 sm:mt-8">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-cinzel text-lg sm:text-xl">¿Quieres crear tu propio contenido?</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Comparte tus creaciones con la comunidad y monetiza tu creatividad
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-muted/50">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Sword className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Crea</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Diseña clases, razas, hechizos y más</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Comparte</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Publica en el marketplace</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Download className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Monetiza</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Gana dinero con tus creaciones</p>
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
