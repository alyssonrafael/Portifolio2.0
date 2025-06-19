import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import ProjetoCard from "../projetos/ProjetoCard";
import Carousel from "../projetos/Carousel";

export default function Section4() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-16 md:py-24 min-h-screen flex items-center">
      <div className="mx-auto px-4 max-w-7xl w-full">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          {t("myProjects")}
        </h2>
        <p className="max-w-xl mx-auto text-center">{t("description")}</p>
        <p className="max-w-xl mb-12 mx-auto text-center">{t("learnMore")}</p>

        {/* inporta o carosel e coloca cada projeto como um item nele */}
        <Carousel>
          {projects.map((project) => (
            <div key={project.slug} className="px-2">
              <ProjetoCard
                slug={project.slug}
                name={project.name}
                description={project.description}
                gallery={project.gallery}
                status={project.status}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
