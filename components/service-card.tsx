"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick?: () => void
  clickable?: boolean
}

export function ServiceCard({ icon, title, description, onClick, clickable }: ServiceCardProps) {
  return (
    <Card
      className={`bg-card border-none shadow-lg hover:shadow-xl transition-shadow ${
        clickable ? "cursor-pointer hover:scale-105 transition-transform" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
