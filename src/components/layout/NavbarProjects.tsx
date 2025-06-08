"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MoreOptionsDropdown } from "./MoreOptionsDropDown";
import { useTranslations } from "next-intl";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Menu, X } from "lucide-react";

export function NavbarProjects() {

  const t = useTranslations("NavProjects");
  const pathname = usePathname();
  const [projectName, setProjectName] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sections = ["banner", "about", "technologies", "gallery"];

  const handleScroll = () => {
    const sectionOffsets = sections
      .map((section) => {
        const element = document.getElementById(section);
        return element ? { id: section, offset: element.offsetTop } : null;
      })
      .filter((item): item is { id: string; offset: number } => item !== null);

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const activeSection =
      sectionOffsets.reverse().find(({ offset }) => scrollPosition >= offset)
        ?.id || "banner";

    setActiveSection(activeSection);
  };

  //efeito que formata o nome do projeto a partir do pathname
  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const slug = pathSegments[pathSegments.length - 1];
    const formatted = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    setProjectName(formatted);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section: string) => activeSection === section;

  const linkClasses = (section: string) =>
    `transition-colors hover:text-primary text-xl ${
      isActive(section)
        ? "text-primary font-semibold text-text-contrast"
        : "text-muted-foreground"
    }`;

  const mobileLinkClasses = (section: string) =>
    `text-xl font-medium py-3 px-4 w-full text-left ${
      isActive(section)
        ? "text-primary font-semibold text-text-contrast"
        : "text-muted-foreground"
    }`;

  return (
    <header className="w-full p-4 sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link href="/#projects" aria-label="Voltar aos projetos">
          <ArrowLeft className="text-4xl m-1" />
        </Link>

        <nav
          className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6"
          aria-label="Navegação do projeto"
        >
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

        {/* Nome do projeto visível apenas no mobile */}
        <header className="lg:hidden text-lg font-semibold text-text-primary dark:text-text-dark">
          {projectName}
        </header>

        <div className="flex items-center gap-4 lg:hidden">
          <Drawer
            direction="left"
            open={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
            shouldScaleBackground={false}
          >
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </DrawerTrigger>

            <DrawerContent
              className="bg-bg-primary dark:bg-bg-dark border-none h-full text-text-primary dark:text-text-dark"
              onInteractOutside={(e) => e.preventDefault()}
            >
              <div className="flex flex-col h-full">
                <DrawerHeader className="border-b flex flex-row items-center justify-between px-4 py-4">
                  <DrawerTitle className="text-2xl">
                    {t("navigation")}
                  </DrawerTitle>
                  <Button
                    onClick={() => setIsDrawerOpen(false)}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto p-2">
                  <nav className="flex flex-col" aria-label="Menu mobile">
                    {sections.map((section) => (
                      <a
                        key={section}
                        href={`#${section}`}
                        className={mobileLinkClasses(section)}
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {t(section)}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="flex p-4 border-t">
                  <Link
                    href="/#projects"
                    className="flex items-center gap-2 text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Home className="w-5 h-5" />
                    {t("backToHome")}
                  </Link>
                </div>
                <div className="p-4 border-t">
                  <MoreOptionsDropdown />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="hidden lg:flex">
          <MoreOptionsDropdown />
        </div>
      </div>
    </header>
  );
}
