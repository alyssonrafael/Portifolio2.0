"use client";

import { ArrowDown, ArrowRight, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Section1() {
  const t = useTranslations("Home");
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    t("roles.webDeveloper"),
    t("roles.fullStackDeveloper"),
    t("roles.mobileDeveloper"),
    t("roles.amateurDesigner"),
  ];

  // efeito que simula a digitação do texto
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center lg:items-center gap-12 py-16 md:py-24 px-4 text-center lg:text-left "
    >
      <div className="flex-1 space-y-8">
        {/* Título com typewriter effect */}
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {t("greeting")} <br />
            <span className="text-primary text-2xl md:text-3xl">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 lg:max-w-2xl">
            "{t("tagline")}"
          </p>
        </div>

        <div className="justify-center lg:hidden flex">
          <div className="relative w-full max-w-xs lg:max-w-lg h-[200px] md:h-[300px] md:jus">
            <Image src="/avatar.svg" alt="avatar representando alysson" fill />
          </div>
        </div>

        {/* Seção "My Work" */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {t("work.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("work.description")}
          </p>
          <a
            href="#projects"
            className="inline-flex items-center text-lg text-primary hover:underline gap-2 hover:lg:text-text-contrast transition-colors duration-600"
          >
            {t("work.link")}
            <ArrowRight className="w-5 h-5 lg:flex hidden" />
            <ArrowDown className="w-5 h-5 flex lg:hidden" />
          </a>
        </div>

        {/* Ícones sociais */}
        <div className="flex gap-4 pt-4 justify-center lg:justify-normal">
          <a
            href="https://github.com/alyssonrafael"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:lg:text-text-contrast transition-colors duration-600"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/alyssonrafael/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:lg:text-text-contrast transition-colors duration-600"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Botão para descer */}
        <div className="lg:flex lg:absolute hidden left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition gap-2"
          >
            <ArrowDown className="w-8 h-8 animate-bounce text-text-primary dark:text-text-dark transition-colors duration-700" />
          </a>
        </div>
      </div>

      {/* Lado Direito (menor) - Apenas uma imagem */}
      <div className="flex-1 hidden lg:flex items-start justify-center">
        <div className="relative w-full max-w-2xl h-[500px] group">
          <div className="absolute inset-0 bg-text-contrast rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-1000 scale-100 group-hover:scale-110" />
          <Image
            src="/avatar.svg"
            alt="avatar representando alysson"
            fill
            className="transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:drop-shadow-text-contrast"
          />
        </div>
      </div>
    </section>
  );
}
