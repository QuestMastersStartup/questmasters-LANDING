
export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/0e38836b-c94b-440f-b579-0835578ddd1a.png" 
                alt="QuestMasters Logo" 
                className="h-8 object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Construyendo el futuro de D&D con inteligencia artificial. La revolución está llegando.
            </p>
          </div>
          <div>
            <h4 className="font-cinzel font-semibold mb-4">Desarrollo</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary">Blog de Desarrollo</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Roadmap Público</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Beta Testing</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Feedback</a>
            </div>
          </div>
          <div>
            <h4 className="font-cinzel font-semibold mb-4">Comunidad</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary">Discord</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Reddit</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Twitter</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Newsletter</a>
            </div>
          </div>
          <div>
            <h4 className="font-cinzel font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary">Términos Futuros</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Privacidad</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Contacto</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 QuestMasters - Startup en Desarrollo. D&D es una marca registrada de Wizards of the Coast.
          </p>
        </div>
      </div>
    </footer>
  );
};
