"use client"
import { LayoutDashboard, ShoppingBag, Inbox, User, Settings, LogOut } from "lucide-react"

import { SidebarProvider } from "@/components/crazxy/sidebar/sidebar-provider"
import { Sidebar } from "@/components/crazxy/sidebar/sidebar"
import { MobileSidebar } from "@/components/crazxy/sidebar/mobile-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function SidebarExamplePage() {
  // Example navigation items
  const navigationItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "#dashboard",
      isActive: true,
      items: [
        {
          title: "Analytics",
          href: "#analytics",
        },
        {
          title: "Reporting",
          href: "#reporting",
        },
        {
          title: "Projects",
          href: "#projects",
        },
      ],
    },
    {
      title: "E-Commerce",
      icon: ShoppingBag,
      href: "#ecommerce",
      items: [
        {
          title: "Orders",
          href: "#orders",
        },
        {
          title: "Products",
          href: "#products",
        },
      ],
    },
    {
      title: "Inbox",
      icon: Inbox,
      href: "#inbox",
      badge: "14",
    },
    {
      title: "Profile",
      icon: User,
      href: "#profile",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "#settings",
    },
    {
      title: "Log Out",
      icon: LogOut,
      href: "#logout",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            variant="sidebar"
            showSearch={true}
            showLogo={true}
            showCta={true}
            title="Dashboard"
            items={navigationItems}
          />
        </div>

        {/* Main Content */}
        <SidebarInset>
          <header className="flex h-16 items-center border-b px-4">
            {/* Mobile Sidebar Trigger */}
            <div className="md:hidden">
              <MobileSidebar
                showSearch={true}
                showLogo={true}
                showCta={true}
                title="Dashboard"
                items={navigationItems}
              />
            </div>

            {/* Desktop Sidebar Trigger */}
            <div className="hidden md:block">
              <SidebarTrigger />
            </div>

            <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
          </header>

          <main className="p-6">
            <div className="rounded-lg border p-6">
              <h2 className="text-lg font-medium">Welcome to your dashboard</h2>
              <p className="mt-2 text-muted-foreground">
                This is an example of a sidebar implementation using shadcn/ui components. It includes all the features
                from the Material Tailwind examples.
              </p>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
