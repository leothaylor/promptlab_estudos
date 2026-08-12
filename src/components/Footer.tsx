import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">PromptLab Estudos</div>
            <p className="footer-tagline">
              Ferramentas estruturadas de IA para transformar estudo complexo em ação clara.
            </p>
          </div>

          <div className="footer-proto-badge">
            ⚗️ Protótipo V1 — preços e checkout em breve
          </div>

          <nav className="footer-links" aria-label="Links do rodapé">
            <Link to="/">Ferramentas</Link>
            <Link to="/demo">Demo</Link>
            <a href="#como-funciona">Como funciona</a>
            <a href="#faq">FAQ</a>
          </nav>

          <p className="footer-copy">
            © {new Date().getFullYear()} PromptLab Estudos. Todos os direitos reservados.
            Os prompts completos não estão expostos neste site.
          </p>
        </div>
      </div>
    </footer>
  );
}
