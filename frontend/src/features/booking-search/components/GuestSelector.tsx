import type { GuestSelection } from "../types";
import styles from "./BookingPopover.module.css";

type GuestSelectorProps = {
  selection: GuestSelection;
  onChange: (selection: GuestSelection) => void;
  onBack?: () => void;
  onCloseAll?: () => void;
  onConfirm?: () => void;
  isMobile?: boolean;
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

function GuestSelectorBody({
  selection,
  onChange,
}: {
  selection: GuestSelection;
  onChange: (s: GuestSelection) => void;
}) {
  return (
    <>
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
    </>
  );
}

export default function GuestSelector({
  selection,
  onChange,
  onBack,
  onCloseAll,
  onConfirm,
  isMobile,
}: GuestSelectorProps) {
  if (isMobile) {
    return (
      <div className={styles.mobileCalendar}>
        <header className={styles.mobileHeader}>
          <button
            type="button"
            className={styles.mobileIconButton}
            aria-label="Quay lại"
            onClick={onBack}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>
          <h2 className={styles.mobileTitle}>Phòng và khách</h2>
          <button
            type="button"
            className={styles.mobileIconButton}
            aria-label="Đóng"
            onClick={onCloseAll ?? onBack}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 5 14 14M19 5 5 19" />
            </svg>
          </button>
        </header>

        <div className={styles.mobileMonths}>
          <GuestSelectorBody selection={selection} onChange={onChange} />
        </div>

        <footer className={styles.mobileFooter}>
          <button
            type="button"
            className={styles.confirmButton}
            onClick={onConfirm ?? onBack}
          >
            Xác nhận
          </button>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.guestSelector}>
      <h2 className={styles.popoverTitle}>Phòng và khách</h2>
      <GuestSelectorBody selection={selection} onChange={onChange} />
    </div>
  );
}
