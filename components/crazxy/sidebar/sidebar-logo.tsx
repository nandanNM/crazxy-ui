import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import Image from "next/image"

interface SidebarLogoProps {
  src?: string
  alt?: string
  title: string
}

export function SidebarLogo({ src, alt = "Logo", title }: SidebarLogoProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="flex items-center gap-2 p-2">
          {src ? (
            <Image src={src || "/placeholder.svg"} alt={alt} width={32} height={32} className="h-8 w-8 rounded-md" />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              {title.charAt(0)}
            </div>
          )}
          <span className="font-medium">{title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
