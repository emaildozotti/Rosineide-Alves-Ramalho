export default function About() {
  const scrollToHow = () => {
    document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="sobre" className="bg-bg-light py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-3"
          >
            Sobre
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-3xl md:text-4xl text-heading-color font-semibold"
          >
            Quem conduz esse processo com você
          </h2>
        </div>

        {/* Mobile: texto antes da foto | Desktop: foto + texto lado a lado */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Texto — order-2 no mobile (aparece segundo), order-1 no desktop */}
          <div className="flex-1 order-2 md:order-1">
            <p
              data-aos="fade-up"
              className="font-heading text-xl md:text-2xl text-heading-color font-medium italic mb-7 leading-relaxed"
            >
              "Eu não conduzo sessões como técnica — conduzo como quem conhece por dentro o que é precisar ser acolhido."
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="space-y-4 font-body text-sm font-light text-text-main/80 leading-[1.85]"
            >
              <p>
                Rosineide Ramalho é terapeuta emocional com abordagem sistêmica, espiritual e integrativa.
              </p>
              <p>
                Sua trajetória não começou nos livros — começou no próprio processo de olhar para a história emocional e familiar com honestidade. É dessa travessia que vem a profundidade com que conduz cada processo.
              </p>
              <p>
                Hoje, Rosineide atua como facilitadora de reconexão emocional. Ela não trata sintomas isolados — ela acompanha pessoas a compreenderem de onde veio o peso que carregam, e a encontrarem um caminho de volta para si mesmas.
              </p>
              <p>
                Sua comunicação é acolhedora, sua presença é humana, e sua condução é estruturada sem ser mecânica. Cada sessão tem intenção. Cada pessoa, um processo único.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="mt-8">
              <button
                onClick={scrollToHow}
                className="border border-primary text-heading-color font-body text-sm font-normal tracking-[0.08em] uppercase px-8 py-3.5 rounded hover:bg-primary hover:text-off-white transition-all duration-300"
              >
                Como funciona na prática? →
              </button>
            </div>
          </div>

          {/* Foto — order-1 no mobile (aparece primeiro), order-2 no desktop */}
          <div
            data-aos="fade-left"
            className="flex-shrink-0 w-72 md:w-80 order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/10 rounded-2xl" />
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-bg-warm flex items-center justify-center">
                <img
                  src="/foto-rosineide.jpg"
                  alt="Rosineide Ramalho"
                  className="client-photo w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="hidden w-full h-full items-center justify-center flex-col gap-3 text-center px-6"
                  style={{ display: 'none' }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C4956A" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                  <p className="font-body text-xs font-light text-text-main/50">
                    Foto da Rosineide
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
