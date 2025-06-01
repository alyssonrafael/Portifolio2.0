import { Project } from "@/data/projects";
import { useTranslations } from "next-intl";

//pega apenas o tipo do status la do projeto
type StatusBadgeProps = Pick<Project, "status">;

export function StatusBadge({ status }: StatusBadgeProps) {
  const t = useTranslations("Projects.status");
  // estilos para cada status
  const statusStyles = {
    hosted:
      "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 ",
    production:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100",
    notHosted:
     "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100",
    documentationOnly:
      "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100",
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
