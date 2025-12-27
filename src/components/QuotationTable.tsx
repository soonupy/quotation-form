import { FaTrash } from 'react-icons/fa';
import type { Item } from '../types';

type QuotationTableProps = {
  items: Item[];
  formatNumber: (value: number) => string;
  parseNumberInput: (value: string) => number;
  onChangeItem: <K extends keyof Item>(index: number, key: K, value: Item[K]) => void;
  onRemoveItem: (index: number) => void;
};

export function QuotationTable({
  items,
  formatNumber,
  parseNumberInput,
  onChangeItem,
  onRemoveItem,
}: QuotationTableProps) {
  const displayQty = (qty: number) => (qty === 0 ? '' : qty);
  const displayPrice = (price: number) => (price === 0 ? '' : formatNumber(price));
  const displaySupply = (qty: number, price: number) => (qty === 0 || price === 0 ? '' : formatNumber(qty * price));

  return (
    <div className="table-action-wrapper">
      <table className="table-block quotation-table">
        <thead>
          <tr>
            <th className="cell number">No.</th>
            <th className="cell item">항목</th>
            <th className="cell spec">규격</th>
            <th className="cell unit">단위</th>
            <th className="cell quantity">수량</th>
            <th className="cell price">단가(원)</th>
            <th className="cell supply">공급가</th>
            {/* <th className="cell tax">세액</th> */}
            {/* <th className="cell note">비고</th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td className="cell number">{idx + 1}</td>
              <td className="cell item">
                <input
                  className="input"
                  value={item.name}
                  onChange={(e) => onChangeItem(idx, 'name', e.target.value)}
                  // placeholder="항목명을 입력하세요"
                />
              </td>
              <td className="cell spec">
                <input
                  className="input"
                  value={item.spec}
                  onChange={(e) => onChangeItem(idx, 'spec', e.target.value)}
                  // placeholder="규격"
                />
              </td>
              <td className="cell unit">
                <input
                  className="input"
                  value={item.unit}
                  onChange={(e) => onChangeItem(idx, 'unit', e.target.value)}
                  // placeholder="단위"
                />
              </td>
              <td className="cell quantity data">
                <input
                  className="input"
                  type="number"
                  value={displayQty(item.qty)}
                  onChange={(e) => onChangeItem(idx, 'qty', Number(e.target.value))}
                  min={0}
                />
              </td>
              <td className="cell price">
                <input
                  className="input"
                  type="text"
                  inputMode="numeric"
                  value={displayPrice(item.price)}
                  onChange={(e) => onChangeItem(idx, 'price', parseNumberInput(e.target.value))}
                  // placeholder="0"
                />
              </td>
              <td className="cell supply">{displaySupply(item.qty, item.price)}</td>
              {/* <td className="cell tax">{Math.round(item.qty * item.price * 0.1).toLocaleString()}</td> */}
              {/* <td>
                <input
                  className="input"
                  value={item.note}
                  onChange={(e) => onChangeItem(idx, 'note', e.target.value)}
                  placeholder="비고"
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row-actions">
        <div className="row-actions__header">삭제</div>
        <div className="row-actions__list">
          {items.map((_, idx) => (
            <button
              key={idx}
              className="row-actions__btn"
              onClick={() => onRemoveItem(idx)}
              aria-label={`행 ${idx + 1} 삭제`}
            >
              <i className="icon ico-sm">
                <FaTrash />
              </i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

