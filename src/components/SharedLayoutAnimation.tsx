"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const atuacaoOptions = [
  {
    id: "habitacao",
    title: "Habitação",
    description:
      "Desenvolvimento de projetos habitacionais sustentáveis e acessíveis para comunidades em situação de vulnerabilidade.",
    icon: "/image1.jpg",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
  },
  {
    id: "educacao",
    title: "Educação",
    description:
      "Programas educacionais inovadores que promovem o acesso ao conhecimento e desenvolvimento de habilidades.",
    icon: "/image2.png",
    color: "bg-green-500",
    lightColor: "bg-green-50",
  },
  {
    id: "saude",
    title: "Saúde",
    description:
      "Iniciativas de promoção da saúde e bem-estar, com foco na prevenção e cuidados básicos.",
    icon: "/image3.png",
    color: "bg-red-500",
    lightColor: "bg-red-50",
  },
  {
    id: "seguranca-alimentar",
    title: "Segurança Alimentar",
    description:
      "Combate à fome e promoção da segurança alimentar através de programas de distribuição e educação nutricional.",
    icon: "/image4.png",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
  },
  {
    id: "cultura-esporte",
    title: "Cultura e Esporte",
    description:
      "Valorização da cultura local e promoção do esporte como ferramenta de inclusão social e desenvolvimento.",
    icon: "/image5.png",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
  },
  {
    id: "emprego-renda",
    title: "Geração de Emprego e Renda",
    description:
      "Capacitação profissional e criação de oportunidades de trabalho para o desenvolvimento econômico local.",
    icon: "/image6.png",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
  },
  {
    id: "direitos-humanos",
    title: "Direitos Humanos",
    description:
      "Defesa e promoção dos direitos fundamentais, com foco na igualdade e justiça social.",
    icon: "/image7.png",
    color: "bg-teal-500",
    lightColor: "bg-teal-50",
  },
  {
    id: "infancia-juventude",
    title: "Infância e Juventude",
    description:
      "Programas dedicados ao desenvolvimento integral de crianças e jovens, garantindo seus direitos e oportunidades.",
    icon: "/image8.png",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
  },
];

