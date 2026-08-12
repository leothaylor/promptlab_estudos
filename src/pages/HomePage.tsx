import { useState, useEffect, useCallback } from 'react';
import { searchAndFilter, getCategories, getAllProducts } from '../api/catalog';
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import DemoSimulator from '../components/DemoSimulator';
import FAQ from '../components/FAQ';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" style={{ width: 500, height: 500, top: -100, left: '50%', transform: 'translateX(-60%)', background: 'rgba(99,102,241,0.15)' }} aria-hidden="true" />
      <div className="hero-glow" style={{ width: 300, height: 300, bottom: 0, right: '10%', background: 'rgba(245,158,11,0.08)' }} aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-badge fade-in-up">
          <span>⚡</span> Não precisa entender de IA
        </div>

        <h1 className="display-xl fade-in-up fade-in-up-delay-1">
          Encontre o que estudar{' '}
          <span className="text-gradient">em 2 cliques</span>
        </h1>

        <p className="hero-sub fade-in-up fade-in-up-delay-2">
          Pare de perder horas garimpando edital, legislação, banca e conteúdo para descobrir o que realmente importa.
          Escolha o problema, abra a ferramenta certa e transforme informação espalhada em direção clara para estudar.
        </p>

        <div className="hero-actions fade-in-up fade-in-up-delay-3">
          <a href="#catalog" className="btn btn-primary">
            Encontrar minha ferramenta →
          </a>
          <a href="#como-funciona" className="btn btn-ghost">
            Ver como funciona
          </a>
        </div>

        <div className="hero-stats fade-in-up fade-in-up-delay-3">
          <div className="hero-stat">
            <span className="hero-stat-num">2</span>
            <span className="hero-stat-label">cliques para chegar à ferramenta</span>
          </div>
          <div className="hero-stat-div" />
          <div className="hero-stat">
            <span className="hero-stat-num">0</span>
            <span className="hero-stat-label">conhecimento de IA necessário</span>
          </div>
          <div className="hero-stat-div" />
          <div className="hero-stat">
            <span className="hero-stat-num">8</span>
            <span className="hero-stat-label">ferramentas prontas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: '🎯',
      title: 'Escolha o que precisa resolver',
      desc: 'Edital, legislação, banca, cronograma ou discursiva. Você começa pelo seu problema, não pela tecnologia.',
    },
    {
      icon: '⚡',
      title: 'Abra a ferramenta certa',
      desc: 'Em dois cliques você chega à ferramenta preparada para aquele tipo de tarefa. Sem montar prompt e sem aprender comandos.',
    },
    {
      icon: '📋',
      title: 'Forneça seu material',
      desc: 'Insira o edital, trecho, tema ou contexto solicitado. A própria ferramenta orienta o que precisa ser informado.',
    },
    {
      icon: '✅',
      title: 'Receba direção para agir',
      desc: 'Em vez de gastar tempo organizando tudo manualmente, você recebe prioridades, alertas, estrutura e próximos passos para estudar.',
    },
  ];

  return (
    <section className="how-section" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Como funciona</div>
          <h2 className="section-title">Você não precisa aprender IA para usar IA</h2>
          <p className="section-sub">
            Em dois cliques você encontra a ferramenta certa. Depois, basta fornecer seu material e seguir as instruções.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    {
      situation: 'Analisar um edital',
      manual: 'Ler dezenas de páginas, separar prazos, regras, etapas e conteúdo manualmente',
      structured: <><strong>Raio X do Edital</strong>: organiza regras críticas, prioridades e próximos passos</>,
    },
    {
      situation: 'Estudar legislação',
      manual: 'Ler artigo por artigo, tentar identificar exceções e decidir sozinho o que merece atenção',
      structured: <><strong>Destrinchando a Lei Seca</strong>: conduz o estudo em blocos e destaca pontos relevantes</>,
    },
    {
      situation: 'Planejar o estudo',
      manual: 'Cruzar matérias, tempo disponível, dificuldades e peso de cada conteúdo por conta própria',
      structured: <><strong>Calculadora da Aprovação</strong>: transforma rotina e prioridades em um plano executável</>,
    },
    {
      situation: 'Treinar discursiva',
      manual: 'Montar proposta, critérios, estrutura e revisão sem um processo consistente',
      structured: <><strong>Simulador de Segunda Fase</strong>: organiza proposta, critérios e pontos de melhoria</>,
    },
    {
      situation: 'Entender a banca',
      manual: 'Garimpar questões e tentar reconhecer sozinho padrões, armadilhas e formas de cobrança',
      structured: <><strong>Scanner de Bancas</strong>: organiza padrões de cobrança e ajustes de preparação</>,
    },
  ];

  return (
    <section className="compare-section" id="comparacao">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Economize tempo</div>
          <h2 className="section-title">Menos garimpo. Mais tempo estudando.</h2>
          <p className="section-sub">
            O objetivo não é estudar por você. É poupar o trabalho manual de procurar, separar e organizar informação antes do estudo começar.
          </p>
        </div>

        <div className="compare-wrapper">
          <table className="compare-table" aria-label="Comparação entre garimpo manual e ferramenta estruturada">
            <thead>
              <tr>
                <th style={{ background: 'var(--c-bg-card)', color: 'var(--c-text-muted)' }}>Situação</th>
                <th style={{ background: 'rgba(100,116,139,0.1)', color: 'var(--c-text-muted)' }}>Fazendo manualmente</th>
                <th style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-2)' }}>Com a ferramenta certa</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td style={{ background: 'var(--c-bg-card)', color: 'var(--c-text)', fontWeight: 500 }}>{row.situation}</td>
                  <td className="col-generic" style={{ background: 'rgba(100,116,139,0.05)' }}>{row.manual}</td>
                  <td className="col-structured" style={{ background: 'rgba(99,102,241,0.05)' }}>{row.structured}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Demonstração</div>
          <h2 className="section-title">Veja o tipo de resposta que você recebe</h2>
          <p className="section-sub">
            Você não precisa saber escrever prompts. Cada ferramenta já vem estruturada para transformar seu material em uma saída organizada e acionável.
            Os exemplos abaixo usam dados fictícios.
          </p>
        </div>

        <DemoSimulator />
      </div>
    </section>
  );
}

