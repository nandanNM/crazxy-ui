"use client"

import { AlertCircle, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SidebarCta() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="p-2">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              <CardTitle className="text-sm">Upgrade to Pro</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsVisible(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pb-2 text-xs">
          <p>Get access to exclusive features and premium support by upgrading to our Pro plan.</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 pt-0">
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Learn more
          </Button>
          <Button size="sm" className="h-7 text-xs">
            Upgrade
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
