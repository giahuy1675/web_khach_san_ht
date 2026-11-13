import type { GuestSelection } from "../types";
import styles from "./BookingPopover.module.css";

type GuestSelectorProps = {
  selection: GuestSelection;
  onChange: (selection: GuestSelection) => void;
};

type CounterProps = {
  label: string;
  value: number;
  minimum: number;
  maximum: number;
  onChange: (value: number) => void;
};

function Counter({ label, value, minimum, maximum, onChange }: CounterProps) {
  return (
    <div className={styles.counterRow}>
      <span>{label}</span>
      <div className={styles.counter}>
        <button
          type="button"
          aria-label={`Giảm ${label.toLowerCase()}`}
          disabled={value <= minimum}
          onClick={() => onChange(Math.max(minimum, value - 1))}
        >
          −
        </button>
        <span aria-live="polite">{value}</span>
        <button
          type="button"
          aria-label={`Tăng ${label.toLowerCase()}`}
          disabled={value >= maximum}
          onClick={() => onChange(Math.min(maximum, value + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function GuestSelector({ selection, onChange }: GuestSelectorProps) {
  return (
    <div className={styles.guestSelector}>
      <h2 className={styles.popoverTitle}>Phòng và khách</h2>

      <div className={styles.roomsRow}>
        <span>Số lượng phòng</span>
        <div className={styles.counter}>
          <button
            type="button"
            aria-label="Giảm số lượng phòng"
            disabled={selection.rooms <= 1}
            onClick={() => onChange({ ...selection, rooms: Math.max(1, selection.rooms - 1) })}
          >
            −
          </button>
          <span aria-live="polite">{selection.rooms}</span>
          <button
            type="button"
            aria-label="Tăng số lượng phòng"
            disabled={selection.rooms >= 8}
            onClick={() => onChange({ ...selection, rooms: Math.min(8, selection.rooms + 1) })}
          >
            +
          </button>
        </div>
      </div>

      <p className={styles.roomLabel}>Phòng 1 · Tối đa 5 người</p>
      <Counter
        label="Người lớn"
        value={selection.adults}
        minimum={1}
        maximum={Math.max(1, 5 - selection.children)}
        onChange={(adults) => onChange({ ...selection, adults })}
      />
      <Counter
        label="Trẻ em (0-11)"
        value={selection.children}
        minimum={0}
        maximum={Math.max(0, 5 - selection.adults)}
        onChange={(children) => onChange({ ...selection, children })}
      />

      <label className={styles.petsRow}>
        <span>Có bao gồm thú cưng</span>
        <input
          checked={selection.petsIncluded}
          type="checkbox"
          onChange={(event) =>
            onChange({ ...selection, petsIncluded: event.currentTarget.checked })
          }
        />
      </label>
      <p className={styles.petsHelp}>Bạn đi du lịch cùng động vật hỗ trợ?</p>
    </div>
  );
}
