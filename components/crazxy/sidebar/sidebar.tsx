"use client"

import type React from "react"

import { useState } from "react"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { SidebarSearch } from "./sidebar-search"
import { SidebarLogo } from "./sidebar-logo"
import { SidebarNavigation } from "./sidebar-navigation"
import { SidebarCta } from "./sidebar-cta"

interface SidebarProps {
  variant?: "sidebar" | "floating" | "inset"
  side?: "left" | "right"
  collapsible?: "offcanvas" | "icon" | "none"
  showSearch?: boolean
  showLogo?: boolean
  showCta?: boolean
  logoSrc?: string
  logoAlt?: string
  title?: string
  items: SidebarItem[]
}

export interface SidebarItem {
  title: string
  icon?: React.ElementType
  href?: string
  badge?: number | string
  isActive?: boolean
  onClick?: () => void
  items?: {
    title: string
    href?: string
    isActive?: boolean
    onClick?: () => void
  }[]
}

export function Sidebar({
  variant = "sidebar",
  side = "left",
  collapsible = "offcanvas",
  showSearch = false,
  showLogo = false,
  showCta = false,
  logoSrc,
  logoAlt = "Logo",
  title = "Sidebar",
  items = [],
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = searchQuery
    ? items.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : items

  return (
    <ShadcnSidebar variant={variant} side={side} collapsible={collapsible}>
      <SidebarHeader>
        {showLogo && <SidebarLogo src={logoSrc} alt={logoAlt} title={title} />}
        {showSearch && <SidebarSearch onSearch={setSearchQuery} />}
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavigation items={filteredItems} />
      </SidebarContent>
      {showCta && (
        <SidebarFooter>
          <SidebarCta />
        </SidebarFooter>
      )}
      <SidebarRail />
    </ShadcnSidebar>
  )
}
