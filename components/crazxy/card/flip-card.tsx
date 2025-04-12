"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import {
  CardContent as ShadcnCardContent,
  CardTitle as ShadcnCardTitle,
  Card as ShadcnCard,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Context for flip state
interface FlipCardContextValue {
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  mobileClickable?: boolean;
}

const FlipCardContext = React.createContext<FlipCardContextValue | undefined>(
  undefined
);

// Variants
const flipCardVariants = cva("group perspective-1000 [perspective:1000px]", {
  variants: {
    size: {
      default: "h-[300px] w-[300px]",
      sm: "h-[200px] w-[200px]",
      lg: "h-[400px] w-[400px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface FlipCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof flipCardVariants> {
  mobileClickable?: boolean;
  asChild?: boolean;
}

function FlipCard({
  className,
  children,
  size,
  mobileClickable = true,
  ...props
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = React.useCallback(() => {
    if (mobileClickable) {
      setIsFlipped(!isFlipped);
    }
  }, [isFlipped, mobileClickable]);

  return (
    <FlipCardContext.Provider
      value={{ isFlipped, setIsFlipped, mobileClickable }}>
      <div
        className={cn(flipCardVariants({ size }), className)}
        onClick={handleClick}
        data-state={isFlipped ? "flipped" : "front"}
        {...props}>
        <div
          className={cn(
            "relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d]",
            isFlipped && mobileClickable
              ? "sm:group-hover:[transform:none] [transform:rotateY(180deg)]"
              : "group-hover:[transform:rotateY(180deg)]"
          )}>
          {children}
        </div>
      </div>
    </FlipCardContext.Provider>
  );
}

export interface FlipCardFrontProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

function FlipCardFront({ className, children, ...props }: FlipCardFrontProps) {
  return (
    <ShadcnCard
      data-slot="flip-card-front"
      className={cn(
        "absolute inset-0 p-0 h-full w-full overflow-hidden [backface-visibility:hidden]",
        className
      )}
      {...props}>
      {children}
    </ShadcnCard>
  );
}

export interface FlipCardBackProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

function FlipCardBack({ className, children, ...props }: FlipCardBackProps) {
  return (
    <ShadcnCard
      data-slot="flip-card-back"
      className={cn(
        "absolute inset-0 h-full w-full rounded-xl px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] sm:px-12",
        "bg-card text-card-foreground",
        className
      )}
      {...props}>
      {children}
    </ShadcnCard>
  );
}

export interface FlipCardImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  overlay?: boolean;
  overlayClassName?: string;
  overlayContent?: React.ReactNode;
}

function FlipCardImage({
  src,
  alt = "",
  className,
  overlay = true,
  overlayClassName,
  overlayContent,
  ...props
}: FlipCardImageProps) {
  return (
    <div className="relative h-full w-full" data-slot="flip-card-image">
      {src && (
        <img
          className={cn("h-full w-full object-cover", className)}
          src={src}
          alt={alt}
          {...props}
        />
      )}
      {overlay && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4",
            overlayClassName
          )}>
          {overlayContent}
        </div>
      )}
    </div>
  );
}

export interface FlipCardContentProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

function FlipCardContent({
  className,
  children,
  ...props
}: FlipCardContentProps) {
  return (
    <ShadcnCardContent
      data-slot="flip-card-content"
      className={cn(
        "flex min-h-full flex-col items-center justify-center p-4",
        className
      )}
      {...props}>
      {children}
    </ShadcnCardContent>
  );
}

export interface FlipCardTitleProps extends React.ComponentProps<"h2"> {
  asChild?: boolean;
}

function FlipCardTitle({ className, children, ...props }: FlipCardTitleProps) {
  return (
    <ShadcnCardTitle
      data-slot="flip-card-title"
      className={cn("text-xl font-bold sm:text-2xl", className)}
      {...props}>
      {children}
    </ShadcnCardTitle>
  );
}

export {
  FlipCard,
  FlipCardFront,
  FlipCardBack,
  FlipCardImage,
  FlipCardContent,
  FlipCardTitle,
};
