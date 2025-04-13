"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

import type { SidebarItem } from "./sidebar"

interface SidebarNavigationProps {
  items: SidebarItem[]
}

export function SidebarNavigation({ items }: SidebarNavigationProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => (
            <div key={item.title}>
              {index > 0 && items[index - 1].items && !item.items && <SidebarSeparator />}
              <SidebarMenuItem>
                {item.items ? (
                  <>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      onClick={() => toggleSection(item.title)}
                      className="flex w-full items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        {item.icon && <item.icon className="h-5 w-5" />}
                        <span>{item.title}</span>
                      </div>
                      {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                      <ChevronDown
                        className={cn(
                          "ml-auto h-4 w-4 shrink-0 transition-transform",
                          openSections[item.title] && "rotate-180",
                        )}
                      />
                    </SidebarMenuButton>
                    {openSections[item.title] && (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild={!!subItem.href}
                              isActive={subItem.isActive}
                              onClick={subItem.onClick}
                            >
                              {subItem.href ? (
                                <Link href={subItem.href}>
                                  <ChevronRight className="mr-1 h-3 w-3" />
                                  {subItem.title}
                                </Link>
                              ) : (
                                <button onClick={subItem.onClick}>
                                  <ChevronRight className="mr-1 h-3 w-3" />
                                  {subItem.title}
                                </button>
                              )}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </>
                ) : (
                  <>
                    <SidebarMenuButton asChild={!!item.href} isActive={item.isActive} onClick={item.onClick}>
                      {item.href ? (
                        <Link href={item.href} className="flex items-center gap-2">
                          {item.icon && <item.icon className="h-5 w-5" />}
                          <span>{item.title}</span>
                        </Link>
                      ) : (
                        <button className="flex items-center gap-2">
                          {item.icon && <item.icon className="h-5 w-5" />}
                          <span>{item.title}</span>
                        </button>
                      )}
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </>
                )}
              </SidebarMenuItem>
            </div>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
