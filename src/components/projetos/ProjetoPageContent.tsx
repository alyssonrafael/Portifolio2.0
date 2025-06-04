import { Project } from "@/data/projects";
import TechItem from "../TechItem";
import { useTranslations } from "next-intl";

export default function ProjetoPageContent({
  name,
  about,
  description,
  techDescription,
  technologies,
  gallery,
  gitHubLink,
  projectType,
  projectLink,
}: Project) {
  const t = useTranslations("Projects");
  //placeholder da pagina de projetos
  return (
    <>
      <section
        id="about"
        className="py-24 min-h-screen flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-4">{t(name)}</h1>
        <p>{t(about)}</p>
        <p>{t(description)}</p>
        {/*se tiver ele mpuxa da tradução se nao tiver nao faz isso e segue*/}
        {techDescription && <p>{t(techDescription)}</p>}
        {gitHubLink && <p> {gitHubLink} </p>}
        {projectLink && <p> {projectLink} </p>}
      </section>

      <section
        id="technologies"
        className="py-24 min-h-screen flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Tecnologias</h2>
        <div className="flex flex-wrap gap-5">
          {technologies.map((tech, index) => (
            <TechItem key={index} {...tech} />
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="py-24 min-h-screen flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Galeria</h2>
        <div className=" flex flex-wrap gap-4">
          {gallery.map((img, idx) => {
            // Pula a primeira imagem se for mobile
            if (projectType === "mobile" && idx === 0) return null;

            return (
              <img
                key={idx}
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className={`rounded-lg shadow object-cover ${
                  projectType === "desktop"
                    ? "w-[520px] h-60"
                    : "w-[300px] h-[700px]"
                }`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
