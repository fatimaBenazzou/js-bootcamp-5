import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-full items-center justify-between px-6">
        <SidebarTrigger />

        {/* right side */}
        {/* theme */}

        {/* notifications */}
        {/* profil */}
      </div>
    </header>
  );
}
