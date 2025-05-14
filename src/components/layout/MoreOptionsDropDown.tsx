"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../ThemeTonggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function MoreOptionsDropdown() {
  const tMoreOptions = useTranslations("MoreOptions");
  const tTheme = useTranslations("Theme");
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="p-2 rounded-xl flex gap-2 w-44 justify-center shadow-xl border  border-gray-600 items-center">
        {tMoreOptions("moreOptions")}
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-44 p-2 dark:text-white shadow-xl bg-bg-primary dark:bg-bg-dark border-none"
      >
        <DropdownMenuItem className="w-full">
          <div className="flex flex-col text-left items-start gap-1 w-full">
            <h1 className="text-xl">{tTheme("theme")}:</h1>
            <ThemeToggle />
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-2 h-px bg-muted bg-text-primary dark:bg-text-dark" />

        <DropdownMenuItem className="w-full">
          <div className="flex flex-col text-left items-start gap-1 w-full ">
            <h1 className="text-xl">{tMoreOptions("language")}:</h1>
            <LanguageSwitcher />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
