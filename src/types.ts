export type Item = {
  name: string;
  spec: string;
  unit: string;
  qty: number;
  price: number;
  note: string;
};

export type InfoRow = { label: string; value: string };
export type InfoSection = { title: string; rows: InfoRow[] };



