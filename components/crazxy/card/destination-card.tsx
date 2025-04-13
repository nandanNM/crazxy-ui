import * as React from "react";
import { cn } from "@/lib/utils";

export interface DestinationCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  destination: {
    id: number | string;
    name: string;
    country: string;
    rating: number;
    src: string;
    alt?: string;
  };
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  ({ destination, className, ...props }, ref) => {
    return (
      <div
        data-slot="card"
        ref={ref}
        className={cn(
          "w-[300px] overflow-hidden h-86 bg-card text-card-foreground flex flex-col  rounded-xl border  shadow-sm",
          className,
        )}
        {...props}
      >
        <div
          data-slot="card-background"
          className="h-full w-full  bg-center bg-cover relative"
          style={{ backgroundImage: `url(${destination.src})` }}
        >
          <div
            data-slot="card-footer"
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6"
          >
            <h3 className="text-2xl font-bold text-white">
              {destination.name}
            </h3>
            <p className="text-white mb-2">{destination.country}</p>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-white ml-1">{destination.rating}</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
