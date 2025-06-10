
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageSquare, Send, Bot, User, Info, Crown, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      content: '¡Hola! Soy tu asistente general de D&D. Puedo ayudarte con reglas básicas, preguntas generales sobre el juego y resolver dudas rápidas. Para funciones avanzadas como Dungeon Master o Asistente especializado, necesitarás crear una campaña.',
      timestamp: '10:30'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    {
      icon: MessageSquare,
      text: "Explicar Reglas Básicas",
      prompt: "¿Podrías explicarme cómo funciona el sistema de dados en D&D 5e?"
    },
    {
      icon: User,
      text: "Crear Personaje",
      prompt: "¿Qué pasos debo seguir para crear mi primer personaje?"
    },
    {
      icon: Bot,
      text: "Consulta General",
      prompt: "¿Cuál es la diferencia entre una tirada de ataque y una tirada de salvación?"
    },
    {
      icon: Sparkles,
      text: "Consejos para Nuevos",
      prompt: "Soy nuevo en D&D, ¿qué consejos me darías para empezar?"
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

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: 'Excelente pregunta. Como tu asistente general, puedo ayudarte con información básica sobre D&D. Para respuestas más detalladas y funciones avanzadas como simulación de partidas, te recomiendo crear una campaña donde tendrás acceso al Dungeon Master especializado.',
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickAction = (prompt: string) => {
    setInputMessage(prompt);
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border/50 p-3 sm:p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <SidebarTrigger className="hover-glow" />
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="font-cinzel font-bold text-xl sm:text-2xl gold-gradient truncate">
                  Chat General D&D
                </h1>
                <p className="text-muted-foreground text-sm">
                  Asistente básico para consultas generales
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <div className="p-3 sm:p-4 md:p-6 pb-0">
          <Alert className="glass-effect border-primary/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>¿Necesitas funciones avanzadas?</strong> Para acceder al Dungeon Master especializado, 
              herramientas de campaña y asistente completo, 
              <Link to="/campaigns" className="text-primary hover:underline ml-1">
                crea una campaña aquí
              </Link>.
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-3 sm:p-4 md:p-6">
              <div className="space-y-4 max-w-4xl mx-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 sm:gap-3 ${
                      message.type === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </div>
                    <div className={`flex-1 max-w-xs sm:max-w-md md:max-w-2xl ${
                      message.type === 'user' ? 'text-right' : ''
                    }`}>
                      <Card className={`glass-effect ${
                        message.type === 'user' 
                          ? 'bg-primary/20 border-primary/50' 
                          : 'bg-secondary/20 border-secondary/50'
                      }`}>
                        <CardContent className="p-3 sm:p-4">
                          <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
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
            <div className="border-t border-border/50 p-3 sm:p-4 md:p-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Escribe tu pregunta sobre D&D..."
                    className="flex-1 bg-input border-border/50 focus:border-primary text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="hover-glow bg-primary hover:bg-primary/90 px-3 sm:px-4"
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar with Actions */}
          <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-border/50 p-3 sm:p-4 md:p-6">
            <Card className="glass-effect">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel flex items-center gap-2 text-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Acciones Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start hover-glow text-left h-auto p-3 sm:p-4"
                      onClick={() => handleQuickAction(action.prompt)}
                    >
                      <action.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{action.text}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect mt-4 sm:mt-6">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-sm flex items-center gap-2">
                  <Crown className="w-4 h-4 text-primary" />
                  Funciones Avanzadas
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      Crea una Campaña
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      Accede a herramientas completas de DM, asistente especializado y gestión avanzada.
                    </p>
                    <Link to="/campaigns">
                      <Button size="sm" className="w-full hover-glow bg-primary hover:bg-primary/90">
                        Crear Campaña
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect mt-4 sm:mt-6">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-cinzel text-sm">Consejos</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>• Sé específico en tus preguntas</p>
                  <p>• Pregunta sobre reglas básicas</p>
                  <p>• Consulta sobre creación de personajes</p>
                  <p>• Pide consejos para comenzar</p>
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
