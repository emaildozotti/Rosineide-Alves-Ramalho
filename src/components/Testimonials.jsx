const depoimentos = [
  {
    texto:
      'Eu cheguei sem saber exatamente o que buscar. Só sabia que algo dentro de mim pedia atenção. Depois de algumas sessões com Rosineide, consegui nomear o que carregava há anos — e comecei a respirar diferente.',
    nome: 'M. A.',
  },
  {
    texto:
      'A abordagem dela é diferente de tudo que tentei antes. Ela não me deixa só no processo. Há uma presença real, um cuidado que você sente. Foi o que precisava para finalmente olhar para minha história familiar.',
    nome: 'C. R.',
  },
  {
    texto:
      'Sempre tive medo de terapia — de reviver coisas dolorosas. Rosineide conduziu tudo com tanto respeito ao meu ritmo que eu nem percebi quando cruzei o ponto que sempre evitei. E do outro lado, havia alívio.',
    nome: 'P. S.',
  },
]

export default function Testimonials() {
  const scrollToFaq = () => {
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="depoimentos" className="bg-bg-warm py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        <div className="text-center mb-14">
          <p
            data-aos="fade-up"
            className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-3"
          >
            Depoimentos
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-3xl md:text-4xl text-heading-color font-semibold"
          >
            O que dizem quem percorreu
            <br />
            <em className="font-light">esse caminho</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {depoimentos.map((dep, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-bg-light rounded-xl p-7 relative"
            >
              <span className="quote-mark absolute top-3 left-5 select-none">"</span>
              <p className="font-body text-sm font-light text-text-main/80 leading-[1.85] mt-6 mb-5">
                {dep.texto}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-px h-6 bg-primary/40" />
                <p className="font-heading text-base text-heading-color font-medium">
                  {dep.nome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="text-center">
          <button
            onClick={scrollToFaq}
            className="bg-primary text-off-white font-body text-sm font-normal tracking-[0.08em] uppercase px-9 py-4 rounded hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Pronto para dar o seu passo →
          </button>
        </div>

      </div>
    </section>
  )
}
