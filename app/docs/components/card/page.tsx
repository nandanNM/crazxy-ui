import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Card } from "@/components/crazxy/card/normal-card";
import ComponentShowcase from "@/components/component-showcase";

export default function CardPage() {
  const variants = [
    {
      name: "default",
      label: "Default",
      component: (
        <Card
          title="Card Title"
          variant="default"
          description="Card Description"
        />
      ),
      description: "This is the default variant of the card component.",
    },
    {
      name: "dots",
      label: "Dots",
      component: (
        <Card
          title="Card Title"
          variant="dots"
          description="Card Description"
        />
      ),
      description: "This is the dots variant of the card component.",
    },
    {
      name: "gradient",
      label: "Gradient",
      component: (
        <Card
          title="Card Title"
          variant="gradient"
          description="Card Description"
        />
      ),
      description: "This is the gradient variant of the card component.",
    },
    {
      name: "plus",
      label: "Plus",
      component: (
        <Card
          title="Card Title"
          variant="plus"
          description="Card Description"
        />
      ),
      description: "This is the plus variant of the card component.",
    },
    {
      name: "neubrutalism",
      label: "Neubrutalism",
      component: (
        <Card
          title="Card Title"
          variant="neubrutalism"
          description="Card Description"
        />
      ),
      description: "This is the neubrutalism variant of the card component.",
    },
    {
      name: "corners",
      label: "Corners",
      component: (
        <Card
          title="Card Title"
          variant="corners"
          description="Card Description"
        />
      ),
      description: "This is the corners variant of the card component.",
    },
    {
      name: "inner",
      label: "Inner",
      component: (
        <Card
          title="Card Title"
          variant="inner"
          description="Card Description"
        />
      ),
      description: "This is the inner variant of the card component.",
    },
    {
      name: "lifted",
      label: "Lifted",
      component: (
        <Card
          title="Card Title"
          variant="lifted"
          description="Card Description"
        />
      ),
      description: "This is the lifted variant of the card component.",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-card.json`}
          command={"pnpm dlx shadcn@latest add crazxy-card"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays a card or a component that looks like a crazxy card.
      </p>
      <ComponentShowcase
        variants={variants}
        title="A simple crazxy card component"
        defaultVariant="default"
      />
      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-button.json`}
      />
      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { Card } from "@/components/ui/crazxy-ui/card"`}</CodeSnippet>
      <CodeSnippet>{` <Card title="" description="" variant="" className=""/>`}</CodeSnippet>
    </div>
  );
}
