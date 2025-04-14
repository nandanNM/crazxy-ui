import * as React from "react";
import { cn } from "@/lib/utils";

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  subtitle: string;
  title: string;
  buttonText: string;
  onClick?: () => void;
}

export function ImageCard({
  image,
  subtitle,
  title,
  buttonText,
  onClick,
  className,
  ...props
}: ImageCardProps) {
  return (
    <div
      className={cn("relative w-fit rounded-2xl overflow-hidden", className)}
      {...props}
    >
      <img src={image} alt={title} width={288} className="relative z-0" />
      <div className="absolute top-0 z-10 h-96 w-72 rounded-2xl bg-black opacity-[0.67]" />
      <div className="absolute bottom-0 z-20 p-6">
        <div className="text-lg text-gray-400">{subtitle}</div>
        <div className="mb-1 mt-1 text-2xl font-semibold text-white">
          {title}
        </div>
        <button
          onClick={onClick}
          className="mb-7 mt-3 cursor-pointer rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:bg-gray-400"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
