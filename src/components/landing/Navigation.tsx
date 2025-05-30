
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/0e38836b-c94b-440f-b579-0835578ddd1a.png" 
              alt="QuestMasters Logo" 
              className="h-10 object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hover-glow">Acceso Directo</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
