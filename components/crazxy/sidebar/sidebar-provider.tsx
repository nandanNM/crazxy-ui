"use client"

import type React from "react"

import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar"
import { useState } from "react"

interface SidebarProviderProps {
  children: React.ReactNode
  defaultOpen?: boolean
}

export function SidebarProvider({ children, defaultOpen = true }: SidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen)

  return <ShadcnSidebarProvider defaultOpen={defaultOpen}>{children}</ShadcnSidebarProvider>
}
