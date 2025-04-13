"use client"

import { SidebarInput } from "@/components/ui/sidebar"
import { Search } from "lucide-react"

interface SidebarSearchProps {
  onSearch: (query: string) => void
}

export function SidebarSearch({ onSearch }: SidebarSearchProps) {
  return (
    <div className="p-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <SidebarInput
          type="search"
          placeholder="Search..."
          className="pl-8"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
