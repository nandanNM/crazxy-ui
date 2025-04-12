import { Skeleton } from "@/components/ui/skeleton"
import { ImageIcon } from "lucide-react"

export function ImagePlaceholderSkeleton() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="relative grid h-36 w-36 place-items-center rounded-lg bg-muted">
        <ImageIcon className="h-12 w-12 text-muted-foreground" />
      </div>
      <div className="w-max space-y-2">
        <Skeleton className="h-3 w-56 rounded-full" />
        <Skeleton className="h-2 w-72 rounded-full" />
        <Skeleton className="h-2 w-72 rounded-full" />
        <Skeleton className="h-2 w-72 rounded-full" />
        <Skeleton className="h-2 w-72 rounded-full" />
        <Skeleton className="h-2 w-72 rounded-full" />
        <Skeleton className="h-2 w-72 rounded-full" />
      </div>
    </div>
  )
}
