"use client";
import { Project } from "@/data/projects";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutSection from "./sections/AboutSection";
import BannerSection from "./sections/BannerSection";
import GallerySection from "./sections/GallerySection";
import TechSection from "./sections/TechSection";
import { useMobile } from "@/contexts/MobileContext";

export default function ProjetoPageContent(props: Project) {
  //use mobile para pegar o tamanho da tela
  const { isMobile } = useMobile();

  //hook de animaçoes das sessoes
  const useAnimatedSection = (threshold: number) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold, triggerOnce: true });

    useEffect(() => {
      if (inView) controls.start("visible");
    }, [inView, controls]);

    return { ref, controls };
  };

  //animaçoes individuais
  const aboutText = useAnimatedSection(isMobile ? 0.05 : 0.2);
  const aboutImage = useAnimatedSection(isMobile ? 0.05 : 0.2);
  const tech = useAnimatedSection(isMobile ? 0.05 : 0.2);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <BannerSection
        name={props.name}
        description={props.description}
        projectLink={props.projectLink}
      />
      <AboutSection
        about={props.about}
        gitHubLink={props.gitHubLink}
        gallery={props.gallery}
        name={props.name}
        projectType={props.projectType}
        controlsText={aboutText.controls}
        refText={aboutText.ref}
        controlsImage={aboutImage.controls}
        refImage={aboutImage.ref}
      />
      <TechSection
        technologies={props.technologies}
        techDescription={props.techDescription}
        controls={tech.controls}
        refProp={tech.ref}
      />
      <GallerySection
        gallery={props.gallery}
        name={props.name}
        projectType={props.projectType}
      />
    </div>
  );
}
