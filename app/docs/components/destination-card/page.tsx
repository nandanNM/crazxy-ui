import { Separator } from "@/components/ui/separator";
import InstallationCommands from "../installation-commands";
import CopyCommandButton from "../copy-command-button";
import CodeSnippet from "../code-snippet";
import { DestinationCard } from "@/components/crazxy/card/destination-card";

export default function FooterPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Destination Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-destination-card.json`}
          command={"pnpm dlx shadcn@latest add destination-card"}
        />
      </div>
      <p className="text-muted-foreground">
        A simple destination-card component for your application.
      </p>

      {/* component */}
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple crazxy destination-card component
          </h2>
          <div className="flex items-center gap-2">
            {/* <OpenInV0Button name="crazxy-destination-card" /> */}
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            {/* component */}
            <DestinationCard
              destination={{
                name: "New York",
                country: "United States",
                rating: 4.9,
                src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
              }}
            />
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-destination-card.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />

      <CodeSnippet>
        {`import { DestinationCard } from "@/components/ui/crazxy-ui/destination-card";`}
      </CodeSnippet>
      <CodeSnippet>{`<DestinationCard
  destination={{
  name: "New York",
  country: "United States",
  rating: 4.9,
  src: "",
  }}
/>`}</CodeSnippet>
    </div>
  );
}
