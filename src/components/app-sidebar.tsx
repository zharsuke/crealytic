import { Captions, Home, ScrollText, ChartArea } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Badge } from '@/components/ui/badge'

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Script",
    url: "/script",
    icon: ScrollText,
  },
  {
    title: "Transcript",
    url: "/transcript",
    icon: Captions,
  },
  {
    title: "Analytic",
    url: "/analytic",
    icon: ChartArea,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-bg">
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel className="text-xl font-bold mb-5">Crealytic</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Badge>
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                </Badge>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
