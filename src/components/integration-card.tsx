"use client"

import { useState } from "react"
import type { Integration } from "@/types/integration"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cog } from "lucide-react"

interface IntegrationCardProps {
  integration: Integration
  onConnect: () => void
  onDisconnect: () => void
  onUpdateSettings: (settings: any) => void
}

export default function IntegrationCard({
  integration,
  onConnect,
  onDisconnect,
  onUpdateSettings,
}: IntegrationCardProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [syncFrequency, setSyncFrequency] = useState(integration.settings.syncFrequency)
  const [accessLevel, setAccessLevel] = useState(integration.settings.accessLevel)

  const handleSaveSettings = () => {
    onUpdateSettings({
      syncFrequency,
      accessLevel,
    })
    setIsSettingsOpen(false)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <integration.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>{integration.name}</CardTitle>
              <CardDescription className="line-clamp-1">{integration.description}</CardDescription>
            </div>
          </div>
          {integration.isConnected && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Connected
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {integration.isConnected && (
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sync frequency:</span>
              <span className="font-medium capitalize">{integration.settings.syncFrequency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Access level:</span>
              <span className="font-medium capitalize">{integration.settings.accessLevel.replace("-", " ")}</span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        {integration.isConnected ? (
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onDisconnect()}
              disabled={integration.isConnecting}
            >
              Disconnect
            </Button>
            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="px-2">
                  <Cog className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{integration.name} Settings</DialogTitle>
                  <DialogDescription>
                    Configure how {integration.name} integrates with your application.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="sync-frequency">Sync Frequency</Label>
                    <Select value={syncFrequency} onValueChange={setSyncFrequency}>
                      <SelectTrigger id="sync-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="access-level">Access Level</Label>
                    <Select value={accessLevel} onValueChange={setAccessLevel}>
                      <SelectTrigger id="access-level">
                        <SelectValue placeholder="Select access level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="read-only">Read Only</SelectItem>
                        <SelectItem value="read-write">Read & Write</SelectItem>
                        <SelectItem value="full-access">Full Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <Button className="w-full" onClick={() => onConnect()} disabled={integration.isConnecting}>
            {integration.isConnecting ? "Connecting..." : "Connect"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

