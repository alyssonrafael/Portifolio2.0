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
}
//meus projetos um array de Project
export const projects: Project[] = [
  //ex projeto 1
  {
    slug: "Projeto-1",
    name: "Projeto 1",
    about: "Esse é o projeto 1",
    description: "descrição do projeto",
    techDescription: "descrição das techs",
    technologies: [
      { label: "HTML", icon: <SiHtml5 />, color: "orange" },
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
    ] as TechItemProps[],
    gallery: [
      "/images/projeto-1/1.png",
      "/images/projeto-1/2.png",
    ],
  },
  //ex projeto 2
  {
    slug: "Projeto-2",
    name: "Projeto 2",
    about: "Esse é o projeto 2",
    description: "descrição do projeto",
    technologies: [
      { label: "HTML", icon: <SiHtml5 />, color: "orange" },
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
    ] as TechItemProps[],
    gallery: [
      "/images/projeto-2/1.png",
      "/images/projeto-2/2.png",
    ],
  },
];
