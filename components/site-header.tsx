import Link from "next/link";

import { navItems } from "@/config/nav-items";

import { ModeSwitcher } from "@/components/mode-switcher";
import MobileNav from "./mobile-nav";
import { GitHubStarButton } from "@/components/crazxy/button/gitHubStar-button";

export function SiteHeader() {
  return (
    <header className="flex sticky top-0 z-50 h-14 shrink-0 items-center gap-2 border-b border-dashed bg-background/95">
      <div className="flex w-full items-center h-full gap-1 px-4 md:gap-5 md:px-6 max-w-[1400px] mx-auto border-dashed border-l border-r">
        <Link href="/" className="hidden md:flex items-center gap-2">
          {/* image */}
          <h2 className={` hidden font-bold md:inline-block`}>crazxyUI</h2>
        </Link>

        <div className="block md:hidden">
          <MobileNav />
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navItems.header.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="p-1">
            <GitHubStarButton />
          </div>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
