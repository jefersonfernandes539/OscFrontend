"use client";
import { Button } from "@/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function HistoryImage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
  } | null>(null);
  return (
    <AnimatePresence>
      {selectedImage && modalContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => {
            setSelectedImage(null);
            setModalContent(null);
          }}
        >
          <motion.div
            layoutId="main-image"
            className="bg-background rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={modalContent.title}
                width={800}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => {
                  setSelectedImage(null);
                  setModalContent(null);
                }}
              >
                ×
              </Button>
            </div>

            <motion.div
              className="p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {modalContent.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {modalContent.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Marcos Importantes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Primeira linha de código escrita</li>
                    <li>• Primeiro usuário cadastrado</li>
                    <li>• Primeira parceria estabelecida</li>
                    <li>• Primeiro prêmio recebido</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Próximos Passos</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Expansão para novos mercados</li>
                    <li>• Lançamento de novos produtos</li>
                    <li>• Parcerias estratégicas</li>
                    <li>• Crescimento da equipe</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="/contato">Entre em Contato</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/produtos">Ver Produtos</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
