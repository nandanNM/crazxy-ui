"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const modalVariants = cva(
  "relative w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg transition-all duration-200",
  {
    variants: {
      size: {
        default: "max-w-lg",
        sm: "max-w-sm",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[calc(100vw-2rem)]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface ModalProps extends VariantProps<typeof modalVariants> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  footer?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    title,
    description,
    children,
    isOpen,
    onClose,
    showCloseButton = true,
    closeOnOutsideClick = true,
    footer,
    size,
    className,
    contentClassName,
  } = props;

  const [isVisible, setIsVisible] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Handle animation timing
  React.useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        isOpen ? "opacity-100" : "opacity-0",
        "transition-all duration-300 ease-in-out",
        className,
      )}
      aria-modal={isOpen}
      role="dialog"
    >
      {/* Backdrop with improved animation */}
      <div
        className={cn(
          "absolute inset-0 bg-background/80 backdrop-blur-sm",
          isOpen ? "opacity-100" : "opacity-0",
          "transition-all duration-300 ease-in-out",
        )}
        onClick={closeOnOutsideClick && !isAnimating ? onClose : undefined}
      />

      {/* Modal content with improved animation */}
      <div
        ref={ref}
        className={cn(
          modalVariants({ size }),
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0",
          "transform-gpu transition-all duration-300 ease-out",
          contentClassName,
        )}
      >
        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={!isAnimating ? onClose : undefined}
            className="absolute cursor-pointer right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}

        {/* Title and description */}
        {(title || description) && (
          <div className="mb-4">
            {title && (
              <h3 className="text-lg font-semibold leading-none tracking-tight">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="py-2">{children}</div>

        {/* Footer */}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
});

Modal.displayName = "Modal";

export { Modal };
export type { ModalProps };
