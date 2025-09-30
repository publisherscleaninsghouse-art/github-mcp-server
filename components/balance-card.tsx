import { Wallet } from "lucide-react"

interface BalanceCardProps {
  balance: number
}

export function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <div className="bg-card px-6 py-3 rounded-lg flex items-center gap-3 shadow-md">
      <Wallet className="w-5 h-5 text-primary" />
      <div>
        <p className="text-xs text-muted-foreground">Balance</p>
        <p className="text-lg font-bold text-card-foreground">
          ₦{balance.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  )
}
