"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  src: string
  alt: string
}

export default function TeamProfiles() {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      bio: "10+ years of leadership experience",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      alt: "Sarah Johnson profile",
    },
    // You can add more team members here
  ]

  return (
    <div className="container mx-auto py-8 space-y-8">
      {team.map((member) => (
        <Card key={member.id} className="overflow-hidden">
          <div
            className="h-32 sm:h-48 md:h-64 bg-center bg-cover"
            style={{ backgroundImage: `url(${member.src})` }}
            aria-hidden="true"
          />
          <CardContent className="relative bg-white p-4 sm:p-6 md:p-8 -mt-12 sm:-mt-16 md:-mt-24 mx-4 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-white shadow-md">
                <AvatarImage src={member.src || "/placeholder.svg"} alt={member.alt} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold">{member.name}</h3>
                  <Badge variant="secondary" className="w-fit">
                    {member.role}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
