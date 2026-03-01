const pilares = [
  {
    numero: '01',
    titulo: 'Olhar Sistêmico Familiar',
    descricao:
      'Sua história familiar moldou sua vida emocional de formas que nem sempre você consegue ver. O olhar sistêmico identifica padrões, vínculos e lealdades invisíveis que ainda influenciam suas escolhas hoje.',
  },
  {
    numero: '02',
    titulo: 'Integração da Criança Interior',
    descricao:
      'Muitos conflitos adultos têm raiz em experiências emocionais da infância que nunca foram acolhidas. Integrar a criança interior é devolver a esse lugar a segurança que ficou faltando.',
  },
  {
    numero: '03',
    titulo: 'Dimensão Espiritual Integrada',
    descricao:
      'A cura emocional tem uma dimensão que vai além da técnica. A espiritualidade não é crença imposta — é um olhar que respeita a profundidade da sua história e reconhece o que há em você.',
  },
]

export default function Method() {
  const scrollToAbout = () => {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="metodo" className="bg-bg-warm py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        <div className="text-center mb-14">
          <p
            data-aos="fade-up"
            className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-3"
          >
            Método
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-3xl md:text-4xl text-heading-color font-semibold leading-snug"
          >
            Um processo que vai à raiz —
            <br />
            <em className="font-light">não só ao sintoma</em>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-body text-base font-light text-text-main/70 mt-4 max-w-xl mx-auto leading-relaxed"
          >
            Cada sessão tem propósito definido. Cada passo respeita o seu tempo emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pilares.map((pilar, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="text-center md:text-left"
            >
              <p className="font-heading text-5xl text-primary/30 font-semibold mb-4">
                {pilar.numero}
              </p>
              <h3 className="font-heading text-xl text-heading-color font-medium mb-3">
                {pilar.titulo}
              </h3>
              <p className="font-body text-sm font-light text-text-main/70 leading-relaxed">
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* O que não promete */}
        <div
          data-aos="fade-up"
          className="bg-bg-light rounded-xl p-7 md:p-9 text-center max-w-2xl mx-auto mb-10 border border-primary/10"
        >
          <p className="font-body text-xs font-light tracking-[0.15em] uppercase text-secondary mb-3">
            Transparência
          </p>
          <p className="font-heading text-lg text-text-main font-light italic leading-relaxed">
            Rosineide não promete cura instantânea, soluções rápidas ou transformações superficiais.
            O processo é real — e a transformação acontece em camadas, no seu tempo.
          </p>
        </div>

        <div data-aos="fade-up" className="text-center">
          <button
            onClick={scrollToAbout}
            className="bg-primary text-off-white font-body text-sm font-normal tracking-[0.08em] uppercase px-9 py-4 rounded hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Quero dar o primeiro passo →
          </button>
        </div>

      </div>
    </section>
  )
}
