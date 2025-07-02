import { Card, CardContent } from "@/ui/card";

export default function ImpactPage() {
  return (
    <div className="min-h-screen px-4 py-10 space-y-16">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#ff605f]">
          Nosso Impacto
        </h1>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { label: "Entidades acompanhadas", value: "56 entidades" },
          { label: "Aberturas de CNPJ", value: "20 CNPJs" },
          { label: "Bairros atendidos", value: "61 bairros" },
          { label: "Ações realizadas", value: "196 ações" },
          { label: "Atendimentos realizados", value: "5874 pessoas" },
        ].map(({ label, value }) => (
          <Card key={label} className="text-center">
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">{label}</p>
              <h2 className="text-2xl font-bold mt-2">{value}</h2>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-[#ff605f]">
          Ações e Atendimentos Realizados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { area: "Direitos Humanos", acoes: 15, pessoas: 920 },
            { area: "Educação", acoes: 14, pessoas: 480 },
            { area: "Esporte e Cultura", acoes: 7, pessoas: 280 },
            { area: "Geração de Emprego e Renda", acoes: 37, pessoas: 1450 },
            { area: "Habitação", acoes: 1, pessoas: 334 },
            { area: "Saúde", acoes: 32, pessoas: 1430 },
            { area: "Segurança Alimentar", acoes: 11, pessoas: 980 },
            { area: "Incubação Social", acoes: 80, pessoas: 238 },
          ].map(({ area, acoes, pessoas }) => (
            <Card key={area}>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-[#ff605f]">{area}</h3>
                <p className="text-sm">{acoes} ações</p>
                <p className="text-sm">{pessoas} pessoas impactadas</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#ff605f] mb-6">
          CONHEÇA NOSSOS PROJETOS
        </h2>
        <div className="space-y-10 text-justify">
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Habitação
            </h3>
            <p>
              A Rede Mobilize compreende que a moradia digna é um direito
              essencial para o desenvolvimento humano e a superação da pobreza
              multidimensional... [texto completo da seção Habitação]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Educação
            </h3>
            <p>
              A educação é um dos pilares estruturantes da atuação da Rede
              Mobilize, entendida como ferramenta de emancipação, cidadania e
              enfrentamento das desigualdades... [texto completo da seção
              Educação]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Segurança Alimentar
            </h3>
            <p>
              Desde sua fundação, a Rede Mobilize trata a fome como uma das
              expressões mais cruéis da pobreza, atuando com prioridade absoluta
              na garantia da segurança alimentar... [texto completo da seção
              Segurança Alimentar]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Direitos Humanos
            </h3>
            <p>
              A Rede Mobilize atua com firmeza na defesa e promoção dos direitos
              humanos como princípio estruturante de sua missão institucional...
              [texto completo da seção Direitos Humanos]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Infância e Juventude
            </h3>
            <p>
              A Rede Mobilize reconhece a infância como um tempo de direitos e
              de cuidado integral... [texto completo das seções Infância e
              Juventude]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Cultura e Esporte
            </h3>
            <p>
              A cultura é compreendida pela Rede Mobilize como um instrumento de
              transformação social... [texto completo das seções Cultura e
              Esporte]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Geração de Emprego e Renda
            </h3>
            <p>
              A Mobilize compreende que o acesso à renda está diretamente ligado
              à dignidade e à autonomia das pessoas em situação de
              vulnerabilidade... [texto completo da seção Geração de Emprego e
              Renda]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Saúde
            </h3>
            <p>
              A Rede Mobilize entende que a saúde é um direito fundamental e
              inegociável... [texto completo da seção Saúde]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#ff605f] mb-2">
              Incidência nas Políticas Públicas
            </h3>
            <p>
              A atuação da Rede Mobilize vai além dos territórios. Temos um
              compromisso ativo com a construção de políticas públicas
              efetivas... [texto completo da seção Incidência nas Políticas
              Públicas]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
