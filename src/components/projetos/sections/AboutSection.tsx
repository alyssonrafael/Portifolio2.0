"use client";
import { motion } from "framer-motion";
import { LucideGithub } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface AboutSectionProps {
  about: string;
  gitHubLink?: string;
  gallery: string[];
  name: string;
  projectType: string;
  controlsText: import("framer-motion").AnimationControls;
  refText: (node?: Element | null) => void;
  controlsImage: import("framer-motion").AnimationControls;
  refImage: (node?: Element | null) => void;
}

export default function AboutSection({
  about,
  gitHubLink,
  gallery,
  name,
  projectType,
  controlsText,
  refText,
  controlsImage,
  refImage,
}: AboutSectionProps) {
  const t = useTranslations("Projects");

  const sectionFadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  });

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-12 py-24 items-center min-h-screen"
    >
      <motion.div
        ref={refText}
        initial="hidden"
        animate={controlsText}
        variants={sectionFadeIn()}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text p-2 flex items-center justify-center md:justify-start gap-2">
          {t("about")}
          {gitHubLink && (
            <a
              href={`https://github.com/alyssonRafael${gitHubLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary ml-2 dark:text-text-dark hover:text-text-contrast transition-colors"
            >
              <LucideGithub size={28} />
            </a>
          )}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">{t(about)}</p>
      </motion.div>

      {gallery.length > 1 && (
        <motion.div
          ref={refImage}
          initial="hidden"
          animate={controlsImage}
          variants={sectionFadeIn(0.2)}
          className="flex-1"
        >
          <Image
            src={projectType === "desktop" ? gallery[0] : gallery[1]}
            alt={`Imagem principal do projeto ${name}`}
            width={projectType === "mobile" ? 280 : 800}
            height={projectType === "mobile" ? 600 : 500}
            className={`rounded-xl shadow-2xl ${
              projectType === "mobile"
                ? "object-contain mx-auto"
                : "object-cover"
            }`}
          />
        </motion.div>
      )}
    </section>
  );
}
