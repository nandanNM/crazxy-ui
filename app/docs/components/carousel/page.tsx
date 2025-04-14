import CopyCommandButton from "../copy-command-button";
import { Separator } from "@/components/ui/separator";
import InstallationCommands from "../installation-commands";
import CodeSnippet from "../code-snippet";
import CraxyCarousel from "@/components/crazxy/carousel";

export default function CarouselPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">CrazxyCarousel</h1>
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
                "/placeholder.svg",
                "/placeholder.svg",
                "/placeholder.svg",
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

      <CodeSnippet>{`import { Carousel, CarouselItem } from "@/components/ui/crazxy/carousel"`}</CodeSnippet>

      <CodeSnippet>{`<Carousel>
  <CarouselItem>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold">First Slide</h3>
      <p>This is the first slide of the carousel.</p>
    </div>
  </CarouselItem>
  
      <CarouselItem>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold">Second Slide</h3>
      <p>This is the second slide of the carousel.</p>
    </div>
  </CarouselItem>
</Carousel>`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Props</h3>

      <Separator />

      <div className="mt-4 space-y-4">
        <div>
          <h4 className="font-medium">Carousel Props</h4>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">
                autoPlay
              </code>
              : Enable automatic slide transitions (default: false)
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">
                interval
              </code>
              : Time between auto-play transitions in ms (default: 5000)
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">
                showControls
              </code>
              : Show navigation buttons (default: true)
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">
                showIndicators
              </code>
              : Show indicator dots (default: true)
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">
                className
              </code>
              : Additional CSS classes
            </li>
          </ul>
        </div>

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

      <h3 className="text-lg font-bold mt-10">Examples</h3>

      <Separator />

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">Auto-playing Carousel</h4>
          <CodeSnippet>{`<Carousel autoPlay={true} interval={3000}>
  <CarouselItem>Slide 1</CarouselItem>
  <CarouselItem>Slide 2</CarouselItem>
  <CarouselItem>Slide 3</CarouselItem>
</Carousel>`}</CodeSnippet>
        </div>

        <div>
          <h4 className="font-medium mb-2">Carousel without Controls</h4>
          <CodeSnippet>{`<Carousel showControls={false}>
  <CarouselItem>Slide 1</CarouselItem>
  <CarouselItem>Slide 2</CarouselItem>
</Carousel>`}</CodeSnippet>
        </div>

        <div>
          <h4 className="font-medium mb-2">Carousel without Indicators</h4>
          <CodeSnippet>{`<Carousel showIndicators={false}>
  <CarouselItem>Slide 1</CarouselItem>
  <CarouselItem>Slide 2</CarouselItem>
</Carousel>`}</CodeSnippet>
        </div>
      </div>
    </div>
  );
}
