import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

// Map category to a visual class
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

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const isAvailable = product.status === 'available-preview';
  const visClass = getCategoryVisClass(product.category);

  return (
    <article className={`card product-card${!isAvailable ? ' card-coming-soon' : ''}`}>
      {/* Visual Placeholder */}
      <div className={`product-visual ${visClass}`}>
        <span className="visual-code">{product.code}</span>
        {product.featured && (
          <span className="featured-flag">Destaque</span>
        )}
      </div>

      <div className="product-card-body">
        {/* Meta row */}
        <div className="product-card-meta">
          <span className={`badge ${isAvailable ? 'badge-available' : 'badge-coming-soon'}`}>
            {isAvailable ? '● Disponível' : '○ Em breve'}
          </span>
          {product.complexity && (
            <span className="badge badge-complexity">{product.complexity}</span>
          )}
        </div>

        {/* Category */}
        <div className="product-card-category">{product.category}</div>

        {/* Name */}
        <h3 className="product-card-name">{product.name}</h3>

        {/* Short description */}
        <p className="product-card-desc">{product.shortDescription}</p>

        {/* Footer */}
        {isAvailable ? (
          <Link to={`/product/${product.slug}`} className="btn btn-primary btn-sm product-card-cta">
            Ver ferramenta →
          </Link>
        ) : (
          <div className="product-card-cta-locked">
            <span className="btn btn-ghost btn-sm" style={{ opacity: 0.5, cursor: 'default', display: 'inline-flex' }}>
              Em breve
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
