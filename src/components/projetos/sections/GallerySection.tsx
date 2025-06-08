"use client";

import { useEffect, useState } from "react";
import Carousel from "../Carousel";
import { useTranslations } from "next-intl";
import ImageSwipeModal from "@/components/ImageSwipeModal";
import Image from "next/image";

// Interface que define as props do componente
interface GallerySectionProps {
  gallery: string[];
  name: string;
  projectType: string;
}

export default function GallerySection({
  gallery,
  name,
  projectType,
}: GallerySectionProps) {
  // Estado para controlar qual imagem está selecionada no modal
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Hook para traduções
  const t = useTranslations("NavProjects");

  // Filtra a galeria removendo a primeira imagem se for um projeto mobile
  const filteredGallery = projectType === "mobile" ? gallery.slice(1) : gallery;

  // Função para fechar o modal
  const closeModal = () => setSelectedIndex(null);

  // Função para navegar para a imagem anterior no modal
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null
        ? prev === 0
          ? filteredGallery.length - 1 // Vai para a última imagem se estiver na primeira
          : prev - 1
        : null
    );

  // Função para navegar para a próxima imagem no modal
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null
        ? prev === filteredGallery.length - 1
          ? 0 // Volta para a primeira imagem se estiver na última
          : prev + 1
        : null
    );

  // Efeito para adicionar listeners de teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return; // Não faz nada se o modal não estiver aberto

      // Navegação com teclado
      if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  // Se não houver imagens, não renderiza nada
  if (gallery.length === 0) return null;

  return (
    <section id="gallery" className="py-24 min-h-screen relative">
      <div>
        <h2 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text p-2">
          {t("gallery")}
        </h2>

        {/* Carrossel de imagens */}
        <Carousel>
          {filteredGallery.map((img, idx) => (
            <div
              key={idx}
              className="px-2 py-4 cursor-pointer"
              onClick={() => setSelectedIndex(idx)} // Abre o modal ao clicar
            >
              <Image
                src={img}
                alt={`Imagem ${idx + 1} do projeto ${name}`}
                width={projectType === "mobile" ? 280 : 800} // Tamanhos diferentes para mobile
                height={500}
                className={`mx-auto rounded-lg shadow-md transition-transform hover:scale-105 ${
                  projectType === "mobile"
                    ? "object-contain" // Estilo para projetos mobile
                    : "object-cover w-full max-h-[500px]" // Estilo para outros projetos
                }`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal de visualização de imagem (só é renderizado quando selectedIndex não é null) */}
      {selectedIndex !== null && (
        <ImageSwipeModal
          images={filteredGallery}
          selectedIndex={selectedIndex}
          onClose={closeModal}
          onSelect={setSelectedIndex}
        />
      )}
    </section>
  );
}