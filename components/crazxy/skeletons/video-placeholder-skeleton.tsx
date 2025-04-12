import { Video } from "lucide-react"

export function VideoPlaceholderSkeleton() {
  return (
    <div className="grid h-full min-h-[160px] max-h-[300px] w-full max-w-xs place-items-center rounded-lg bg-muted">
      <Video className="h-12 w-12 text-muted-foreground" />
    </div>
  )
}