function CatalogSection() {
  const categories = ['Todos', ...getCategories()];
  const allProducts = getAllProducts();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [results, setResults] = useState<Product[]>(allProducts);

  const runSearch = useCallback(
    (q: string, cat: string) => {
      setResults(searchAndFilter(q, cat));
    },
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => runSearch(query, activeCategory), 200);
    return () => clearTimeout(timer);
  }, [query, activeCategory, runSearch]);

  const available = results.filter(p => p.status === 'available-preview');
  const comingSoon = results.filter(p => p.status === 'coming-soon');

  return (
    <section className="catalog-section" id="catalog">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Catálogo</div>
          <h2 className="section-title">Escolha pelo problema que quer resolver</h2>
          <p className="section-sub">
            Você não precisa conhecer termos técnicos nem saber montar instruções. Encontre a tarefa que está consumindo seu tempo e abra a ferramenta correspondente.
          </p>
        </div>

        <div className="catalog-controls">
          <div className="search-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              id="product-search"
              className="search-input"
              type="search"
              placeholder="Buscar por problema, matéria ou tema..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Buscar ferramentas"
            />
          </div>

          <div className="filter-bar" role="group" aria-label="Filtrar por categoria">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {available.length > 0 ? (
          <>
            <div className="catalog-sub-header">
              <span className="badge badge-available">● Disponíveis agora</span>
              <span className="catalog-count">{available.length} ferramentas</span>
            </div>
            <div className="products-grid">
              {available.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <p>Nenhuma ferramenta encontrada para "{query}"</p>
            <button className="btn btn-ghost btn-sm" onClick={() => { setQuery(''); setActiveCategory('Todos'); }}>
              Limpar filtros
            </button>
          </div>
        )}

        {comingSoon.length > 0 && (
          <>
            <div className="divider" style={{ margin: '48px 0 32px' }} />
            <div className="catalog-sub-header">
              <span className="badge badge-coming-soon">○ Em desenvolvimento</span>
              <span className="catalog-count">{comingSoon.length} em breve</span>
            </div>
            <div className="products-grid">
              {comingSoon.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Hero />
      <HowItWorks />
      <Comparison />
      <DemoSection />
      <CatalogSection />
      <FAQ />
    </div>
  );
}
