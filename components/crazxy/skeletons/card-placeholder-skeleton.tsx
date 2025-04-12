import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ImageIcon } from "lucide-react"

export function CardPlaceholderSkeleton() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0">
        <div className="relative grid h-56 place-items-center bg-muted">
          <ImageIcon className="h-12 w-12 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-6">
        <Skeleton className="h-3 w-56 rounded-full" />
        <Skeleton className="h-2 w-full rounded-full" />
        <Skeleton className="h-2 w-full rounded-full" />
        <Skeleton className="h-2 w-full rounded-full" />
        <Skeleton className="h-2 w-full rounded-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-24" />
      </CardFooter>
    </Card>
  )
}
