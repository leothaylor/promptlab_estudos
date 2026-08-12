import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductBySlug } from '../api/catalog';
import DemoBlock from '../components/DemoBlock';

function getCategoryVisClass(category: string): string {
  const map: Record<string, string> = {
    'Estratégia de concurso': 'vis-estrategia',
    'Legislação':              'vis-legislacao',
    'Questões e prova':        'vis-questoes',
    'Discursivas e redação':   'vis-discursivas',
    'Aprendizagem':            'vis-aprendizagem',
    'Organização e carreira':  'vis-organizacao',
  };
  return map[category] ?? 'vis-estrategia';
}

function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    'Estratégia de concurso': 'var(--c-cat-estrategia)',
    'Legislação':              'var(--c-cat-legislacao)',
    'Questões e prova':        'var(--c-cat-questoes)',
    'Discursivas e redação':   'var(--c-cat-discursivas)',
    'Aprendizagem':            'var(--c-cat-aprendizagem)',
    'Organização e carreira':  'var(--c-cat-organizacao)',
  };
  return map[category] ?? 'var(--c-primary)';
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    if (!product) navigate('/', { replace: true });
  }, [product, navigate]);

  if (!product) return null;

  const isAvailable = product.status === 'available-preview';
  const visClass = getCategoryVisClass(product.category);
  const catColor = getCategoryColor(product.category);

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="detail-breadcrumb container">
        <Link to="/" className="breadcrumb-link">← Todas as ferramentas</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>

      {/* Header banner */}
      <div className="detail-banner">
        <div className={`detail-visual ${visClass}`}>
          <div className="detail-visual-content">
            <div className="detail-visual-code">{product.code}</div>
            <div className="detail-visual-name">{product.name}</div>
          </div>
          <div className="detail-visual-grid" aria-hidden="true" />
        </div>
      </div>

      <div className="container detail-layout">
        {/* Main content */}
        <div className="detail-main">
          {/* Title + meta */}
          <div className="detail-title-block">
            <div className="detail-meta-row">
              <span
                className="tag"
                style={{ borderColor: catColor, color: catColor, background: `${catColor}15` }}
              >
                {product.category}
              </span>
              {product.complexity && (
                <span className="badge badge-complexity">{product.complexity}</span>
              )}
              <span className={`badge ${isAvailable ? 'badge-available' : 'badge-coming-soon'}`}>
                {isAvailable ? '● Disponível' : '○ Em breve'}
              </span>
            </div>

            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-description">{product.description}</p>
          </div>

          {/* Problem */}
          {product.problem && (
            <div className="detail-block">
              <h2 className="detail-block-title">O problema que resolve</h2>
              <div className="detail-problem-card">
                <div className="problem-icon">⚡</div>
                <p>{product.problem}</p>
              </div>
            </div>
          )}

          {/* Ideal for */}
          {product.idealFor.length > 0 && (
            <div className="detail-block">
              <h2 className="detail-block-title">Ideal para quem</h2>
              <ul className="detail-check-list">
                {product.idealFor.map((item, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Inputs & Outputs */}
          {(product.inputs.length > 0 || product.outputs.length > 0) && (
            <div className="detail-block">
              <h2 className="detail-block-title">Entradas e saídas</h2>
              <div className="io-grid">
                {product.inputs.length > 0 && (
                  <div className="io-card">
                    <div className="io-card-header io-input">📥 Você fornece</div>
                    <ul>
                      {product.inputs.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.outputs.length > 0 && (
                  <div className="io-card">
                    <div className="io-card-header io-output">📤 A ferramenta entrega</div>
                    <ul>
                      {product.outputs.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Benefits */}
          {product.benefits.length > 0 && (
            <div className="detail-block">
              <h2 className="detail-block-title">Benefícios</h2>
              <div className="benefits-grid">
                {product.benefits.map((b, i) => (
                  <div key={i} className="benefit-pill">
                    <span>→</span> {b}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Demonstration */}
          {product.demonstration && (
            <div className="detail-block">
              <h2 className="detail-block-title">Demonstração</h2>
              <DemoBlock demonstration={product.demonstration} />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="detail-sidebar">
          <div className="sidebar-card">
            {isAvailable ? (
              <>
                <div className="sidebar-status-label">Disponível para acesso</div>
                <div className="sidebar-price-info">
                  Preço a ser definido
                  <span className="sidebar-price-note">O checkout será habilitado em breve.</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} disabled>
                  Em breve — acesso indisponível
                </button>
                <div className="sidebar-proto-note">
                  ⚗️ Este é um protótipo. O sistema de compra está em desenvolvimento.
                </div>
              </>
            ) : (
              <>
                <div className="sidebar-status-label">Em desenvolvimento</div>
                <p className="sidebar-coming-note">
                  Esta ferramenta faz parte do catálogo futuro e será lançada progressivamente.
                </p>
                <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} disabled>
                  Indisponível por enquanto
                </button>
              </>
            )}
          </div>

          {/* Extra info */}
          {(product.recommendedUse || product.compatibility) && (
            <div className="sidebar-card sidebar-card-secondary">
              {product.recommendedUse && (
                <div className="sidebar-info-item">
                  <div className="sidebar-info-label">Como usar</div>
                  <p className="sidebar-info-value">{product.recommendedUse}</p>
                </div>
              )}
              {product.compatibility && (
                <div className="sidebar-info-item">
                  <div className="sidebar-info-label">Compatibilidade</div>
                  <p className="sidebar-info-value">{product.compatibility}</p>
                </div>
              )}
            </div>
          )}

          {/* Search terms */}
          {product.searchTerms.length > 0 && (
            <div className="sidebar-tags">
              {product.searchTerms.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
          )}

          <Link to="/" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
            ← Ver todas as ferramentas
          </Link>
        </aside>
      </div>
    </div>
  );
}
