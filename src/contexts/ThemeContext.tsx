"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("system");

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement; // Aplica diretamente no <html>
    const body = document.body;  // Para garantir que o <body> também receba as classes.

    const finalTheme = newTheme === "system" ? getSystemTheme() : newTheme;

    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark"); // Para garantir que as classes sejam removidas do body também
    root.classList.add(finalTheme);
    body.classList.add(finalTheme); // Aplica o tema ao body
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initialTheme = stored ?? "system";
    setThemeState(initialTheme);
    applyTheme(initialTheme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (theme === "system") applyTheme("system");
    };
    media.addEventListener("change", onSystemChange);

    return () => media.removeEventListener("change", onSystemChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
