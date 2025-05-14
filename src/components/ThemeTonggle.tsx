"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useTranslations } from "next-intl";
import { Sun, Moon, Laptop2 } from "lucide-react";
import { ComponentType } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Theme");

  type Theme = "light" | "dark" | "system";

  const options: { value: Theme; label: string; icon: ComponentType<{ size?: number; className?: string }> }[] = [
    { value: "light", label: t("ligth"), icon: Sun },
    { value: "dark", label: t("dark"), icon: Moon },
    { value: "system", label: t("system"), icon: Laptop2 },
  ];

  return (
    <>
      {options.map((option) => {
        const isSelected = theme === option.value;
        const Icon = option.icon;

        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`flex justify-between items-center w-full py-1 rounded hover:bg-muted transition ${
              isSelected ? "font-bold text-text-contrast" : ""
            }`}
          >
            <span>{option.label}</span>
            <Icon
              size={16}
              className={isSelected ? "text-text-contrast" : "text-primary"}
            />
          </button>
        );
      })}
    </>
  );
};
