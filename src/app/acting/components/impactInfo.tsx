import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Badge } from "@/ui/badge";
import { Progress } from "@/ui/progress";
import {
  Users,
  Building2,
  MapPin,
  Activity,
  GraduationCap,
  Trophy,
  Briefcase,
  Home,
  Stethoscope,
  Utensils,
  Scale,
  Music,
  Target,
  FileText,
  Vote,
} from "lucide-react";
import Image from "next/image";

export function ImpactInfo() {
  const estatisticasGerais = [
    {
      icon: Building2,
      label: "Entidades acompanhadas",
      valor: "56",
      unidade: "entidades",
    },
    {
      icon: FileText,
      label: "Aberturas de CNPJ",
      valor: "20",
      unidade: "CNPJs",
    },
    {
      icon: MapPin,
      label: "Bairros atendidos",
      valor: "61",
      unidade: "bairros",
    },
    {
      icon: Activity,
      label: "Ações realizadas",
      valor: "196",
      unidade: "ações",
    },
    {
      icon: Users,
      label: "Atendimentos realizados",
      valor: "5.874",
      unidade: "pessoas",
    },
  ];

  const acoesAtendimentos = [
    {
      area: "Direitos Humanos",
      acoes: 15,
      pessoas: 920,
      icon: Scale,
      cor: "bg-red-500",
      imagem: "/imagesIm/image1.png",
    },
    {
      area: "Educação",
      acoes: 14,
      pessoas: 480,
      icon: GraduationCap,
      cor: "bg-blue-500",
      imagem: "/imagesIm/image2.png",
    },
    {
      area: "Esporte e Cultura",
      acoes: 7,
      pessoas: 280,
      icon: Trophy,
      cor: "bg-purple-500",
      imagem: "/imagesIm/image3.png",
    },
    {
      area: "Geração de Emprego e Renda",
      acoes: 37,
      pessoas: 1450,
      icon: Briefcase,
      cor: "bg-green-500",
      imagem: "/imagesIm/image4.png",
    },
    {
      area: "Habitação",
      acoes: 1,
      pessoas: 334,
      icon: Home,
      cor: "bg-orange-500",
      imagem: "/imagesIm/image5.png",
    },
    {
      area: "Saúde",
      acoes: 32,
      pessoas: 1430,
      icon: Stethoscope,
      cor: "bg-pink-500",
      imagem: "/imagesIm/image6.png",
    },
    {
      area: "Segurança Alimentar",
      acoes: 11,
      pessoas: 980,
      icon: Utensils,
      cor: "bg-yellow-500",
      imagem: "/imagesIm/image7.png",
    },
    {
      area: "Incubação Social",
      acoes: 80,
      pessoas: 238,
      icon: Target,
      cor: "bg-indigo-500",
      imagem: "/imagesIm/image8.png",
    },
  ];

  const projetos = [
    {
      titulo: "Habitação",
      icon: Home,
      cor: "border-l-orange-500",
      corIcon: "bg-orange-100",
      corIconText: "text-orange-600",
      imagem: "/imagesIm/image5.png",
      conteudo:
        "A Rede Mobilize compreende que a moradia digna é um direito essencial para o desenvolvimento humano e a superação da pobreza multidimensional. Atuamos no fortalecimento do direito à cidade e à habitação adequada por meio de articulações com o poder público, formação de lideranças comunitárias, apoio jurídico e diagnóstico habitacional participativo.",
      destaque: {
        titulo: "Destaque: Conjunto São Miguel",
        descricao:
          "Parceria com a Habitafor na regularização fundiária, acompanhando 334 famílias e garantindo acesso à moradia legalizada, água, energia e esgoto.",
        corFundo: "bg-orange-50",
        corTitulo: "text-orange-800",
        corTexto: "text-orange-700",
      },
      badges: ["Regularização Fundiária", "Direito à Cidade", "FBFF"],
    },
    {
      titulo: "Educação",
      icon: GraduationCap,
      cor: "border-l-blue-500",
      corIcon: "bg-blue-100",
      corIconText: "text-blue-600",
      imagem: "/imagesIm/image2.png",
      conteudo:
        "A educação é um dos pilares estruturantes da atuação da Rede Mobilize, entendida como ferramenta de emancipação, cidadania e enfrentamento das desigualdades. Promovemos ações que vão desde o reforço escolar até formações críticas inspiradas no pensamento de Paulo Freire.",
      listas: [
        {
          titulo: "Ações Educativas",
          itens: [
            "Oficinas de leitura",
            "Cursinhos populares ENEM",
            "Rodas de conversa sobre direitos",
            "Acompanhamento educacional",
          ],
          corFundo: "bg-blue-50",
          corTitulo: "text-blue-800",
          corTexto: "text-blue-700",
        },
        {
          titulo: "Parcerias",
          itens: [
            "Faculdade Ari de Sá",
            "Apoio a mães atípicas",
            "Inclusão educacional",
            "Abordagem territorial",
          ],
          corFundo: "bg-blue-50",
          corTitulo: "text-blue-800",
          corTexto: "text-blue-700",
        },
      ],
    },
    {
      titulo: "Segurança Alimentar",
      icon: Utensils,
      cor: "border-l-yellow-500",
      corIcon: "bg-yellow-100",
      corIconText: "text-yellow-600",
      imagem: "/imagesIm/image7.png",
      conteudo:
        "A Rede Mobilize trata a fome como uma das expressões mais cruéis da pobreza, atuando com prioridade absoluta na garantia da segurança alimentar. Somos entidade gerenciadora oficial da Regional 9 de Fortaleza no programa Ceará Sem Fome.",
      estatisticas: [
        { numero: "45", descricao: "Cozinhas Comunitárias" },
        { numero: "4.500+", descricao: "Refeições/dia" },
        { numero: "3.600+", descricao: "Famílias acompanhadas" },
      ],
      corEstatisticas: {
        fundo: "bg-yellow-50",
        numero: "text-yellow-800",
        descricao: "text-yellow-700",
      },
    },
    {
      titulo: "Direitos Humanos",
      icon: Scale,
      cor: "border-l-red-500",
      corIcon: "bg-red-100",
      corIconText: "text-red-600",
      imagem: "/imagesIm/image1.png",
      conteudo:
        "A Rede Mobilize atua com firmeza na defesa e promoção dos direitos humanos como princípio estruturante de sua missão institucional. Realizamos formações sobre direitos civis, sociais, econômicos, culturais e ambientais.",
      destaque: {
        titulo: "Projeto Fundo Brasil",
        descricao:
          "14 encontros territoriais e formação online beneficiando 527 pessoas, abordando democracia, direito à cidade, combate ao racismo e LGBTfobia.",
        corFundo: "bg-red-50",
        corTitulo: "text-red-800",
        corTexto: "text-red-700",
      },
    },
    {
      titulo: "Juventude",
      icon: Users,
      cor: "border-l-purple-500",
      corIcon: "bg-purple-100",
      corIconText: "text-purple-600",
      imagem:
        "/imagesIm/image9.png",
      conteudo:
        "A atuação da Rede Mobilize com a juventude se fundamenta no reconhecimento da potência criativa, crítica e transformadora das juventudes periféricas. Investimos em ações que promovem empoderamento, escuta ativa e fortalecimento identitário.",
      listas: [
        {
          titulo: "Formações",
          itens: [
            "Formação política",
            "Comunicação popular",
            "Produção audiovisual",
            "Empregabilidade",
          ],
          corFundo: "bg-purple-50",
          corTitulo: "text-purple-800",
          corTexto: "text-purple-700",
        },
        {
          titulo: "Participação",
          itens: [
            "Conselho Nacional (CNJ)",
            "Conselho Estadual (CONJUCE)",
            "Conselho Municipal (CMJ)",
            "Cúpula dos BRICS",
          ],
          corFundo: "bg-purple-50",
          corTitulo: "text-purple-800",
          corTexto: "text-purple-700",
        },
      ],
    },
    {
      titulo: "Cultura e Esporte",
      icon: Music,
      cor: "border-l-indigo-500",
      corIcon: "bg-indigo-100",
      corIconText: "text-indigo-600",
      imagem: "/imagesIm/image3.png",
      conteudo:
        "A cultura é compreendida como instrumento de transformação social e valorização das identidades. No esporte, promovemos práticas que fortalecem laços comunitários e enfrentam a violência.",
      listas: [
        {
          titulo: "Cultura",
          itens: [
            "Oficinas de dança e teatro",
            "Grafite e música",
            "Circuito Mobiliza Arte",
            "Cultura afro-brasileira",
          ],
          corFundo: "bg-indigo-50",
          corTitulo: "text-indigo-800",
          corTexto: "text-indigo-700",
        },
        {
          titulo: "Esporte",
          itens: [
            "I Torneio Fut7 LGBTQIA+",
            "Torneios comunitários",
            "Aulas de capoeira",
            "Circuitos esportivos",
          ],
          corFundo: "bg-indigo-50",
          corTitulo: "text-indigo-800",
          corTexto: "text-indigo-700",
        },
      ],
    },
    {
      titulo: "Saúde",
      icon: Stethoscope,
      cor: "border-l-pink-500",
      corIcon: "bg-pink-100",
      corIconText: "text-pink-600",
      imagem: "/imagesIm/image6.png",
      conteudo:
        "A Rede Mobilize entende que a saúde é um direito fundamental, desenvolvendo ações que promovem o cuidado em sua dimensão física, emocional, comunitária e social.",
      listas: [
        {
          titulo: "Ações de Saúde",
          itens: [
            "Campanhas preventivas",
            "Saúde sexual e reprodutiva",
            "Mutirões com ligas universitárias",
            "Dignidade menstrual",
            "Saúde mental",
            "Autocuidado",
          ],
          corFundo: "bg-pink-50",
          corTitulo: "text-pink-800",
          corTexto: "text-pink-700",
        },
      ],
    },
  ];

  const conselhos = [
    {
      nome: "Conselho Nacional de Juventude",
      imagem: "/imagesF/image1.png",
    },
    {
      nome: "Conselho Estadual de Juventude do Ceará",
      imagem: "/imagesF/image2.png",
    },
    {
      nome: "Conselho Municipal de Juventude de Fortaleza",
      imagem: "/imagesF/image3.png",
    },
    {
      nome: "Conselho Cearense dos Direitos da Mulher",
      imagem: "/imagesF/image5.png",
    },
    {
      nome: "Conselho Municipal de Promoção da Igualdade Racial de Fortaleza",
      imagem: "/imagesF/image6.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#ffc449] to-[#ff605f] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso Impacto
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed">
              Transformando vidas e comunidades através de ações concretas e
              participativas
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Números do Impacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {estatisticasGerais.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <stat.icon className="h-8 w-8 text-[#ffc449]" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.valor}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      {stat.unidade}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Ações e Atendimentos por Área
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {acoesAtendimentos.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.imagem || "/placeholder.svg"}
                      alt={`Imagem representativa de ${item.area}`}
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 ${item.cor} rounded-full`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {item.area}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Ações realizadas
                        </span>
                        <span className="font-bold text-gray-800">
                          {item.acoes}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Pessoas impactadas
                        </span>
                        <span className="font-bold text-[#ff605f]">
                          {item.pessoas.toLocaleString()}
                        </span>
                      </div>
                      <Progress
                        value={(item.pessoas / 1450) * 100}
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Conheça Nossos Projetos
            </h2>

            {projetos.map((projeto, index) => (
              <div key={index} className="mb-12">
                <Card className={`${projeto.cor} border-l-4 shadow-lg`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 ${projeto.corIcon} rounded-full`}>
                        <projeto.icon
                          className={`h-6 w-6 ${projeto.corIconText}`}
                        />
                      </div>
                      <CardTitle className="text-2xl">
                        {projeto.titulo}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <Image
                        src={projeto.imagem || "/placeholder.svg"}
                        alt={`Projeto de ${projeto.titulo.toLowerCase()}`}
                        className="object-cover rounded-lg"
                        width={1200}
                        height={600}
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {projeto.conteudo}
                    </p>

                    {/* Destaque */}
                    {projeto.destaque && (
                      <div
                        className={`${projeto.destaque.corFundo} p-4 rounded-lg mb-4`}
                      >
                        <h4
                          className={`font-semibold ${projeto.destaque.corTitulo} mb-2`}
                        >
                          {projeto.destaque.titulo}
                        </h4>
                        <p className={`${projeto.destaque.corTexto} text-sm`}>
                          {projeto.destaque.descricao}
                        </p>
                      </div>
                    )}

                    {/* Estatísticas */}
                    {projeto.estatisticas && (
                      <div
                        className={`${projeto.corEstatisticas.fundo} p-6 rounded-lg mb-4`}
                      >
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                          {projeto.estatisticas.map((stat, statIndex) => (
                            <div key={statIndex}>
                              <div
                                className={`text-2xl font-bold ${projeto.corEstatisticas.numero}`}
                              >
                                {stat.numero}
                              </div>
                              <div
                                className={`text-sm ${projeto.corEstatisticas.descricao}`}
                              >
                                {stat.descricao}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {projeto.listas && (
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        {projeto.listas.map((lista, listaIndex) => (
                          <div
                            key={listaIndex}
                            className={`${lista.corFundo} p-4 rounded-lg`}
                          >
                            <h4
                              className={`font-semibold ${lista.corTitulo} mb-2`}
                            >
                              {lista.titulo}
                            </h4>
                            <ul
                              className={`${lista.corTexto} text-sm space-y-1`}
                            >
                              {lista.itens.map((item, itemIndex) => (
                                <li key={itemIndex}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {projeto.badges && (
                      <div className="flex flex-wrap gap-2">
                        {projeto.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="outline">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </section>

          {/* Incidência em Políticas Públicas */}
          <section className="bg-gradient-to-r from-[#ffc449] to-[#ff605f] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              Incidência nas Políticas Públicas
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center mb-8 text-yellow-100">
                Nossa atuação vai além dos territórios. Temos um compromisso
                ativo com a construção de políticas públicas efetivas,
                participando de espaços institucionais de controle social.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conselhos.map((conselho, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 border-white/20 text-white overflow-hidden"
                  >
                    <div className="h-32 overflow-hidden">
                      <Image
                        src={conselho.imagem || "/placeholder.svg"}
                        alt={`Participação em ${conselho.nome}`}
                        className="w-full h-full object-cover opacity-70"
                        width={500}
                        height={500}
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white/20 rounded-full">
                          <Vote className="h-6 w-6" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm leading-tight">
                        {conselho.nome}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-yellow-100">
                  Estar nesses espaços é reafirmar nosso compromisso com a
                  democracia, a justiça social e a efetivação dos direitos
                  humanos em todos os níveis.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
