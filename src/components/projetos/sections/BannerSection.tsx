"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface BannerSectionProps {
  name: string;
  description: string;
  projectLink?: string;
}

export default function BannerSection({
  name,
  description,
  projectLink,
}: BannerSectionProps) {
  const t = useTranslations("Projects");

  const bannerAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const sectionFadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    },
  });

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="banner"
      className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)]"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bannerAnimation}
        className="space-y-6"
      >
        <motion.h1
          variants={sectionFadeIn()}
          className="text-5xl md:text-7xl pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          {t(name)}
        </motion.h1>
        <motion.p
          variants={sectionFadeIn(0.2)}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
        >
          {t(description)}
        </motion.p>
        {projectLink && (
          <motion.div variants={sectionFadeIn(0.4)}>
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              {t("seeProjectOnline")}
            </a>
          </motion.div>
        )}
      </motion.div>

      {/*setinha pulsando */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={scrollToNextSection}
        className="absolute bottom-10 cursor-pointer"
      >
        <svg
          className="w-10 h-10 text-gray-400 hover:text-blue-500 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
