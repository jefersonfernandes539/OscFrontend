"use client";
import { Card, CardContent } from "@/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

import { ImageGalleryModal } from "./components/image-gallery-modal";
import { motion, useScroll } from "motion/react";
import { History } from "./components/history";
import ContextValue from "./components/context-values";
export default function SobrePage() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 50,
          backgroundColor: "#ff605f",
        }}
      />{" "}
      <div className="min-h-screen bg-background">
        <section className="text-white relative py-20 lg:py-32 overflow-hidden bg-gradient-to-r from-[#ffc449] to-[#ff605f] rounded-b-4xl shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="container relative px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Nossa História
              </h1>
              <p className="text-xl leading-relaxed text-white">
                Conheça a jornada que nos trouxe até aqui e a visão que nos move
                para o futuro
              </p>
            </div>
          </div>
        </section>

        <History />

        <section className="py-16 lg:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff605f]">
                  Palavras do Fundador
                </h2>
              </div>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-6">
                      <Quote className="h-12 w-12 text-primary/20" />
                      <blockquote className="text-lg lg:text-xl leading-relaxed text-muted-foreground italic">
                        &ldquo;Fundar a Rede Mobilize, em 2020, foi uma resposta
                        direta à urgência de um povo desassistido em meio à
                        pandemia. Começamos com o essencial — cestas básicas e
                        apoio para acessar direitos —, mas sabíamos que era só o
                        começo.&rdquo;
                      </blockquote>
                      <blockquote className="text-lg lg:text-xl leading-relaxed text-muted-foreground italic">
                        &ldquo;Hoje, somos uma rede viva, presente em mais de 60
                        bairros, com dezenas de núcleos e entidades parceiras,
                        trabalhando pela superação da pobreza com ação direta,
                        articulação política e organização popular.&rdquo;
                      </blockquote>
                      <blockquote className="text-lg lg:text-xl leading-relaxed text-muted-foreground italic">
                        &ldquo;Seguimos mobilizados por um só motivo: ninguém
                        deve viver apenas para sobreviver. Todos têm direito a
                        uma vida digna, justa e cheia de possibilidades.&rdquo;
                      </blockquote>

                      <div className="pt-4">
                        <div className="font-semibold text-lg">
                          Artur Freitas
                        </div>
                        <div className="text-muted-foreground">
                          Fundador da Rede Mobilize
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <div className="relative">
                        <Image
                          src="/imageH.png"
                          alt="Fundador - Rede Mobilize"
                          width={250}
                          height={300}
                          className="rounded-2xl shadow-xl"
                        />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <ContextValue />
        {/* <ImageGalleryModal /> */}
      </div>
    </>
  );
}
