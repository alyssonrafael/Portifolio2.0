"use client";
import { useMobile } from "@/contexts/MobileContext";
import { motion } from "framer-motion";
import { BriefcaseBusiness, PencilRuler, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";

// Variantes de animação (desktop)
const cardVariants = {
  offscreen: () => ({
    opacity: 0,
    y: 50,
    scale: 0.95, // Leve zoom out
  }),
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1, // Volta ao tamanho original
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9,
      delay: i * 0.25,
    },
  }),
};

// Variantes para mobile
const mobileCardVariants = {
  offscreen: () => ({
    opacity: 0,
    y: 40,
    scale: 0.95,
  }),
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.15,
      duration: 1.1,
      delay: i * 0.2,
    },
  }),
};

export default function Section2() {

  const { isMobile } = useMobile();
  //traduções da sessão
  const t = useTranslations("About");

  //cards a serem renderizados
  const cards = [
    {
      icon: <UserRound size={30} color="#874AE4" />,
      title: t("cards.who.title"),
      content: t("cards.who.content"),
    },
    {
      icon: <BriefcaseBusiness size={30} color="#874AE4" />,
      title: t("cards.experience.title"),
      content: t("cards.experience.content"),
    },
    {
      icon: <PencilRuler size={30} color="#874AE4" />,
      title: t("cards.skills.title"),
      content: t("cards.skills.content"),
    },
  ];

  return (
    <section id="about" className="py-24 min-h-screen flex items-center">
      <div className="mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          {t("title")}
        </h2>
        <p className="max-w-xl mb-12 mx-auto text-center">{t("description")}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/*map dos cards a serem renderizados*/}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={isMobile ? mobileCardVariants : cardVariants} //animação se mobile se nao desktop
              className="rounded-lg border p-6 shadow-md group lg:transition-all lg:duration-500 lg:hover:shadow-xl lg:hover:border-text-contrast lg:hover:-translate-y-1 lg:hover:scale-105"
            >
              <div className="text-2xl font-semibold mb-3 flex items-center">
                <span className="mr-2">
                  {/*animação do icone do card*/}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mr-2 p-2 rounded-full bg-[#874AE4]/25 shadow-sm">
                      {card.icon}
                    </div>
                  </motion.div>
                </span>
                {card.title}
              </div>
              <p className="text-muted-foreground">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
