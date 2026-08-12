import { useState } from 'react';

const FAQ_DATA = [
  {
    question: 'O que são as ferramentas do PromptLab Estudos?',
    answer: 'São prompts estruturados e otimizados para uso com assistentes de IA (como ChatGPT, Claude etc.), projetados especificamente para diferentes situações de estudo para concursos públicos. Cada ferramenta resolve um problema específico: análise de editais, estudo de legislação, simulação de discursivas, entre outros.',
  },
  {
    question: 'Quais assistentes de IA são compatíveis?',
    answer: 'As ferramentas são compatíveis com qualquer assistente de IA com capacidade de processamento de texto, como ChatGPT (GPT-4 ou superior), Claude, Gemini e outros. Cada produto indica o nível de capacidade necessário para resultados ideais.',
  },
  {
    question: 'Como funciona a compra e o acesso?',
    answer: 'O sistema de compra e checkout está em desenvolvimento. Em breve será possível adquirir as ferramentas diretamente no site. Por enquanto, o catálogo está disponível para visualização como protótipo.',
  },
  {
    question: 'Os prompts completos ficam visíveis no site?',
    answer: 'Não. As descrições e demonstrações exibidas são comerciais e ilustrativas. Os prompts operacionais completos são entregues apenas após a compra. Nenhum prompt real está exposto ou escondido no código desta página.',
  },
  {
    question: 'Para que serve o "Raio X do Edital"?',
    answer: 'O Raio X do Edital transforma um edital extenso em um mapa operacional. Você informa o edital e o cargo pretendido, e a ferramenta organiza etapas, prazos críticos, regras eliminatórias e próximos passos recomendados.',
  },
  {
    question: 'As ferramentas funcionam para qualquer concurso?',
    answer: 'Sim. As ferramentas são genéricas o suficiente para funcionar com qualquer concurso público, seja municipal, estadual ou federal. Quanto mais contexto você fornecer ao assistente de IA, mais precisa será a resposta.',
  },
  {
    question: 'O que significa "Em breve" nos cards?',
    answer: 'Produtos marcados como "Em breve" estão no catálogo futuro, já planejados, mas ainda em desenvolvimento. Serão lançados progressivamente após a validação da V1.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Perguntas frequentes</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Tudo que você precisa saber antes de começar.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_DATA.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? ' open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="faq-answer" aria-hidden={openIndex !== i}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
