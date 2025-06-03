
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Search, Edit, Trash2, Calendar, MapPin, Play } from "lucide-react";
import { useState } from "react";

interface Campaign {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'planning' | 'completed';
  players: number;
  maxPlayers: number;
  sessions: number;
  nextSession: string;
  dm: string;
}

const Campaigns = () => {
  const [campaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: "Los Secretos de Waterdeep",
      description: "Una campaña urbana llena de intriga política y misterios ocultos en la ciudad más grande de Faerûn.",
      status: 'active',
      players: 4,
      maxPlayers: 6,
      sessions: 12,
      nextSession: "2024-01-15",
      dm: "Dungeon Master IA"
    },
    {
      id: 2,
      name: "La Corona Perdida",
      description: "Los héroes buscan una corona legendaria perdida en las profundidades de mazmorras ancestrales.",
      status: 'active',
      players: 3,
      maxPlayers: 5,
      sessions: 8,
      nextSession: "2024-01-18",
      dm: "Dungeon Master IA"
    },
    {
      id: 3,
      name: "El Dragón del Norte",
      description: "Una campaña épica donde los aventureros deben detener a un dragón ancestral que amenaza el reino.",
      status: 'planning',
      players: 2,
      maxPlayers: 6,
      sessions: 0,
      nextSession: "2024-01-22",
      dm: "Dungeon Master IA"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'active': 'bg-green-500/20 text-green-400',
      'planning': 'bg-yellow-500/20 text-yellow-400',
      'completed': 'bg-blue-500/20 text-blue-400'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400';
  };

  const getStatusText = (status: string) => {
    const texts: Record<string, string> = {
      'active': 'Activa',
      'planning': 'Planificando',
      'completed': 'Completada'
    };
    return texts[status] || status;
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="text-center sm:text-left flex-1">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient">
              Gestión de Campañas
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Administra y organiza tus campañas de D&D
            </p>
          </div>
          <Button className="hover-glow bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Campaña
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="glass-effect mb-4 sm:mb-6">
          <CardContent className="p-3 sm:p-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar campañas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-input border-border/50 focus:border-primary"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {filteredCampaigns.map((campaign) => (
            <Card key={campaign.id} className="glass-effect hover-glow transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <CardTitle className="font-cinzel text-lg sm:text-xl">{campaign.name}</CardTitle>
                      <Badge className={getStatusColor(campaign.status)}>
                        {getStatusText(campaign.status)}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {campaign.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-1 self-end sm:self-start">
                    <Button size="sm" variant="ghost" className="hover-glow">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="hover-glow text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                {/* Campaign Stats */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{campaign.players}/{campaign.maxPlayers} Jugadores</p>
                      <p className="text-xs text-muted-foreground">Participantes actuales</p>
                    </div>
                  </div>
                </div>

                {/* Session Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{campaign.sessions} sesiones</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Próxima: {new Date(campaign.nextSession).toLocaleDateString('es-ES')}</span>
                  </div>
                </div>

                {/* DM Info */}
                <div className="text-sm text-muted-foreground mb-4">
                  <strong>DM:</strong> {campaign.dm}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="flex-1 hover-glow bg-primary hover:bg-primary/90">
                    <Play className="w-4 h-4 mr-1" />
                    {campaign.status === 'active' ? 'Continuar' : 'Iniciar'}
                  </Button>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="hover-glow flex-1 sm:flex-none">
                      <Users className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover-glow flex-1 sm:flex-none">
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <Card className="glass-effect">
            <CardContent className="p-8 sm:p-12 text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-cinzel font-semibold text-lg mb-2">No se encontraron campañas</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                {searchTerm ? 'Intenta con un término de búsqueda diferente' : 'Crea tu primera campaña para comenzar'}
              </p>
              <Button className="hover-glow bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Crear Campaña
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Campaigns;
