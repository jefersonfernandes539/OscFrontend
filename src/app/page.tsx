"use client";
import ImageScroll from "@/components/ImageScroll";
import MissionVisionValues from "@/components/MissionVisionValues";
import SectionScroll from "@/components/SectionScroll";
import SharedLayoutAnimation from "@/components/SharedLayoutAnimation";
import SocialSection from "@/components/SocialSection";
import { Button } from "@/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { MapPin, Users, Search, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <section className="relative w-full h-screen overflow-hidden">
        <ImageScroll />
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#ffc449]  mb-2">20+</div>
              <div className="text-gray-600 font-semibold">
                Aberturas de CNPJ
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff605f]  mb-2">61+</div>
              <div className="text-gray-600 font-semibold">
                Bairros atendidos
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff605f]  mb-2">
                196+
              </div>
              <div className="text-gray-600 font-semibold">
                Ações realizadas
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ffc449]  mb-2">56+</div>
              <div className="text-gray-600 font-semibold">
                Entidades capacitadas, orientadas e acompanhadas
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionScroll />

      <div className="py-20">
        <MissionVisionValues />
      </div>

      <section id="sobre" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#ff605f] mb-4">
              Nossa Missão
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold">
              &ldquo;Enfrentar a pobreza em sua dimensão multidimensional,
              atuando diretamente nos territórios de maior vulnerabilidade,
              fortalecendo organizações comunitárias, promovendo acesso a
              direitos e desenvolvendo ações que garantam dignidade, autonomia e
              justiça social para as famílias e comunidades.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-[#ffc449] mb-4" />
                <CardTitle>Mapeamento Preciso</CardTitle>
                <CardDescription>
                  Localizamos e catalogamos ONGs e serviços sociais com precisão
                  geográfica
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-[#ff605f] mb-4" />
                <CardTitle>Busca Inteligente</CardTitle>
                <CardDescription>
                  Sistema de busca avançado por tipo de serviço, localização e
                  necessidades específicas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ffc449] mb-4" />
                <CardTitle>Comunidade Ativa</CardTitle>
                <CardDescription>
                  Rede colaborativa onde ONGs e usuários mantêm informações
                  sempre atualizadas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#ff605f] mb-4">
              Áreas de atuação
            </h3>
            <p className="text-lg text-gray-600 font-semibold">
              Atuando no combate à pobreza em multiplas frentes
            </p>
          </div>
          <SharedLayoutAnimation />
        </div>
      </section>

      <section className="py-20 bg-[#ff605f] text-white px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">
            Quer fazer parte da Rede Mobilize?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            - Lideranças Comunitárias de Fortaleza e Região Metropolitana; -
            Parceiros Institucionais no combate à pobreza. Fale conosco e saiba
            como fazer parte!
          </p>
          <Link href="/map">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Fale conosco no whatsApp
              <Phone size={5} />
            </Button>
          </Link>
        </div>
      </section>
      <SocialSection />
    </div>
  );
}
