"use client";

import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SiBun, SiPnpm } from "react-icons/si";
import { FaYarn, FaNpm } from "react-icons/fa";

interface InstallationCommandsProps {
  packageUrl: string;
}

export default function InstallationCommands({
  packageUrl,
}: InstallationCommandsProps) {
  const [command, setCommand] = useState(
    `pnpm dlx shadcn@latest add ${packageUrl}`,
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Command copied to clipboard");

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-zinc-800">
      <div className="bg-[#121212] text-white">
        <Tabs defaultValue="pnpm">
          <TabsList className="bg-[#121212] border-b border-zinc-800 rounded-none h-12 px-2 w-full justify-between">
            <div className="flex items-center space-x-2">
              <TabsTrigger
                value="pnpm"
                onClick={() =>
                  setCommand(`pnpm dlx shadcn@latest add ${packageUrl}`)
                }
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-x-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-lg px-2 text-white data-[state=inactive]:text-zinc-500 flex items-center gap-1 cursor-pointer"
              >
                <SiPnpm className="size-3" />
                pnpm
              </TabsTrigger>
              <TabsTrigger
                value="npm"
                onClick={() =>
                  setCommand(`npx shadcn@latest add ${packageUrl}`)
                }
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-lg px-2 text-white data-[state=inactive]:text-zinc-500 flex items-center gap-1 cursor-pointer"
              >
                <FaNpm className="size-3" />
                npm
              </TabsTrigger>
              <TabsTrigger
                value="yarn"
                onClick={() =>
                  setCommand(`yarn dlx shadcn@latest add ${packageUrl}`)
                }
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-lg px-2 text-white data-[state=inactive]:text-zinc-500 flex items-center gap-1 cursor-pointer"
              >
                <FaYarn className="size-3" />
                yarn
              </TabsTrigger>
              <TabsTrigger
                value="bun"
                onClick={() =>
                  setCommand(`bunx --bun shadcn@latest add ${packageUrl}`)
                }
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-lg px-2 text-white data-[state=inactive]:text-zinc-500 flex items-center gap-1 cursor-pointer"
              >
                <SiBun className="size-3" />
                bun
              </TabsTrigger>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-zinc-800 rounded-md hover:text-white"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="size-3" />
              ) : (
                <Clipboard className="size-3" />
              )}
            </Button>
          </TabsList>

          <TabsContent value="pnpm" className="p-4 pt-2">
            <div className="font-mono text-sm">
              pnpm dlx shadcn@latest add {packageUrl}
            </div>
          </TabsContent>

          <TabsContent value="npm" className="p-4 pt-2">
            <div className="font-mono text-sm">
              npx shadcn@latest add {packageUrl}
            </div>
          </TabsContent>

          <TabsContent value="yarn" className="p-4 pt-2">
            <div className="font-mono text-sm">
              yarn dlx shadcn@latest add {packageUrl}
            </div>
          </TabsContent>

          <TabsContent value="bun" className="p-4 pt-2">
            <div className="font-mono text-sm">
              bunx --bun shadcn@latest add {packageUrl}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
