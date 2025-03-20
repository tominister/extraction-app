import type { LucideIcon } from "lucide-react"

export interface Integration {
  id: string
  name: string
  description: string
  icon: LucideIcon
  isConnected: boolean
  isConnecting: boolean
  settings: {
    syncFrequency: "realtime" | "hourly" | "daily" | "weekly"
    accessLevel: "read-only" | "read-write" | "full-access"
  }
}

export interface Integration {
    name: string
    description: string
    logo: string
    isConnected: boolean
  }
