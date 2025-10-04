"use client";

import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  Eye,
  Lightbulb,
  Network,
  Star,
  Headphones,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutMap() {
  const router = useRouter();
  return (
    <div className="w-full">
      <section className="relative w-full h-[90vh] md:h-[95vh] lg:h-[100vh] flex flex-col items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale brightness-110 contrast-125 z-0"
          style={{ backgroundImage: "url('/estatua.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/80 z-10" />

        <div
          className="relative z-20 w-full max-w-[800px] h-[250px] md:h-[300px] lg:h-[350px] bg-contain bg-center bg-no-repeat mt-10"
          style={{ backgroundImage: "url('/seção3.png')" }}
        />

        <div className="relative z-20 flex flex-col items-center mt-4 px-4 text-center">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#ff6467] drop-shadow-lg mb-4">
            Conectando as iniciativas culturais de Fortaleza
          </h2>
          <h2 className="text-lg md:text-xl lg:text-2xl text-black drop-shadow-lg mb-6 leading-relaxed">
            Junte-se a nós na construção de um mapeamento cultural que <br />
            valoriza e fortalece a identidade da nossa cidade!
          </h2>

          <Button
            onClick={() => router.push("/map")}
            className="bg-red-400 hover:bg-red-800 font-bold w-full sm:w-auto sm:px-10 md:px-14 py-3 md:py-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl rounded-b-sm mt-4"
          >
            Saiba mais
          </Button>
        </div>
      </section>

      <div className="relative w-full min-h-screen flex flex-col items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale brightness-110 contrast-125 z-0"
          style={{ backgroundImage: "url('/cdm.jpg')" }}
        />

        <div className="absolute inset-0 bg-white/80 z-10" />

        <div className="relative z-20 mt-6 px-4 text-center">
          <h1 className="text-red-400 text-2xl md:text-5xl font-bold mb-4">
            O que é o projeto Cartografia da Cultura?
          </h1>

          <h2 className="text-black text-xl md:text-3xl mb-6">
            Mapeamos e conectamos organizações culturais em{" "}
            <span className="font-bold">Fortaleza.</span>
          </h2>
        </div>

        <div className="relative z-20 flex w-full min-h-screen flex-col lg:flex-row items-center px-4 lg:px-16">
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              {/* Parágrafo 1 */}
              <p className="mt-2 text-justify text-base md:text-lg leading-relaxed mb-4">
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
                . Em um período de 6 meses, a iniciativa fortalecerá redes de
                colaboração e ampliará o alcance dessas ações culturais,
                promovendo sua continuidade e impacto.
              </p>

              {/* Parágrafo 2 */}
              <p className="mt-2 text-justify text-base md:text-lg leading-relaxed">
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

          <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8">
            <div className="h-[350px] md:h-[400px] lg:h-[450px] w-full flex items-center justify-center">
              <Image
                src="/cdm.jpg"
                alt="Imagem do projeto"
                width={520}
                height={340}
                className="h-full w-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h1 className="text-red-400 text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Por que entrar para a Cartografia da Cultura?
            </h1>
            <h2 className="text-black text-lg md:text-2xl lg:text-3xl">
              4 motivos para fortalecer sua iniciativa cultural em Fortaleza:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {[
              {
                icon: Network,
                title: "Fortalecimento das redes",
                desc: "Conecte-se com outras iniciativas culturais",
                bg: "#ff605f",
              },
              {
                icon: Eye,
                title: "Acessibilidade",
                desc: "Plataforma acessível com audiodescrição e LIBRAS",
                bg: "#ffc449",
              },
              {
                icon: Star,
                title: "Memória cultural",
                desc: "Valorize e registre a cultura da cidade",
                bg: "#ff605f",
              },
              {
                icon: Lightbulb,
                title: "Visibilidade",
                desc: "Amplie o alcance da sua organização",
                bg: "#ffc449",
              },
            ].map((card, idx) => (
              <Card
                key={idx}
                className={`flex-1 max-w-xs bg-[${card.bg}] hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3">
                      <card.icon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed text-white">
                    {card.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center justify-start py-12">
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale brightness-110 contrast-125 z-0"
          style={{ backgroundImage: "url('/estatua2.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/80 z-10" />

        <div className="relative z-20 mt-12 px-4 text-center max-w-3xl">
          <h1 className="text-red-400 text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Acessibilidade e Inclusão
          </h1>
          <h2 className="text-black text-lg md:text-2xl lg:text-3xl mb-10">
            Garantimos acessibilidade visual, auditiva e cognitiva por <br />
            meio de audiodescrição, LIBRAS e fontes adaptadas.
          </h2>
        </div>

        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-16 max-w-6xl w-full">
          {[
            {
              icon: Eye,
              title: "Visual",
              desc: "Para pessoas com deficiência visual audiodescrição e contraste otimizado",
              color: "#ff605f",
            },
            {
              icon: Headphones,
              title: "Auditiva",
              desc: "Acesso em LIBRAS com intérprete disponível",
              color: "#ffc449",
            },
            {
              icon: Shield,
              title: "Cognitiva",
              desc: "Layout claro e font openDyslexic para melhor leitura",
              color: "#ff605f",
            },
          ].map((card, idx) => (
            <Card
              key={idx}
              className={`border-2 border-[${card.color}] bg-transparent hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3">
                    <card.icon className={`h-16 w-16 text-[${card.color}]`} />
                  </div>
                </div>
                <CardTitle className="text-2xl font-extrabold text-black">
                  {card.title}:
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base font-semibold leading-relaxed text-black">
                  {card.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center justify-start py-12">
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale brightness-110 contrast-125 z-0"
          style={{ backgroundImage: "url('/layoutAbout.png')" }}
        />
        <div className="absolute inset-0 bg-white/90 z-10" />

        <div
          className="relative z-20 w-full max-w-[800px] h-[250px] md:h-[300px] lg:h-[350px] bg-contain bg-center bg-no-repeat mt-10"
          style={{ backgroundImage: "url('/seção3.png')" }}
        />

        <div className="relative z-20 px-4 text-center max-w-3xl">
          <h2 className="text-black text-xl font-extrabold md:text-xl lg:text-2xl leading-relaxed text-center">
            Esse projeto é apoiado pelo Ministerio da Cultura e pela Secretaria
            Cultura{" "}
            <span className="block mt-2">
              do Ceará, com recursos provenientes da Lei Federal Nº 14.399 de
              julho de 2022.
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <div className="relative w-full md:w-1/2 h-48 md:h-64 lg:h-72">
              <Image
                src="/gov1.png"
                alt="Imagem 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full md:w-1/2 h-48 md:h-64 lg:h-72">
              <Image
                src="/govC.png"
                alt="Imagem 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
