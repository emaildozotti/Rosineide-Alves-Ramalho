export default function VideoSection() {
  const scrollToMethod = () => {
    document.getElementById('metodo').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="video" className="bg-dark py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-8">

        <div className="text-center mb-10">
          <p
            data-aos="fade-up"
            className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-3"
          >
            Assista
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-3xl md:text-4xl text-off-white font-semibold"
          >
            Uma conversa antes de começar
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-body text-sm font-light text-off-white/60 mt-3 leading-relaxed"
          >
            Em poucos minutos, Rosineide explica como esse processo funciona — e por que é diferente do que você já tentou.
          </p>
        </div>

        {/* Player 16:9 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative w-full aspect-video bg-bg-light/10 rounded-xl overflow-hidden border border-off-white/10"
        >
          <iframe
            src="https://www.youtube.com/embed/NUBUONCMcQ0"
            title="Rosineide Ramalho — Apresentação"
            className="w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div data-aos="fade-up" className="text-center mt-10">
          <button
            onClick={scrollToMethod}
            className="bg-off-white text-text-main font-body text-sm font-normal tracking-[0.08em] uppercase px-9 py-4 rounded hover:bg-bg-light hover:-translate-y-0.5 transition-all duration-300"
          >
            Entendi — quero saber como funciona →
          </button>
        </div>

      </div>
    </section>
  )
}
