"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarMenuItem } from "./ui/sidebar";
import { SidebarMenuButton } from "./ui/sidebar";
import { Badge } from "@/components/crazxy/badge";

type SidebarItemProps = {
  item: {
    title: string;
    url: string;
    new?: boolean;
  };
};

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.url;

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link
          href={item.url}
          className="relative inline-flex overflow-hidden rounded-xl  sm:flex "
          tabIndex={-1}
        >
          {item.title}
          {item.new && (
            <Badge size="sm" className="absolute  right-1">
              New
            </Badge>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
