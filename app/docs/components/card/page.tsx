import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Card } from "@/components/crazxy/card/normal-card";
import ComponentShowcase from "@/components/component-showcase";
import { ImageCard } from "@/components/crazxy/card/image-card";
import {
  FlipCard,
  FlipCardFront,
  FlipCardBack,
  FlipCardTitle,
  FlipCardContent,
  FlipCardImage,
} from "@/components/crazxy/card/flip-card";

export default function CardPage() {
  const cardVariants = [
    {
      name: "default",
      label: "Default",
      component: (
        <Card
          title="Card Title"
          variant="default"
          description="Card Description"
        />
      ),
      description: "This is the default variant of the card component.",
    },
    {
      name: "dots",
      label: "Dots",
      component: (
        <Card
          title="Card Title"
          variant="dots"
          description="Card Description"
        />
      ),
      description: "This is the dots variant of the card component.",
    },
    {
      name: "gradient",
      label: "Gradient",
      component: (
        <Card
          title="Card Title"
          variant="gradient"
          description="Card Description"
        />
      ),
      description: "This is the gradient variant of the card component.",
    },
    {
      name: "plus",
      label: "Plus",
      component: (
        <Card
          title="Card Title"
          variant="plus"
          description="Card Description"
        />
      ),
      description: "This is the plus variant of the card component.",
    },
    {
      name: "neubrutalism",
      label: "Neubrutalism",
      component: (
        <Card
          title="Card Title"
          variant="neubrutalism"
          description="Card Description"
        />
      ),
      description: "This is the neubrutalism variant of the card component.",
    },
    {
      name: "corners",
      label: "Corners",
      component: (
        <Card
          title="Card Title"
          variant="corners"
          description="Card Description"
        />
      ),
      description: "This is the corners variant of the card component.",
    },
    {
      name: "inner",
      label: "Inner",
      component: (
        <Card
          title="Card Title"
          variant="inner"
          description="Card Description"
        />
      ),
      description: "This is the inner variant of the card component.",
    },
    {
      name: "lifted",
      label: "Lifted",
      component: (
        <Card
          title="Card Title"
          variant="lifted"
          description="Card Description"
        />
      ),
      description: "This is the lifted variant of the card component.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Section: Normal Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-card.json`}
          command={"pnpm dlx shadcn@latest add crazxy-card"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays a card or a component that looks like a crazxy card.
      </p>
      <ComponentShowcase
        variants={cardVariants}
        title="A simple crazxy card component"
        defaultVariant="default"
      />
      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-card.json`}
      />
      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { Card } from "@/components/ui/crazxy-ui/card"`}</CodeSnippet>
      <CodeSnippet>{` <Card title="" description="" variant="" className=""/>`}</CodeSnippet>
      <Separator />
      {/* Section: Image Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Image Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-image-card.json`}
          command={"pnpm dlx shadcn@latest add crazxy-image-card"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays a card or a component that looks like a crazxy image card.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple crazxy image card component
          </h2>

          <div className="flex items-center gap-2">{/* for v0 */}</div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            {/* component */}
            <ImageCard
              image="https://plus.unsplash.com/premium_photo-1726118797535-b62b658ed887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              subtitle="Tax Management"
              title="What is Web 3?"
              buttonText="Learn More"
              className="h-78"
            />
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-image-card.json`}
      />
      <h3 className="text-lg font-bold mt-6">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { ImageCard } from "@/components/ui/crazxy-ui/image-card"`}</CodeSnippet>
      <CodeSnippet>{` <ImageCard title="Image Card Title" description="This is an image card description." imageUrl="https://via.placeholder.com/300" />`}</CodeSnippet>
      <Separator />
      {/* Section: Flip Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Flip Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-flip-card.json`}
          command={"pnpm dlx shadcn@latest add crazxy-flip-card"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays a card or a component that looks like a crazxy flip card.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">{/* for v0 */}</div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            {/* component */}
            <FlipCard size="default" className="cursor-pointer">
              {/* Front Side */}
              <FlipCardFront>
                <FlipCardImage
                  src="https://plus.unsplash.com/premium_photo-1726118797535-b62b658ed887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                  alt="Crazxy UI"
                  overlayContent={
                    <div className="text-left">
                      <div className="text-md text-white">
                        Crazxy UI Pro Plan
                      </div>
                      <div className="text-2xl font-bold text-white mt-1">
                        $0/month
                      </div>
                    </div>
                  }
                />
              </FlipCardFront>

              {/* Back Side */}
              <FlipCardBack>
                <FlipCardContent>
                  <FlipCardTitle>😜 You thought it costs money?</FlipCardTitle>
                  <p className="text-muted-foreground mt-2 max-w-xs text-center">
                    It&apos;s so free, even pirates are confused. ☠️
                  </p>
                  <button className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
                    Got it 😂
                  </button>
                </FlipCardContent>
              </FlipCardBack>
            </FlipCard>
          </div>
        </div>
      </div>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-flip-card.json`}
      />
      <h3 className="text-lg font-bold mt-6">Usage</h3>
      <Separator />
      <CodeSnippet>{`import { FlipCard, FlipCardFront, FlipCardBack, FlipCardImage } from "@/components/ui/crazxy-ui/flip-card"`}</CodeSnippet>
      <CodeSnippet>{` <FlipCard size="default" className="cursor-pointer">
  <FlipCardFront>
    <FlipCardImage
      src=""
      alt="Crazxy UI"
      overlayContent={
        <div className="text-left">
          <div>Crazxy UI Pro Plan</div>
          <div>$0/month</div>
        </div>
      }
    />
  </FlipCardFront>
  <FlipCardBack>
    <FlipCardContent>
      <FlipCardTitle>😜 You thought it costs money?</FlipCardTitle>
      <p >
        It&apos;s so free, even pirates are confused. ☠️
      </p>
      <button>
        Got it 😂
      </button>
    </FlipCardContent>
  </FlipCardBack>
</FlipCard>`}</CodeSnippet>
    </div>
  );
}
