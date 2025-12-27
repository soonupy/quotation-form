import type { ReactNode } from 'react';
import type { InfoSection } from '../types';

type InfoSectionListProps = {
  sections: InfoSection[];
  onChange: (sectionIdx: number, rowIdx: number, value: string) => void;
  children?: ReactNode;
};

export function InfoSectionList({ sections, onChange, children }: InfoSectionListProps) {
  return (
    <div className="info-section">
      {sections.map((section, sectionIdx) => (
        <div className="info-card" key={section.title}>
          <h2 className="info-card__title">{section.title}</h2>
          <table className="info-table">
            <tbody>
              {section.rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="label-col">{row.label}</td>
                  <td className="value-col">
                    <input
                      className="info-input"
                      value={row.value}
                      onChange={(e) => onChange(sectionIdx, idx, e.target.value)}
                      placeholder={row.label}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      {children}
    </div>
  );
}

