"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/placeholder.svg?height=300&width=400",
    title: "Nosso Escritório",
    description:
      "Um ambiente moderno e colaborativo onde as melhores ideias nascem.",
    category: "Escritório",
  },
  {
    id: "2",
    src: "/placeholder.svg?height=300&width=400",
    title: "Equipe Trabalhando",
    description: "Nossa equipe dedicada trabalhando em projetos inovadores.",
    category: "Equipe",
  },
  {
    id: "3",
    src: "/placeholder.svg?height=300&width=400",
    title: "Evento de Lançamento",
    description: "O momento especial do lançamento do nosso primeiro produto.",
    category: "Eventos",
  },
  {
    id: "4",
    src: "/placeholder.svg?height=300&width=400",
    title: "Prêmio Recebido",
    description: "Reconhecimento pela inovação e excelência em tecnologia.",
    category: "Conquistas",
  },
];

export function ImageGalleryModal() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(galleryImages.findIndex((img) => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Galeria de Momentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Imagens que contam nossa história e mostram nossa jornada
          </p>
        </div>

        <LayoutGroup>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            layout
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                layoutId={`image-${image.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => openModal(image)}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-sm">{image.title}</h3>
                        <p className="text-xs opacity-80">{image.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <motion.div
                layoutId={`image-${selectedImage.id}`}
                className="bg-background rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botões de Navegação */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 z-10"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Imagem */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <motion.div
                  className="p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {currentIndex + 1} de {galleryImages.length}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {selectedImage.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedImage.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
