import Link from "next/link";

import { navItems } from "@/config/nav-items";

import { ModeSwitcher } from "@/components/mode-switcher";
import MobileNav from "./mobile-nav";
import { GitHubStarButton } from "@/components/crazxy/button/gitHubStar-button";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="bg-background/95 sticky top-0 z-50 flex h-14 shrink-0 items-center gap-2 border-b border-dashed">
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center gap-1 border-r border-l border-dashed px-4 md:gap-5 md:px-6">
        <Link href="/" className="hidden items-center gap-2 md:flex">
          {/* image */}
          <Image height={75} width={75} src="/logo.png" alt="logo" />
          <h2 className={`hidden font-bold md:inline-block`}>Crazxy UI</h2>
        </Link>

        <div className="block md:hidden">
          <MobileNav />
        </div>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          {navItems.header.map(item => (
            <Link
              href={item.href}
              key={item.href}
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="p-1">
            <GitHubStarButton href="https://github.com/nandanNM/crazxy-ui" />
          </div>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
