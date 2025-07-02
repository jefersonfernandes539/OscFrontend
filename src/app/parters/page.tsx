"use client";

import { GalleryImage } from "../types/galery";
import { Gallery } from "@/components/Galery";
import { motion, useScroll } from "motion/react";

const projectGallery: GalleryImage[] = [
  {
    id: "p1",
    src: "/imagesP/image1.png",
    title: "Casa Civil do Governo do Ceará",
    description:
      "Apoio à articulação intersetorial para execução de projetos sociais.",
    category: "Projeto",
  },
  {
    id: "p2",
    src: "/imagesP/image2.png",
    title: "Secretaria da Proteção Social do Governo do Estado do Ceará",
    description:
      "Suporte técnico e financeiro para ações sociais nos territórios.",
    category: "Projeto",
  },
  {
    id: "p3",
    src: "/imagesP/image3.png",
    title: "Secretaria Municipal do Desenvolvimento Habitacional de Fortaleza",
    description: "Parceria em projetos de habitação e urbanização comunitária.",
    category: "Projeto",
  },
  {
    id: "p4",
    src: "/imagesP/image4.png",
    title: "Secretaria Municipal de Desenvolvimento Econômico de Fortaleza",
    description: "Fomento à geração de renda e iniciativas empreendedoras.",
    category: "Projeto",
  },
  {
    id: "p5",
    src: "/imagesP/image5.png",
    title: "Fundo Brasil de Direitos Humanos",
    description:
      "Financiamento e apoio a projetos de impacto social e comunitário.",
    category: "Projeto",
  },
  {
    id: "p6",
    src: "/imagesP/image6.png",
    title: "SESC",
    description: "Parcerias em cultura, educação e assistência social.",
    category: "Projeto",
  },
];

const institutionalGallery: GalleryImage[] = [
  {
    id: "i1",
    src: "/imagesP/image7.png",
    title: "Junior Achievement Ceará",
    description:
      "Educação empreendedora para jovens em situação de vulnerabilidade.",
    category: "Institucional",
  },
  {
    id: "i2",
    src: "/imagesP/image8.png",
    title: "Associação de Mulheres Empreendedoras do Ceará",
    description: "Iniciativas de empoderamento feminino e geração de renda.",
    category: "Institucional",
  },
  {
    id: "i3",
    src: "/imagesP/image9.png",
    title: "Núcleo de Estudos em Pediatria da UFC",
    description: "Atuação na promoção da saúde infantil nas comunidades.",
    category: "Institucional",
  },
  {
    id: "i4",
    src: "/imagesP/image10.png",
    title: "Nupen - Liga de Prevenção da Doença Renal",
    description: "Educação em saúde e prevenção de doenças renais.",
    category: "Institucional",
  },
  {
    id: "i5",
    src: "/imagesP/image11.png",
    title: "Faculdade Ari de Sá",
    description: "Parceria acadêmica para formações e capacitações.",
    category: "Institucional",
  },
  {
    id: "i6",
    src: "/imagesP/image12.png",
    title: "Federação de Entidades de Bairros e Favelas de Fortaleza",
    description: "Articulação comunitária e fortalecimento territorial.",
    category: "Institucional",
  },
  {
    id: "i7",
    src: "/imagesP/image13.png",
    title: "Projeto Rondon na UFC",
    description: "Extensão universitária e atuação social nos territórios.",
    category: "Institucional",
  },
  {
    id: "i8",
    src: "/imagesP/image14.png",
    title: "Instituto Felipe Martins de Melo",
    description: "Inovação social e desenvolvimento sustentável.",
    category: "Institucional",
  },
  {
    id: "i9",
    src: "/imagesP/image15.png",
    title: "Associação Fortaleza Azul",
    description: "Apoio a pessoas com Transtorno do Espectro Autista (TEA).",
    category: "Institucional",
  },
  {
    id: "i10",
    src: "/imagesP/image16.png",
    title: "AIESEC Fortaleza",
    description: "Liderança jovem e impacto social internacional.",
    category: "Institucional",
  },
  {
    id: "i11",
    src: "/imagesP/image17.png",
    title: "Causas do Bem",
    description: "Projetos solidários e mobilização cidadã.",
    category: "Institucional",
  },
  {
    id: "i12",
    src: "/imagesP/image18.png",
    title: "Instituto Emprega Mais",
    description: "Formação profissional e inserção no mercado de trabalho.",
    category: "Institucional",
  },
];

export default function PartnersSection() {
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
      <section className="space-y-20 py-16 px-4 md:px-20 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#ff605f]">
            Rede de Parceiros
          </h2>
          <p className="text-muted-foreground text-lg font-semibold">
            A Rede Mobilize constrói suas ações com base na articulação de uma
            ampla rede de parceiros que tornam possível a realização de projetos
            sociais nos territórios.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Parceiros de Projetos</h3>
          <p className="text-muted-foreground mb-4 max-w-4xl">
            Grande parte dessas parcerias acontece com órgãos públicos, que
            apoiam financeiramente ou tecnicamente iniciativas nas áreas de
            segurança alimentar, educação, juventude, cultura, geração de renda,
            entre outras. Esses parceiros são fundamentais para a execução
            direta das ações nos territórios, contribuindo com recursos, apoio
            logístico e cooperação institucional.
          </p>
          <p className="text-muted-foreground mb-6 max-w-4xl">
            Cada projeto é construído coletivamente, respeitando as realidades
            locais e fortalecendo as organizações comunitárias envolvidas.
          </p>

          <Gallery images={projectGallery} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Parceiros Institucionais
          </h3>
          <p className="text-muted-foreground mb-4 max-w-4xl">
            Além dos parceiros de projetos, a Rede Mobilize conta com o apoio de
            instituições que atuam como aliadas permanentes na qualificação e
            fortalecimento do nosso trabalho. São organizações que compartilham
            tecnologias sociais, oferecem assessoria técnica, capacitações,
            ferramentas de gestão e suporte metodológico para os nossos núcleos
            e entidades filiadas.
          </p>
          <p className="text-muted-foreground mb-6 max-w-4xl">
            Essas parcerias institucionais têm papel essencial no
            desenvolvimento contínuo da nossa metodologia e na sustentabilidade
            da Rede como um todo. Elas nos ajudam a ampliar a capacidade de
            atuação, inovar nas estratégias de enfrentamento à pobreza e manter
            uma gestão sólida, transparente e comprometida com o impacto social.
          </p>

          <Gallery images={institutionalGallery} />
        </div>
      </section>
    </>
  );
}
