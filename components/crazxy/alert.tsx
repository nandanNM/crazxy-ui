import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const alertVariants = cva(
  "flex items-center justify-between rounded-2xl border px-4 py-1",
  {
    variants: {
      variant: {
        success:
          "border-green-500 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900",
        error:
          "border-destructive text-destructive bg-destructive/10 dark:bg-destructive/20",
        modern: "bg-primary text-primary-foreground",
        warning: "border-orange-500 bg-orange-50 text-orange-500",
        info: "border-blue-500 bg-blue-50 text-blue-500",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

const defaultIcons: Record<string, ReactNode> = {
  success: (
    <svg
      className="h-5 w-5 text-green-600 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 
        1.414l-8 8a1 1 0 01-1.414 
        0l-4-4a1 1 0 011.414-1.414L8 
        12.586l7.293-7.293a1 1 0 011.414 
        0z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke="red"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  ),
  modern: (
    <svg
      className="h-4 w-4 text-white opacity-75"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M8.257 3.099c.765-1.36 2.72-1.36 
      3.485 0l5.09 9.048c.75 1.334-.213 
      2.999-1.742 2.999H4.91c-1.53 0-2.493-1.665-1.743-2.999l5.09-9.048zM11 
      13a1 1 0 1 0-2 0 1 1 0 0 0 
      2 0zm-1-2a1 1 0 0 0 1-1V7a1 
      1 0 1 0-2 0v3a1 1 0 0 0 1 1z"
      />
    </svg>
  ),
  warning: (
    <svg
      width="25"
      height="25"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9997 2.33331C7.57134 2.33331 2.33301 7.57165 2.33301 14C2.33301 20.4283 7.57134 25.6666 13.9997 25.6666C20.428 25.6666 25.6663 20.4283 25.6663 14C25.6663 7.57165 20.428 2.33331 13.9997 2.33331ZM13.9997 21C13.358 21 12.833 20.475 12.833 19.8333C12.833 19.1916 13.358 18.6666 13.9997 18.6666C14.6413 18.6666 15.1663 19.1916 15.1663 19.8333C15.1663 20.475 14.6413 21 13.9997 21ZM16.3797 15.5401C15.3064 16.2517 15.1314 16.6367 15.108 16.7067C14.9447 17.1967 14.4897 17.5 13.9997 17.5C13.8713 17.5 13.7547 17.4766 13.6263 17.4416C13.0197 17.2316 12.693 16.5666 12.8913 15.9599C13.253 14.9099 14.3147 14.1049 15.0847 13.5915C16.543 12.6232 16.3563 11.5732 16.298 11.2348C16.1347 10.3132 15.353 9.53168 14.4313 9.36835C13.7197 9.24001 13.043 9.42661 12.4947 9.88161C11.9697 10.3249 11.6663 10.9783 11.6663 11.6666C11.6663 12.3083 11.1413 12.8333 10.4997 12.8333C9.85801 12.8333 9.33301 12.3083 9.33301 11.6666C9.33301 10.29 9.93967 8.98324 11.0013 8.09658C12.063 7.19824 13.463 6.83671 14.8397 7.07005C16.718 7.40838 18.258 8.94835 18.5963 10.8267C18.923 12.6933 18.1297 14.3734 16.3797 15.5401Z"
        fill="#E77C40"
      />
    </svg>
  ),
  info: (
    <svg
      width="25"
      height="25"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clip-rule="evenodd"
        fill="#1855CB"
      />
    </svg>
  ),
};
const variantColors: Record<string, string> = {
  success: "#95E2B8", // green-500
  error: "#DF1E1E", // red-500
  modern: "#ffffff", // white
  warning: "#E77C40", // orange-500
  info: "#1855CB", // blue-500
};

interface AlertProps extends VariantProps<typeof alertVariants> {
  children: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  label?: string;
  showClose?: boolean;
}

export function Alert({
  icon,
  children,
  variant = "success",
  onClose,
  label,
  showClose = true,
}: AlertProps) {
  const iconToShow = icon ?? defaultIcons[variant ?? "success"];

  return (
    <div className={cn(alertVariants({ variant }))} role="alert">
      <div className="flex items-center gap-3">
        {variant === "modern" && label && (
          <span className="text-xs font-bold uppercase px-2 bg-white text-primary rounded-full">
            {label}
          </span>
        )}
        {iconToShow}
        <div className="text-sm font-medium">{children}</div>
      </div>

      {showClose && (
        <button
          onClick={onClose}
          type="button"
          className={cn(
            "ml-8 h-5 w-5 rounded-full flex items-center justify-center transition",
            "cursor-pointer",
          )}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0.5H7C3.42 0.5 0.5 3.42 0.5 7V13C0.5 16.58 3.42 19.5 7 19.5H13C16.58 19.5 19.5 16.58 19.5 13V7C19.5 3.42 16.58 0.5 13 0.5ZM13.71 12.29C14.1 12.68 14.1 13.32 13.71 13.71C13.51 13.9 13.26 14 13 14C12.74 14 12.49 13.9 12.29 13.71L10 11.4199L7.71002 13.71C7.51002 13.9 7.26 14 7 14C6.74 14 6.48998 13.9 6.28998 13.71C5.89998 13.32 5.89998 12.68 6.28998 12.29L8.58002 10L6.28998 7.70996C5.89998 7.31996 5.89998 6.68004 6.28998 6.29004C6.67998 5.90004 7.32002 5.90004 7.71002 6.29004L10 8.58008L12.29 6.29004C12.68 5.90004 13.32 5.90004 13.71 6.29004C14.1 6.68004 14.1 7.31996 13.71 7.70996L11.42 10L13.71 12.29Z"
              fill={variantColors[variant ?? "success"]}
            />
          </svg>
        </button>
      )}
    </div>
  );
}
