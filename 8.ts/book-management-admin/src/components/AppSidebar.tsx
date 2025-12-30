import {
  Book,
  FileText,
  LayoutDashboard,
  ShoppingCart,
  Sidebar,
} from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Logo from "./Logo";
import { Link } from "react-router";

const mainNavItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Books", href: "/books", icon: Book },
  { label: "Borrowings", href: "/borrowings", icon: FileText },
  { label: "Orders", href: "/orders", icon: ShoppingCart },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo className="w-24 mx-auto" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to={item.href}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
