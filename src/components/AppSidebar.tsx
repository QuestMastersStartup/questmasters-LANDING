
import { Home, User, Users, Book, BookOpen, MessageSquare, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Chatbot DM",
    url: "/chatbot",
    icon: MessageSquare,
  },
  {
    title: "Personajes",
    url: "/characters",
    icon: User,
  },
  {
    title: "Campañas",
    url: "/campaigns",
    icon: Users,
  },
  {
    title: "Biblioteca",
    url: "/books",
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Book className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-cinzel font-bold text-lg gold-gradient">QuestMasters</h2>
            <p className="text-xs text-muted-foreground">D&D Campaign Manager</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-cinzel text-primary">Herramientas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="hover-glow data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-6">
        <Button 
          variant="outline" 
          className="w-full justify-start gap-3 hover-glow border-border/50"
          onClick={() => window.location.href = '/'}
        >
          <LogOut className="w-4 h-4" />
          <span>Cerrar Sesión</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
