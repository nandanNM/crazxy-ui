import CopyCommandButton from "../copy-command-button";
import { Separator } from "@/components/ui/separator";
import InstallationCommands from "../installation-commands";
import CodeSnippet from "../code-snippet";
import CraxyCarousel from "@/components/crazxy/carousel";

export default function CarouselPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Crazxy Carousel</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-carousel.json`}
          command={"pnpm dlx shadcn@latest add crazxy-carousel"}
        />
      </div>

      <p className="text-muted-foreground">
        A responsive and accessible carousel component for cycling through
        elements like a slideshow.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple CrazxyCarousel component
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            <CraxyCarousel
              className="max-w-[400px]"
              images={[
                "/carousell/image1.jpg",
                "/carousell/image2.jpg",
                "/carousell/image3.jpg",
              ]}
            />
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-carousel.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {CraxyCarousel} from "@/components/ui/crazxy-ui/carousel"`}</CodeSnippet>
      <h3 className="text-lg font-bold mt-10">Examples</h3>

      <Separator />

      <CodeSnippet>{` <CraxyCarousel
              className="max-w-[400px]"
              images={[
                "/carousell/image1.jpg",
                "/carousell/image2.jpg",
                "/carousell/image3.jpg",
                ]}
            />`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Props</h3>
      <Separator />
      <div className="mt-4 space-y-4">
        <div>
          <h4 className="font-medium">CarouselItem Props</h4>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">
                className
              </code>
              : Additional CSS classes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
