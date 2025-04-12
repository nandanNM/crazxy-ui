import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Button as CrazxyButton } from "@/components/crazxy/button/button";

export default function ButtonPage() {
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

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple crazxy button component
          </h2>

          <div className="flex items-center gap-2">{/* for v0 */}</div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            <CrazxyButton aurora={true}>Click me</CrazxyButton>
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

      <CodeSnippet>{`import { Button } from "@/components/ui/crazxy/button"`}</CodeSnippet>

      <CodeSnippet>{` <Button aurora={true}>Click me</Button>`}</CodeSnippet>
    </div>
  );
}
