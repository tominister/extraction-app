"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import IntegrationCard from "@/components/integration-card"
import type { Integration } from "@/types/integration"
import { DropletIcon as Dropbox, FileText, Mail } from "lucide-react"

export default function IntegrationsGrid() {
  const { toast } = useToast()
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "dropbox",
      name: "Dropbox",
      description: "Connect and sync your Dropbox files and folders",
      icon: Dropbox,
      isConnected: false,
      isConnecting: false,
      settings: {
        syncFrequency: "daily",
        accessLevel: "read-only",
      },
    },
    {
      id: "microsoft365",
      name: "Microsoft 365",
      description: "Integrate with Microsoft 365 services including OneDrive, Outlook, and Teams",
      icon: FileText,
      isConnected: false,
      isConnecting: false,
      settings: {
        syncFrequency: "hourly",
        accessLevel: "full-access",
      },
    },
    {
      id: "google-workspace",
      name: "Google Workspace",
      description: "Connect to Google Workspace apps including Gmail, Drive, and Calendar",
      icon: Mail,
      isConnected: false,
      isConnecting: false,
      settings: {
        syncFrequency: "realtime",
        accessLevel: "read-only",
      },
    },
  ])

  const handleConnect = async (id: string) => {
    // Find the integration to update
    const updatedIntegrations = integrations.map((integration) =>
      integration.id === id ? { ...integration, isConnecting: true } : integration,
    )
    setIntegrations(updatedIntegrations)

    // Simulate OAuth flow with a timeout
    try {
      // In a real app, this would redirect to the OAuth provider
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Update the integration status
      const finalIntegrations = integrations.map((integration) =>
        integration.id === id ? { ...integration, isConnected: true, isConnecting: false } : integration,
      )
      setIntegrations(finalIntegrations)

      toast({
        title: "Connection successful",
        description: `Successfully connected to ${integrations.find((i) => i.id === id)?.name}`,
      })
    } catch (error) {
      // Handle connection error
      const errorIntegrations = integrations.map((integration) =>
        integration.id === id ? { ...integration, isConnecting: false } : integration,
      )
      setIntegrations(errorIntegrations)

      toast({
        title: "Connection failed",
        description: "There was an error connecting to the service. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDisconnect = async (id: string) => {
    // Find the integration to update
    const updatedIntegrations = integrations.map((integration) =>
      integration.id === id ? { ...integration, isConnecting: true } : integration,
    )
    setIntegrations(updatedIntegrations)

    // Simulate disconnection with a timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update the integration status
      const finalIntegrations = integrations.map((integration) =>
        integration.id === id ? { ...integration, isConnected: false, isConnecting: false } : integration,
      )
      setIntegrations(finalIntegrations)

      toast({
        title: "Disconnected",
        description: `Successfully disconnected from ${integrations.find((i) => i.id === id)?.name}`,
      })
    } catch (error) {
      // Handle disconnection error
      const errorIntegrations = integrations.map((integration) =>
        integration.id === id ? { ...integration, isConnecting: false } : integration,
      )
      setIntegrations(errorIntegrations)

      toast({
        title: "Disconnection failed",
        description: "There was an error disconnecting from the service. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateSettings = (id: string, settings: any) => {
    const updatedIntegrations = integrations.map((integration) =>
      integration.id === id ? { ...integration, settings: { ...integration.settings, ...settings } } : integration,
    )
    setIntegrations(updatedIntegrations)

    toast({
      title: "Settings updated",
      description: `Successfully updated settings for ${integrations.find((i) => i.id === id)?.name}`,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.id}
          integration={integration}
          onConnect={() => handleConnect(integration.id)}
          onDisconnect={() => handleDisconnect(integration.id)}
          onUpdateSettings={(settings) => handleUpdateSettings(integration.id, settings)}
        />
      ))}
    </div>
  )
}

