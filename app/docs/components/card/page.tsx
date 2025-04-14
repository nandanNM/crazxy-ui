import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Card } from "@/components/crazxy/card/normal-card";

export default function CardPage() {
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
        Displays a button or a component that looks like a crazxy card.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple card button component
          </h2>
          <div className="flex items-center gap-2">{/* for v0 */}</div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            <Card
              title="Card Title"
              description="Card Description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              variant="gradient"
              className=""
            />
          </div>
        </div>
      </div>
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
