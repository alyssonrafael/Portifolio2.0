import { Project } from "@/data/projects";
import { useTranslations } from "next-intl";

//pega apenas o tipo do status la do projeto
type StatusBadgeProps = Pick<Project, "status">;

export function StatusBadge({ status }: StatusBadgeProps) {
  const t = useTranslations("Projects.status");
  // estilos para cada status
  const statusStyles = {
    hosted:
      "bg-gradient-to-r from-orange-500 to-purple-600 text-white dark:from-orange-700 dark:to-purple-800",
    production:
      "bg-gradient-to-r from-green-100 to-teal-200 text-emerald-800 dark:from-emerald-700  dark:to-teal-900 dark:text-white",
    notHosted:
      "bg-gradient-to-r from-red-100  to-pink-200 text-red-800 dark:from-rose-700 dark:to-pink-900 dark:text-white",
    documentationOnly:
      "bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 dark:from-sky-700 dark:to-blue-900 dark:text-white",
  };

  // retorna um badget com o estatus
  return (
    <span
      className={`
        inline-block px-4 py-2 text-xs font-semibold rounded-full
        ${statusStyles[status]}
      `}
    >
      <span>{t(`${status}`)}</span>
    </span>
  );
}
