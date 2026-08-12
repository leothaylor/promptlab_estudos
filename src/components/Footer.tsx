import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">PromptLab Estudos</div>
            <p className="footer-tagline">
              Menos tempo garimpando. Mais tempo estudando.
            </p>
          </div>

          <div className="footer-proto-badge">
            ⚡ Ferramentas prontas para usar sem precisar entender de IA
          </div>

          <nav className="footer-links" aria-label="Links do rodapé">
            <Link to="/">Ferramentas</Link>
            <Link to="/demo">Demo</Link>
            <a href="#como-funciona">Como funciona</a>
            <a href="#faq">FAQ</a>
          </nav>

          <p className="footer-copy">
            © {new Date().getFullYear()} PromptLab Estudos. Todos os direitos reservados.
            As instruções operacionais completas não ficam expostas neste site.
          </p>
        </div>
      </div>
    </footer>
  );
}
