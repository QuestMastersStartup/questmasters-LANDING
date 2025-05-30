
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuándo estará disponible QuestMasters?",
      answer: "Estamos en fase de desarrollo activo. Los primeros usuarios beta tendrán acceso en los próximos meses. Mantente atento para ser notificado cuando esté listo."
    },
    {
      question: "¿Reemplazará completamente al Dungeon Master humano?",
      answer: "¡Para nada! QuestMasters está diseñado para potenciar tu creatividad, no reemplazarla. La IA maneja las tareas repetitivas para que te concentres en la narrativa y diversión."
    },
    {
      question: "¿Funcionará con mis campañas existentes?",
      answer: "Sí, podrás importar tus personajes y campañas existentes. QuestMasters se adaptará a tu estilo de juego y mundo existente."
    },
    {
      question: "¿Habrá una versión gratuita?",
      answer: "Sí, tendremos un plan gratuito robusto para que todos puedan experimentar la magia de QuestMasters, con opciones premium para funciones avanzadas."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl mb-4 gold-gradient">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber sobre QuestMasters
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-effect mb-4 rounded-lg px-6">
              <AccordionTrigger className="font-cinzel font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
