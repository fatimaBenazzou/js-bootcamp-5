import { LogOut, PencilIcon, ShareIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router";

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export default function ProfilDropdown() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/auth");
  };
  if (!user) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage src={user.avatar} alt="shadcn" />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start text-left">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-muted-foreground capitalize">
              {user.role}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onClick={handleLogOut}>
            <LogOut />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
