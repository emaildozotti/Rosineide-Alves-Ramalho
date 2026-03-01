export default function Hero() {
  const scrollToPain = () => {
    document.getElementById('dores').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-bg-warm flex items-center overflow-hidden"
    >
      {/* Background ornament */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-light/40" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            {/* Mobile: nome integrado no hero */}
            <div className="md:hidden mb-8">
              <p className="font-body text-xs font-light tracking-[0.18em] uppercase text-secondary mb-1">
                Terapia Emocional
              </p>
              <p className="font-heading text-2xl text-heading-color font-medium">
                Rosineide Ramalho
              </p>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="0"
              className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-4"
            >
              Abordagem Sistêmica · Espiritual · Integrativa
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-heading-color font-semibold leading-[1.12] mb-5"
            >
              Acolha sua história.
              <br />
              <em className="font-light">Retorne à sua essência.</em>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-body text-base md:text-lg font-light text-text-main/80 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
            >
              Você não precisa continuar carregando o peso do que nunca foi acolhido.
            </p>

            <div data-aos="fade-up" data-aos-delay="300">
              <button
                onClick={scrollToPain}
                className="bg-primary text-off-white font-body text-sm font-normal tracking-[0.08em] uppercase px-9 py-4 rounded hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Quero conhecer esse processo →
              </button>
              <p className="mt-4 font-body text-xs font-light text-text-main/50 tracking-wide">
                Atendimento Online · Agenda Individual · Sigiloso
              </p>
            </div>
          </div>

          {/* Foto */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex-shrink-0 w-72 md:w-80 lg:w-96"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/10 rounded-2xl" />
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-bg-light flex items-center justify-center">
                {/* Placeholder — substituir pela foto da Rosineide */}
                <img
                  src="/foto-rosineide.jpg"
                  alt="Rosineide Ramalho — Terapeuta Emocional"
                  className="client-photo w-full h-full object-cover object-center"
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
                  <p className="font-body text-xs font-light text-text-main/50 tracking-wide">
                    Foto da Rosineide
                    <br />
                    <span className="text-primary/70">Inserir em /public/foto-rosineide.jpg</span>
                  </p>
                </div>
              </div>
              {/* Ornamento decorativo */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-primary/30 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
