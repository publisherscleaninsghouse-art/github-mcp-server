"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function AccountDetails() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const accountInfo = {
    name: "CHRYSOGONUS CHIEMENA",
    number: "8933142706",
    bank: "PalmPay",
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <Card className="bg-card border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-card-foreground">Payment Account Details</CardTitle>
        <CardDescription className="text-muted-foreground">
          Use these details to fund your BLUEPAY account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Account Name</label>
          <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
            <span className="font-semibold text-card-foreground">{accountInfo.name}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(accountInfo.name, "name")}
              className="text-primary hover:text-primary/80"
            >
              {copiedField === "name" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Account Number</label>
          <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
            <span className="font-semibold text-card-foreground text-lg">{accountInfo.number}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(accountInfo.number, "number")}
              className="text-primary hover:text-primary/80"
            >
              {copiedField === "number" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Bank</label>
          <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
            <span className="font-semibold text-card-foreground">{accountInfo.bank}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(accountInfo.bank, "bank")}
              className="text-primary hover:text-primary/80"
            >
              {copiedField === "bank" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="pt-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Fund Account</Button>
        </div>
      </CardContent>
    </Card>
  )
}
