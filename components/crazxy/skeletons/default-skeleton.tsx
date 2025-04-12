import { Skeleton } from "@/components/ui/skeleton"

export function DefaultSkeleton() {
  return (
    <div className="max-w-full space-y-2">
      <Skeleton className="h-3 w-56 rounded-full" />
      <Skeleton className="h-2 w-72 rounded-full" />
      <Skeleton className="h-2 w-72 rounded-full" />
      <Skeleton className="h-2 w-72 rounded-full" />
      <Skeleton className="h-2 w-72 rounded-full" />
    </div>
  )
}
