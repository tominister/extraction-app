import type { Metadata } from "next"
import IntegrationsGrid from "@/components/integrations-grid"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar-nav"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Admin Connect Page",
  description: "Connect and manage your third-party integrations",
}

export default function Home() {
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
            <div className="mx-auto max-w-6xl">
              <h1 className="text-3xl font-bold mb-2">Connect Your Services</h1>
              <p className="text-muted-foreground mb-8">Integrate third-party services with your application</p>
              <IntegrationsGrid />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

