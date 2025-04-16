import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Alert } from "@/components/crazxy/alert";
import ComponentShowcase from "@/components/component-showcase";

export default function AlertPage() {
  const variants = [
    {
      name: "success",
      label: "Success",
      component: <Alert variant="success">This is a success alert!</Alert>,
      description: "This is the success variant of the alert component.",
    },
    {
      name: "error",
      label: "Error",
      component: <Alert variant="error">This is an error alert!</Alert>,
      description: "This is the error variant of the alert component.",
    },
    {
      name: "modern",
      label: "Modern",
      component: <Alert variant="modern">This is a modern alert!</Alert>,
      description: "This is the modern variant of the alert component.",
    },
    {
      name: "warning",
      label: "Warning",
      component: <Alert variant="warning">This is a warning alert!</Alert>,
      description: "This is the warning variant of the alert component.",
    },
    {
      name: "info",
      label: "Info",
      component: <Alert variant="info">This is an info alert!</Alert>,
      description: "This is the info variant of the alert component.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Alert</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-alert.json`}
          command={"pnpm dlx shadcn@latest add crazxy-alert"}
        />
      </div>

      <p className="text-muted-foreground">
        The Alert component is a versatile and customizable way to display
        important messages to users. With support for multiple variants and
        styles, you can easily integrate it into your application.
      </p>

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Why Choose Crazxy UI?</h2>
        <p className="text-sm mt-2">
          Crazxy UI is a modern, reusable, and fully customizable component
          library designed to help developers build beautiful and functional
          user interfaces with ease. With components like Alert, Modal, Badge,
          and more, Crazxy UI empowers you to create stunning applications
          faster than ever.
        </p>
      </div>

      <ComponentShowcase
        variants={variants}
        title="A simple crazxy alert component"
        defaultVariant="success"
      />

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-alert.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { Alert } from "@/components/crazxy-ui/alert";`}</CodeSnippet>
      <CodeSnippet>{`<Alert variant="success">This is a success alert!</Alert>`}</CodeSnippet>
      <CodeSnippet>{`<Alert variant="error" showClose onClose={() => alert("Closed!")}>
  This is an error alert with a close button!
</Alert>`}</CodeSnippet>
      <CodeSnippet>{`<Alert variant="modern" label="Modern">
  This is a modern alert with a label!
</Alert>`}</CodeSnippet>
    </div>
  );
}
