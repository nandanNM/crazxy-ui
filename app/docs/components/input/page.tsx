import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Input } from "@/components/crazxy/input/input";
import { PasswordInput } from "@/components/crazxy/input/password-input";
import ComponentShowcase from "@/components/component-showcase";

export default function InputPage() {
  const inputVariants = [
    {
      name: "default",
      label: "Default Input",
      component: <Input placeholder="Enter text here" />,
      description: "This is the default input field.",
    },
    {
      name: "search",
      label: "Search Input",
      component: <Input type="search" placeholder="Search..." />,
      description: "This is a search input field.",
    },
  ];

  const passwordInputVariants = [
    {
      name: "default",
      label: "Default Password Input",
      component: <PasswordInput placeholder="Enter your password" />,
      description: "This is the default password input field.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Input Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <h1 className="text-3xl font-bold">Input</h1>
          <CopyCommandButton
            copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-input.json`}
            command={"pnpm dlx shadcn@latest add crazxy-input"}
          />
        </div>

        <p className="text-muted-foreground">
          The Input component is a versatile and customizable text field for
          capturing user input. It supports various types like text, search, and
          file inputs.
        </p>

        <ComponentShowcase
          variants={inputVariants}
          title="A simple crazxy input component"
          defaultVariant="default"
        />

        <h3 className="text-lg font-bold">Installation</h3>
        <Separator />
        <InstallationCommands
          packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-input.json`}
        />

        <h3 className="text-lg font-bold mt-10">Usages</h3>
        <Separator />
        <CodeSnippet>{`import { Input } from "@/components/ui/crazxy-ui/input";`}</CodeSnippet>
        <CodeSnippet>{`<Input placeholder="Enter text here" />`}</CodeSnippet>
        <CodeSnippet>{`<Input type="search" placeholder="Search..." />`}</CodeSnippet>
      </div>

      <Separator className="my-8" />

      {/* Password Input Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <h1 className="text-3xl font-bold">Password Input</h1>
          <CopyCommandButton
            copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-password-input.json`}
            command={"pnpm dlx shadcn@latest add crazxy-password-input"}
          />
        </div>

        <p className="text-muted-foreground">
          The Password Input component is a secure and user-friendly input field
          for capturing passwords. It includes a toggle to show or hide the
          password.
        </p>

        <ComponentShowcase
          variants={passwordInputVariants}
          title="A simple crazxy password input component"
          defaultVariant="default"
        />

        <h3 className="text-lg font-bold">Installation</h3>
        <Separator />
        <InstallationCommands
          packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-password-input.json`}
        />

        <h3 className="text-lg font-bold mt-10">Usages</h3>
        <Separator />
        <CodeSnippet>{`import { PasswordInput } from "@/components/ui/crazxy-ui/password-input";`}</CodeSnippet>
        <CodeSnippet>{`<PasswordInput placeholder="Enter your password" />`}</CodeSnippet>
      </div>
    </div>
  );
}
