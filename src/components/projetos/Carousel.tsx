"use client";

import Slider from "react-slick";
import { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// props aceitas
interface CarouselProps {
  children: ReactNode;
  slidesToShow?: number;
  autoplaySpeed?: number;
}

export default function Carousel({
  children,
  slidesToShow = 3,
  autoplaySpeed = 5000,
}: CarouselProps) {
  // configuraçoes do carosel
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      {/* rendeiza um slider com os projetos */}
      <Slider {...settings}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div key={i} className="px-2 py-4">
                {child}
              </div>
            ))
          : children}
      </Slider>
      {/* estilos personalizados para o carosel */}
      <style jsx global>{`
        .slick-prev:before,
        .slick-next:before {
          color: #999;
          font-size: 24px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #999;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          color: #874ae4;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
