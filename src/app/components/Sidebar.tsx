import { Calendar, ChevronDown, Home, Inbox, Plus, Search, Settings } from 'lucide-react';

import {
  Sidebar as AppSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Menu items.
const items = [
  {
    title: 'עמוד הבית',
    url: '#',
    icon: Home,
  },
  {
    title: 'פניות',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'לוח שנה',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'חיפוש',
    url: '#',
    icon: Search,
  },
  {
    title: 'הגדרות',
    url: '#',
    icon: Settings,
  },
];

const usersItems = [
  {
    title: 'כל המשתמשים',
    url: '/users',
  },
  {
    title: 'משתמשים חסומים',
    url: '/blocked-users',
  },
];

export function Sidebar() {
  return (
    <AppSidebar side="right">
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                משתמשים
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {usersItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </AppSidebar>
  );
}
