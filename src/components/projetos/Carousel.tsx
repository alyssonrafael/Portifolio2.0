"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  autoplaySpeed?: number;
}

export default function Carousel({
  children,
  autoplaySpeed = 5000,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current || !emblaApi) return;
    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplaySpeed);
  }, [emblaApi, autoplaySpeed]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return stopAutoplay;
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const items = Array.isArray(children) ? children : [children];

  return (
    //se o mouse entrar ou sair interfere no autoplay
    <div
      className="relative w-full flex items-center"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Botão anterior */}
      <button
        onClick={scrollPrev}
        className="z-10 -ml-6 p-2 bg-white/80 dark:bg-bg-dark/50 rounded-full shadow hover:bg-white dark:hover:bg-bg-dark"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Carrossel */}
      <div className="overflow-hidden w-full pb-4" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((child, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Botão próximo */}
      <button
        onClick={scrollNext}
        className="z-10 -mr-6 p-2 bg-white/80 dark:bg-bg-dark/50 rounded-full shadow hover:bg-white dark:hover:bg-bg-dark"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mt-4 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === selectedIndex ? "bg-purple-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
