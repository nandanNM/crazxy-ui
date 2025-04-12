"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface SingleAccordionProps {
  title: string
  content: React.ReactNode
  className?: string
}

export function SingleAccordion({ title, content, className }: SingleAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn("bg-card rounded-lg", className)}>
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between w-full items-center"
          aria-expanded={isOpen}
        >
          <span className="font-medium">{title}</span>
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
              className={`fill-current transform origin-center transition duration-200 ease-out ${
                isOpen ? "rotate-180" : ""
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`fill-current transform origin-center rotate-90 transition duration-200 ease-out ${
                isOpen ? "!rotate-180" : ""
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-muted-foreground text-sm ${
            isOpen ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{content}</div>
        </div>
      </div>
    </div>
  )
}
