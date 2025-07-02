"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function SectionScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const containerWidth = scrollContainerRef.current.clientWidth;
        const currentIndex = Math.round(scrollLeft / containerWidth);
        setCurrentSection(currentIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide hide-scrollbar"
      >
        <div className="flex w-[200vw]">
          <div className="w-screen h-screen flex items-center bg-white">
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="h-full w-full flex items-center justify-center">
                <Image
                  src="/imageG.jpg"
                  alt="Primeira imagem"
                  width={600}
                  height={500}
                  className="h-full w-auto object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center p-8 overflow-y-auto">
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold mb-6 text-[#ff605f]">
                  Sobre a Rede Mobilize
                </h2>
                <p className="text-3sm text-gray-600 mb-8 leading-relaxed font-medium">
                  A Rede Mobilize nasceu em 2020, em plena pandemia da Covid-19,
                  como uma resposta urgente à fome e à vulnerabilidade social
                  que atingiram milhares de famílias nas periferias de
                  Fortaleza. O que começou com a distribuição de cestas básicas
                  e apoio emergencial evoluiu para uma organização estruturada
                  que hoje é referência no enfrentamento da pobreza
                  multidimensional no Ceará. Nossa missão vai além do
                  assistencialismo: trabalhamos para transformar realidades, não
                  apenas remediá-las. Compreendemos que a pobreza é
                  multidimensional e se manifesta na falta de acesso à moradia
                  digna, educação de qualidade, saúde, trabalho, cultura e
                  cidadania. Por isso, desenvolvemos uma metodologia própria que
                  combina escuta ativa dos territórios com ação concreta,
                  fortalecendo organizações comunitárias e promovendo o
                  protagonismo das comunidades na construção de soluções. Hoje,
                  somos uma rede pulsante com mais de 40 entidades filiadas,
                  atuando em mais de 60 bairros de Fortaleza e 10 municípios do
                  interior cearense. Acompanhamos diretamente mais de 3.600
                  famílias em situação de vulnerabilidade e operamos 45 cozinhas
                  solidárias na Regional 9 de Fortaleza, distribuindo mais de
                  4.500 refeições diárias através do programa Ceará Sem Fome.
                </p>
              </div>
            </div>
          </div>

          <div className="w-screen h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="w-1/2 h-full flex justify-center p-8 overflow-y-auto scrollbar-hide hide-scrollbar">
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold mb-6 text-[#ff605f]">
                  Uma forma diferente de combater a pobreza em Fortaleza
                </h2>
                <p className="text-3sm text-gray-600 mb-8 leading-relaxed font-medium">
                  Nossa atuação abrange múltiplas frentes: habitação, educação,
                  segurança alimentar, direitos humanos, juventude, cultura,
                  esporte, geração de renda e saúde. Desenvolvemos desde
                  oficinas de formação política e cultural até mutirões de
                  saúde, sempre com base no diálogo horizontal e na participação
                  popular. Inspirados na pedagogia de Paulo Freire, acreditamos
                  que o conhecimento é uma construção coletiva e que a periferia
                  deve ser protagonista da sua própria transformação. Além do
                  trabalho direto nos territórios, assumimos o compromisso com a
                  incidência política, participando ativamente de conselhos
                  municipais, estaduais e nacionais. Integramos o Conselho
                  Nacional da Juventude, o Conselho Estadual de Juventude do
                  Ceará, o Conselho Municipal de Juventude de Fortaleza, o
                  Conselho Cearense dos Direitos da Mulher e o Conselho
                  Municipal de Promoção da Igualdade Racial, levando as demandas
                  das comunidades para os espaços de decisão. Nossa metodologia
                  se sustenta em três pilares fundamentais: diálogo horizontal,
                  escuta ativa e participação social. Através do Programa de
                  Incubação Social, capacitamos e fortalecemos organizações
                  comunitárias por meio da Trilha das Entidades, um processo
                  formativo que desenvolve suas capacidades de gestão,
                  elaboração de projetos e incidência política. A Rede Mobilize
                  é mais que uma organização: somos um movimento de
                  transformação social que acredita que ninguém deve viver
                  apenas para sobreviver. Todos têm direito a uma vida digna,
                  justa e cheia de possibilidades. Seguimos mobilizados, todos
                  os dias, construindo essa história com cada liderança
                  comunitária, jovem, mãe, criança e parceiro que cruza nosso
                  caminho, sempre guiados pela certeza de que ninguém transforma
                  o mundo sozinho, mas que juntos podemos construir territórios
                  mais justos e equitativos.
                </p>
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="h-full w-full flex items-center justify-center">
                <Image
                  src="/imageF.jpg"
                  alt="Segunda imagem"
                  width={600}
                  height={800}
                  className="h-full w-auto shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de scroll dentro do container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-4 h-4 rounded-full shadow-lg transition-all duration-300 ${
              currentSection === index
                ? "bg-[#ffc449] scale-110"
                : "bg-gray-300 hover:bg-[#ffc449]"
            }`}
            aria-label={`Ir para seção ${index + 1}`}
          />
        ))}
      </div>

      {/* Instrução de scroll dentro do container
      <div className="absolute top-8 right-8 bg-gray-400 bg-opacity-70 text-white px-4 py-2 rounded-full text-sm z-10">
        ← Arraste para navegar →
      </div> */}

      <button
        onClick={() => scrollToSection(Math.max(0, currentSection - 1))}
        disabled={currentSection === 0}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg z-10 transition-all duration-300 ${
          currentSection === 0
            ? "bg-gray-300 cursor-not-allowed opacity-50"
            : "bg-white hover:bg-[#ffc449] hover:scale-110"
        }`}
        aria-label="Seção anterior"
      >
        <svg
          className="w-6 h-6 mx-auto"
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
        onClick={() => scrollToSection(Math.min(1, currentSection + 1))}
        disabled={currentSection === 1}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg z-10 transition-all duration-300 ${
          currentSection === 1
            ? "bg-gray-300 cursor-not-allowed opacity-50"
            : "bg-white hover:bg-[#ffc449] hover:scale-110"
        }`}
        aria-label="Próxima seção"
      >
        <svg
          className="w-6 h-6 mx-auto"
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
  );
}
