import { useState } from 'react';

const FAQ_DATA = [
  {
    question: 'O que são as ferramentas do PromptLab Estudos?',
    answer: 'São ferramentas prontas para tarefas específicas da preparação para concursos. Você escolhe o problema que quer resolver, fornece o material solicitado e recebe uma saída estruturada para agir. A lógica já vem preparada: você não precisa montar prompts do zero.',
  },
  {
    question: 'Preciso entender de IA para usar?',
    answer: 'Não. A proposta do PromptLab é justamente eliminar essa barreira. Você não precisa saber escrever comandos, configurar fluxos ou entender termos técnicos. Basta escolher a ferramenta, inserir o material pedido e seguir as instruções.',
  },
  {
    question: 'Preciso usar alguma IA específica?',
    answer: 'Não. As ferramentas foram pensadas para serem usadas no assistente de IA que você já utiliza, desde que ele consiga processar as informações e instruções fornecidas.',
  },
  {
    question: 'Como isso economiza meu tempo?',
    answer: 'O ganho está no trabalho que acontece antes do estudo. Em vez de gastar horas procurando regras no edital, separando prioridades, garimpando padrões de banca ou organizando informações manualmente, você usa uma ferramenta já estruturada para transformar esse material em direção prática.',
  },
  {
    question: 'Como funciona a compra e o acesso?',
    answer: 'O sistema de compra e checkout ainda está sendo preparado. As ferramentas podem ser exploradas no catálogo e o acesso comercial será habilitado em uma próxima etapa.',
  },
  {
    question: 'Os prompts completos ficam visíveis no site?',
    answer: 'Não. As descrições e demonstrações exibidas servem para mostrar o funcionamento e o tipo de entrega. As instruções operacionais completas são disponibilizadas apenas no acesso ao produto.',
  },
  {
    question: 'As ferramentas funcionam para qualquer concurso?',
    answer: 'Elas foram desenhadas para diferentes contextos de concursos públicos. Quanto melhor o material fornecido — como edital, trecho de legislação, tema ou contexto da prova — mais específica tende a ser a saída.',
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
            O essencial para entender como usar as ferramentas sem complicação.
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
