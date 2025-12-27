import type { Item } from '../types';
import { QuotationTable } from './QuotationTable';
import { TotalTable } from './TotalTable';
import { ActionBar } from './ActionBar';


type QuotationSectionProps = {
  items: Item[];
  subtotal: number;
  tax: number;
  total: number;
  formatNumber: (value: number) => string;
  parseNumberInput: (value: string) => number;
  onChangeItem: <K extends keyof Item>(index: number, key: K, value: Item[K]) => void;
  onRemoveItem: (index: number) => void;
  onAdd: () => void;
  onPrint: () => void;
};

export function QuotationSection({
  items,
  subtotal,
  tax,
  total,
  formatNumber,
  parseNumberInput,
  onChangeItem,
  onRemoveItem,
  onAdd,
  onPrint,
}: QuotationSectionProps) {
  return (
    <div className="info-bill">
      <h2 className="info-card__title">계산서 정보</h2>
      <div className="table-card">
        <QuotationTable
          items={items}
          formatNumber={formatNumber}
          parseNumberInput={parseNumberInput}
          onChangeItem={onChangeItem}
          onRemoveItem={onRemoveItem}
        />
      <ActionBar onAdd={onAdd} onPrint={onPrint} />
        <TotalTable subtotal={subtotal} tax={tax} total={total} />
      </div>
    </div>
  );
}

