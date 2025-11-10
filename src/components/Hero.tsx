import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMjMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary border-glow-cyan px-4 py-2 text-sm">
              ✓ DevPod Listo
            </Badge>
            <Badge variant="outline" className="border-secondary/50 bg-secondary/10 text-secondary border-glow-magenta px-4 py-2 text-sm">
              💎 610+ Agentes IA
            </Badge>
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary border-glow-cyan px-4 py-2 text-sm">
              ✓ Metodología SPARC
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="glow-cyan text-primary">TURBO</span>{" "}
            <span className="glow-magenta text-secondary">FLOW</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-secondary glow-magenta">
            Entorno de Desarrollo Agéntico Avanzado
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¡Compatible con DevPods, GitHub Codespaces y más! Incluye más de 610 agentes IA, 
            Claude Flow, metodología SPARC y carga automática de contexto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/50 border-glow-cyan transition-all duration-300 hover:scale-105"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver en GitHub
            </Button>
            <Button 
              size="lg"
              className="bg-secondary/10 hover:bg-secondary/20 text-secondary border-2 border-secondary/50 border-glow-magenta transition-all duration-300 hover:scale-105"
            >
              Comenzar
            </Button>
          </div>

          {/* Code Snippet */}
          <div className="pt-8 max-w-3xl mx-auto">
            <div className="bg-card border border-primary/30 rounded-lg p-6 border-glow-cyan">
              <code className="text-primary font-mono text-sm md:text-base">
                devpod up https://github.com/marcuspat/turbo-flow-claude --ide vscode
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-secondary/20" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-secondary/20" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-primary/20" />
    </section>
  );
};
