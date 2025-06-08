import useEmblaCarousel from "embla-carousel-react";
import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

// Interface que define as props do componente
interface ImageSwipeModalProps {
  images: string[]; // Array de URLs das imagens
  selectedIndex: number; // Índice da imagem selecionada inicialmente
  onClose: () => void; // Função para fechar o modal
  onSelect: (index: number) => void; // Função chamada quando uma nova imagem é selecionada
}

export default function ImageSwipeModal({
  images,
  selectedIndex,
  onClose,
  onSelect,
}: ImageSwipeModalProps) {
  // Configuração dos carrosséis principal e de miniaturas usando Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: selectedIndex,
    loop: true,
  });

  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: false,
    slidesToScroll: 1,
    align: "start",
  });

  // Efeito para sincronizar os carrosséis principal e de miniaturas
  useEffect(() => {
    if (!emblaApi || !thumbEmblaApi) return;

    // Quando o carrossel principal muda, atualiza o de miniaturas
    emblaApi.on("select", () => {
      const index = emblaApi.selectedScrollSnap();
      onSelect(index); // Notifica o componente pai sobre a mudança
      thumbEmblaApi.scrollTo(index); // Sincroniza miniaturas
    });

    // Quando o carrossel de miniaturas muda, atualiza o principal
    thumbEmblaApi.on("select", () => {
      const index = thumbEmblaApi.selectedScrollSnap();
      emblaApi.scrollTo(index); // Sincroniza carrossel principal
      onSelect(index); // Notifica o componente pai
    });

    // Garante que ambos começam no índice correto
    if (emblaApi.selectedScrollSnap() !== selectedIndex) {
      emblaApi.scrollTo(selectedIndex);
    }
    if (thumbEmblaApi.selectedScrollSnap() !== selectedIndex) {
      thumbEmblaApi.scrollTo(selectedIndex);
    }
  }, [emblaApi, thumbEmblaApi, selectedIndex, onSelect]);

  // Efeito para fechar o modal com a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    // Overlay do modal
    <div
      className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4"
      onClick={onClose} // Fecha o modal ao clicar fora
    >
      {/* Botão de fechar */}
      <button
        className="absolute top-4 right-4 z-50 text-white bg-black/50 p-2 rounded-full"
        onClick={onClose}
      >
        <X />
      </button>

      {/* Carrossel Principal - exibe a imagem em tamanho maior */}
      <div
        className="overflow-hidden w-full max-w-5xl px-4"
        onClick={(e) => e.stopPropagation()}
        ref={emblaRef}
      >
        <div className="flex select-none">
          {images.map((src, i) => (
            <div
              className="min-w-full flex justify-center items-center p-2"
              key={i}
            >
              <Image
                src={src}
                alt={`Imagem ${i + 1}`}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto h-auto object-contain rounded-lg"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carrossel de Miniaturas - navegação rápida */}
      <div
        className="overflow-hidden w-full max-w-5xl mt-4"
        onClick={(e) => e.stopPropagation()}
        ref={thumbEmblaRef}
      >
        <div className="flex gap-2 select-none cursor-pointer">
          {images.map((src, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${
                // Destaca a miniatura atualmente selecionada
                i === selectedIndex
                  ? "border-white opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
              onClick={() => {
                onSelect(i);
                emblaApi?.scrollTo(i); // Navega para a imagem clicada
              }}
            >
              <Image
                src={src}
                alt={`Miniatura ${i + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
