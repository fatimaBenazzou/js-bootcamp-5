import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ToggleTheme() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="h-9 w-9 relative overflow-hidden"
          type="button"
        >
          <Sun className="h-5 w-5 absolute transition-all duration-300 ease-in-out rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="h-5 w-5 absolute transition-all duration-300 ease-in-out rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>switch to mode</p>
      </TooltipContent>
    </Tooltip>
  );
}
