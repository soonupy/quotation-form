import { FaPlus } from 'react-icons/fa';

type ActionBarProps = {
  onAdd: () => void;
  onPrint: () => void;
};

export function ActionBar({ onAdd, onPrint }: ActionBarProps) {
  return (
    <div className="sheet__actions">
      {/* <button className="secondary-button" onClick={onPrint}>
        PDF 출력
      </button> */}
      <button className="primary-button" onClick={onAdd}>
        <i className='icon ico-md'><FaPlus /></i>
      </button>
    </div>
  );
}

