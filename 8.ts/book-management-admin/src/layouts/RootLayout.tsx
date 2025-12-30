import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <SidebarProvider className="flex h-screen">
      {/* sidebar */}
      <AppSidebar />
      <div>
        {/* navbar */}
        <Navbar />
        <main>
          <Outlet />
        </main>
        {/* footer */}
      </div>
    </SidebarProvider>
  );
}
