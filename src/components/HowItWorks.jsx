const passos = [
  {
    numero: '1',
    titulo: 'Sessão Introdutória',
    descricao:
      'Uma conversa inicial para entender sua história, o que te trouxe aqui e como o processo pode ser conduzido. Sem pressa. Sem julgamento.',
  },
  {
    numero: '2',
    titulo: 'Processo Progressivo',
    descricao:
      'As sessões são estruturadas por temas, seguindo a ordem emocional de cada pessoa. Cada encontro prepara o campo para o próximo.',
  },
  {
    numero: '3',
    titulo: 'Integração e Retorno',
    descricao:
      'Com o tempo, as peças da história se reorganizam. O que era peso começa a ter lugar. O que era confusão começa a ter contorno.',
  },
]

export default function HowItWorks() {
  const scrollToTestimonials = () => {
    document.getElementById('depoimentos').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="como-funciona" className="bg-heading-color py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        <div className="text-center mb-14">
          <p
            data-aos="fade-up"
            className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-3"
          >
            Processo
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-3xl md:text-4xl text-off-white font-semibold"
          >
            O processo passo a passo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {passos.map((passo, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-5">
                <span className="font-heading text-xl text-primary font-semibold">
                  {passo.numero}
                </span>
              </div>
              <h3 className="font-heading text-xl text-off-white font-medium mb-3">
                {passo.titulo}
              </h3>
              <p className="font-body text-sm font-light text-off-white/65 leading-relaxed">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Box destaque — pacto da terapeuta */}
        <div
          data-aos="fade-up"
          className="border border-primary/30 rounded-xl p-7 md:p-9 text-center max-w-2xl mx-auto mb-10"
        >
          <p className="font-heading text-lg md:text-xl text-off-white/90 font-light italic leading-relaxed mb-2">
            "Eu não forço processos. Eu preparo o campo emocional — e convido você a entrar quando estiver pronto."
          </p>
          <p className="font-body text-xs font-light text-primary tracking-wide">
            — Rosineide Ramalho
          </p>
        </div>

        <div data-aos="fade-up" className="text-center">
          <button
            onClick={scrollToTestimonials}
            className="bg-primary text-off-white font-body text-sm font-normal tracking-[0.08em] uppercase px-9 py-4 rounded hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Quero começar meu processo →
          </button>
        </div>

      </div>
    </section>
  )
}
