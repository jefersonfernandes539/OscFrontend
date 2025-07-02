"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function MissionVisionValues() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div style={container}>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#eee" : "#eee0",
              }}
              style={tab}
              onClick={() => setSelectedTab(item)}
            >
              {` ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  style={underline}
                  layoutId="underline"
                  id="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main style={contentContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={content}
          >
            <h3 style={titleStyle}>{selectedTab ? selectedTab.label : ""}</h3>
            <p style={descriptionStyle}>
              {selectedTab ? selectedTab.description : ""}
            </p>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

const container: React.CSSProperties = {
  width: "100%",
  maxWidth: 800,
  height: "70vh",
  maxHeight: 500,
  borderRadius: 10,
  background: "white",
  overflow: "hidden",
  boxShadow:
    "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
};

const nav: React.CSSProperties = {
  background: "#fdfdfd",
  padding: "5px 5px 0",
  borderRadius: "10px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #eeeeee",
  height: 44,
};

const tabsStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: 14,
};

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: "flex",
  width: "100%",
};

const tab: React.CSSProperties = {
  ...tabsStyles,
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  background: "white",
  cursor: "pointer",
  height: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "#0f1115",
};

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "#ffc449",
};

const contentContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  padding: "40px 20px",
};

const content: React.CSSProperties = {
  textAlign: "center",
  maxWidth: "90%",
};

const titleStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: "bold",
  color: "#ff605f",
  marginBottom: 20,
  margin: "0 0 20px 0",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: "#6b7280",
  textAlign: "center",
  margin: 0,
};

const allValues = [
  {
    label: "Missão",
    description:
      "Enfrentar a pobreza em sua dimensão multidimensional, atuando diretamente nos territórios de maior vulnerabilidade social. Trabalhamos fortalecendo organizações comunitárias, promovendo acesso pleno aos direitos básicos e desenvolvendo ações estruturantes que garantam dignidade, autonomia e justiça social para as famílias e comunidades. Nossa atuação vai além do assistencialismo, buscando transformar as causas estruturais que perpetuam as desigualdades e construindo caminhos para uma vida plena e cidadã.",
  },
  {
    label: "Visão",
    description:
      "Ser reconhecida como uma referência nacional no enfrentamento da pobreza multidimensional, promovendo transformações reais e duradouras nos territórios. Almejamos um futuro onde o fortalecimento comunitário, a justiça social e a incidência efetiva em políticas públicas sejam pilares de uma sociedade mais equitativa, onde todas as pessoas tenham acesso aos seus direitos fundamentais e possam ser protagonistas de suas próprias histórias.",
  },
  {
    label: "Valores",
    description:
      "Somos guiados por princípios fundamentais que orientam cada ação da Rede Mobilize. Acreditamos na justiça social como direito inalienável de todas as pessoas, sem discriminação, compreendendo que a pobreza resulta de desigualdades que devem ser enfrentadas coletivamente. Praticamos a escuta ativa e o diálogo genuíno como base para construir soluções respeitosas e conectadas com as realidades dos territórios. Trabalhamos pelo fortalecimento da autonomia comunitária, promovendo o protagonismo das comunidades nas decisões que afetam suas vidas e valorizando as lideranças populares. Nossa atuação é pautada pela solidariedade e cooperação em rede, reconhecendo que ninguém transforma a realidade sozinho e que o trabalho coletivo potencializa nosso impacto. Defendemos a participação popular como essencial na construção das políticas públicas, garantindo que as comunidades sejam ouvidas nos espaços de decisão. Por fim, reconhecemos as desigualdades históricas e estruturais, priorizando ações equitativas que atendam especialmente grupos mais vulnerabilizados, como mulheres, juventudes, população negra, LGBTQIA+, povos indígenas e pessoas com deficiência.",
  },
];

const [missao, visao, valores] = allValues;

const tabs = [missao, visao, valores];
