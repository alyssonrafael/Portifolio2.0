import { NavbarProjects } from "@/components/layout/NavbarProjects";
//layout com a navegação dos projetos
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-text-dark min-h-screen transition-colors duration-300">
      <NavbarProjects />
      <main>{children}</main>
    </div>
  );
}
