import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Avatar } from "@/components/crazxy/avatar";
import ComponentShowcase from "@/components/component-showcase";

export default function AvatarPage() {
  const variants = [
    {
      name: "rounded",
      label: "Rounded",
      component: <Avatar shape="rounded" size="lg" src="/avatar.jpeg" />,
      description: "This is the rounded shape of the avatar component.",
    },
    {
      name: "squared",
      label: "Squared",
      component: <Avatar shape="squared" size="lg" src="/avatar.jpeg" />,
      description: "This is the squared shape of the avatar component.",
    },
    {
      name: "small",
      label: "Small",
      component: <Avatar size="sm" src="/avatar.jpeg" />,
      description: "This is the small size of the avatar component.",
    },
    {
      name: "medium",
      label: "Medium",
      component: <Avatar size="md" src="/avatar.jpeg" />,
      description: "This is the medium size of the avatar component.",
    },
    {
      name: "large",
      label: "Large",
      component: <Avatar size="lg" src="/avatar.jpeg" />,
      description: "This is the large size of the avatar component.",
    },
    {
      name: "extra-large",
      label: "Extra Large",
      component: <Avatar size="xl" src="/avatar.jpeg" />,
      description: "This is the extra-large size of the avatar component.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Avatar</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-avatar.json`}
          command={"pnpm dlx shadcn@latest add crazxy-avatar"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays a user avatar component with support for placeholders, custom
        sizes, and styling.
      </p>

      <ComponentShowcase
        variants={variants}
        title="A simple crazxy avatar component"
        defaultVariant="rounded"
      />

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-avatar.json`}
      />
      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { Avatar } from "@/components/ui/crazxy-ui/avatar";`}</CodeSnippet>
      <CodeSnippet>{`<Avatar size="md" src="/avatar.jpeg" />`}</CodeSnippet>
    </div>
  );
}
