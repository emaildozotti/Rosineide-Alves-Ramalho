const WA_LINK = 'https://wa.me/5582981347572?text=Ol%C3%A1%2C%20Rosineide!%20Vim%20pelo%20seu%20site%20e%20quero%20conhecer%20o%20processo.'

const css = `
@keyframes aurora-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(3%, 5%) scale(1.05); }
  66% { transform: translate(-2%, 2%) scale(0.97); }
}
@keyframes aurora-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-4%, -3%) scale(1.08); }
  66% { transform: translate(3%, -1%) scale(0.95); }
}
@keyframes aurora-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(2%, -4%) scale(1.06); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
`

export default function Hero() {
  const scrollToPain = () => {
    document.getElementById('dores')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{css}</style>

      {/* Desktop sticky header */}
      <header className="md-header" style={{ display: 'none' }}>
        <style>{`@media(min-width:768px){.md-header{display:flex!important;position:fixed;top:0;left:0;right:0;z-index:50;align-items:center;justify-content:space-between;padding:1rem 2.5rem;background:rgba(12,18,14,0.88);backdrop-filter:blur(12px);border-bottom:1px solid rgba(180,140,100,0.12)}}`}</style>
        <span style={{ fontFamily: 'var(--font-heading, serif)', color: 'var(--color-primary, #B48C64)', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Rosineide Ramalho
        </span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#C4956A",color:"#F5EDE0",fontFamily:"Lato,sans-serif",fontWeight:600,fontSize:"14px",letterSpacing:"0.08em",textTransform:"uppercase",padding:"16px 36px",borderRadius:"4px",textDecoration:"none",cursor:"pointer",boxShadow:"0 4px 20px rgba(196,149,106,0.3)",transition:"all 0.3s ease"}} style={{ fontSize: '0.8rem' }}>
          Agendar conversa
        </a>
      </header>

      <section
        id="hero"
        aria-label="Hero Rosineide Ramalho"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0C120E 0%, #101A12 50%, #0A0E0C 100%)',
        }}
      >
        {/* Aurora blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: '55vw', height: '55vw', maxWidth: '580px', maxHeight: '580px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,140,100,0.25) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'aurora-1 18s ease-in-out infinite', opacity: 0.35 }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '45vw', height: '45vw', maxWidth: '500px', maxHeight: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,140,100,0.22) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none', animation: 'aurora-2 22s ease-in-out infinite', opacity: 0.3 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '40%', left: '35%', width: '35vw', height: '35vw', maxWidth: '400px', maxHeight: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,160,120,0.15) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'aurora-3 16s ease-in-out infinite', opacity: 0.25 }} />

        {/* Content */}
        <div
          className="hero-grid"
          style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '72rem', margin: '0 auto', padding: '6rem 1.5rem 4rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
        >
          <style>{`@media(min-width:768px){.hero-grid{grid-template-columns:1fr 1fr!important;padding-top:5rem!important}.r-photo{order:2}.r-text{order:1}}`}</style>

          {/* Text column — mobile first */}
          <div className="r-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Callout */}
            <p
              style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary, #B48C64)', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0s' }}
            >
              TERAPIA EMOCIONAL
            </p>

            {/* H1 */}
            <h1
              style={{ fontFamily: 'var(--font-heading, serif)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.12, color: '#F0EBE3', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.15s' }}
            >
              Acolha sua história.{' '}
              <em style={{ fontWeight: 300, color: 'var(--color-primary, #B48C64)', display: 'block', marginTop: '0.2rem' }}>
                Retorne à sua essência.
              </em>
            </h1>

            {/* Sub-headline */}
            <p
              style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.65, color: 'rgba(240,235,227,0.70)', maxWidth: '30rem', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.30s' }}
            >
              O que não foi acolhido ainda pode ser curado.
            </p>

            {/* CTA */}
            <div style={{ opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.45s' }}>
              <button onClick={scrollToPain} style={{display:"inline-block",background:"#C4956A",color:"#F5EDE0",fontFamily:"Lato,sans-serif",fontWeight:600,fontSize:"14px",letterSpacing:"0.08em",textTransform:"uppercase",padding:"16px 36px",borderRadius:"4px",textDecoration:"none",cursor:"pointer",boxShadow:"0 4px 20px rgba(196,149,106,0.3)",transition:"all 0.3s ease"}}>
                Quero conhecer esse processo
              </button>
            </div>
          </div>

          {/* Photo — Treatment C: asymmetric border-radius */}
          <div className="r-photo" style={{ display: 'flex', justifyContent: 'center', opacity: 0, animation: 'fadeUp 1s ease forwards', animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0C120E 0%, transparent 45%)', zIndex: 1, pointerEvents: 'none', borderRadius: '2rem 4px 2rem 4px' }} aria-hidden="true" />
              {/* Subtle glow behind */}
              <div aria-hidden="true" style={{ position: 'absolute', inset: '-4px', background: 'rgba(100,140,100,0.08)', borderRadius: '2.5rem 6px 2.5rem 6px', filter: 'blur(4px)' }} />
              <img
                src="/images/hero.jpg"
                alt="Rosineide Ramalho — Terapeuta Emocional"
                style={{ position: 'relative', width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '2rem 4px 2rem 4px', display: 'block', boxShadow: '0 25px 60px rgba(0,0,0,0.65)', border: '1px solid rgba(180,140,100,0.2)' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
