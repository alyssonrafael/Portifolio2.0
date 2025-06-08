import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "./StatusBadge";
import { useTranslations } from "next-intl";

//omite alguns tipos que não serao usados
type PartialProjectCardProps = Omit<
  Project,
  | "about"
  | "techDescription"
  | "technologies"
  | "gitHubLink"
  | "projectType"
  | "projectLink"
>;

export default function ProjetoCard({
  slug,
  name,
  description,
  gallery,
  status,
}: PartialProjectCardProps) {
  const t = useTranslations("Projects");

  // cria um card clicavel com o link da pagina do projeto sua imagem e algumas informaçoes
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="w-full max-w-md bg-bg-primary dark:bg-bg-dark hover:bg-white/30 dark:hover:bg-white/5 rounded-xl shadow-lg  overflow-hidden transition hover:scale-[1.02] duration-300">
        {gallery && gallery.length > 0 && (
          <Image
            src={gallery[0]}
            alt={name}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-6 flex flex-col gap-2 rounded-b-2xl">
          <h2 className="text-xl font-bold text-text-primary dark:text-text-dark">
            {t(name)}
          </h2>
          <p className="text-sm text-text-primary/40 dark:text-text-dark/40 h-10 line-clamp-2">
            {t(description)}
          </p>

          <div className="mt-4">
            <StatusBadge status={status} />
          </div>
        </div>
      </div>
    </Link>
  );
}
