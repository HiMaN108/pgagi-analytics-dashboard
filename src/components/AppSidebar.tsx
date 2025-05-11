'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { CloudSun, Newspaper, LineChart } from 'lucide-react'
import { cn } from '@/lib/utils'
// import { useState } from 'react'

export default function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  // const [open, setOpen] = useState(true)

  const items = [
    { title: 'Weather', url: '/dashboard/weather', icon: CloudSun },
    { title: 'News', url: '/dashboard/news', icon: Newspaper },
    { title: 'Stock', url: '/dashboard/stock', icon: LineChart },
  ]

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary/80">
            PGAGI
          </h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn({
                        '!bg-primary !text-white': pathname === item.url,
                      })}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
