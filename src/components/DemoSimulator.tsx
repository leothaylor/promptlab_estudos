import { useState } from 'react';
import { getAvailableProducts } from '../api/catalog';
import DemoBlock from './DemoBlock';

export default function DemoSimulator() {
  const products = getAvailableProducts().filter(p => p.demonstration !== null);
  const [activeIdx, setActiveIdx] = useState(0);
  const selected = products[activeIdx];

  return (
    <div className="demo-simulator">
      <div className="demo-simulator-tabs">
        {products.map((p, i) => (
          <button
            key={p.id}
            className={`demo-tab${activeIdx === i ? ' active' : ''}`}
            onClick={() => setActiveIdx(i)}
          >
            <span className="demo-tab-code">{p.code}</span>
            <span className="demo-tab-name">{p.name}</span>
          </button>
        ))}
      </div>

      {selected?.demonstration && (
        <div className="demo-simulator-panel">
          <DemoBlock demonstration={selected.demonstration} productName={selected.name} />
        </div>
      )}
    </div>
  );
}
