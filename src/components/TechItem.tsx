import { useMobile } from "@/contexts/MobileContext";
import { motion } from "framer-motion";
import { ReactNode } from "react";

//tipos de cores acitos
type ColorName =
  | "cyan"
  | "blue"
  | "black"
  | "green"
  | "red"
  | "orange"
  | "yellow"
  | "pink"
  | "blue2";

//props que os items aceitam
export interface TechItemProps {
  color: ColorName;
  icon: ReactNode;
  label: string;
}

const colorMap = {
  cyan: {
    text: "text-cyan-500",
    border: "border-cyan-500",
    bg: "bg-cyan-500/10",
    hoverBorder: "hover:border-cyan-500",
    hoverBg: "hover:bg-cyan-500/10",
  },
  blue: {
    text: "text-blue-500",
    border: "border-blue-500",
    bg: "bg-blue-500/10",
    hoverBorder: "hover:border-blue-500",
    hoverBg: "hover:bg-blue-500/10",
  },
  black: {
    text: "text-black",
    border: "border-black",
    bg: "bg-black/10",
    hoverBorder: "hover:border-black",
    hoverBg: "hover:bg-black/10",
  },
  green: {
    text: "text-green-500",
    border: "border-green-500",
    bg: "bg-green-500/10",
    hoverBorder: "hover:border-green-500",
    hoverBg: "hover:bg-green-500/10",
  },
  red: {
    text: "text-red-500",
    border: "border-red-500",
    bg: "bg-red-500/10",
    hoverBorder: "hover:border-red-500",
    hoverBg: "hover:bg-red-500/10",
  },
  orange: {
    text: "text-orange-500",
    border: "border-orange-500",
    bg: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-500",
    hoverBg: "hover:bg-orange-500/10",
  },
  yellow: {
    text: "text-yellow-500",
    border: "border-yellow-500",
    bg: "bg-yellow-500/10",
    hoverBorder: "hover:border-yellow-500",
    hoverBg: "hover:bg-yellow-500/10",
  },
  pink: {
    text: "text-pink-500",
    border: "border-pink-500",
    bg: "bg-pink-500/10",
    hoverBorder: "hover:border-pink-500",
    hoverBg: "hover:bg-pink-500/10",
  },
  blue2: {
    text: "text-blue-300",
    border: "border-blue-300",
    bg: "bg-blue-300/10",
    hoverBorder: "hover:border-blue-300",
    hoverBg: "hover:bg-blue-300/10",
  },
};

export default function TechItem({ label, color, icon }: TechItemProps) {
  //mapa das cores
  const colors = colorMap[color];
  //hook para verificar se esta em mobile
  const { isMobile } = useMobile();
  //animação de entrada dos itens
  const itemVariant = {
    hidden: {
      opacity: 0,
      y: isMobile ? 60 : 30,
      scale: isMobile ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.4,
        ease: isMobile ? [0.43, 0.13, 0.23, 0.96] : "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariant}>
      <div
        className={`w-28 h-28 border rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 p-2 transition-all duration-300 ease-in-out
        bg-bg-primary dark:bg-bg-dark ${colors.hoverBorder} ${colors.hoverBg} hover:shadow-md hover:scale-105`}
      >
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${colors.bg} ${colors.text}`}
        >
          <div className="text-2xl">{icon}</div>
        </div>
        <span className="text-[0.9rem] font-medium text-center text-zinc-800 dark:text-zinc-100">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
