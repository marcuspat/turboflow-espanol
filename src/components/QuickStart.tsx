import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export const QuickStart = () => {
  return (
    <section id="quick-start" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-magenta text-secondary">Inicio</span>{" "}
            <span className="glow-cyan text-primary">Rápido</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Elige tu entorno de desarrollo preferido
          </p>
        </div>

        <Tabs defaultValue="devpods" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted/50 mb-8">
            <TabsTrigger value="devpods" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              DevPods
            </TabsTrigger>
            <TabsTrigger value="rackspace" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Rackspace
            </TabsTrigger>
            <TabsTrigger value="codespaces" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Codespaces
            </TabsTrigger>
            <TabsTrigger value="cloudshell" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Cloud Shell
            </TabsTrigger>
          </TabsList>

          <TabsContent value="devpods">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Configuración de DevPods</h3>
                <p className="text-muted-foreground mb-6">
                  Instala DevPod y lanza tu espacio de trabajo en segundos
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">1. Instalar DevPod</h4>
                  <div className="bg-background/50 border border-primary/20 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-primary">
                      <code>{`# Linux/macOS - Descarga la última versión
curl -L -o devpod "https://github.com/loft-sh/devpod/releases/latest/download/devpod-linux-amd64"
sudo install devpod /usr/local/bin

# O usa el instalador GUI desde devpod.sh`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">2. Configurar proveedor</h4>
                  <p className="text-muted-foreground">
                    Configura tu proveedor de nube - consulta la guía para DigitalOcean, AWS, Azure, GCP o Docker local
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">3. Lanzar espacio de trabajo</h4>
                  <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
                    <pre className="text-sm text-primary">
                      <code>devpod up https://github.com/marcuspat/turbo-flow-claude --ide vscode</code>
                    </pre>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="rackspace">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/30">
              <h3 className="text-2xl font-semibold text-secondary mb-4">Configuración de Rackspace</h3>
              <p className="text-muted-foreground">
                Instrucciones de configuración para Rackspace Spot y Kubernetes disponibles en{' '}
                <a
                  href="https://github.com/marcuspat/turbo-flow-claude/blob/main/GUIA_SUPERVIVENCIA_RACKSPACE_KUBERNETES.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  esta guía
                </a>
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="codespaces">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30">
              <h3 className="text-2xl font-semibold text-primary mb-4">GitHub Codespaces</h3>
              <p className="text-muted-foreground">
                Guía paso a paso para configurar con GitHub Codespaces disponible en{' '}
                <a
                  href="https://github.com/marcuspat/turbo-flow-claude/blob/main/GUIAS_CONFIGURACION_TURBO_FLOW.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  esta guía
                </a>
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="cloudshell">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/30">
              <h3 className="text-2xl font-semibold text-secondary mb-4">Google Cloud Shell</h3>
              <p className="text-muted-foreground">
                Instrucciones para ejecutar en Google Cloud Shell disponibles en{' '}
                <a
                  href="https://github.com/marcuspat/turbo-flow-claude/blob/main/GUIAS_CONFIGURACION_TURBO_FLOW.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  esta guía
                </a>
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
