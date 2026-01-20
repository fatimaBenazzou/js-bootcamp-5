import useAuth from "@/hooks/useAuth";
import ProfilDropdown from "./ProfilDropdown";
import ToggleTheme from "./ToggleTheme";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-full items-center justify-between px-6">
        <SidebarTrigger />

        {/* right side */}
        <div className="flex items-center gap-4">
          {/* theme */}
          <ToggleTheme />
          {/* notifications */}
          {/* profil */}
          {isAuthenticated && <ProfilDropdown />}
        </div>
      </div>
    </header>
  );
}
