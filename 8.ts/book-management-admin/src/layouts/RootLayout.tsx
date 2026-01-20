import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <SidebarProvider className="flex h-screen">
      {/* sidebar */}
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* navbar */}
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
        {/* footer */}
      </div>
    </SidebarProvider>
  );
}
