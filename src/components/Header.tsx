import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBrand } from '../api/catalog';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const brand = getBrand();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Ferramentas' },
    { to: '/#como-funciona', label: 'Como funciona' },
    { to: '/#comparacao', label: 'Comparativo' },
    { to: '/#faq', label: 'FAQ' },
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
              {navLinks.map(link => (
                link.to.startsWith('/#') ? (
                  <a key={link.to} href={link.to} className="nav-anchor">{link.label}</a>
                ) : (
                  <Link key={link.to} to={link.to} className="nav-anchor"
                    style={{ color: location.pathname === link.to ? 'var(--c-text)' : undefined }}>
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            <div className="header-cta">
              <Link to="/demo" className="btn btn-ghost btn-sm">
                Ver demo
              </Link>
              <Link to="/" className="btn btn-primary btn-sm">
                Explorar catálogo →
              </Link>
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
        {navLinks.map(link => (
          <a
            key={link.to}
            href={link.to}
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
