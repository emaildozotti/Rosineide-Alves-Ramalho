// ⚠️ Substituir XXXXXXXXXXX pelo WhatsApp real da Rosineide antes do deploy
const WHATSAPP_NUMBER = '55XXXXXXXXXXX'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá Rosineide! Vi sua página e gostaria de saber mais sobre seu processo terapêutico.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">

        <p
          data-aos="fade-up"
          className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-4"
        >
          Próximo Passo
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-heading text-3xl md:text-5xl text-off-white font-semibold leading-[1.15] mb-4"
        >
          Quando você estiver pronta,<br />
          <em className="font-light text-primary">estou aqui para caminhar com você.</em>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="font-body text-sm font-light text-off-white/55 leading-relaxed mb-10"
        >
          A agenda é individual e limitada.
          <br />
          Atendimentos por ordem de chegada.
        </p>

        <div data-aos="fade-up" data-aos-delay="300">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-off-white font-body text-sm font-normal tracking-[0.08em] uppercase px-10 py-4 rounded hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            ➡ Garantir minha vaga agora
          </a>
        </div>

        <div className="divider my-14" />

        <div className="space-y-2">
          <p className="font-heading text-lg text-off-white/70 font-light">
            Rosineide Ramalho
          </p>
          <p className="font-body text-xs font-light text-off-white/30 tracking-wide">
            Terapia Emocional · Abordagem Sistêmica e Espiritual · Atendimento Online
          </p>
          <p className="font-body text-xs font-light text-off-white/20 mt-4">
            © 2026 Rosineide Ramalho · Todos os direitos reservados
          </p>
        </div>

      </div>
    </footer>
  )
}
