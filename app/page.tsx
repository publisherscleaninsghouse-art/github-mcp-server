"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Wifi, CreditCard, Wallet } from "lucide-react"
import { AccountDetails } from "@/components/account-details"
import { ServiceCard } from "@/components/service-card"
import { BalanceCard } from "@/components/balance-card"
import { BpcPurchase } from "@/components/bpc-purchase"
import { useState } from "react"

export default function Home() {
  const [balance, setBalance] = useState(200000.0)
  const [showPurchase, setShowPurchase] = useState(false)

  const handlePurchase = () => {
    if (balance >= 6200) {
      setBalance(balance - 6200)
      return true
    }
    return false
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary-foreground">
            BLUEPAY <span className="text-sm font-normal">2025</span>
          </h1>
          <BalanceCard balance={balance} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block bg-card px-12 py-4 rounded-lg mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">BLUEPAY2025</h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground text-balance leading-tight">
            Get Your Account Ready And Instantly.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed">
            Get your account ready and instantly start buying, selling airtime and data online and start paying all your
            bills in cheaper price.
          </p>

          <Button
            size="lg"
            className="bg-card text-primary hover:bg-card/90 text-lg px-8 py-6 rounded-full font-semibold"
            onClick={() => setShowPurchase(true)}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-12">Our Services</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Buy Airtime"
              description="Purchase airtime for all networks at discounted rates instantly"
            />
            <ServiceCard
              icon={<Wifi className="w-8 h-8" />}
              title="Buy Data"
              description="Get affordable data bundles for all major networks in Nigeria"
            />
            <ServiceCard
              icon={<CreditCard className="w-8 h-8" />}
              title="Pay Bills"
              description="Pay your electricity, cable TV, and other bills conveniently"
            />
            <ServiceCard
              icon={<Wallet className="w-8 h-8" />}
              title="Buy BPC Code"
              description="Purchase BPC code for ₦6,200 and receive it instantly"
              onClick={() => setShowPurchase(true)}
              clickable
            />
          </div>
        </div>
      </section>

      {/* Account Details Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <AccountDetails />
        </div>
      </section>

      {showPurchase && (
        <BpcPurchase balance={balance} onClose={() => setShowPurchase(false)} onPurchase={handlePurchase} />
      )}

      {/* Support Button */}
      <div className="fixed bottom-8 right-8">
        <Button size="lg" className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90 shadow-lg">
          <span className="sr-only">Support</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}
