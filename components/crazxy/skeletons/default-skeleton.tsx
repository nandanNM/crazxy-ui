import { cn } from "@/lib/utils";

interface DefaultSkeletonProps {
  className?: string;
}
export function DefaultSkeleton({ className }: DefaultSkeletonProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="h-3 w-56 rounded-full animate-pulse bg-muted" />
      <div className="h-2 w-72 rounded-full animate-pulse bg-muted" />
      <div className="h-2 w-72 rounded-full animate-pulse bg-muted" />
      <div className="h-2 w-72 rounded-full animate-pulse bg-muted" />
      <div className="h-2 w-72 rounded-full animate-pulse bg-muted" />
    </div>
  );
}
