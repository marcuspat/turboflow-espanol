import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { QuickStart } from "@/components/QuickStart";
import { ToolsGrid } from "@/components/ToolsGrid";
import { Documentation } from "@/components/Documentation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <QuickStart />
      <ToolsGrid />
      <Documentation />
    </div>
  );
};

export default Index;
