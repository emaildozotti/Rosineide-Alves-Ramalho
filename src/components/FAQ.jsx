import { useState } from 'react'

const perguntas = [
  {
    pergunta: 'Esse trabalho é contra a minha religião ou crença?',
    resposta:
      'Este é um trabalho clínico e terapêutico, com base em psicologia sistêmica e uma visão integrativa da saúde emocional. Não é ritual, não é espiritualismo, não é contra nenhuma fé. É um processo de autoconhecimento e reconexão emocional — que respeita profundamente a história, os valores e as crenças de cada pessoa.',
  },
  {
    pergunta: 'Preciso estar em crise para iniciar o processo?',
    resposta:
      'Não. A maioria das pessoas que chega ao processo está funcionando bem externamente — mas sente que algo interno pede atenção. Você não precisa estar no limite. Precisa estar disposto a olhar.',
  },
  {
    pergunta: 'Quanto tempo leva o processo?',
    resposta:
      'Cada pessoa tem seu próprio tempo emocional. Não há prazo fixo — há um processo que avança conforme você avança. O que posso dizer é que as mudanças começam a aparecer antes do que a maioria espera.',
  },
  {
    pergunta: 'Como são as sessões? É só conversa?',
    resposta:
      'As sessões são estruturadas por temas e incluem exercícios reflexivos ativos — escrita, expressão simbólica, práticas de reconexão. Não é só conversa — é um processo conduzido com intenção.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="bg-bg-light py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-8">

        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="font-body text-xs font-light tracking-[0.2em] uppercase text-secondary mb-3"
          >
            Dúvidas
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-3xl md:text-4xl text-heading-color font-semibold"
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div data-aos="fade-up" className="space-y-3 mb-16">
          {perguntas.map((item, i) => (
            <div
              key={i}
              className="bg-bg-warm rounded-xl border border-primary/10 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-heading text-base md:text-lg text-heading-color font-medium leading-snug">
                  {item.pergunta}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-primary/40 text-primary transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="font-body text-sm font-light text-text-main/75 leading-[1.85] px-6 pb-6">
                  {item.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
