"use client";

import Image from "next/image";

export default function AboutMap() {
  return (
    <div>
      {/* Seção 1: Nossa História */}
      <section className="relative w-full h-screen overflow-hidden p-0 m-0 bg-[#e6e8e6]">
        <div
          className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/seção3.png')",
          }}
        />
      </section>

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
              <h2 className="text-5xl">
                sobre o <span className="text-red-500 font-bold">projeto</span>
              </h2>

              <p className="mt-6 text-justify text-base leading-relaxed">
                O{" "}
                <strong>
                  Cartografia da Cultura: OSCs e Iniciativas Culturais de
                  Fortaleza
                </strong>{" "}
                é um projeto inovador, com o propósito de{" "}
                <strong>
                  mapear, documentar e dar visibilidade a 100 Organizações da
                  Sociedade Civil (OSCs) e coletivos culturais da cidade
                </strong>
                . <br />
                Em um período de 6 meses, a iniciativa fortalecerá redes de
                colaboração e ampliará o alcance dessas ações culturais,
                promovendo sua continuidade e impacto.
              </p>

              <p className="mt-4 text-justify text-base leading-relaxed">
                Muito mais do que um simples mapeamento, a proposta é criar um{" "}
                <strong>
                  modelo inédito de articulação entre agentes culturais
                </strong>
                , promovendo a <strong>sustentabilidade</strong>, ampliando{" "}
                <strong>parcerias estratégicas</strong> e consolidando um{" "}
                <strong>banco de conhecimento</strong> crucial para o
                desenvolvimento do setor cultural em Fortaleza.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full h-screen overflow-hidden p-0 m-0 bg-[#e6e8e6]">
        <div
          className="absolute inset-0 w-full h-full "
          style={{
            backgroundImage: "url('/seção1.png')",
          }}
        />
      </section>

      <section className="relative py-20 lg:py-32 overflow-hidden shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about/vision.jpg')",
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
        <div className="relative container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Visão
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Construir uma sociedade mais justa, sustentável e com
              oportunidades para todos.
            </p>
          </div>
        </div>
      </section>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Apoie este projeto 💖</h2>

        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          onClick={() => {
            document
              .getElementById("qrcode")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Fazer uma doação
        </button>

        <div id="qrcode" className="mt-8">
          <p className="text-lg mb-2">Escaneie o QR Code para doar via Pix:</p>
          <Image
            src="/qrcode-pix.png"
            alt="QR Code Pix"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
      {/* Seção 4: Valores */}
      <section className="relative py-20 lg:py-32 overflow-hidden shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about/values.jpg')",
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
        <div className="relative container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Valores
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Ética, inclusão, transparência e compromisso com o bem comum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
