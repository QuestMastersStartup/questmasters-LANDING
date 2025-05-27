
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Bot, User, Sparkles, Dice6, Map, Scroll } from "lucide-react";
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
      content: '¡Saludos, aventurero! Soy tu Dungeon Master asistente de IA. Estoy aquí para ayudarte a crear campañas épicas, desarrollar NPCs memorables, generar encuentros emocionantes y responder cualquier pregunta sobre D&D. ¿En qué aventura trabajaremos hoy?',
      timestamp: '10:30'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    {
      icon: Dice6,
      text: "Generar Encuentro",
      prompt: "Genera un encuentro balanceado para un grupo de 4 personajes de nivel 5"
    },
    {
      icon: Map,
      text: "Crear Mazmorra",
      prompt: "Crea una mazmorra de 5 habitaciones con trampas y tesoros"
    },
    {
      icon: Scroll,
      text: "Historia de Fondo",
      prompt: "Ayúdame a crear una historia de fondo para mi campaña"
    },
    {
      icon: User,
      text: "Crear NPC",
      prompt: "Crea un NPC interesante para mi taberna"
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
        content: '¡Excelente pregunta! Basándome en tu solicitud, te recomiendo lo siguiente... *[Aquí estaría la respuesta generada por IA]*',
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
        <div className="border-b border-border/50 p-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover-glow" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-cinzel font-bold text-2xl gold-gradient">
                  Dungeon Master IA
                </h1>
                <p className="text-muted-foreground">
                  Tu asistente personal para campañas de D&D
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
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
                    placeholder="Escribe tu pregunta sobre D&D aquí..."
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

          {/* Sidebar with Quick Actions */}
          <div className="w-80 border-l border-border/50 p-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-cinzel flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Acciones Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
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

            <Card className="glass-effect mt-6">
              <CardHeader>
                <CardTitle className="font-cinzel text-sm">Consejos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>• Sé específico en tus preguntas</p>
                  <p>• Menciona el nivel de los personajes</p>
                  <p>• Describe el tono de tu campaña</p>
                  <p>• Pregunta sobre reglas si tienes dudas</p>
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
