"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  glowClassName?: string;
  aurora?: boolean;
}

export function AuroraButton({
  className,
  children,
  glowClassName,
  aurora,
  ...props
}: ButtonProps) {
  return (
    <div className="relative">
      {/* Gradient border container */}
      {aurora && (
        <div
          className={cn(
            "absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all",
            "group-hover:opacity-100 group-hover:blur-xl",
            glowClassName,
          )}
        />
      )}

      {/* Button */}
      <button
        className={cn(
          "relative rounded-lg flex items-center justify-center bg-slate-950/90 cursor-pointer px-4 py-2",
          "text-slate-100 shadow-xl",
          "transition-all hover:bg-slate-950/70",
          "group border border-slate-800",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
