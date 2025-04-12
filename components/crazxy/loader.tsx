"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const loaderVariants = cva(
  "relative rounded-full animate-spin border-4 border-transparent flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "border-t-primary",
        secondary: "border-t-blue-400 text-blue-400",
        destructive: "border-t-destructive",
        outline: "border-t-muted-foreground",
        ghost: "border-t-muted",
      },
      size: {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
        xl: "w-20 h-20",
      },
      nested: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        nested: true,
        size: "sm",
        class: "w-6 h-6",
      },
      {
        nested: true,
        size: "md",
        class: "w-8 h-8",
      },
      {
        nested: true,
        size: "lg",
        class: "w-12 h-12",
      },
      {
        nested: true,
        size: "xl",
        class: "w-16 h-16",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      nested: false,
    },
  }
);

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {
  nestedVariant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
  speed?: "slow" | "normal" | "fast";
  color?: string;
  nestedColor?: string;
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  (
    {
      className,
      variant,
      size,
      nested,
      nestedVariant,
      speed = "normal",
      color,
      nestedColor,
      style,
      ...props
    },
    ref
  ) => {
    // Custom animation speeds
    const animationDuration = {
      slow: "2.5s",
      normal: "1.5s",
      fast: "1s",
    };

    // Custom style with color if provided
    const customStyle: React.CSSProperties = {
      ...style,
      ...(color && { borderTopColor: color }),
      animationDuration: animationDuration[speed],
    };

    // Custom style for nested loader
    const nestedCustomStyle: React.CSSProperties = {
      ...(nestedColor && { borderTopColor: nestedColor }),
      animationDuration:
        speed === "slow" ? animationDuration.normal : animationDuration.fast,
    };

    return (
      <div
        className={cn(
          loaderVariants({ variant, size, nested: false }),
          className
        )}
        role="status"
        aria-label="Loading"
        ref={ref}
        style={customStyle}
        {...props}>
        {nested && (
          <div
            className={cn(
              loaderVariants({
                variant: nestedVariant || "secondary",
                size,
                nested: true,
              })
            )}
            style={nestedColor ? nestedCustomStyle : undefined}
          />
        )}
        <span className="sr-only">Loading</span>
      </div>
    );
  }
);
Loader.displayName = "Loader";

export { Loader, loaderVariants };
