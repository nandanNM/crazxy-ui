import React from "react";
import CopyCommandButton from "../copy-command-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/crazxy/accordion/accordion";
import { Separator } from "@/components/ui/separator";
import InstallationCommands from "../installation-commands";
import CodeSnippet from "../code-snippet";

export default function AccordionPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Accordion</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-accordion.json`}
          command={"pnpm dlx shadcn@latest add crazxy-accordion"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an accordion component that allows users to toggle sections of
        content.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple crazxy accordion component
          </h2>

          <div className="flex items-center gap-2">{/* for v0 */}</div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            {/* component */}
            <Accordion>
              <AccordionItem value="what-is-crazy-ui">
                <AccordionTrigger value="what-is-crazy-ui">
                  What is Crazy UI?
                </AccordionTrigger>
                <AccordionContent value="what-is-crazy-ui">
                  A beautifully reusable and fully customizable UI component
                  library built for speed, flexibility, and aesthetics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-to-use">
                <AccordionTrigger value="how-to-use">
                  How do I use Crazy UI?
                </AccordionTrigger>
                <AccordionContent value="how-to-use">
                  Simply install the package, import the components, and start
                  building beautiful interfaces with ease!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-accordion.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/crazxy-ui/accordion"`}</CodeSnippet>

      <CodeSnippet>{`<Accordion>
  <AccordionItem value="example">
    <AccordionTrigger value="example">Example Trigger</AccordionTrigger>
    <AccordionContent value="example">Example Content</AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeSnippet>
    </div>
  );
}
