"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [activeSection, setActiveSection] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sections = ["home", "about", "tecnologies", "projects", "contact"];

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
        ?.id || "home";

    setActiveSection(activeSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section: string) =>
    activeSection === section || (pathname === "/" && section === "home");

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

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className="w-full p-4 sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link href="/" className="text-4xl font-bold">
          &lt;/&gt;
        </Link>

        {/* Navegação central - visível apenas em lg+ */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6">
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

        {/* Drawer para mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <Drawer
            direction="left"
            open={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
            shouldScaleBackground={false}
          >
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="!w-6 !h-6" />
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
                  >
                    <X className="!w-6 !h-6" />
                  </Button>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto p-2">
                  <nav className="flex flex-col ">
                    {sections.map((section) => (
                      <a
                        key={section}
                        href={`#${section}`}
                        className={mobileLinkClasses(section)}
                        onClick={handleLinkClick}
                      >
                        {t(section)}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="p-4 border-t">
                  <MoreOptionsDropdown />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Menu em telas grandes */}
        <div className="hidden lg:flex">
          <MoreOptionsDropdown />
        </div>
      </div>
    </header>
  );
}