export default function SharedLayoutAnimation() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedOption = atuacaoOptions.find(
    (option) => option.id === selectedId
  );

  const objetivosMap: Record<string, string[]> = {
    habitacao: [
      "Fortalecer o direito à cidade e à habitação adequada",
      "Apoiar juridicamente famílias em processos fundiários",
      "Articular ações de acesso à água, energia e esgoto",
    ],
    educacao: [
      "Promover educação crítica e inclusiva",
      "Acompanhar jovens em sua trajetória educacional",
      "Formar educadores comunitários e lideranças",
    ],
    saude: [
      "Promover o cuidado integral e preventivo",
      "Garantir acesso à rede pública de saúde",
      "Realizar mutirões e ações educativas",
    ],
    "seguranca-alimentar": [
      "Garantir alimentação para famílias vulneráveis",
      "Educar sobre alimentação saudável",
      "Coordenar cozinhas comunitárias",
    ],
    "cultura-esporte": [
      "Valorizar cultura local e memória",
      "Oferecer oficinas artísticas e esportivas",
      "Fortalecer grupos culturais e ações de inclusão",
    ],
    "emprego-renda": [
      "Capacitar e inserir pessoas no mundo do trabalho",
      "Fortalecer economia popular e comunitária",
      "Empoderar mulheres e juventudes",
    ],
    "direitos-humanos": [
      "Promover formações sobre direitos fundamentais",
      "Combater violências institucionais e sociais",
      "Participar de conselhos e espaços públicos",
    ],
    "infancia-juventude": [
      "Promover um ambiente seguro e afetivo",
      "Oferecer atividades lúdicas e educativas",
      "Apoiar mães atípicas e crianças com deficiência",
    ],
  };

  const impactoMap: Record<string, { valor: string; label: string }[]> = {
    habitacao: [
      { valor: "334+", label: "Famílias acompanhadas" },
      { valor: "Reconhecimento", label: "Prefeitura de Fortaleza" },
    ],
    educacao: [
      { valor: "Centenas", label: "Famílias beneficiadas" },
      { valor: "Sim", label: "Crianças com deficiência incluídas" },
    ],
    saude: [
      { valor: "3+", label: "Mutirões realizados" },
      { valor: "10+", label: "Campanhas educativas" },
    ],
    "seguranca-alimentar": [
      { valor: "3.600+", label: "Famílias beneficiadas" },
      { valor: "4.500+", label: "Refeições servidas diariamente" },
    ],
    "cultura-esporte": [
      { valor: "45+", label: "Oficinas e eventos realizados" },
      { valor: "Diversos", label: "Grupos tradicionais apoiados" },
    ],
    "emprego-renda": [
      { valor: "Centenas", label: "Pessoas capacitadas" },
      { valor: "10+", label: "Feiras e eventos de empregabilidade" },
    ],
    "direitos-humanos": [
      { valor: "527", label: "Pessoas impactadas" },
      { valor: "14", label: "Formações realizadas" },
    ],
    "infancia-juventude": [
      { valor: "Projeto ativo", label: "TEAcolhendo" },
      { valor: "Sim", label: "Campanhas de sensibilização" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atuacaoOptions.map((option) => (
            <motion.div
              key={option.id}
              layoutId={option.id}
              className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                hoveredId === option.id ? option.lightColor : "bg-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredId(option.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedId(option.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: atuacaoOptions.indexOf(option) * 0.1,
              }}
            >
              <motion.div
                layoutId={`icon-${option.id}`}
                className="w-full h-48 relative"
              >
                <Image
                  src={option.icon || "/placeholder.svg"}
                  alt={option.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="p-6">
                <motion.h3
                  layoutId={`title-${option.id}`}
                  className="text-xl font-semibold mb-2 text-gray-800 text-center"
                >
                  {option.title}
                </motion.h3>

                <motion.div
                  layoutId={`color-indicator-${option.id}`}
                  className={`w-full h-1 rounded-full ${option.color} mb-3`}
                />

                <p className="text-gray-600 text-sm line-clamp-3 text-center">
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedOption && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-opacity-50 z-40"
                onClick={() => setSelectedId(null)}
              />

              <motion.div
                layoutId={selectedId}
                className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="h-full flex flex-col">
                  <div
                    className={`${selectedOption.lightColor} p-8 flex-shrink-0`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <motion.div
                          layoutId={`icon-${selectedOption.id}`}
                          className="w-32 h-32 relative flex-shrink-0"
                        >
                          <Image
                            src={selectedOption.icon || "/placeholder.svg"}
                            alt={selectedOption.title}
                            fill
                            className="object-cover rounded-xl shadow-lg"
                          />
                        </motion.div>
                        <div>
                          <motion.h2
                            layoutId={`title-${selectedOption.id}`}
                            className="text-3xl font-bold text-gray-800 mb-2"
                          >
                            {selectedOption.title}
                          </motion.h2>
                          <motion.div
                            layoutId={`color-indicator-${selectedOption.id}`}
                            className={`w-24 h-2 rounded-full ${selectedOption.color}`}
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedId(null)}
                        className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-8 overflow-y-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {selectedOption.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-gray-800">
                            Objetivos Principais
                          </h4>
                          <ul className="space-y-3">
                            {objetivosMap[selectedOption.id]?.map(
                              (objetivo, i) => (
                                <li
                                  key={i}
                                  className="flex items-start space-x-3"
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full ${selectedOption.color} mt-2 flex-shrink-0`}
                                  ></div>
                                  <span className="text-gray-600">
                                    {objetivo}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          {impactoMap[selectedOption.id]?.map((item, i) => (
                            <div
                              key={i}
                              className={`p-4 rounded-lg ${selectedOption.lightColor}`}
                            >
                              <div className="text-2xl font-bold text-gray-800">
                                {item.valor}
                              </div>
                              <div className="text-sm text-gray-600">
                                {item.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
