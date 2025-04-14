import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Loader } from "@/components/crazxy/loader";
import ComponentShowcase from "@/components/component-showcase";

export default function LoaderPage() {
  const variants = [
    {
      name: "default",
      label: "Default",
      component: <Loader variant="default" size="md" />,
      description: "This is the default variant of the loader component.",
    },
    {
      name: "nested",
      label: "Nested",
      component: (
        <Loader variant="default" size="lg" nested nestedVariant="secondary" />
      ),
      description:
        "This is a nested loader with a secondary nested variant inside a default loader.",
    },
    {
      name: "secondary",
      label: "Secondary",
      component: <Loader variant="secondary" size="md" />,
      description: "This is the secondary variant of the loader component.",
    },
    {
      name: "destructive",
      label: "Destructive",
      component: <Loader variant="destructive" size="md" />,
      description: "This is the destructive variant of the loader component.",
    },
    {
      name: "outline",
      label: "Outline",
      component: <Loader variant="outline" size="md" />,
      description: "This is the outline variant of the loader component.",
    },

    {
      name: "large",
      label: "Large",
      component: <Loader size="lg" />,
      description: "This is the large size of the loader component.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Loader</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-loader.json`}
          command={"pnpm dlx shadcn@latest add crazxy-loader"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays a loader component with customizable sizes, variants, and
        animations.
      </p>

      <ComponentShowcase
        variants={variants}
        title="A simple crazxy loader component"
        defaultVariant="default"
      />

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-loader.json`}
      />
      <h3 className="text-lg font-bold mt-10">Usages</h3>
      <Separator />
      <CodeSnippet>{`import { Loader } from "@@/components/ui/crazxy-ui/loader";`}</CodeSnippet>
      <CodeSnippet>{`<Loader variant="default" size="md" />`}</CodeSnippet>
      <CodeSnippet>{`<Loader variant="default" size="lg" nested nestedVariant="secondary" />`}</CodeSnippet>
      <CodeSnippet>{`<Loader variant="default" size="lg" color="#060270" nested nestedColor="#CC6CE7" />`}</CodeSnippet>
    </div>
  );
}
