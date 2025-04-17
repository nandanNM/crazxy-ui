"use client";

import type React from "react";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ComponentVariant {
  name: string;
  label: string;
  component: React.ReactNode;
  description?: string;
}

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  variants: ComponentVariant[];
  defaultVariant?: string;
  className?: string;
}

export default function ComponentShowcase({
  title,
  variants,
  defaultVariant,
  className,
}: ComponentShowcaseProps) {
  const [activeTab, setActiveTab] = useState(
    defaultVariant || variants[0]?.name || "default",
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full xl:w-xl sm:w-auto"
        >
          <TabsList className="border rounded-xl flex flex-wrap flex-col p-1 w-full overflow-x-auto scrollb justify-between scrollbar-hide">
            {variants.map(variant => (
              <TabsTrigger
                key={variant.name}
                className="text-xs p-1 cursor-pointer"
                value={variant.name}
              >
                {variant.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center justify-center min-h-[350px] relative">
        {variants.map(variant => (
          <div
            key={variant.name}
            className={cn(
              "w-full flex items-center justify-center flex-col gap-8 absolute inset-0 transition-opacity duration-300",
              activeTab === variant.name ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            {variant.component}
            {variant.description && (
              <p className="text-sm text-muted-foreground max-w-md text-center mt-4">
                {variant.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
