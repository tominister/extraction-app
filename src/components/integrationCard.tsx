"use client"

import type React from "react"

import Image from "next/image"
import type { Integration } from "../types/Integration"

interface IntegrationCardProps {
  integration: Integration
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ integration }) => {
  const handleToggleConnection = () => {
    // TODO: Implement actual connection logic
    console.log(`Toggling connection for ${integration.name}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Image
          src={integration.logo || "/placeholder.svg"}
          alt={`${integration.name} logo`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold ml-4">{integration.name}</h2>
      </div>
      <p className="text-gray-600 mb-4">{integration.description}</p>
      <div className="flex items-center justify-between">
        <span className={`text-sm ${integration.isConnected ? "text-green-500" : "text-red-500"}`}>
          {integration.isConnected ? "Connected ✅" : "Disconnected ❌"}
        </span>
        <button
          onClick={handleToggleConnection}
          className={`px-4 py-2 rounded-md text-white ${
            integration.isConnected ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {integration.isConnected ? "Disconnect" : "Connect"}
        </button>
      </div>
    </div>
  )
}

export default IntegrationCard

