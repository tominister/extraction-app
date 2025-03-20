import type { Metadata } from "next"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Settings | Admin Connect",
  description: "Configure your Admin Connect settings",
}

export default function SettingsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider>
        <div className="flex min-h-screen">
          <Sidebar>
            <SidebarHeader className="border-b pb-2">
              <h2 className="text-lg font-semibold px-2">Admin Connect</h2>
            </SidebarHeader>
            <SidebarContent>
              <SidebarNav />
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground mb-8">Configure your Admin Connect settings</p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Configure general settings for your Admin Connect dashboard</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-sync">Auto Sync</Label>
                        <p className="text-sm text-muted-foreground">Automatically sync data from connected services</p>
                      </div>
                      <Switch id="auto-sync" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notifications">Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about integration status changes
                        </p>
                      </div>
                      <Switch id="notifications" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="analytics">Analytics</Label>
                        <p className="text-sm text-muted-foreground">
                          Collect anonymous usage data to improve the service
                        </p>
                      </div>
                      <Switch id="analytics" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Configure security settings for your integrations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Require 2FA for connecting new integrations</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="ip-restriction">IP Restrictions</Label>
                        <p className="text-sm text-muted-foreground">
                          Limit access to integrations from specific IP addresses
                        </p>
                      </div>
                      <Switch id="ip-restriction" />
                    </div>

                    <div className="pt-4">
                      <Button>Save Settings</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

