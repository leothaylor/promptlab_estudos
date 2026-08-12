import { useState, useEffect, useCallback } from 'react';
import { searchAndFilter, getCategories, getAllProducts } from '../api/catalog';
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import DemoSimulator from '../components/DemoSimulator';
import FAQ from '../components/FAQ';

function Hero() {
  return (
    <section className="hero-section">
      {/* Grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />
      {/* Glow blobs */}
      <div className="hero-glow" style={{ width: 500, height: 500, top: -100, left: '50%', transform: 'translateX(-60%)', background: 'rgba(99,102,241,0.15)' }} aria-hidden="true" />
      <div className="hero-glow" style={{ width: 300, height: 300, bottom: 0, right: '10%', background: 'rgba(245,158,11,0.08)' }} aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-badge fade-in-up">
          <span>⚗️</span> Protótipo V1 — catálogo em formação
        </div>

        <h1 className="display-xl fade-in-up fade-in-up-delay-1">
          Estude com{' '}
          <span className="text-gradient">inteligência estruturada</span>
        </h1>

        <p className="hero-sub fade-in-up fade-in-up-delay-2">
          Ferramentas de IA projetadas para transformar estudo complexo em ação clara.
          Editais, legislação, discursivas, cronogramas — cada ferramenta resolve um problema real.
        </p>

        <div className="hero-actions fade-in-up fade-in-up-delay-3">
          <a href="#catalog" className="btn btn-primary">
            Explorar catálogo →
          </a>
          <a href="#como-funciona" className="btn btn-ghost">
            Como funciona
          </a>
        </div>

        <div className="hero-stats fade-in-up fade-in-up-delay-3">
          <div className="hero-stat">
            <span className="hero-stat-num">8</span>
            <span className="hero-stat-label">ferramentas disponíveis</span>
          </div>
          <div className="hero-stat-div" />
          <div className="hero-stat">
            <span className="hero-stat-num">6</span>
            <span className="hero-stat-label">categorias</span>
          </div>
          <div className="hero-stat-div" />
          <div className="hero-stat">
            <span className="hero-stat-num">8+</span>
            <span className="hero-stat-label">em desenvolvimento</span>
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
      title: 'Identifique o problema',
      desc: 'Escolha a ferramenta certa para o momento da preparação: início, edital, legislação, discursiva, cronograma.',
    },
    {
      icon: '🤖',
      title: 'Acesse seu assistente de IA',
      desc: 'Use ChatGPT, Claude, Gemini ou outro assistente com capacidade de processar instruções estruturadas.',
    },
    {
      icon: '📋',
      title: 'Aplique a ferramenta',
      desc: 'Cole o prompt adquirido, forneça os dados pedidos (edital, texto, tema) e receba a análise estruturada.',
    },
    {
      icon: '✅',
      title: 'Transforme em ação',
      desc: 'Cada ferramenta entrega um resultado operacional — não teoria. Mapa de prioridades, trilha, plano, análise.',
    },
  ];

  return (
    <section className="how-section" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Como funciona</div>
          <h2 className="section-title">Da ferramenta ao resultado</h2>
          <p className="section-sub">
            Prompts estruturados que transformam a capacidade do seu assistente de IA
            em respostas específicas para o seu estudo.
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
      generic: 'Peça uma análise do concurso',
      structured: <><strong>Raio X do Edital</strong>: mapa operacional com etapas, alertas e próximos passos</>,
    },
    {
      situation: 'Estudar legislação',
      generic: 'Me explique essa lei',
      structured: <><strong>Destrinchando a Lei Seca</strong>: estudo em blocos com verificação progressiva</>,
    },
    {
      situation: 'Planejar estudo',
      generic: 'Faça um cronograma para mim',
      structured: <><strong>Calculadora da Aprovação</strong>: plano baseado na sua rotina e peso das matérias</>,
    },
    {
      situation: 'Treinar discursiva',
      generic: 'Avalie meu texto',
      structured: <><strong>Simulador de Segunda Fase</strong>: proposta, critérios, estrutura esperada e comparação</>,
    },
    {
      situation: 'Entender a banca',
      generic: 'Como a CESPE cobra Direito?',
      structured: <><strong>Scanner de Bancas</strong>: perfil de cobrança, armadilhas e ajuste estratégico</>,
    },
  ];

  return (
    <section className="compare-section" id="comparacao">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Comparativo</div>
          <h2 className="section-title">Pedido genérico vs. ferramenta estruturada</h2>
          <p className="section-sub">
            Um bom assistente de IA responde qualquer pergunta. Uma ferramenta estruturada
            entrega exatamente o que você precisa para agir.
          </p>
        </div>

        <div className="compare-wrapper">
          <table className="compare-table" aria-label="Comparação entre pedido genérico e ferramenta estruturada">
            <thead>
              <tr>
                <th style={{ background: 'var(--c-bg-card)', color: 'var(--c-text-muted)' }}>Situação</th>
                <th style={{ background: 'rgba(100,116,139,0.1)', color: 'var(--c-text-muted)' }}>Pedido genérico</th>
                <th style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-2)' }}>Ferramenta estruturada</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td style={{ background: 'var(--c-bg-card)', color: 'var(--c-text)', fontWeight: 500 }}>{row.situation}</td>
                  <td className="col-generic" style={{ background: 'rgba(100,116,139,0.05)' }}>"{row.generic}"</td>
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
          <h2 className="section-title">Veja o formato das entregas</h2>
          <p className="section-sub">
            Cada ferramenta produz saídas estruturadas e acionáveis.
            Os exemplos abaixo são simulações visuais com dados fictícios.
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
          <h2 className="section-title">Ferramentas disponíveis</h2>
          <p className="section-sub">
            Escolha a ferramenta certa para o seu momento de preparação.
          </p>
        </div>

        {/* Search + Filters */}
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
              placeholder="Buscar por nome, categoria ou tema..."
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

        {/* Available products */}
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

        {/* Coming soon */}
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
