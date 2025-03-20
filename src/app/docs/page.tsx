import type { Metadata } from "next"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/sidebar-nav"
import { SidebarNav } from "@/components/sidebar-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Documentation | Admin Connect",
  description: "Learn how to use Admin Connect",
}

export default function DocsPage() {
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
            <div className="mx-auto max-w-4xl">
              <h1 className="text-3xl font-bold mb-2">Documentation</h1>
              <p className="text-muted-foreground mb-8">
                Learn how to use Admin Connect and integrate third-party services
              </p>

              <Tabs defaultValue="getting-started" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                  <TabsTrigger value="integrations">Integrations</TabsTrigger>
                  <TabsTrigger value="api">API</TabsTrigger>
                </TabsList>

                <TabsContent value="getting-started" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Welcome to Admin Connect</CardTitle>
                      <CardDescription>Learn how to get started with Admin Connect</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-medium">Introduction</h3>
                      <p>
                        Admin Connect allows you to easily integrate third-party services with your application. This
                        guide will help you get started with connecting your first service.
                      </p>

                      <h3 className="text-lg font-medium">Quick Start</h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Navigate to the Integrations page</li>
                        <li>Select the service you want to connect</li>
                        <li>Click the "Connect" button</li>
                        <li>Follow the authentication flow</li>
                        <li>Configure your integration settings</li>
                      </ol>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="integrations" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Available Integrations</CardTitle>
                      <CardDescription>Learn about the services you can connect</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-medium">Dropbox</h3>
                      <p>
                        Connect your Dropbox account to sync files and folders. You can configure sync frequency and
                        access levels to control how data is shared.
                      </p>

                      <h3 className="text-lg font-medium">Microsoft 365</h3>
                      <p>
                        Integrate with Microsoft 365 services including OneDrive, Outlook, and Teams. Configure settings
                        to control which services are connected.
                      </p>

                      <h3 className="text-lg font-medium">Google Workspace</h3>
                      <p>
                        Connect to Google Workspace apps including Gmail, Drive, and Calendar. Set up real-time sync for
                        immediate data updates.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="api" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Documentation</CardTitle>
                      <CardDescription>Learn how to use the Admin Connect API</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-medium">Authentication</h3>
                      <p>
                        The Admin Connect API uses OAuth 2.0 for authentication. You'll need to obtain an access token
                        before making API requests.
                      </p>

                      <h3 className="text-lg font-medium">Endpoints</h3>
                      <p>
                        The API provides endpoints for managing integrations, retrieving data, and configuring settings.
                        See the full API reference for details.
                      </p>

                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code>{`// Example API request
fetch('https://api.adminconnect.com/v1/integrations', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

