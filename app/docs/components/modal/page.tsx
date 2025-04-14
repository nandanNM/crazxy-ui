import CopyCommandButton from "../copy-command-button";
import { Separator } from "@/components/ui/separator";
import InstallationCommands from "../installation-commands";
import CodeSnippet from "../code-snippet";
import CrazyUIModalExample from "@/components/crazxy/modal/modal-view";

export default function ModalPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Modal</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-modal.json`}
          command={"pnpm dlx shadcn@latest add crazxy-modal"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a modal component with customizable sizes, animations, and
        content.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple crazxy modal component
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            {/* Example Modal */}
            <CrazyUIModalExample />
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-modal.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usages</h3>
      <Separator />
      <CodeSnippet>{`import { Modal } from "@/components/ui/crazxy-ui/modal";`}</CodeSnippet>
      <CodeSnippet>{`<Modal
  isOpen={true}
  onClose={() => alert("Modal closed")}
  title="Example Modal"
  description="This is an example modal component."
  footer={<button className="btn btn-primary">Confirm</button>}
>
  <p>This is the content inside the modal.</p>
</Modal>`}</CodeSnippet>
    </div>
  );
}
