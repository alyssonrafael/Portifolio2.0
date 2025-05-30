import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Section4() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-24 min-h-screen flex items-center">
      <div className="mx-auto px-4 max-w-7xl w-full">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          {t("my projects")}
        </h2>

        <div className="flex flex-col gap-4">
          {/*pmapeia o link do projeto com base no slug e ja faz um botao referente a cada projeto */}
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {project.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
