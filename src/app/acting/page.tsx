import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Badge } from "@/ui/badge";
import {
  Users,
  Target,
  BookOpen,
  MessageCircle,
  Ear,
  Vote,
  Heart,
  Home,
  GraduationCap,
  Building2,
  Network,
  MapPin,
} from "lucide-react";
import { ImpactInfo } from "./components/impactInfo";

export default function ActingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <header className="bg-gradient-to-r from-[#ffc449] to-[#ff605f] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa Metodologia
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Uma abordagem territorial, dialógica e participativa para a
              transformação social
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A metodologia de atuação da Rede Mobilize foi construída a
                partir da prática concreta nos territórios e da escuta ativa das
                comunidades. Desde sua origem, a Rede compreende que o combate à
                pobreza exige mais do que ações emergenciais ou assistenciais: é
                preciso atuar nas causas estruturais que perpetuam desigualdades
                históricas e restringem o acesso aos direitos básicos.
              </p>
            </div>
          </section>

          {/* Dois Eixos de Atuação */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Dois Eixos Complementares
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-[#ffc449] shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Users className="h-6 w-6 text-[#ffc449]" />
                    </div>
                    <CardTitle className="text-xl">
                      Atuação Direta com Comunidades
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Execução de projetos que garantem acesso a direitos básicos
                    como alimentação, educação, saúde, cultura, moradia,
                    trabalho e cidadania.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Heart className="h-3 w-3" />
                      Alimentação
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <GraduationCap className="h-3 w-3" />
                      Educação
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Home className="h-3 w-3" />
                      Moradia
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#ff605f] shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Building2 className="h-6 w-6 text-[#ff605f]" />
                    </div>
                    <CardTitle className="text-xl">
                      Apoio Técnico às OSCs
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Programa de Incubação Social que capacita, orienta e
                    acompanha entidades sem fins lucrativos, fortalecendo sua
                    gestão, autonomia política e impacto social.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Target className="h-3 w-3" />
                      Gestão
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Network className="h-3 w-3" />
                      Autonomia
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Users className="h-3 w-3" />
                      Impacto Social
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Abordagem Territorial */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Abordagem Territorial
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                Nosso trabalho é guiado por uma abordagem territorial,
                dialógica, participativa e crítica, inspirada na pedagogia de
                Paulo Freire e nas ferramentas da educação popular.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    Instrumentos de Escuta
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Visitas domiciliares</li>
                    <li>• Rodas de conversa</li>
                    <li>• Diagnósticos comunitários</li>
                    <li>• Oficinas participativas</li>
                    <li>• Ficha de Cadastramento Familiar</li>
                    <li>• Relatórios de visita social</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Princípios
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Respeito à cultura local</li>
                    <li>• Tempo das comunidades</li>
                    <li>• Formas próprias de organização</li>
                    <li>• Construção participativa</li>
                    <li>• Maior adesão e sustentabilidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Trilha das Entidades */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Trilha das Entidades
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Processo Formativo em Três Níveis
                  </CardTitle>
                  <CardDescription className="text-center text-lg">
                    Mais de 40 entidades comunitárias em 60+ bairros de
                    Fortaleza e 10 municípios do Ceará
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <Target className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Gestão</h4>
                      <p className="text-sm text-gray-600">
                        Administrativa e financeira
                      </p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Projetos</h4>
                      <p className="text-sm text-gray-600">
                        Elaboração e execução
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Direitos Humanos</h4>
                      <p className="text-sm text-gray-600">
                        Formação e advocacy
                      </p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <MessageCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Comunicação</h4>
                      <p className="text-sm text-gray-600">Comunitária</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Políticas Públicas</h4>
                      <p className="text-sm text-gray-600">
                        Articulação em redes
                      </p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <Vote className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Participação</h4>
                      <p className="text-sm text-gray-600">Política e social</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-gradient-to-r from-[#ffc449] to-[#ff605f] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">
              Três Pilares Metodológicos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <MessageCircle className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Diálogo</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Toda construção parte de relações horizontais e circulares,
                  onde todas as vozes são ouvidas com respeito e legitimidade.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Ear className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Escuta Ativa</h3>
                <p className="text-blue-100 leading-relaxed">
                  Mais do que ouvir, buscamos compreender os sentidos que as
                  comunidades atribuem às suas realidades e necessidades.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Participação Social</h3>
                <p className="text-blue-100 leading-relaxed">
                  Toda ação é construída com a comunidade, nunca para ela. O
                  povo é protagonista na identificação dos problemas e criação
                  das soluções.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center bg-gray-50 rounded-2xl p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Uma Prática Viva
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A metodologia da Mobilize é uma prática viva, construída com
                base na realidade concreta dos territórios, com os pés fincados
                na comunidade e os olhos voltados para a transformação
                estrutural. É um caminho coletivo de enfrentamento à pobreza, de
                fortalecimento da autonomia dos sujeitos e de ampliação do
                acesso a uma vida digna, justa e plena.
              </p>
            </div>
          </section>
        </div>
      </main>

      <ImpactInfo />
    </div>
  );
}
