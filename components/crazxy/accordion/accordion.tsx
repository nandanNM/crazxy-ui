"use client";

import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  forwardRef,
} from "react";
import { cn } from "@/lib/utils";

// Context to manage which accordion item is open
type AccordionContextType = {
  openItem: string | null;
  toggleItem: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

// Root accordion component
const Accordion = ({ children }: { children: ReactNode }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem(prev => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

// Accordion item wrapper
const AccordionItem = forwardRef<
  HTMLDivElement,
  {
    value: string;
    children: ReactNode;
    className?: string;
  }
>(({ value, children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("bg-card border rounded-lg", className)}
      data-value={value}
    >
      {children}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

// Accordion trigger button
const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  {
    value: string;
    children: ReactNode;
    className?: string;
  }
>(({ value, children, className }, ref) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionTrigger must be used within an Accordion");
  }

  const isOpen = ctx.openItem === value;

  return (
    <button
      ref={ref}
      onClick={() => ctx.toggleItem(value)}
      className={cn(
        "flex justify-between w-full items-center p-4 font-medium",
        className,
      )}
      aria-expanded={isOpen}
    >
      {children}
      <svg
        className="shrink-0 ml-8 h-4 w-4 transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={cn(
            "fill-current transform origin-center transition duration-200 ease-out",
            isOpen ? "rotate-180" : "",
          )}
        />
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={cn(
            "fill-current transform origin-center rotate-90 transition duration-200 ease-out",
            isOpen ? "!rotate-180" : "",
          )}
        />
      </svg>
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

// Accordion content block
const AccordionContent = forwardRef<
  HTMLDivElement,
  {
    value: string;
    children: ReactNode;
    className?: string;
  }
>(({ value, children, className }, ref) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionContent must be used within an Accordion");
  }

  const isOpen = ctx.openItem === value;

  return (
    <div
      ref={ref}
      className={cn(
        "grid overflow-hidden transition-all duration-300 ease-in-out text-muted-foreground text-sm",
        isOpen
          ? "grid-rows-[1fr] opacity-100 pb-3"
          : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className={cn("overflow-hidden px-4", className)}>{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
