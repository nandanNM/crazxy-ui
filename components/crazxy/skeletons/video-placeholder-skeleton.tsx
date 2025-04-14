import { cn } from "@/lib/utils";
import { Video } from "lucide-react";
interface VideoPlaceholderSkeletonProps {
  className?: string;
}
export function VideoPlaceholderSkeleton({
  className,
}: VideoPlaceholderSkeletonProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-lg border p-4",
        className,
      )}
    >
      <Video className="h-12 w-12 text-muted-foreground" />
    </div>
  );
}
