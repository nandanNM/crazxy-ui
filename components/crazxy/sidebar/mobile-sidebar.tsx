"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Sidebar, type SidebarItem } from "./sidebar"

interface MobileSidebarProps {
  variant?: "sidebar" | "floating" | "inset"
  side?: "left" | "right"
  showSearch?: boolean
  showLogo?: boolean
  showCta?: boolean
  logoSrc?: string
  logoAlt?: string
  title?: string
  items: SidebarItem[]
}

export function MobileSidebar({
  variant = "sidebar",
  side = "left",
  showSearch = false,
  showLogo = true,
  showCta = false,
  logoSrc,
  logoAlt,
  title = "Menu",
  items = [],
}: MobileSidebarProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className="p-0">
        <Sidebar
          variant={variant}
          side={side}
          collapsible="none"
          showSearch={showSearch}
          showLogo={showLogo}
          showCta={showCta}
          logoSrc={logoSrc}
          logoAlt={logoAlt}
          title={title}
          items={items}
        />
      </SheetContent>
    </Sheet>
  )
}
