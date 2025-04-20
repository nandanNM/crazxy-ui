import Link from "next/link";
import React from "react";

export default function SiteFooter() {
  return (
    <footer className="flex h-14 shrink-0 items-center gap-2 border-t border-dashed">
      <div className="flex w-full h-full items-center gap-1 px-4 lg:gap-2 lg:px-6 max-w-[1400px] mx-auto border-dashed border-l border-r">
        <p className="text-xs md:text-sm text-muted-foreground">
          Built by{" "}
          <Link href="" className="underline" target="_blank">
            CrazxyUI Team
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/nandanNM/crazxy-ui"
            className="underline"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
