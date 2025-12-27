import { useState } from 'react';
import { InfoSectionList } from './components/InfoSectionList';
import { SheetHeader } from './components/SheetHeader';
import { QuotationSection } from './components/QuotationSection';
import type { InfoSection, Item } from './types';
import { SheetFooter } from './components/SheetFooter';

export default function App() {
  const [infoSections, setInfoSections] = useState<InfoSection[]>([
    {
      title: "수신자 정보",
      rows: [
        { label: "상호명", value: "" },
        { label: "사업자번호", value: "" },
        { label: "담당자", value: "" },
        { label: "업종", value: "" },
        { label: "주소", value: "" },
        { label: "연락처", value: "" },
        { label: "시공 일자", value: "" },
      ],
    },
    {
      title: "발신자 정보",
      rows: [
        { label: "상 호 명", value: "애드택디자인" },
        { label: "사업자번호", value: "1234-56-789" },
        { label: "담당자", value: "권순우" },
        { label: "업태/업종", value: "엽기떡볶이" },
        { label: "주소", value: "서울특별시 강남구 역삼동 123-456" },
        { label: "연락처", value: "02-123-4567 / adtek@gmail.com" },
        { label: "공사명", value: "" },
      ],
    },
  ]);
  const [title, setTitle] = useState("견적서");
  const [subTitle, setSubTitle] = useState("※ 본 견적은 모의 견적으로 실제 현장 측정 결과에 따라 비용이 변동될 수 있습니다.");
  const [items, setItems] = useState<Item[]>([
    { name: "작업 A", spec: "규격 예시", unit: "식", qty: 1, price: 45000, note: "" },
    { name: "작업 B", spec: "규격 예시", unit: "식", qty: 1, price: 30000, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "",},
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
    { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" },
  ]);

  const addItem = () => {
    setItems([...items, { name: "", spec: "", unit: "", qty: 0, price: 0, note: "" }]);
  };

  const updateItem = <K extends keyof Item>(index: number, key: K, value: Item[K]) => {
    const copy = [...items];
    copy[index][key] = value;
    setItems(copy);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce((t, i) => t + i.qty * i.price, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;
  const [issuedAt, setIssuedAt] = useState(new Date().toLocaleDateString());
  const handlePrint = () => window.print();

  const formatNumber = (value: number) => value.toLocaleString("ko-KR");
  const parseNumberInput = (value: string) => {
    const clean = value.replace(/[^\d.-]/g, "");
    if (clean === "" || clean === "-" || clean === ".") return 0;
    const parsed = Number(clean);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const updateInfoValue = (sectionIdx: number, rowIdx: number, value: string) => {
    setInfoSections((prev) => {
      const next = [...prev];
      const rows = [...next[sectionIdx].rows];
      rows[rowIdx] = { ...rows[rowIdx], value };
      next[sectionIdx] = { ...next[sectionIdx], rows };
      return next;
    });
  };

  return (
    <div className="page">
      <div className="sheet" id="sheet_print">
        <label className="sheet__title-label">
          {/* <h1 className="sheet__title">견적서</h1> */}
          <input
            type="text"
            className="sheet__title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
          <input
            type="text"
            className="sheet__sub-title-input"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder=""
          />
        </label>
        <SheetHeader issuedAt={issuedAt} onChangeIssuedAt={setIssuedAt} />

        <InfoSectionList sections={infoSections} onChange={updateInfoValue}>
          <QuotationSection
            items={items}
            subtotal={subtotal}
            tax={tax}
            total={total}
            formatNumber={formatNumber}
            parseNumberInput={parseNumberInput}
            onChangeItem={updateItem}
            onRemoveItem={removeItem}
            onAdd={addItem}
            onPrint={handlePrint}
          />
        </InfoSectionList>
        <SheetFooter/>
      </div>

    </div>
  );
}