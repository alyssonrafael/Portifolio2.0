import { TechItemProps } from "@/components/TechItem";
import {
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGooglecolab,
  SiGooglegemini,
  SiI18Next,
  SiJavascript,
  SiJupyter,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPrisma,
  SiPuppeteer,
  SiPython,
  SiReact,
  SiReacthookform,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiThemoviedatabase,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { GiIsland } from "react-icons/gi";


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
  //imob gestao
  {
    slug: "Imob",
    name: "imob.name",
    about: "imob.about",
    description: "imob.description",
    techDescription: "imob.techDescription",
    technologies: [
      { label: "React", icon: <SiReact />, color: "blue" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { label: "Tailwind", icon: <SiTailwindcss />, color: "cyan" },
      { label: "Vite", icon: <SiVite/>, color: "purple" },
      { label: "react-hook-form", icon: <SiReacthookform/>, color: "pink" },
      { label: "supabase", icon: <SiSupabase/>, color: "green" },
      { label: "Tanstak-router", icon: <GiIsland/>, color: "yellow" },
      { label: "Tanstak-query", icon: <GiIsland/>, color: "yellow" },
      { label: "pupperter", icon: <SiPuppeteer/>, color:"red" },
      ] as TechItemProps[],
      gallery: [
        "/assetsProjects/imob/capa2.png",
        "/assetsProjects/imob/capa.png",
        "/assetsProjects/imob/img1.png",
        "/assetsProjects/imob/img3.png",
        "/assetsProjects/imob/img4.png",
        "/assetsProjects/imob/img5.png",
        "/assetsProjects/imob/img6.png",
        "/assetsProjects/imob/img7.png",
        "/assetsProjects/imob/img8.png",
        "/assetsProjects/imob/img9.png",
        "/assetsProjects/imob/img10.png",
        "/assetsProjects/imob/img11.png",
        "/assetsProjects/imob/img12.png",
      ],
      status: "production",
      projectType: "desktop",
  },
  //portifolio
  {
    slug: "Portifolio",
    name: "portfolio2.name", //passado para acessar o objeto na tradução
    about: "portfolio2.about",
    description: "portfolio2.description",
    techDescription: "portfolio2.techDescription",
    technologies: [
      { label: "NextJs", icon: <SiNextdotjs />, color: "black" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { label: "Tailwind Css", icon: <SiTailwindcss />, color: "cyan" },
      { label: "Hook Form", icon: <SiReacthookform />, color: "pink" },
      { label: "Shadcnui", icon: <SiShadcnui />, color: "black" },
      { label: "I18Next", icon: <SiI18Next />, color: "cyan" },
    ] as TechItemProps[],
    gallery: [
      "/assetsProjects/portifolio/capa.png",
      "/assetsProjects/portifolio/homeDark.png",
      "/assetsProjects/portifolio/about.png",
      "/assetsProjects/portifolio/tech.png",
      "/assetsProjects/portifolio/projects.png",
      "/assetsProjects/portifolio/contato.png",
      "/assetsProjects/portifolio/homeProjeto.png",
      "/assetsProjects/portifolio/aboutProjeto.png",
    ],
    status: "production",
    gitHubLink: "/Portifolio2.0",
    projectType: "desktop",
    projectLink: "https://portifolio-alyssonrafael-2-0-ten.vercel.app/pt",
  },
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
  //projeto de filmes da monitoria
  {
 slug: "Movie_List",
    name: "movie.name", 
    about: "movie.about",
    description: "movie.description",
    techDescription: "movie.techDescription",
    technologies: [
      { label: "React Native", icon: <SiReact />, color: "cyan" },
      { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { label: "Tailwind", icon: <SiTailwindcss />, color: "cyan"},
      { label: "Expo", icon: <SiExpo />, color: "black" },
      { label: "Gemini ai", icon: <SiGooglegemini />, color: "blue" },
      { label: "The OMDB API", icon: <SiThemoviedatabase />, color: "blue" }
    ] as TechItemProps[],
    gallery: [
     "/assetsProjects/movie/capa1.png",
     "/assetsProjects/movie/capa.jpeg",
     "/assetsProjects/movie/img1.jpeg",
     "/assetsProjects/movie/img2.jpeg",
     "/assetsProjects/movie/img3.jpeg",
     "/assetsProjects/movie/img4.jpeg",
     "/assetsProjects/movie/img5.jpeg",
     "/assetsProjects/movie/img6.jpeg",
     "/assetsProjects/movie/img7.jpeg",
    ],
    status: "documentationOnly",
    gitHubLink: "/Prototipo_monitoria_mobile",
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
    status: "documentationOnly",
    gitHubLink: "/Storage",
    projectLink: "https://storage-frontend-eight.vercel.app/",
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
 
];
