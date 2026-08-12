import { Link } from 'react-router-dom';
import DemoSimulator from '../components/DemoSimulator';

export default function DemoPage() {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <div style={{ marginBottom: 32 }}>
          <Link to="/" className="breadcrumb-link">← Voltar ao catálogo</Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-eyebrow">Demonstração interativa</div>
          <h1 className="display-lg">Veja o que você recebe</h1>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>
            Você não precisa entender de IA nem montar prompts. A ferramenta já organiza a tarefa para transformar seu material em uma saída clara e utilizável.
          </p>
        </div>

        <div className="demo-page-warning">
          ⚠️ <strong>Atenção:</strong> Os exemplos abaixo usam dados fictícios apenas para demonstrar o formato das entregas. Não representam análises reais de concursos ou editais.
        </div>

        <DemoSimulator />

        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <p style={{ color: 'var(--c-text-muted)', marginBottom: 24 }}>
            Quer encontrar a ferramenta que poupa o seu próximo garimpo manual?
          </p>
          <Link to="/" className="btn btn-primary">
            Encontrar minha ferramenta →
          </Link>
        </div>
      </div>
    </div>
  );
}
