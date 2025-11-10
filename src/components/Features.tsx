import { Card } from "@/components/ui/card";
import { Bot, Workflow, Upload, Zap, Wrench, Cloud } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "600+ Agentes IA",
    description: "De 610ClaudeSubagents más adiciones personalizadas para soporte integral de desarrollo.",
    color: "primary"
  },
  {
    icon: Workflow,
    title: "Metodología SPARC",
    description: "Flujo de trabajo de desarrollo sistemático para ejecución de proyectos estructurada y eficiente.",
    color: "secondary"
  },
  {
    icon: Upload,
    title: "Carga Automática de Contexto",
    description: "No más canalización manual de archivos. Los archivos de contexto se cargan automáticamente.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Integración Claude Flow",
    description: "Plataforma avanzada de orquestación IA para desarrollo de nivel empresarial.",
    color: "secondary"
  },
  {
    icon: Wrench,
    title: "Herramientas de Desarrollo",
    description: "Playwright, TypeScript, Docker-in-Docker y espacio de trabajo tmux incluidos.",
    color: "primary"
  },
  {
    icon: Cloud,
    title: "Soporte Multi-Nube",
    description: "Funciona con DigitalOcean, AWS, Azure, GCP y entornos Docker locales.",
    color: "secondary"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-cyan text-primary">Características</span>{" "}
            <span className="glow-magenta text-secondary">Principales</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que necesitas para desarrollo avanzado con IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isGlowCyan = feature.color === "primary";
            
            return (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                  isGlowCyan 
                    ? "border-primary/30 hover:border-primary/50 border-glow-cyan" 
                    : "border-secondary/30 hover:border-secondary/50 border-glow-magenta"
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isGlowCyan ? "bg-primary/10" : "bg-secondary/10"
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      isGlowCyan ? "text-primary" : "text-secondary"
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    isGlowCyan ? "text-primary" : "text-secondary"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
