
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Download, Star, Clock, Users, Scroll, Sword } from "lucide-react";
import { useState } from "react";

interface Book {
  id: number;
  title: string;
  description: string;
  category: 'core' | 'adventure' | 'supplement' | 'homebrew';
  pages: number;
  rating: number;
  downloads: number;
  lastUpdated: string;
  author: string;
  cover: string;
}

const Books = () => {
  const [books] = useState<Book[]>([
    {
      id: 1,
      title: "Manual del Jugador",
      description: "El libro esencial que contiene todas las reglas básicas para crear personajes y jugar D&D 5e.",
      category: 'core',
      pages: 320,
      rating: 4.9,
      downloads: 15432,
      lastUpdated: "2023-12-15",
      author: "Wizards of the Coast",
      cover: "📖"
    },
    {
      id: 2,
      title: "Guía del Dungeon Master",
      description: "Todo lo que necesitas saber para dirigir partidas épicas y crear mundos memorables.",
      category: 'core',
      pages: 256,
      rating: 4.8,
      downloads: 12890,
      lastUpdated: "2023-12-10",
      author: "Wizards of the Coast",
      cover: "🎲"
    },
    {
      id: 3,
      title: "Manual de Monstruos",
      description: "Una vasta colección de criaturas, desde goblins hasta dragones ancestrales.",
      category: 'core',
      pages: 352,
      rating: 4.7,
      downloads: 18765,
      lastUpdated: "2023-11-28",
      author: "Wizards of the Coast",
      cover: "🐉"
    },
    {
      id: 4,
      title: "Waterdeep: Dragon Heist",
      description: "Una aventura urbana llena de intriga en la ciudad más famosa de los Reinos Olvidados.",
      category: 'adventure',
      pages: 224,
      rating: 4.6,
      downloads: 8934,
      lastUpdated: "2023-12-01",
      author: "Wizards of the Coast",
      cover: "🏰"
    },
    {
      id: 5,
      title: "Tasha's Cauldron of Everything",
      description: "Nuevas opciones para personajes, subclases, hechizos y reglas opcionales.",
      category: 'supplement',
      pages: 192,
      rating: 4.5,
      downloads: 6543,
      lastUpdated: "2023-11-15",
      author: "Wizards of the Coast",
      cover: "🔮"
    },
    {
      id: 6,
      title: "Guía de Campaña Homebrew",
      description: "Un compendio de reglas caseras y contenido creado por la comunidad.",
      category: 'homebrew',
      pages: 128,
      rating: 4.3,
      downloads: 3421,
      lastUpdated: "2023-12-20",
      author: "Comunidad QuestMasters",
      cover: "✨"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: 'Todos',
    core: 'Libros Básicos',
    adventure: 'Aventuras',
    supplement: 'Suplementos',
    homebrew: 'Homebrew'
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'core': 'bg-primary/20 text-primary',
      'adventure': 'bg-green-500/20 text-green-400',
      'supplement': 'bg-blue-500/20 text-blue-400',
      'homebrew': 'bg-purple-500/20 text-purple-400'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400';
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      'core': BookOpen,
      'adventure': Sword,
      'supplement': Scroll,
      'homebrew': Star
    };
    return icons[category] || BookOpen;
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4 mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="flex-1">
            <h1 className="font-cinzel font-bold text-3xl gold-gradient">
              Biblioteca de Contenido
            </h1>
            <p className="text-muted-foreground">
              Accede a libros, aventuras y recursos para D&D
            </p>
          </div>
        </div>

        {/* Search */}
        <Card className="glass-effect mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar libros y recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border/50 focus:border-primary"
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
          <TabsList className="grid w-full grid-cols-5">
            {Object.entries(categories).map(([key, label]) => (
              <TabsTrigger key={key} value={key}>{label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => {
            const CategoryIcon = getCategoryIcon(book.category);
            return (
              <Card key={book.id} className="glass-effect hover-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
                        {book.cover}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-cinzel text-lg leading-tight">{book.title}</CardTitle>
                        <CardDescription className="text-sm">
                          por {book.author}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {book.description}
                  </p>

                  {/* Category and Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getCategoryColor(book.category)}>
                      <CategoryIcon className="w-3 h-3 mr-1" />
                      {categories[book.category as keyof typeof categories]}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{book.pages} páginas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{book.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    <span>Actualizado: {new Date(book.lastUpdated).toLocaleDateString('es-ES')}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 hover-glow bg-primary hover:bg-primary/90">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Leer
                    </Button>
                    <Button size="sm" variant="outline" className="hover-glow">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover-glow">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <Card className="glass-effect">
            <CardContent className="p-12 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-cinzel font-semibold text-lg mb-2">No se encontraron libros</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm ? 'Intenta con un término de búsqueda diferente' : 'No hay libros disponibles en esta categoría'}
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Books;
