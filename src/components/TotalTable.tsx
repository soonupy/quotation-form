type TotalTableProps = {
  subtotal: number;
  tax: number;
  total: number;
};

export function TotalTable({ subtotal, tax, total }: TotalTableProps) {
  return (
    <table className="table-block total-table">
      <tfoot>
        <tr>
          <td colSpan={1} className="cell--label">
            소계
          </td>
          <td colSpan={1} className="cell--amount">
            {subtotal.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="cell--label">
            부가세 (10%)
          </td>
          <td colSpan={1} className="cell--amount">
            {tax.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="cell--label">
            <strong>총합계</strong>
          </td>
          <td colSpan={1} className="cell--amount">
            <strong>{total.toLocaleString()}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

