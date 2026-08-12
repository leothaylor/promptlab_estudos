import type { DemoItem, DemoItemStatus, Demonstration } from '../types/product';

function StatusDot({ status }: { status: DemoItemStatus }) {
  return <span className={`demo-dot status-${status}`} />;
}

function DemoItemRow({ item }: { item: DemoItem }) {
  return (
    <div className={`demo-item status-${item.status}`}>
      <StatusDot status={item.status} />
      <div>
        <div className="demo-item-label">{item.label}</div>
        <div className="demo-item-value">{item.value}</div>
      </div>
    </div>
  );
}

interface Props {
  demonstration: Demonstration;
  productName?: string;
}

export default function DemoBlock({ demonstration, productName }: Props) {
  return (
    <div className="demo-block">
      <div className="demo-block-header">
        <div className="demo-block-icon">⚙️</div>
        <div>
          <div className="demo-block-title">{demonstration.title}</div>
          {productName && (
            <div className="demo-block-product">Exemplo: {productName}</div>
          )}
        </div>
      </div>

      <div className="demo-items-list">
        {demonstration.items.map((item, i) => (
          <DemoItemRow key={i} item={item} />
        ))}
      </div>

      <div className="demo-disclaimer">
        ⚠️ {demonstration.disclaimer}
      </div>
    </div>
  );
}
