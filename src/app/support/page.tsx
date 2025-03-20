import type { Metadata } from "next"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Support | Admin Connect",
  description: "Get help with Admin Connect",
}

export default function SupportPage() {
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
              <h1 className="text-3xl font-bold mb-2">Support</h1>
              <p className="text-muted-foreground mb-8">Get help with Admin Connect</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                      <CardDescription>Find answers to common questions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>How do I connect a new service?</AccordionTrigger>
                          <AccordionContent>
                            To connect a new service, navigate to the Integrations page, find the service you want to
                            connect, and click the "Connect" button. Follow the authentication flow to complete the
                            connection.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>How do I change integration settings?</AccordionTrigger>
                          <AccordionContent>
                            For connected services, click the settings icon (gear) on the integration card. This will
                            open a dialog where you can modify sync frequency, access levels, and other settings.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Can I disconnect a service?</AccordionTrigger>
                          <AccordionContent>
                            Yes, you can disconnect a service at any time by clicking the "Disconnect" button on the
                            integration card. This will revoke access permissions but won't delete any synced data.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>Is my data secure?</AccordionTrigger>
                          <AccordionContent>
                            Yes, we use industry-standard security practices to protect your data. All connections use
                            OAuth for secure authentication, and you can enable additional security features in
                            Settings.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Support</CardTitle>
                      <CardDescription>Can't find what you're looking for? Send us a message</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Name
                            </label>
                            <Input id="name" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="email" type="email" placeholder="your.email@example.com" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input id="subject" placeholder="How can we help you?" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Describe your issue in detail..."
                            className="min-h-[120px]"
                          />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Submit Request</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

