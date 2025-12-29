import { motion, LayoutGroup } from "framer-motion";

export function History() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="relative flex justify-center px-4 md:px-6">
        <LayoutGroup>
          <div className="w-full max-w-4xl">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Como Tudo Começou
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Rede Mobilize nasceu em 2020, no auge da pandemia, quando a
                  fome e a falta de renda atingiam com força as periferias de
                  Fortaleza. Começamos nossa caminhada com ações urgentes:
                  cestas básicas, cartões alimentação e apoio direto a quem mais
                  precisava, ajudando milhares de pessoas a acessarem seus
                  direitos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mas logo entendemos que a pobreza era muito mais do que a
                  falta de comida: era também desemprego, moradia precária,
                  ausência de acesso à saúde, educação e cultura. Era uma
                  pobreza multidimensional. Foi então que mudamos nossa forma de
                  agir, ouvindo os territórios e fortalecendo organizações
                  locais e lideranças comunitárias por meio do nosso Programa de
                  Incubação Social.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hoje, somos uma rede viva, com dezenas de núcleos ativos, mais
                  de 40 entidades filiadas e presença em mais de 60 bairros.
                  Atuamos com formação, incidência política e gestão de cozinhas
                  solidárias. Seguimos guiados pela pedagogia de Paulo Freire,
                  acreditando que ninguém transforma o mundo sozinho — é na
                  coletividade, com coragem e compromisso, que construímos um
                  caminho para uma vida digna.
                </p>
              </div>
            </motion.div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
