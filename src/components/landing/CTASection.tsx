
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <Card className="glass-effect fantasy-border">
          <CardContent className="p-12 text-center">
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6 gold-gradient">
              El Futuro del D&D Comienza Pronto
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos preparando algo épico. Mantente atento para ser parte de la revolución cuando lancemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Próximamente
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * La aventura está por comenzar.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
