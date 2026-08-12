import { Link } from 'react-router-dom';
import DemoSimulator from '../components/DemoSimulator';

export default function DemoPage() {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: 32 }}>
          <Link to="/" className="breadcrumb-link">← Voltar ao catálogo</Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-eyebrow">Demonstração interativa</div>
          <h1 className="display-lg">Formato das entregas</h1>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>
            Exemplos visuais simulados com dados fictícios.
            Cada ferramenta entrega um resultado estruturado e acionável — não apenas texto.
          </p>
        </div>

        <div className="demo-page-warning">
          ⚠️ <strong>Atenção:</strong> Os exemplos abaixo são simulações visuais com dados fictícios criados exclusivamente para demonstrar o formato da entrega. Não representam análises reais de concursos ou editais.
        </div>

        <DemoSimulator />

        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <p style={{ color: 'var(--c-text-muted)', marginBottom: 24 }}>
            Pronto para explorar as ferramentas completas?
          </p>
          <Link to="/" className="btn btn-primary">
            Ver catálogo completo →
          </Link>
        </div>
      </div>
    </div>
  );
}
