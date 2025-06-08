"use client";
import TechItem, { TechItemProps } from "@/components/TechItem";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface TechSectionProps {
  technologies: TechItemProps[];
  techDescription?: string;
  controls: import("framer-motion").AnimationControls;
  refProp: (node?: Element | null) => void;
}

export default function TechSection({
  technologies,
  techDescription,
  controls,
  refProp,
}: TechSectionProps) {
  const t = useTranslations("Projects");
  const tNav = useTranslations("NavProjects");

  const sectionFadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  });

  return (
    <section id="technologies" className="py-24 min-h-screen">
      <motion.div
        ref={refProp}
        initial="hidden"
        animate={controls}
        variants={sectionFadeIn()}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl mb-10  pb-2 text-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {tNav("technologies")}
        </h2>

        <div
          className={`grid gap-12 items-start lg:items-center ${
            techDescription
              ? "grid-cols-1 lg:grid-cols-3"
              : "grid-cols-1 justify-center"
          }`}
        >
          <div
            className={`flex flex-wrap gap-6 w-full ${
              techDescription
                ? "justify-center md:col-span-1 lg:col-span-2 self-center"
                : "justify-center"
            }`}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={sectionFadeIn(0.05 * index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TechItem {...tech} />
              </motion.div>
            ))}
          </div>

          {techDescription && (
            <motion.div
              variants={sectionFadeIn(0.4)}
              className="row-span-1 self-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-prose mx-auto"
            >
              <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                {t(techDescription)}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
