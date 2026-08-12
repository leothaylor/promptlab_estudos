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
      <div className="detail-breadcrumb container">
        <Link to="/" className="breadcrumb-link">← Todas as ferramentas</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>

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
        <div className="detail-main">
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

          {product.problem && (
            <div className="detail-block">
              <h2 className="detail-block-title">O problema que resolve</h2>
              <div className="detail-problem-card">
                <div className="problem-icon">⚡</div>
                <p>{product.problem}</p>
              </div>
            </div>
          )}

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

          {(product.inputs.length > 0 || product.outputs.length > 0) && (
            <div className="detail-block">
              <h2 className="detail-block-title">O que você envia e o que recebe</h2>
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

          {product.benefits.length > 0 && (
            <div className="detail-block">
              <h2 className="detail-block-title">O tempo que você deixa de gastar no garimpo</h2>
              <div className="benefits-grid">
                {product.benefits.map((b, i) => (
                  <div key={i} className="benefit-pill">
                    <span>→</span> {b}
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.demonstration && (
            <div className="detail-block">
              <h2 className="detail-block-title">Demonstração</h2>
              <DemoBlock demonstration={product.demonstration} />
            </div>
          )}
        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            {isAvailable ? (
              <>
                <div className="sidebar-status-label">Ferramenta preparada</div>
                <div className="sidebar-price-info">
                  Preço a ser definido
                  <span className="sidebar-price-note">O acesso comercial será habilitado em breve.</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} disabled>
                  Acesso em breve
                </button>
                <div className="sidebar-proto-note">
                  ⚡ Sem configuração técnica: escolha a ferramenta, forneça o material solicitado e siga as instruções.
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
                  <div className="sidebar-info-label">Uso com IA</div>
                  <p className="sidebar-info-value">{product.compatibility}</p>
                </div>
              )}
            </div>
          )}

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
