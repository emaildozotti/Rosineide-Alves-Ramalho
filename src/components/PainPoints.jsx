const dores = [
  {
    titulo: 'Cansaço que não passa',
    descricao:
      'Você dorme, descansa, mantém a rotina. Mas por dentro há um esgotamento que nada externo resolve.',
  },
  {
    titulo: 'Peso familiar invisível',
    descricao:
      'Há algo nas relações com os pais, irmãos ou família que ainda ecoa na sua vida hoje. E você sabe que nunca foi resolvido.',
  },
  {
    titulo: 'Sensação de não pertencer',
    descricao:
      'Mesmo cercado de pessoas, existe uma solidão interna. Como se faltasse algo para se sentir inteiro de verdade.',
  },
  {
    titulo: 'Distância de si mesmo',
    descricao:
      'Você funciona. Cumpre compromissos. Mas tem momentos em que se pergunta: quem eu sou fora das expectativas dos outros?',
  },
]

export default function PainPoints() {
  const scrollToVideo = () => {
    document.getElementById('video').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="dores" className="bg-bg-light py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        <div className="text-center mb-14">
          <p
            data-aos="fade-up"
            className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-3"
          >
            Identificação
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-3xl md:text-4xl text-heading-color font-semibold leading-snug"
          >
            Você se reconhece em alguma
            <br />
            <em className="font-light">dessas situações?</em>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-body text-base font-light text-text-main/70 mt-4 max-w-xl mx-auto leading-relaxed"
          >
            Muitos dos que chegam até aqui descrevem com palavras diferentes — mas sentem o mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {dores.map((dor, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-bg-warm rounded-xl p-7 shadow-sm border border-primary/10 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg text-heading-color font-medium mb-2">
                    {dor.titulo}
                  </h3>
                  <p className="font-body text-sm font-light text-text-main/75 leading-relaxed">
                    {dor.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Destaque */}
        <div
          data-aos="fade-up"
          className="text-center mb-10 py-6 px-8 border-l-2 border-r-2 border-primary/40 max-w-2xl mx-auto"
        >
          <p className="font-heading text-xl md:text-2xl text-heading-color font-medium italic leading-relaxed">
            "Isso não é fraqueza — é um pedido de atenção do que ainda não foi acolhido."
          </p>
        </div>

        <div data-aos="fade-up" className="text-center">
          <button
            onClick={scrollToVideo}
            className="bg-primary text-off-white font-body text-sm font-normal tracking-[0.08em] uppercase px-9 py-4 rounded hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Existe um caminho — quero conhecer →
          </button>
        </div>

      </div>
    </section>
  )
}
