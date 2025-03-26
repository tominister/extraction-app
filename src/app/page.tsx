"use client"

import { useState } from "react";
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { CheckCircle2, Cloud, ExternalLink, Plus, RefreshCw } from "lucide-react"
import Link from 'next/link'

// Define a type for the connection status
type ConnectionStatus = {
  microsoft365: boolean;
  googleWorkspace: boolean;
  dropbox: boolean;
  slack: boolean;
  box: boolean;
  zoom: boolean;
};

export default function Home() {
  // State to manage connection status
  const [connections, setConnections] = useState<ConnectionStatus>({
    microsoft365: false, // Assuming Microsoft 365 is already connected
    googleWorkspace: false,
    dropbox: false,
    slack: false, // Assuming Slack is already connected
    box: false,
    zoom: false,
  });

  // Function to handle connection/disconnection
  const toggleConnection = (service: keyof ConnectionStatus) => {
    setConnections((prev) => {
      const isConnected = prev[service];
      return { ...prev, [service]: !isConnected }; // Toggle connection status
    });
  };

  return (
    <main className="min-h-screen bg-background">

      {/* Main Content */}
      <div className="container px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <div className="flex flex-col gap-8">
          {/* Page Title */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Connect Services</h2>
            <p className="text-muted-foreground mt-2">
              Connect your workspace to these cloud services to enhance productivity
            </p>
          </div>

          {/* Integration Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Microsoft 365 */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#f3f2f1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23">
                    <path fill="#F25022" d="M1 1h9v9H1z" />
                    <path fill="#80BA01" d="M13 1h9v9h-9z" />
                    <path fill="#02A4EF" d="M1 13h9v9H1z" />
                    <path fill="#FFB902" d="M13 13h9v9h-9z" />
                  </svg>
                </div>
                <div>
                  <CardTitle>Microsoft 365</CardTitle>
                  <CardDescription>Connect to Microsoft 365 apps</CardDescription>
                </div>
                <Badge variant="outline" className="ml-auto">
                  {connections.microsoft365 ? "Connected" : "Not Connected"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Access files from OneDrive, manage emails, and sync calendars with your workspace.</p>
                </div>
                {connections.microsoft365 && (
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    <span>Connected</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {connections.microsoft365 ? (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('microsoft365')}>
                    Disconnect
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('microsoft365')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Connect Microsoft 365
                  </Button>
                )}
                {connections.microsoft365 && (
                  <div className="ml-2">
                    <Link href="/employees">
                      <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Manage
                      </Button>
                    </Link>
                  </div>
                )}
              </CardFooter>
            </Card>

            {/* Google Workspace */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle>Google Workspace</CardTitle>
                  <CardDescription>Connect to Google services</CardDescription>
                </div>
                <Badge className="ml-auto">
                  {connections.googleWorkspace ? "Connected" : "Not Connected"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Integrate with Gmail, Google Drive, Google Calendar, and other Google services.</p>
                </div>
                {connections.googleWorkspace && (
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    <span>Connected</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {connections.googleWorkspace ? (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('googleWorkspace')}>
                    Disconnect
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('googleWorkspace')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Connect Google Workspace
                  </Button>
                )}
                {connections.googleWorkspace && (
                  <div className="ml-2">
                    <Link href="/employees">
                      <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Manage
                      </Button>
                    </Link>
                  </div>
                )}
              </CardFooter>
            </Card>

            {/* Dropbox */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#0061ff]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 14.56l4.07-3.32 4.43 2.94-4.43 2.94L12 14.56zm-8.5-0.38l4.43-2.94 4.07 3.32-4.07 2.56L3.5 14.18zm8.5-7.37l4.07 3.32-4.07 2.56-4.07-2.56L12 6.81zm-4.07 5.88L3.5 9.75l4.43-2.94 4.07 2.56-4.07 3.32z" />
                  </svg>
                </div>
                <div>
                  <CardTitle>Dropbox</CardTitle>
                  <CardDescription>Connect to Dropbox storage</CardDescription>
                </div>
                <Badge className="ml-auto">
                  {connections.dropbox ? "Connected" : "Not Connected"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Access and share files from your Dropbox account directly in your workspace.</p>
                </div>
                {connections.dropbox && (
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    <span>Connected</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {connections.dropbox ? (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('dropbox')}>
                    Disconnect
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('dropbox')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Connect Dropbox
                  </Button>
                )}
                {connections.dropbox && (
                  <div className="ml-2">
                    <Link href="/employees">
                      <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Manage
                      </Button>
                    </Link>
                  </div>
                )}
              </CardFooter>
            </Card>

            {/* Slack */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#4A154B]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M6 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </div>
                <div>
                  <CardTitle>Slack</CardTitle>
                  <CardDescription>Connect to Slack workspace</CardDescription>
                </div>
                <Badge variant="outline" className="ml-auto">
                  {connections.slack ? "Connected" : "Not Connected"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Integrate with your Slack channels for seamless communication and notifications.</p>
                </div>
                {connections.slack && (
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    <span>Connected</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {connections.slack ? (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('slack')}>
                    Disconnect
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('slack')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Connect Slack
                  </Button>
                )}
                {connections.slack && (
                  <div className="ml-2">
                    <Link href="/employees">
                      <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Manage
                      </Button>
                    </Link>
                  </div>
                )}
              </CardFooter>
            </Card>

            {/* Box */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#0061D5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M18.5 5.5l-6.5 3.75L5.5 5.5 12 1.75l6.5 3.75zM5.5 13l6.5-3.75L18.5 13 12 16.75 5.5 13zm6.5 7.25L5.5 16.5 12 12.75l6.5 3.75-6.5 3.75z" />
                  </svg>
                </div>
                <div>
                  <CardTitle>Box</CardTitle>
                  <CardDescription>Connect to Box storage</CardDescription>
                </div>
                <Badge className="ml-auto">
                  {connections.box ? "Connected" : "Not Connected"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Access and manage your Box files and folders directly from your workspace.</p>
                </div>
                {connections.box && (
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    <span>Connected</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {connections.box ? (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('box')}>
                    Disconnect
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('box')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Connect Box
                  </Button>
                )}
                {connections.box && (
                  <div className="ml-2">
                    <Link href="/employees">
                      <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Manage
                      </Button>
                    </Link>
                  </div>
                )}
              </CardFooter>
            </Card>

            {/* Zoom */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#2D8CFF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M16 8v8H8V8h8m0-2H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm4 2v8h-1V8h1m0-2h-1c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM5 8v8H4V8h1m0-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <div>
                  <CardTitle>Zoom</CardTitle>
                  <CardDescription>Connect to Zoom meetings</CardDescription>
                </div>
                <Badge className="ml-auto">
                  {connections.zoom ? "Connected" : "Not Connected"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Schedule and join Zoom meetings directly from your workspace calendar.</p>
                </div>
                {connections.zoom && (
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    <span>Connected</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {connections.zoom ? (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('zoom')}>
                    Disconnect
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400" onClick={() => toggleConnection('zoom')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Connect Zoom
                  </Button>
                )}
                {connections.zoom && (
                  <div className="ml-2">
                    <Link href="/employees">
                      <Button variant="outline" size="sm" className="bg-gray-300 hover:bg-gray-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Manage
                      </Button>
                    </Link>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>

          {/* More Integrations Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">More Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400">
                <Cloud className="h-6 w-6" />
                <span>AWS</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400">
                <Cloud className="h-6 w-6" />
                <span>Azure</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400">
                <Cloud className="h-6 w-6" />
                <span>Salesforce</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400">
                <Cloud className="h-6 w-6" />
                <span>Jira</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

