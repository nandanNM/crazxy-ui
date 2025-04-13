import type React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

const UICard: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  className = "",
}) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
        {subtitle && (
          <p className="text-sm sm:text-base text-muted-foreground">
            {subtitle}
          </p>
        )}
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-sm sm:text-base">{description}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default UICard;
