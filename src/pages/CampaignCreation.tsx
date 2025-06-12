
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Crown, Star, Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CampaignCreation = () => {
  const navigate = useNavigate();
  const [currentPlan] = useState<'free' | 'basic' | 'complete'>('basic'); // Simulating user plan
  const [campaignType, setCampaignType] = useState<'custom' | 'preset'>('custom');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const isPremium = currentPlan === 'complete';

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover-glow" />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/campaigns')}
              className="hover-glow"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-gradient mb-2">
              Crear Nueva Campaña
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-muted-foreground text-sm sm:text-base">
                Plan actual: 
              </p>
              <Badge className={`${isPremium ? 'bg-yellow-500/20 text-yellow-400' : 'bg-primary/20 text-primary'}`}>
                {isPremium ? (
                  <>
                    <Crown className="w-3 h-3 mr-1" />
                    Completo
                  </>
                ) : (
                  <>
                    <Star className="w-3 h-3 mr-1" />
                    {currentPlan === 'free' ? 'Gratuito' : 'Básico'}
                  </>
                )}
              </Badge>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Campaign Type Selection */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="font-cinzel">Tipo de Campaña</CardTitle>
              <CardDescription>
                Elige si quieres crear una campaña personalizada o usar un preset existente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card 
                  className={`cursor-pointer transition-all ${campaignType === 'custom' ? 'ring-2 ring-primary' : 'hover:bg-accent/50'}`}
                  onClick={() => setCampaignType('custom')}
                >
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-2">🎨 Campaña Personalizada</h3>
                    <p className="text-sm text-muted-foreground">Crea una campaña única desde cero</p>
                  </CardContent>
                </Card>
                <Card 
                  className={`cursor-pointer transition-all ${campaignType === 'preset' ? 'ring-2 ring-primary' : 'hover:bg-accent/50'}`}
                  onClick={() => setCampaignType('preset')}
                >
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-2">📚 Usar Preset</h3>
                    <p className="text-sm text-muted-foreground">Basada en libros oficiales o homebrew</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="font-cinzel">Información Básica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre de la Campaña *</Label>
                  <Input id="name" placeholder="Ej: Los Secretos de Waterdeep" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="setting">Ambientación</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona ambientación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="forgotten-realms">Reinos Olvidados</SelectItem>
                      <SelectItem value="eberron">Eberron</SelectItem>
                      <SelectItem value="ravenloft">Ravenloft</SelectItem>
                      <SelectItem value="custom">Personalizada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe brevemente tu campaña..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Imagen o Ícono Representativo</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Arrastra una imagen o haz clic para seleccionar
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Seleccionar Archivo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Settings */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="font-cinzel">Configuración de Campaña</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Enfoque</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="roleplay">Roleo</SelectItem>
                      <SelectItem value="mixed">Mixto</SelectItem>
                      <SelectItem value="combat">Combate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tono</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="heroic">Heroico</SelectItem>
                      <SelectItem value="dark">Oscuro</SelectItem>
                      <SelectItem value="comedic">Cómico</SelectItem>
                      <SelectItem value="serious">Serio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Dificultad</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Fácil</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="hard">Difícil</SelectItem>
                      <SelectItem value="deadly">Letal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="explicit-content">Bloquear contenido explícito</Label>
                  <p className="text-sm text-muted-foreground">
                    Evita generar contenido violento o sexual
                  </p>
                </div>
                <Switch id="explicit-content" />
              </div>
            </CardContent>
          </Card>

          {/* Advanced Settings (Premium Only) */}
          {isPremium && (
            <Card className="glass-effect border-yellow-500/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-cinzel flex items-center gap-2">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      Configuración Avanzada
                    </CardTitle>
                    <CardDescription>
                      Opciones exclusivas del plan Completo
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                  >
                    {showAdvanced ? 'Ocultar' : 'Mostrar'}
                  </Button>
                </div>
              </CardHeader>
              
              {showAdvanced && (
                <CardContent className="space-y-6">
                  <Separator />
                  
                  {/* Detailed Focus Settings */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-yellow-400">Detalles del Enfoque</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Frecuencia de Encuentros</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Baja (1-2 por sesión)</SelectItem>
                            <SelectItem value="medium">Media (3-4 por sesión)</SelectItem>
                            <SelectItem value="high">Alta (5+ por sesión)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Frecuencia de Misiones Secundarias</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rare">Raras</SelectItem>
                            <SelectItem value="occasional">Ocasionales</SelectItem>
                            <SelectItem value="frequent">Frecuentes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Setting */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-yellow-400">Detalles de Ambientación</h4>
                    <Textarea 
                      placeholder="Describe elementos específicos de tu mundo: geografía, política, religión, historia..."
                      rows={3}
                    />
                  </div>

                  {/* Detailed Difficulty */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-yellow-400">Detalles de Dificultad</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Inteligencia de Enemigos</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Básica</SelectItem>
                            <SelectItem value="tactical">Táctica</SelectItem>
                            <SelectItem value="strategic">Estratégica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Cantidad de Enemigos</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="few">Pocos pero fuertes</SelectItem>
                            <SelectItem value="balanced">Equilibrado</SelectItem>
                            <SelectItem value="many">Muchos pero débiles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Valor de Dificultad</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under">Por debajo del nivel</SelectItem>
                            <SelectItem value="equal">Igual al nivel</SelectItem>
                            <SelectItem value="above">Por encima del nivel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Explicit Content Details */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-yellow-400">Detalles de Contenido Explícito</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Nivel de Gore/Violencia</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Ninguno</SelectItem>
                            <SelectItem value="mild">Leve</SelectItem>
                            <SelectItem value="moderate">Moderado</SelectItem>
                            <SelectItem value="high">Alto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Contenido Romántico/Sexual</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Ninguno</SelectItem>
                            <SelectItem value="romance">Solo romance</SelectItem>
                            <SelectItem value="implied">Implícito</SelectItem>
                            <SelectItem value="explicit">Explícito</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )}

          {/* Upgrade Notice for Non-Premium Users */}
          {!isPremium && (
            <Card className="glass-effect border-yellow-500/30 bg-yellow-500/5">
              <CardContent className="p-6 text-center">
                <Crown className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="font-cinzel font-bold text-lg mb-2">
                  ¿Quieres más control sobre tu campaña?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade al plan Completo para acceder a configuraciones avanzadas
                </p>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  onClick={() => navigate('/pricing')}
                >
                  Ver Planes Premium
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button variant="outline" onClick={() => navigate('/campaigns')}>
              Cancelar
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Crear Campaña
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampaignCreation;
