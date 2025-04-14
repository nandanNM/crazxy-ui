import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { CardPlaceholderSkeleton } from "@/components/crazxy/skeletons/card-placeholder-skeleton";
import { VideoPlaceholderSkeleton } from "@/components/crazxy/skeletons/video-placeholder-skeleton";
import { ImagePlaceholderSkeleton } from "@/components/crazxy/skeletons/image-placeholder-skeleton";

export default function SkeletonPage() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Skeleton Components</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-skeleton.json`}
          command={"pnpm dlx shadcn@latest add crazxy-skeleton"}
        />
      </div>
      <p className="text-muted-foreground">
        Skeleton components are placeholders used to indicate loading states for
        various UI elements.
      </p>

      {/* Card Placeholder Skeleton */}
      <h2 className="text-xl font-semibold">Card Placeholder Skeleton</h2>
      <p className="text-muted-foreground">
        A skeleton placeholder for card components, useful for loading states in
        card-based layouts.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4">
        <CardPlaceholderSkeleton />
      </div>
      <CodeSnippet>{`import { CardPlaceholderSkeleton } from "@/components/crazxy/skeletons/card-placeholder-skeleton";`}</CodeSnippet>
      <CodeSnippet>{`<CardPlaceholderSkeleton />`}</CodeSnippet>

      <Separator />

      {/* Video Placeholder Skeleton */}
      <h2 className="text-xl font-semibold">Video Placeholder Skeleton</h2>
      <p className="text-muted-foreground">
        A skeleton placeholder for video components, ideal for video players or
        media previews.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4">
        <VideoPlaceholderSkeleton />
      </div>
      <CodeSnippet>{`import { VideoPlaceholderSkeleton } from "@/components/crazxy/skeletons/video-placeholder-skeleton";`}</CodeSnippet>
      <CodeSnippet>{`<VideoPlaceholderSkeleton />`}</CodeSnippet>

      <Separator />

      {/* Image Placeholder Skeleton */}
      <h2 className="text-xl font-semibold">Image Placeholder Skeleton</h2>
      <p className="text-muted-foreground">
        A skeleton placeholder for image components, perfect for image galleries
        or media-heavy layouts.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4">
        <ImagePlaceholderSkeleton />
      </div>
      <CodeSnippet>{`import { ImagePlaceholderSkeleton } from "@/components/crazxy/skeletons/image-placeholder-skeleton";`}</CodeSnippet>
      <CodeSnippet>{`<ImagePlaceholderSkeleton />`}</CodeSnippet>

      <Separator />

      {/* Installation Section */}
      <h3 className="text-lg font-bold">Installation</h3>
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-skeleton.json`}
      />
    </div>
  );
}
