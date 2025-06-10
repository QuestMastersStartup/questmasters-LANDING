
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, User, Users, BookOpen, Sparkles, Calendar, Clock, MapPin, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const upcomingSessions = [
    {
      campaign: "Los Secretos de Waterdeep",
      date: "2024-01-15",
      time: "19:00",
      location: "Discord - Sala Principal",
      players: 4,
      status: "confirmada"
    },
    {
      campaign: "La Corona Perdida", 
      date: "2024-01-18",
      time: "20:30",
      location: "Presencial - Casa de Luis",
      players: 3,
      status: "pendiente"
    },
    {
      campaign: "El Dragón del Norte",
      date: "2024-01-22",
      time: "18:00", 
      location: "Discord - Sala 2",
      players: 5,
      status: "confirmada"
    }
  ];

  const recentActivity = [
    {
      action: "Nueva campaña creada",
      item: "Los Secretos de Waterdeep",
      time: "Hace 2 horas"
    },
    {
      action: "Personaje actualizado",
      item: "Thorin Martillo de Hierro",
      time: "Hace 4 horas"
    },
    {
      action: "Sesión de chat completada",
      item: "Planificación de mazmorra",
      time: "Hace 1 día"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'confirmada' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400';
  };

  const getStatusText = (status: string) => {
    return status === 'confirmada' ? 'Confirmada' : 'Pendiente';
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <SidebarTrigger className="hover-glow" />
          <div className="text-center sm:text-left flex-1">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient">
              ¡Bienvenido, Aventurero!
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Administra tus campañas y personajes desde aquí
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <Link to="/chatbot">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex flex-col sm:flex-row items-center p-3 sm:p-4 md:p-6 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                  <MessageSquare className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Chat General</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Asistente básico</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/characters">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex flex-col sm:flex-row items-center p-3 sm:p-4 md:p-6 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                  <User className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Personajes</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Gestionar fichas</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/campaigns">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex flex-col sm:flex-row items-center p-3 sm:p-4 md:p-6 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                  <Users className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Campañas</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Administrar</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/books">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex flex-col sm:flex-row items-center p-3 sm:p-4 md:p-6 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                  <BookOpen className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Biblioteca</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Explorar</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Upcoming Sessions */}
        <Card className="glass-effect mb-6 sm:mb-8">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-cinzel text-lg sm:text-xl flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Próximas Sesiones
            </CardTitle>
            <CardDescription className="text-sm">
              Tus sesiones programadas para los próximos días
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="space-y-3 sm:space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 rounded-lg bg-muted/50 gap-3 lg:gap-0">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h4 className="font-medium text-sm sm:text-base">{session.campaign}</h4>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)} w-fit`}>
                        {getStatusText(session.status)}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {session.date} - {session.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {session.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {session.players} jugadores
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2 lg:mt-0">
                    <Button size="sm" variant="outline" className="hover-glow text-xs">
                      Ver Detalles
                    </Button>
                    <Button size="sm" className="hover-glow bg-primary hover:bg-primary/90 text-xs">
                      Unirse
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Recent Activity */}
          <Card className="glass-effect xl:col-span-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-cinzel text-lg sm:text-xl">Actividad Reciente</CardTitle>
              <CardDescription className="text-sm">
                Tus últimas acciones en QuestMasters
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg bg-muted/50 gap-2 sm:gap-0">
                    <div>
                      <p className="font-medium text-sm sm:text-base">{activity.action}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{activity.item}</p>
                    </div>
                    <span className="text-xs text-muted-foreground self-end sm:self-auto">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card className="glass-effect">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-cinzel flex items-center gap-2 text-lg sm:text-xl">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                Inicio Rápido
              </CardTitle>
              <CardDescription className="text-sm">
                Comienza tu próxima aventura
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              <Link to="/chatbot">
                <Button className="w-full justify-start hover-glow bg-primary hover:bg-primary/90 text-sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat General
                </Button>
              </Link>
              <Link to="/characters">
                <Button variant="outline" className="w-full justify-start hover-glow text-sm">
                  <User className="w-4 h-4 mr-2" />
                  Crear Personaje
                </Button>
              </Link>
              <Link to="/campaigns">
                <Button variant="outline" className="w-full justify-start hover-glow text-sm">
                  <Crown className="w-4 h-4 mr-2" />
                  Nueva Campaña
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
