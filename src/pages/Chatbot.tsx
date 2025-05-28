
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Send, Bot, User, Sparkles, Dice6, Map, Scroll, Crown, Settings } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: '¡Saludos, aventurero! Soy tu asistente de IA especializado en D&D. Puedo actuar como tu Dungeon Master personal o como asistente para ayudarte con reglas, creación de contenido y gestión de campañas. ¿En qué modo prefieres que trabajemos hoy?',
      timestamp: '10:30'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [mode, setMode] = useState<'assistant' | 'dm'>('assistant');
  const [selectedCampaign, setSelectedCampaign] = useState('waterdeep');

  const campaigns = [
    { id: 'waterdeep', name: 'Los Secretos de Waterdeep', active: true },
    { id: 'crown', name: 'La Corona Perdida', active: true },
    { id: 'dragon', name: 'El Dragón del Norte', active: false }
  ];

  const assistantActions = [
    {
      icon: Dice6,
      text: "Explicar Reglas",
      prompt: "Explícame cómo funcionan los ataques de oportunidad en D&D 5e"
    },
    {
      icon: Map,
      text: "Crear Contenido",
      prompt: "Ayúdame a crear un NPC interesante para mi taberna"
    },
    {
      icon: Scroll,
      text: "Consulta Rápida",
      prompt: "¿Cuáles son los componentes del hechizo Bola de Fuego?"
    },
    {
      icon: User,
      text: "Optimizar Personaje",
      prompt: "¿Qué multiclase recomendarías para un Guerrero nivel 5?"
    }
  ];

  const dmActions = [
    {
      icon: Crown,
      text: "Continuar Historia",
      prompt: "Continúa la narrativa desde donde la dejamos en la última sesión"
    },
    {
      icon: Dice6,
      text: "Generar Encuentro",
      prompt: "Crea un encuentro balanceado para el grupo actual"
    },
    {
      icon: Map,
      text: "Describir Ubicación",
      prompt: "Describe la entrada a las mazmorras ancestrales"
    },
    {
      icon: Scroll,
      text: "Crear NPC",
      prompt: "Genera un mercader misterioso con sus propias motivaciones"
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response based on mode
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: mode === 'dm' 
          ? `*Como DM de "${campaigns.find(c => c.id === selectedCampaign)?.name}"*: Basándome en el contexto actual de tu campaña, puedo ofrecerte lo siguiente...`
          : '¡Excelente pregunta! Como tu asistente de D&D, te recomiendo lo siguiente...',
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickAction = (prompt: string) => {
    setInputMessage(prompt);
  };

  const currentActions = mode === 'dm' ? dmActions : assistantActions;

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border/50 p-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover-glow" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-cinzel font-bold text-2xl gold-gradient">
                  Asistente IA de D&D
                </h1>
                <p className="text-muted-foreground">
                  {mode === 'dm' ? 'Modo Dungeon Master' : 'Modo Asistente'}
                </p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <Tabs value={mode} onValueChange={(value) => setMode(value as 'assistant' | 'dm')}>
                <TabsList>
                  <TabsTrigger value="assistant">Asistente</TabsTrigger>
                  <TabsTrigger value="dm">Dungeon Master</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" className="hover-glow">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Campaign Selector (DM Mode) */}
            {mode === 'dm' && (
              <div className="border-b border-border/50 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Campaña Activa:</span>
                  <div className="flex gap-2">
                    {campaigns.map((campaign) => (
                      <Badge
                        key={campaign.id}
                        variant={selectedCampaign === campaign.id ? "default" : "outline"}
                        className={`cursor-pointer hover-glow ${!campaign.active ? 'opacity-50' : ''}`}
                        onClick={() => campaign.active && setSelectedCampaign(campaign.id)}
                      >
                        {campaign.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4 max-w-4xl mx-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.type === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div className={`flex-1 max-w-2xl ${
                      message.type === 'user' ? 'text-right' : ''
                    }`}>
                      <Card className={`glass-effect ${
                        message.type === 'user' 
                          ? 'bg-primary/20 border-primary/50' 
                          : 'bg-secondary/20 border-secondary/50'
                      }`}>
                        <CardContent className="p-4">
                          <p className="text-sm">{message.content}</p>
                          <span className="text-xs text-muted-foreground mt-2 block">
                            {message.timestamp}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t border-border/50 p-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex gap-2 mb-4">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={mode === 'dm' 
                      ? "Describe lo que quieres que suceda en la campaña..." 
                      : "Escribe tu pregunta sobre D&D aquí..."
                    }
                    className="flex-1 bg-input border-border/50 focus:border-primary"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="hover-glow bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar with Actions */}
          <div className="w-80 border-l border-border/50 p-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-cinzel flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  {mode === 'dm' ? 'Herramientas de DM' : 'Acciones Rápidas'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start hover-glow text-left h-auto p-4"
                    onClick={() => handleQuickAction(action.prompt)}
                  >
                    <action.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{action.text}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {mode === 'dm' && (
              <Card className="glass-effect mt-6">
                <CardHeader>
                  <CardTitle className="font-cinzel text-sm">Estado de Campaña</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sesión Actual:</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Jugadores:</span>
                      <span className="font-medium">4 activos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ubicación:</span>
                      <span className="font-medium">Waterdeep</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="glass-effect mt-6">
              <CardHeader>
                <CardTitle className="font-cinzel text-sm">Consejos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs text-muted-foreground">
                  {mode === 'dm' ? (
                    <>
                      <p>• Mantén el ritmo de la narrativa</p>
                      <p>• Describe escenas con detalle</p>
                      <p>• Ajusta la dificultad al grupo</p>
                      <p>• Fomenta la interpretación</p>
                    </>
                  ) : (
                    <>
                      <p>• Sé específico en tus preguntas</p>
                      <p>• Menciona el nivel de los personajes</p>
                      <p>• Describe el contexto de tu campaña</p>
                      <p>• Pregunta sobre reglas si tienes dudas</p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
