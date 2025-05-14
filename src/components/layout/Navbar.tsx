"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MoreOptionsDropdown } from "./MoreOptionsDropDown";
import { useTranslations } from "next-intl";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [activeSection, setActiveSection] = useState("");

  const sections = ["home", "about", "tecnologies", "projects", "contact"];

  // Função para detectar qual seção o usuário está vendo
  const handleScroll = () => {
    const sectionOffsets = sections
      .map((section) => {
        const element = document.getElementById(section);
        return element ? { id: section, offset: element.offsetTop } : null;
      })
      .filter((item): item is { id: string; offset: number } => item !== null); // Asserção de tipo

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Determina qual seção está mais próxima
    const activeSection =
      sectionOffsets.reverse().find(({ offset }) => scrollPosition >= offset)
        ?.id || "home";

    setActiveSection(activeSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Inicia a verificação ao carregar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClasses = (section: string) =>
    `transition-colors hover:text-primary text-xl ${
      activeSection === section || (pathname === "/" && section === "home")
        ? "text-primary font-semibold text-text-contrast"
        : "text-muted-foreground"
    }`;

  return (
    <header className="w-full p-4 sticky top-0 z-50 bg-transparent backdrop-blur-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold">
          &lt;/&gt;
        </Link>

        {/* Navegação centralizada */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={linkClasses(section)}
            >
              {t(section)}
            </a>
          ))}
        </nav>
        <MoreOptionsDropdown />
      </div>
    </header>
  );
}
