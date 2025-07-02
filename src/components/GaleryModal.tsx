"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/app/types/galery";

interface Props {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}

export function GalleryModal({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total,
}: Props) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            layoutId={`image-${image.id}`}
            className="bg-background rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
              onClick={onPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
              onClick={onNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="relative aspect-[16/10]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              className="p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {image.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} de {total}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {image.title}
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {image.description}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
