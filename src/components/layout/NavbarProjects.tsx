"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MoreOptionsDropdown } from "./MoreOptionsDropDown";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  //efeito para travar o scroll
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isDrawerOpen]);

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
    <>
      <header className="w-full p-4 sticky top-0 z-40 bg-transparent backdrop-blur-sm">
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
          <h1 className="lg:hidden text-lg font-semibold text-text-primary dark:text-text-dark">
            {projectName}
          </h1>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <Menu className="!w-6 !h-6" />
            </Button>
          </div>

          {/* Dropdown em telas grandes */}
          <div className="hidden lg:flex">
            <MoreOptionsDropdown />
          </div>
        </div>
      </header>

      {/* Drawer para mobile */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Overlay - cobre a tela toda */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-screen w-[75vw] bg-background z-50 shadow-lg flex flex-col bg-bg-primary dark:bg-bg-dark border-none text-text-primary dark:text-text-dark"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Cabeçalho */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-2xl font-semibold">{t("navigation")}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col p-2">
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
              {/* Mais opções */}
              <div className="p-4 border-t">
                <MoreOptionsDropdown />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
