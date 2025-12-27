type SheetHeaderProps = {
  issuedAt: string;
  onChangeIssuedAt: (value: string) => void;
};

export function SheetHeader({ issuedAt, onChangeIssuedAt }: SheetHeaderProps) {
  return (
    <header className="sheet__header">
      <div className="sheet__meta">
        <span className="meta__label">발행일</span>
        <input
          className="meta__value meta__input"
          type="date"
          value={issuedAt}
          onChange={(e) => onChangeIssuedAt(e.target.value)}
          placeholder="발행일을 입력하세요"
        />
      </div>
    </header>
  );
}

