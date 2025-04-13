"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ImageCardProps
  extends React.ComponentPropsWithoutRef<typeof Card> {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHeight?: number;
  children?: React.ReactNode;
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  (
    {
      title,
      subtitle,
      description,
      imageUrl,
      imageHeight = 250,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group"
        whileHover={{
          filter: "drop-shadow(0 0 25px rgba(0, 0, 0, 0.15))",
        }}
      >
        {/* Gradient background */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition-all duration-700"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        <Card
          ref={ref}
          className={cn(
            "overflow-hidden relative bg-background/90 backdrop-blur-md",
            "transition-all duration-300",
            "border border-transparent hover:border-purple-500/10",
            imageUrl && "p-0 pb-4",
            className,
          )}
          {...props}
        >
          {imageUrl && (
            <motion.div
              className="relative w-full overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-full rounded-t-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  height: imageHeight,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                }}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
              {subtitle && (
                <p className="text-sm sm:text-base text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </CardHeader>

            {/* Description or Children */}
            <CardContent>
              {description && (
                <motion.p
                  className="text-sm sm:text-base mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {description}
                </motion.p>
              )}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {children}
                </motion.div>
              )}
            </CardContent>
          </motion.div>
        </Card>
      </motion.div>
    );
  },
);

ImageCard.displayName = "ImageCard";

export { ImageCard };
