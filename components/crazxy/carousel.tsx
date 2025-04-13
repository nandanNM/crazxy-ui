"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const carouselVariants = cva("relative mx-auto max-w-2xl overflow-hidden", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  asChild?: boolean;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, variant, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const total = childrenArray.length;
    const [current, setCurrent] = React.useState(0);

    const goToPrev = () => {
      const prevIndex = current === 0 ? total - 1 : current - 1;
      setCurrent(prevIndex);
    };

    const goToNext = () => {
      const nextIndex = current === total - 1 ? 0 : current + 1;
      setCurrent(nextIndex);
    };

    const goToSlide = (index: number) => {
      setCurrent(index);
    };

    return (
      <div
        ref={ref}
        className={cn(carouselVariants({ variant }), className)}
        {...props}
      >
        <div className="relative w-full h-[300px] overflow-hidden">
          <div className="w-full h-full relative">
            {childrenArray.map((child, index) => (
              <div
                key={index}
                className={cn(
                  "absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out",
                  index === current
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none",
                )}
              >
                {child}
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 z-20"
            aria-label="Previous slide"
          >
            ◀
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 z-20"
            aria-label="Next slide"
          >
            ▶
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {childrenArray.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  current === index
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

Carousel.displayName = "Carousel";

export { Carousel, carouselVariants };
