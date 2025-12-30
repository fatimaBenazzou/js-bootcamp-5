import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <SidebarProvider>
      {/* sidebar */}
      <AppSidebar />
      <div>
        {/* navbar */}
        <main>
          <Outlet />
        </main>
        {/* footer */}
      </div>
    </SidebarProvider>
  );
}
