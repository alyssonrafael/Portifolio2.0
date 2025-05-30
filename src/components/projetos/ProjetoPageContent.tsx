import { Project } from "@/data/projects";
import TechItem from "../TechItem";

export default function ProjetoPageContent({
  name,
  about,
  description,
  techDescription,
  technologies,
  gallery,
}: Project) {
  //placeholder da pagina de projetos
  return (
    <>
      <section
        id="about"
        className="py-24 min-h-screen flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p>{about}</p>
        <p>{description}</p>
        <p>{techDescription}</p>
      </section>

      <section
        id="technologies"
        className="py-24 min-h-screen flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Tecnologias</h2>
        {technologies.map((tech, index) => (
          <TechItem key={index} {...tech} />
        ))}
      </section>

      <section
        id="gallery"
        className="py-24 min-h-screen flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Galeria</h2>
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Screenshot ${idx + 1}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </section>
    </>
  );
}
