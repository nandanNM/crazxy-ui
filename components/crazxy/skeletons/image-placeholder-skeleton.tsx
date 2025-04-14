import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
interface ImagePlaceholderSkeletonProps {
  className?: string;
}
export function ImagePlaceholderSkeleton({
  className,
}: ImagePlaceholderSkeletonProps) {
  return (
    <div
      className={cn(
        "  flex flex-col items-center justify-center gap-4 rounded-lg border p-4",
        className,
      )}
    >
      <div className="relative grid h-36 w-36 place-items-center rounded-lg bg-muted">
        <ImageIcon className="h-12 w-12 text-muted-foreground" />
      </div>
      <div className="w-max space-y-2">
        <div className="h-3 w-56 rounded-full max-w-full space-y-2" />
        <div className="h-2 w-72 rounded-full max-w-full space-y-2" />
        <div className="h-2 w-72 rounded-full max-w-full space-y-2" />
        <div className="h-2 w-72 rounded-full max-w-full space-y-2" />
        <div className="h-2 w-72 rounded-full max-w-full space-y-2" />
        <div className="h-2 w-72 rounded-full max-w-full space-y-2" />
        <div className="h-2 w-72 rounded-full max-w-full space-y-2" />
      </div>
    </div>
  );
}
