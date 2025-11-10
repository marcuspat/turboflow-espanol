import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const toolCategories = [
  {
    title: "Herramientas IA Principales",
    subtitle: "Herramientas esenciales para tu flujo de trabajo",
    tools: [
      "Claude Code CLI (Anthropic)",
      "Claude Flow SPARC (ruvnet)",
      "Claude Monitor (Maciek-roboblog)",
      "Claude Usage CLI (Anthropic)",
      "610+ Claude Subagents (ChrisRoyse)",
      "Agentic Flow (Enrutador Multi-Modelo)",
      "Agentic QE (Ingeniería de Calidad)"
    ],
    color: "primary"
  },
  {
    title: "Servidores MCP",
    subtitle: "Instalados y listos para usar",
    tools: [
      "Playwright MCP Server (Microsoft)",
      "Chrome DevTools MCP",
      "Browser MCP (mcp-chrome-bridge)",
      "Agentic QE MCP"
    ],
    color: "secondary"
  },
  {
    title: "Entorno de Desarrollo",
    subtitle: "Todo preconfigurado",
    tools: [
      "Node.js & npm",
      "TypeScript & @types/node",
      "uv Package Manager (Astral)",
      "Direnv (Gestor de Entorno)"
    ],
    color: "primary"
  }
];

export const ToolsGrid = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-cyan text-primary">Herramientas</span>{" "}
            <span className="glow-magenta text-secondary">Incluidas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo está preinstalado y configurado para uso inmediato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {toolCategories.map((category, idx) => {
            const isGlowCyan = category.color === "primary";
            
            return (
              <Card
                key={idx}
                className={`p-6 bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                  isGlowCyan 
                    ? "border-primary/30 hover:border-primary/50" 
                    : "border-secondary/30 hover:border-secondary/50"
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      isGlowCyan ? "text-primary" : "text-secondary"
                    }`}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.subtitle}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIdx) => (
                      <div key={toolIdx} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          isGlowCyan ? "text-primary" : "text-secondary"
                        }`} />
                        <span className="text-sm text-foreground">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Automatic Setup Process */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Proceso de Configuración Automática
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Instala Claude Code CLI & Claude Flow SPARC",
              "Configura 610+ Claude Subagents de ChrisRoyse",
              "Configura servidores MCP (Playwright, Chrome DevTools, Browser)",
              "Instala Agentic Flow & Agentic QE con soporte multi-modelo",
              "Configura uv package manager & direnv",
              "Crea aliases y wrappers de carga de contexto",
              "Inicializa Claude Flow con metodología SPARC"
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
                  ✓
                </Badge>
                <span className="text-sm text-foreground">{step}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
