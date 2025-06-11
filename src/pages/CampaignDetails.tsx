
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Bot, 
  BookOpen, 
  History, 
  MapPin, 
  Scroll, 
  ArrowLeft,
  MessageCircle,
  Target,
  Globe
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const CampaignDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock campaign data - in a real app this would come from an API
  const campaign = {
    id: 1,
    name: "Los Secretos de Waterdeep",
    description: "Una campaña urbana llena de intriga política y misterios ocultos en la ciudad más grande de Faerûn.",
    status: 'active',
    players: 4,
    maxPlayers: 6,
    sessions: 12,
    nextSession: "2024-01-15",
    dm: "Dungeon Master IA",
    isDMAI: true
  };

  const players = [
    { id: 1, name: "Ana García", character: "Lyralei Viento Susurrante", class: "Explorador", level: 6, avatar: "🏹" },
    { id: 2, name: "Carlos López", character: "Thorin Martillo de Hierro", class: "Guerrero", level: 8, avatar: "🛡️" },
    { id: 3, name: "María Rodríguez", character: "Morgana Sombraluna", class: "Mago", level: 7, avatar: "🔮" },
    { id: 4, name: "Juan Pérez", character: "Kael Ventoligero", class: "Pícaro", level: 6, avatar: "🗡️" }
  ];

  const missions = [
    { id: 1, title: "Investigar el Gremio de Ladrones", status: "active", description: "Infiltrarse en el gremio para obtener información" },
    { id: 2, title: "Rescatar al Comerciante", status: "completed", description: "Localizar y rescatar a Gundren Rockseeker" },
    { id: 3, title: "Explorar las Catacumbas", status: "pending", description: "Investigar los túneles bajo la ciudad" }
  ];

  const locations = [
    { id: 1, name: "Taberna del Jabalí Hirviente", description: "Punto de encuentro principal del grupo" },
    { id: 2, name: "Distrito Noble", description: "Zona residencial de los aristócratas" },
    { id: 3, name: "Los Muelles", description: "Puerto comercial de la ciudad" }
  ];

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover-glow" />
            <Button 
              variant="ghost" 
              onClick={() => navigate('/campaigns')}
              className="hover-glow"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient">
              {campaign.name}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {campaign.description}
            </p>
          </div>
          <Badge className="bg-green-500/20 text-green-400">
            Activa
          </Badge>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="general" className="text-xs sm:text-sm">
              General
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="text-xs sm:text-sm">
              {campaign.isDMAI ? "DM IA" : "Asistente"}
            </TabsTrigger>
            <TabsTrigger value="notes" className="text-xs sm:text-sm">
              Notas
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs sm:text-sm">
              Historial
            </TabsTrigger>
            <TabsTrigger value="missions" className="text-xs sm:text-sm">
              Misiones
            </TabsTrigger>
            <TabsTrigger value="players" className="text-xs sm:text-sm">
              Jugadores
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="font-cinzel flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Información General
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-medium">Dungeon Master:</span>
                    <p className="text-muted-foreground">{campaign.dm}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Jugadores:</span>
                    <p className="text-muted-foreground">{campaign.players}/{campaign.maxPlayers}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Sesiones jugadas:</span>
                    <p className="text-muted-foreground">{campaign.sessions}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Próxima sesión:</span>
                    <p className="text-muted-foreground">{new Date(campaign.nextSession).toLocaleDateString('es-ES')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="font-cinzel flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Lugares Conocidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {locations.map((location) => (
                      <div key={location.id} className="p-3 bg-muted/50 rounded-lg">
                        <h4 className="font-medium text-sm">{location.name}</h4>
                        <p className="text-xs text-muted-foreground">{location.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="chatbot" className="mt-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-cinzel flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  {campaign.isDMAI ? "Dungeon Master IA" : "Asistente IA"}
                </CardTitle>
                <CardDescription>
                  {campaign.isDMAI 
                    ? "Interactúa con tu DM artificial para obtener información sobre la campaña"
                    : "Tu asistente personal para ayudarte con reglas y mecánicas"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-border/50 rounded-lg">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {campaign.isDMAI 
                        ? "Aquí estará el chat con el DM IA"
                        : "Aquí estará el chat con el asistente"
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="mt-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-cinzel flex items-center gap-2">
                  <Scroll className="w-5 h-5" />
                  Notas de Campaña
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full hover-glow">
                    Agregar Nueva Nota
                  </Button>
                  <div className="text-center py-12 text-muted-foreground">
                    <Scroll className="w-12 h-12 mx-auto mb-4" />
                    <p>No hay notas registradas aún</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-cinzel flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Historial de Sesiones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: campaign.sessions }).map((_, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Sesión {index + 1}</h4>
                        <span className="text-xs text-muted-foreground">
                          {new Date(Date.now() - (campaign.sessions - index) * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Resumen de la sesión {index + 1}...
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="missions" className="mt-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-cinzel flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Misiones y Objetivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {missions.map((mission) => (
                    <div key={mission.id} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{mission.title}</h4>
                        <Badge 
                          className={
                            mission.status === 'active' ? 'bg-green-500/20 text-green-400' :
                            mission.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }
                        >
                          {mission.status === 'active' ? 'Activa' :
                           mission.status === 'completed' ? 'Completada' : 'Pendiente'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{mission.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players" className="mt-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-cinzel flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Lista de Jugadores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {players.map((player) => (
                    <div key={player.id} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-lg">
                          {player.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{player.name}</h4>
                          <p className="text-xs text-muted-foreground">{player.character}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {player.class} Nv.{player.level}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CampaignDetails;
