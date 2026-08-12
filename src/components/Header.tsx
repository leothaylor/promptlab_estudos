import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const baseUrl = import.meta.env.BASE_URL;

  const sectionLinks = [
    { hash: 'catalog', label: 'Ferramentas' },
    { hash: 'como-funciona', label: 'Como funciona' },
    { hash: 'comparacao', label: 'Economize tempo' },
    { hash: 'faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="header-brand" aria-label="Ir para a página inicial">
              <div className="header-brand-icon">PL</div>
              <span className="header-brand-name">
                PromptLab <span>Estudos</span>
              </span>
            </Link>

            <nav className="header-nav" aria-label="Navegação principal">
              {sectionLinks.map(link => (
                <a key={link.hash} href={`${baseUrl}#${link.hash}`} className="nav-anchor">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="header-cta">
              <Link to="/demo" className="btn btn-ghost btn-sm">
                Ver demo
              </Link>
              <a href={`${baseUrl}#catalog`} className="btn btn-primary btn-sm">
                Encontrar ferramenta →
              </a>
            </div>

            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Menu mobile">
        {sectionLinks.map(link => (
          <a
            key={link.hash}
            href={`${baseUrl}#${link.hash}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Link to="/demo" className="btn btn-ghost" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
          Ver demo
        </Link>
      </nav>
    </>
  );
}
