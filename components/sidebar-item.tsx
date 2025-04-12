"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarMenuItem } from "./ui/sidebar";
import { SidebarMenuButton } from "./ui/sidebar";

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
          className=" relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80"
          tabIndex={-1}>
          {item.title}
          {item.new && (
            <span className="rounded-lg inline-flex items-center px-2 py-0.5 text-[9px] tracking-wide font-medium uppercase bg-linear-to-r from-emerald-400/5 via-emerald-500/5 to-teal-500/5 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20 dark:ring-emerald-400/20 shadow-[0_0_10px_-3px_rgba(16,185,129,0.15)] dark:shadow-[0_0_10px_-3px_rgba(16,185,129,0.2)]">
              new
            </span>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
