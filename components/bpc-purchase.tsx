"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Copy, Check, ExternalLink } from "lucide-react"

interface BpcPurchaseProps {
  balance: number
  onClose: () => void
  onPurchase: () => boolean
}

export function BpcPurchase({ balance, onClose, onPurchase }: BpcPurchaseProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const BPC_PRICE = 6200
  const TELEGRAM_CHANNEL = "https://t.me/Blue_pay_code"

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-card relative max-h-[90vh] overflow-y-auto">
        <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>

        <CardHeader>
          <CardTitle className="text-2xl">Buy BPC Code</CardTitle>
          <CardDescription>Purchase BPC code to unlock ₦200,000.00 withdrawal</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary">
            <span className="text-muted-foreground font-medium">BPC Code Price</span>
            <span className="text-2xl font-bold text-primary">₦{BPC_PRICE.toLocaleString()}</span>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-card-foreground">Payment Instructions</h3>

            <div className="bg-muted/50 p-4 rounded-lg space-y-3 border border-border">
              <p className="text-sm text-muted-foreground font-medium">Step 1: Make Payment</p>
              <p className="text-sm text-card-foreground">
                Transfer ₦{BPC_PRICE.toLocaleString()} to the account details below:
              </p>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Account Name</label>
                <div className="flex items-center justify-between bg-muted p-3 rounded-lg">
                  <span className="font-semibold text-card-foreground text-sm">{accountInfo.name}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(accountInfo.name, "name")}
                    className="text-primary hover:text-primary/80 h-8 w-8 p-0"
                  >
                    {copiedField === "name" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Account Number</label>
                <div className="flex items-center justify-between bg-muted p-3 rounded-lg">
                  <span className="font-semibold text-card-foreground text-lg">{accountInfo.number}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(accountInfo.number, "number")}
                    className="text-primary hover:text-primary/80 h-8 w-8 p-0"
                  >
                    {copiedField === "number" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Bank</label>
                <div className="flex items-center justify-between bg-muted p-3 rounded-lg">
                  <span className="font-semibold text-card-foreground">{accountInfo.bank}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(accountInfo.bank, "bank")}
                    className="text-primary hover:text-primary/80 h-8 w-8 p-0"
                  >
                    {copiedField === "bank" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg space-y-3 border border-border">
              <p className="text-sm text-muted-foreground font-medium">Step 2: Send Payment Proof</p>
              <p className="text-sm text-card-foreground">
                After making payment, send your payment screenshot to our admin on Telegram for verification.
              </p>
            </div>

            <Button
              className="w-full bg-[#0088cc] hover:bg-[#0088cc]/90 text-white"
              size="lg"
              onClick={() => window.open(TELEGRAM_CHANNEL, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Send Screenshot to Admin
            </Button>

            <div className="bg-muted/50 p-4 rounded-lg space-y-3 border border-border">
              <p className="text-sm text-muted-foreground font-medium">Step 3: Receive Your BPC Code</p>
              <p className="text-sm text-card-foreground">
                Once verified, the admin will send you the BPC code to unlock your ₦200,000.00 withdrawal.
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
            <p className="text-xs text-yellow-700 dark:text-yellow-500 font-medium">
              Important: Your BPC code will be sent after admin verification. This usually takes a few minutes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
