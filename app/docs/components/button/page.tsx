import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Button } from "@/components/crazxy/button/button";
import ComponentShowcase from "@/components/component-showcase";

export default function ButtonPage() {
  const variants = [
    {
      name: "primary",
      label: "Primary",
      component: <Button variant="primary">Click me</Button>,
      description: "This is the pri primary of the button component.",
    },
    {
      name: "accent",
      label: "Accent",
      component: <Button variant="accent">Click me</Button>,
      description: "This is the accent variant of the button component.",
    },
    {
      name: "destructive",
      label: "Destructive",
      component: <Button variant="destructive">Click me</Button>,
      description: "This is the destructive variant of the button component.",
    },
    {
      name: "secondary",
      label: "Secondary",
      component: <Button variant="secondary">Click me</Button>,
      description: "This is the secondary variant of the button component.",
    },
    {
      name: "minimal",
      label: "Minimal",
      component: <Button variant="minimal">Click me</Button>,
      description: "This is the minimal variant of the button component.",
    },
    {
      name: "icon",
      label: "Icon",
      component: <Button variant="icon">Click me</Button>,
      description: "This is the icon variant of the button component.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Button</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-button.json`}
          command={"pnpm dlx shadcn@latest add crazxy-button"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a button or a component that looks like a crazxy button.
      </p>
      {/* v0 Btton */}
      <div className="justify-end flex ">
        {/* <OpenInV0Button name="crazxy-button" /> */}
      </div>

      <ComponentShowcase
        variants={variants}
        title="A simple crazxy button component"
        defaultVariant="primary"
      />

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-button.json`}
      />
      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { Button } from "@/components/ui/crazxy-ui/button"`}</CodeSnippet>
      <CodeSnippet>{` <Button>Click me</Button>`}</CodeSnippet>
    </div>
  );
}
