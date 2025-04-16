import React from "react";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Badge } from "@/components/crazxy/badge";
import ComponentShowcase from "@/components/component-showcase";

export default function BadgePage() {
  const variants = [
    {
      name: "default",
      label: "Default",
      component: <Badge variant="default">Default Badge</Badge>,
      description: "This is the default variant of the badge component.",
    },
    {
      name: "secondary",
      label: "Secondary",
      component: <Badge variant="secondary">Secondary Badge</Badge>,
      description: "This is the secondary variant of the badge component.",
    },
    {
      name: "destructive",
      label: "Destructive",
      component: <Badge variant="destructive">Destructive Badge</Badge>,
      description: "This is the destructive variant of the badge component.",
    },
    {
      name: "outline",
      label: "Outline",
      component: <Badge variant="outline">Outline Badge</Badge>,
      description: "This is the outline variant of the badge component.",
    },
    {
      name: "ghost",
      label: "Ghost",
      component: <Badge variant="ghost">Ghost Badge</Badge>,
      description: "This is the ghost variant of the badge component.",
    },
    {
      name: "purple",
      label: "Purple",
      component: <Badge variant="purple">Purple Badge</Badge>,
      description: "This is the purple variant of the badge component.",
    },
    {
      name: "orange",
      label: "Orange",
      component: <Badge variant="orange">Orange Badge</Badge>,
      description: "This is the orange variant of the badge component.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Badge</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-badge.json`}
          command={"pnpm dlx shadcn@latest add crazxy-badge"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a badge component with customizable variants, sizes, and
        styles.
      </p>

      <ComponentShowcase
        variants={variants}
        title="A simple crazxy badge component"
        defaultVariant="default"
      />

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-badge.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { Badge } from "@/components/crazxy-ui/badge";`}</CodeSnippet>
      <CodeSnippet>{`<Badge variant="default">Default Badge</Badge>`}</CodeSnippet>
      <CodeSnippet>{`<Badge variant="secondary">Secondary Badge</Badge>`}</CodeSnippet>
      <CodeSnippet>{`<Badge variant="purple" size="lg">Large Purple Badge</Badge>`}</CodeSnippet>
    </div>
  );
}
