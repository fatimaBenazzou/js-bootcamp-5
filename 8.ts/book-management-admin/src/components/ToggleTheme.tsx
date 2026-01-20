import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          onClick={toggleTheme}
          variant={"ghost"}
          size={"icon"}
          className="h-9 w-9   overflow-hidden"
          type="button"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 " />
          ) : (
            <Moon className="h-5 w-5 text-black" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>switch to {nextTheme} mode</p>
      </TooltipContent>
    </Tooltip>
  );
}
