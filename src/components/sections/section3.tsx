"use client";
import { useTranslations } from "next-intl";
import TechItem, { TechItemProps } from "@/components/TechItem";
import { motion } from "framer-motion";
//inportações dos icones
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiReact,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

//mapa das tecnologias por topicos usando a tipagem correta
const frontendTechs: TechItemProps[] = [
  { label: "HTML", icon: <SiHtml5 />, color: "orange" },
  { label: "CSS", icon: <SiCss3 />, color: "blue" },
  { label: "JavaScript", icon: <SiJavascript />, color: "yellow" },
  { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
  { label: "React", icon: <SiReact />, color: "blue" },
  { label: "React Native", icon: <SiReact />, color: "blue2" },
  { label: "Next.js", icon: <SiNextdotjs />, color: "black" },
  { label: "Tailwind", icon: <SiTailwindcss />, color: "cyan" },
];
const backendTechs: TechItemProps[] = [
  { label: "JavaScript", icon: <SiJavascript />, color: "yellow" },
  { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
  { label: "NodeJs", icon: <SiNodedotjs />, color: "green" },
  { label: "Python", icon: <SiPython />, color: "yellow" },
  { label: "MySQL", icon: <SiMysql />, color: "blue" },
  { label: "Postgresql", icon: <SiPostgresql />, color: "blue" },
  { label: "SQlite", icon: <SiSqlite />, color: "black" },
];
const devopsTechs: TechItemProps[] = [
  { label: "Git", icon: <SiGit />, color: "orange" },
  { label: "GitHub", icon: <SiGithub />, color: "black" },
  { label: "Docker", icon: <SiDocker />, color: "blue" },
];
const devTechs: TechItemProps[] = [
  { label: "VScode", icon: <VscVscode />, color: "blue" },
  { label: "Figma", icon: <SiFigma />, color: "pink" },
  { label: "Docker", icon: <SiDocker />, color: "blue" },
];

export default function Section3() {
  //pegando traduções da sessao especifica
  const t = useTranslations("Technologies");

  //animação do container com a animação dos filhos
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="technologies" className="py-16 md:py-24 min-h-screen flex items-center">
      <div className="mx-auto px-4 max-w-7xl w-full">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          {t("title")}
        </h2>
        <p className="max-w-xl mb-12 mx-auto text-center">{t("description")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coluna Frontend */}
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {frontendTechs.map((tech) => (
                <TechItem key={tech.label} {...tech} />
              ))}
            </div>
          </motion.div>

          {/* Coluna Backend */}
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Backend</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {backendTechs.map((tech) => (
                <TechItem key={tech.label} {...tech} />
              ))}
            </div>
          </motion.div>

          {/* Coluna DevOps */}
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">DevOps</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {devopsTechs.map((tech) => (
                <TechItem key={tech.label} {...tech} />
              ))}
            </div>
          </motion.div>

          {/* Coluna Desenvolvimento */}
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {t("development")}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {devTechs.map((tech) => (
                <TechItem key={tech.label} {...tech} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
