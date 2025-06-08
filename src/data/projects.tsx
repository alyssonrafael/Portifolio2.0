import { TechItemProps } from "@/components/TechItem";
import {
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiJupyter,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReacthookform,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
  gitHubLink?: string; // /nome do projeto no github
  projectLink?: string;
  projectType: "desktop" | "mobile";
}
//meus projetos um array de Project
export const projects: Project[] = [
  //Agendapp
  {
    slug: "AgendApp",
    name: "agendapp.name", //passado para acessar o objeto na tradução
    about: "agendapp.about",
    description: "agendapp.description",
    techDescription: "agendapp.techDescription",
    technologies: [
      { label: "React Native", icon: <SiReact />, color: "cyan" },
      { label: "CSS", icon: <SiCss3 />, color: "blue" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { label: "Expo", icon: <SiExpo />, color: "black" },
      { label: "NodeJs", icon: <SiNodedotjs />, color: "green" },
      { label: "Express", icon: <SiExpress />, color: "black" },
      { label: "Docker", icon: <SiDocker />, color: "blue" },
      { label: "Postgress", icon: <SiPostgresql />, color: "blue" },
      { label: "Prisma ORM", icon: <SiPrisma />, color: "black" },
    ] as TechItemProps[],
    gallery: [
      "/assetsProjects/agendapp/capa.png",
      "/assetsProjects/agendapp/login.jpg",
      "/assetsProjects/agendapp/home.jpg",
      "/assetsProjects/agendapp/homeDark.png",
      "/assetsProjects/agendapp/home2.jpg",
      "/assetsProjects/agendapp/empresas.png",
      "/assetsProjects/agendapp/empresa.png",
      "/assetsProjects/agendapp/grade.png",
      "/assetsProjects/agendapp/servicos.png",
    ],
    status: "documentationOnly",
    gitHubLink: "/AgendApp_Frontend",
    projectType: "mobile",
  },
  //storage 2.0
  {
    slug: "Storage2",
    name: "storage2.name",
    about: "storage2.about",
    description: "storage2.description",
    techDescription: "storage2.techDescription",
    technologies: [
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "React Hook form", icon: <SiReacthookform />, color: "orange" },
      { label: "Tailwind", icon: <SiTailwindcss />, color: "cyan" },
      { label: "NodeJs", icon: <SiNodedotjs />, color: "green" },
      { label: "Express", icon: <SiExpress />, color: "black" },
      { label: "Docker", icon: <SiDocker />, color: "blue" },
      { label: "Postgress", icon: <SiPostgresql />, color: "blue" },
      { label: "Prisma ORM", icon: <SiPrisma />, color: "black" },
    ] as TechItemProps[],
    gallery: [
      "/assetsProjects/storage2/capa.png",
      "/assetsProjects/storage2/home.png",
      "/assetsProjects/storage2/carrinho.png",
      "/assetsProjects/storage2/relatorios.png",
      "/assetsProjects/storage2/dashboard.png",
      "/assetsProjects/storage2/impressao.png",
    ],
    status: "production",
    projectType: "desktop",
  },
  //storage
  {
    slug: "Storage",
    name: "storage.name",
    about: "storage.about",
    description: "storage.description",
    techDescription: "storage.techDescription",
    technologies: [
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { label: "Javascript", icon: <SiJavascript />, color: "yellow" },
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "Tailwind", icon: <SiTailwindcss />, color: "cyan" },
      { label: "NodeJs", icon: <SiNodedotjs />, color: "green" },
      { label: "Express", icon: <SiExpress />, color: "black" },
      { label: "Docker", icon: <SiDocker />, color: "blue" },
      { label: "Postgress", icon: <SiPostgresql />, color: "blue" },
      { label: "Prisma ORM", icon: <SiPrisma />, color: "black" },
    ] as TechItemProps[],
    gallery: [
      "/assetsProjects/storage/capa.png",
      "/assetsProjects/storage/home.png",
      "/assetsProjects/storage/estoque.png",
      "/assetsProjects/storage/carrinho.png",
      "/assetsProjects/storage/dashboard.png",
    ],
    status: "hosted",
    gitHubLink: "/Storage",
    projectLink: "https://storage-frontend-eight.vercel.app/",
    projectType: "desktop",
  },
  //Costs
  {
    slug: "Costs",
    name: "costs.name",
    about: "costs.about",
    description: "costs.description",
    technologies: [
      { label: "HTML", icon: <SiHtml5 />, color: "orange" },
      { label: "CSS", icon: <SiCss3 />, color: "blue" },
      { label: "Javascript", icon: <SiJavascript />, color: "yellow" },
      { label: "Json", icon: <SiJson />, color: "green" },
    ] as TechItemProps[],
    gallery: [
      "/assetsProjects/costs/capa.png",
      "/assetsProjects/costs/criar.png",
      "/assetsProjects/costs/projetos.png",
      "/assetsProjects/costs/detalhes.png",
      "/assetsProjects/costs/sobre.png",
    ],
    status: "documentationOnly",
    gitHubLink: "/COSTs",
    projectType: "desktop",
  },
  //analise de dados
  {
    slug: "Analise",
    name: "analise.name",
    about: "analise.about",
    description: "analise.description",
    techDescription: "analise.techDescription",
    technologies: [
      { label: "Python", icon: <SiPython />, color: "yellow" },
      { label: "jupter", icon: <SiJupyter />, color: "orange" },
      { label: "pandas", icon: <SiPandas />, color: "blue" },
      { label: "Plotly", icon: <SiPlotly />, color: "pink" },
      { label: "Numpy", icon: <SiNumpy />, color: "black" },
      { label: "Google Colab", icon: <SiGooglecolab />, color: "orange" },
    ] as TechItemProps[],
    gallery: [
      "/assetsProjects/analise/capa.jpeg",
      "/assetsProjects/analise/img1.png",
      "/assetsProjects/analise/img2.png",
      "/assetsProjects/analise/img3.png",
    ],
    status: "documentationOnly",
    gitHubLink: "/projeto_DEV.rapido.python",
    projectType: "desktop",
  },
  //to-do
  {
    slug: "To-Do-List",
    name: "to-do.name",
    about: "to-do.about",
    description: "to-do.description",
    techDescription: "to-do.techDescription",
    technologies: [
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { label: "Javascript", icon: <SiJavascript />, color: "yellow" },
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "Tailwind", icon: <SiTailwindcss />, color: "cyan" },
      { label: "NodeJs", icon: <SiNodedotjs />, color: "green" },
      { label: "Express", icon: <SiExpress />, color: "black" },
      { label: "Docker", icon: <SiDocker />, color: "blue" },
      { label: "Postgress", icon: <SiPostgresql />, color: "blue" },
      { label: "Prisma ORM", icon: <SiPrisma />, color: "black" },
    ] as TechItemProps[],
    gallery: [
      "/assetsProjects/to-do/capa.png",
      "/assetsProjects/to-do/novaTarefa.png",
      "/assetsProjects/to-do/categoria.png",
      "/assetsProjects/to-do/tarefaDia.png",
      "/assetsProjects/to-do/todasTarefas.png",
      "/assetsProjects/to-do/calendario.png",
      "/assetsProjects/to-do/sobre.png",
    ],
    status: "hosted",
    gitHubLink: "/to-do-list-full",
    projectLink: "https://to-do-list-full-front-end.vercel.app/",
    projectType: "desktop",
  },
];
