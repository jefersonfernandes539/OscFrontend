"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/ui/card";
import { GalleryImage } from "@/app/types/galery";


interface Props {
  images: GalleryImage[];
  openModal: (image: GalleryImage) => void;
}

export function GalleryGrid({ images, openModal }: Props) {
  return (
    <motion.div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6" layout>
      {images.map((image) => (
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
  );
}
