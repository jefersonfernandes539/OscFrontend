import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/ui/card";
import Image from "next/image";
import { Heart, Quote, Target, Users } from "lucide-react";
export default function ContextValue() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff605f]">
              Nosso Contexto de Atuação
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-semibold">
              Compreendendo as desigualdades de Fortaleza para construir
              transformação social
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  A Realidade de Fortaleza
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fortaleza é uma cidade marcada por desigualdades históricas
                  profundas, que se refletem diretamente nos territórios
                  periféricos. Embora seja a quinta capital mais populosa do
                  Brasil, com cerca de 2,4 milhões de habitantes, também é uma
                  das cidades com maior concentração de pobreza urbana no país.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  De acordo com dados do Instituto de Pesquisa e Estratégia
                  Econômica do Ceará (IPECE), cerca de 40% da população
                  fortalezense vive em situação de pobreza ou extrema pobreza,
                  especialmente nas áreas mais afastadas do centro e com menor
                  infraestrutura pública.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">40%</div>
                    <div className="text-sm text-red-700">
                      da população em situação de pobreza
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      450mil
                    </div>
                    <div className="text-sm text-orange-700">
                      pessoas sem saneamento básico
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">
                      120mil
                    </div>
                    <div className="text-sm text-yellow-700">
                      moradias inadequadas
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">1/3</div>
                    <div className="text-sm text-blue-700">
                      em insegurança alimentar
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/mapaDF.png"
                  alt="Mapa de desigualdades de Fortaleza"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">
                    Desigualdades Territoriais
                  </h4>
                  <p className="text-sm opacity-90">
                    Diferenças de IDH entre bairros da mesma cidade
                  </p>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">
                    Índice de Desenvolvimento Humano por Região
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Meireles/Aldeota</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-green-200 rounded-full">
                          <div className="w-[85%] h-full bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-green-600">
                          0,85
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Grande Jangurussu</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-red-200 rounded-full">
                          <div className="w-[65%] h-full bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-red-600">
                          0,65
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Conjunto Palmeiras</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-red-200 rounded-full">
                          <div className="w-[60%] h-full bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-red-600">
                          0,60
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  Nossa Resposta
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  É neste cenário que a Rede Mobilize constrói sua atuação.
                  Compreendendo que a pobreza em Fortaleza vai muito além da
                  ausência de renda, a organização entende que ela é
                  multidimensional e se expressa na negação sistemática de
                  direitos como moradia, alimentação, educação, saúde, cultura,
                  lazer e oportunidades de desenvolvimento pessoal e coletivo.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Rede Mobilize atua com base na escuta e no respeito à
                  realidade de cada comunidade, reconhecendo as potências locais
                  e valorizando as formas de organização que já existem nos
                  territórios.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Nossa Metodologia</h4>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Escuta ativa e diagnóstico comunitário
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Ficha de Cadastramento Familiar
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Mapeamento detalhado da realidade local
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Construção de respostas específicas para cada contexto
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold mb-2 text-[#ff605f]">
                        34+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Bairros atendidos em Fortaleza
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-[#ff605f] mb-2">
                        10
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Municípios da Região Metropolitana
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-white/80 backdrop-blur-sm col-span-2">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-[#ffc449] mb-2">
                        3.600+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Famílias cadastradas e acompanhadas
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">
                      Áreas de Foco
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-primary" />
                        <span>Fortalecimento Social</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span>Geração de Renda</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Acesso à Cidadania</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Quote className="h-4 w-4 text-primary" />
                        <span>Garantia de Direitos</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
