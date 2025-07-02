"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";

import { GalleryImage } from "@/app/types/galery";
import { GalleryGrid } from "./GaleryGrid";
import { GalleryModal } from "./GaleryModal";

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(images.findIndex((img) => img.id === image.id));
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setSelectedImage(images[next]);
    setCurrentIndex(next);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prev]);
    setCurrentIndex(prev);
  };

  return (
    <LayoutGroup>
      <GalleryGrid images={images} openModal={openModal} />
      <GalleryModal
        image={selectedImage}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        currentIndex={currentIndex}
        total={images.length}
      />
    </LayoutGroup>
  );
}
