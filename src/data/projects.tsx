import { TechItemProps } from "@/components/TechItem";
import { SiHtml5, SiReact, SiTypescript } from "react-icons/si";

//campos esperados para o project
export interface Project {
  slug: string;
  name: string;
  about: string;
  description: string;
  techDescription?: string;
  technologies: TechItemProps[];
  gallery: string[];
  status: "hosted" | "production" | "notHosted" | "documentationOnly";
  gitHubLink: string; // /nome do projeto no github
}
//meus projetos um array de Project
export const projects: Project[] = [
  //ex projeto 1
  {
    slug: "Projeto-1",
    name: "project1.name", //passado para acessar o objeto na tradução
    about: "project1.about",
    description: "project1.description",
    techDescription: "project1.techDescription",
    technologies: [
      { label: "HTML", icon: <SiHtml5 />, color: "orange" },
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
    ] as TechItemProps[],
    gallery: ["/assetsProjects/project1/capa.png"],
    status: "hosted",
    gitHubLink: "/projeto1",
  },
  //ex projeto 2
  {
    slug: "Projeto-2",
    name: "project2.name",
    about: "project2.about",
    description: "project2.description",
    technologies: [
      { label: "HTML", icon: <SiHtml5 />, color: "orange" },
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
    ] as TechItemProps[],
    gallery: ["/assetsProjects/project1/capa.png"],
    status: "notHosted",
    gitHubLink: "/projeto2",
  },
];
