
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, User, Users, BookOpen, Sparkles, TrendingUp, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Campañas Activas",
      value: "3",
      description: "En progreso",
      icon: Users,
      trend: "+2 este mes"
    },
    {
      title: "Personajes",
      value: "12",
      description: "Creados",
      icon: User,
      trend: "+4 este mes"
    },
    {
      title: "Sesiones Jugadas",
      value: "47",
      description: "Total",
      icon: Clock,
      trend: "+8 esta semana"
    },
    {
      title: "Logros",
      value: "15",
      description: "Desbloqueados",
      icon: Award,
      trend: "+3 nuevos"
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

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4 mb-8">
          <SidebarTrigger className="hover-glow" />
          <div>
            <h1 className="font-cinzel font-bold text-3xl gold-gradient">
              ¡Bienvenido, Aventurero!
            </h1>
            <p className="text-muted-foreground">
              Administra tus campañas y personajes desde aquí
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/chatbot">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex items-center p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Chatbot DM</h3>
                  <p className="text-sm text-muted-foreground">Iniciar sesión</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/characters">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex items-center p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Personajes</h3>
                  <p className="text-sm text-muted-foreground">Gestionar fichas</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/campaigns">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex items-center p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Campañas</h3>
                  <p className="text-sm text-muted-foreground">Administrar</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/books">
            <Card className="glass-effect hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="flex items-center p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Biblioteca</h3>
                  <p className="text-sm text-muted-foreground">Explorar</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-effect">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <div className="flex items-center mt-2 text-xs text-green-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="glass-effect lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-cinzel">Actividad Reciente</CardTitle>
              <CardDescription>
                Tus últimas acciones en QuestMasters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.item}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Inicio Rápido
              </CardTitle>
              <CardDescription>
                Comienza tu próxima aventura
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/chatbot">
                <Button className="w-full justify-start hover-glow bg-primary hover:bg-primary/90">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Consultar al DM
                </Button>
              </Link>
              <Link to="/characters">
                <Button variant="outline" className="w-full justify-start hover-glow">
                  <User className="w-4 h-4 mr-2" />
                  Crear Personaje
                </Button>
              </Link>
              <Link to="/campaigns">
                <Button variant="outline" className="w-full justify-start hover-glow">
                  <Users className="w-4 h-4 mr-2" />
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
