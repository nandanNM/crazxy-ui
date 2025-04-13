import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "inline-block bg-gray-100 dark:bg-gray-800 object-cover border-2 border-gray-200 dark:border-gray-700 shadow-md transition-all",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-12 w-12",
        lg: "h-20 w-20",
        xl: "h-32 w-32",
      },
      shape: {
        rounded: "rounded-full",
        squared: "rounded-md",
      },
      hoverEffect: {
        true: "hover:-translate-y-1 transform",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "rounded",
      hoverEffect: false,
    },
  },
);

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarVariants> {
  statusColor?: string; // like "bg-green-400"
  showStatus?: boolean;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  (
    { className, size, shape, hoverEffect, statusColor, showStatus, ...props },
    ref,
  ) => {
    return (
      <div className="relative inline-block">
        <img
          ref={ref}
          className={cn(
            "rounded-full object-cover",
            avatarVariants({ size, shape, hoverEffect }),
            className,
          )}
          {...props}
        />
        {showStatus && (
          <span
            className={cn(
              "absolute border-2 border-white dark:border-gray-800 rounded-full",
              size === "sm" && "w-2.5 h-2.5 bottom-0 right-0",
              size === "md" && "w-3.5 h-3.5 bottom-0 right-0",
              size === "lg" && "w-4.5 h-4.5 bottom-1 right-1",
              size === "xl" && "w-6 h-6 bottom-1.5 right-1.5",
              statusColor ?? "bg-green-400",
            )}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
