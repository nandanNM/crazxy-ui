import { cn } from "@/lib/utils"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export interface Category {
  id: number
  name: string
  description: string
  src: string
  alt: string
  href?: string
}

interface ParallaxBackgroundProps {
  categories: Category[]
  className?: string
  overlayColor?: string
  textColor?: string
  sectionHeight?: string
}

export default function ParallaxBackground({
  categories,
  className,
  overlayColor = "bg-black",
  textColor = "text-white",
  sectionHeight = "h-[50vh]",
}: ParallaxBackgroundProps) {
  return (
    <div className={cn("min-h-screen w-full", className)}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={cn("relative bg-fixed bg-center bg-no-repeat bg-cover w-full", sectionHeight)}
          style={{ backgroundImage: `url(${category.src})` }}
        >
          <div className={cn("absolute inset-0 bg-opacity-50 flex items-center justify-center", overlayColor)}>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className={cn("text-center p-6", textColor)}>
                {category.href ? (
                  <Link href={category.href} className="group">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 group-hover:underline">{category.name}</h2>
                    <p className="text-lg md:text-xl">{category.description}</p>
                  </Link>
                ) : (
                  <>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h2>
                    <p className="text-lg md:text-xl">{category.description}</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}
