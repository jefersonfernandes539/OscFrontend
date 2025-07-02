"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ImageScroll() {
  const [currentImage, setCurrentImage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/imageA.jpg", alt: "Imagem 1" },
    { src: "/imageB.jpg", alt: "Imagem 2" },
    { src: "/imageC.jpg", alt: "Imagem 3" },
    { src: "/imageD.jpg", alt: "Imagem 4" },
    { src: "/imageE.jpg", alt: "Imagem 5" },
  ];

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const containerWidth = scrollContainerRef.current.clientWidth;
        const currentIndex = Math.round(scrollLeft / containerWidth);
        setCurrentImage(currentIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImage + 1) % images.length;
      scrollToImage(nextIndex);
      setCurrentImage(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="w-full h-full relative">
        <div
          ref={scrollContainerRef}
          className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar"
        >
          <div className="flex w-full h-full">
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "bg-[#ffc449] scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-[#ffc449]"
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToImage(Math.max(0, currentImage - 1))}
          disabled={currentImage === 0}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full z-10 shadow-lg transition-all duration-300 ${
            currentImage === 0
              ? "bg-white/30 cursor-not-allowed opacity-50"
              : "bg-white/80 hover:bg-[#ffc449] hover:scale-110"
          }`}
          aria-label="Imagem anterior"
        >
          <svg
            className="w-6 h-6 mx-auto text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() =>
            scrollToImage(Math.min(images.length - 1, currentImage + 1))
          }
          disabled={currentImage === images.length - 1}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full z-10 shadow-lg transition-all duration-300 ${
            currentImage === images.length - 1
              ? "bg-white/30 cursor-not-allowed opacity-50"
              : "bg-white/80 hover:bg-[#ffc449] hover:scale-110"
          }`}
          aria-label="Próxima imagem"
        >
          <svg
            className="w-6 h-6 mx-auto text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
