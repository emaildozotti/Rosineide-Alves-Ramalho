// Desktop only — oculto no mobile (hero 100vh com nome integrado)
export default function Header() {
  const scrollToContact = () => {
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hidden md:flex sticky top-0 z-50 items-center justify-between px-8 py-4 bg-bg-warm/95 backdrop-blur-sm border-b border-primary/20">
      <div className="font-heading text-heading-color">
        <p className="text-xs font-body font-light tracking-[0.18em] uppercase text-secondary mb-0.5">
          Terapia Emocional
        </p>
        <p className="text-xl font-medium leading-tight">Rosineide Ramalho</p>
      </div>

      <button
        onClick={scrollToContact}
        className="font-body text-xs font-light tracking-[0.1em] uppercase text-text-main border border-primary/50 px-5 py-2.5 rounded hover:bg-primary hover:text-off-white transition-all duration-300"
      >
        Agendar Sessão
      </button>
    </header>
  )
}
