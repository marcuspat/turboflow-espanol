import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const docLinks = [
  {
    title: "Guía de Aliases de Claude Flow",
    description: "Referencia completa para todos los comandos y aliases de Claude Flow",
    category: "Guías de Configuración",
    url: "https://github.com/marcuspat/turbo-flow-claude#claude-flow-aliases-guide"
  },
  {
    title: "Configuración macOS/Linux",
    description: "Instrucciones de configuración nativa para sistemas macOS y Linux",
    category: "Guías de Configuración",
    url: "https://github.com/marcuspat/turbo-flow-claude/blob/main/macOS_linux_setup.md"
  },
  {
    title: "Configuración GitHub Codespaces",
    description: "Guía paso a paso para configurar con GitHub Codespaces",
    category: "Guías de Configuración",
    url: "https://github.com/marcuspat/turbo-flow-claude/blob/main/github_codespaces_setup.md"
  },
  {
    title: "Configuración Google Cloud Shell",
    description: "Instrucciones para ejecutar en Google Cloud Shell",
    category: "Guías de Configuración",
    url: "https://github.com/marcuspat/turbo-flow-claude/blob/main/google_cloud_shell_setup.md"
  },
  {
    title: "Guía de Configuración de Proveedores DevPod",
    description: "Guía completa para configurar proveedores de nube",
    category: "Guías de Configuración",
    url: "https://github.com/marcuspat/turbo-flow-claude/blob/main/devpod_provider_setup_guide.md"
  },
  {
    title: "Configuración Rackspace Spot",
    description: "Instrucciones de configuración para Rackspace Spot",
    category: "Guías de Configuración",
    url: "https://github.com/marcuspat/turbo-flow-claude/blob/main/rackspace_spot_setup.md"
  }
];

export const Documentation = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-magenta text-secondary">Documentación</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Guías completas y recursos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docLinks.map((doc, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <p className="text-xs text-secondary font-medium mb-1">
                      {doc.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {doc.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {doc.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary/80 p-0 h-auto"
                    asChild
                  >
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      Ver guía <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-6">Recursos Externos</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://devpod.sh/docs/what-is-devpod" target="_blank" rel="noopener noreferrer">
                Documentación DevPod
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline"
              className="border-secondary/50 text-secondary hover:bg-secondary/10"
              asChild
            >
              <a href="https://github.com/ruvnet/sparc" target="_blank" rel="noopener noreferrer">
                Claude Flow SPARC
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/ChrisRoyse/610ClaudeSubagents" target="_blank" rel="noopener noreferrer">
                610 Claude Subagents
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
