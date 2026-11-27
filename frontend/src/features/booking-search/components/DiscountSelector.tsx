import type { DiscountCategory } from "../types";
import styles from "./BookingPopover.module.css";

type DiscountSelectorProps = {
  selectedCategory: DiscountCategory;
  onChange: (category: DiscountCategory) => void;
  onBack?: () => void;
  onCloseAll?: () => void;
  onConfirm?: () => void;
  isMobile?: boolean;
};

export default function DiscountSelector({
  selectedCategory,
  onChange,
  onBack,
  onCloseAll,
  onConfirm,
  isMobile,
}: DiscountSelectorProps) {
  const body = (
    <>
      <label className={styles.discountOption}>
        <input
          checked={selectedCategory === "promotion"}
          name="discountCategory"
          type="radio"
          value="promotion"
          onChange={() => onChange("promotion")}
        />
        <span>Mã khuyến mãi</span>
      </label>
      <label className={styles.discountOption}>
        <input
          checked={selectedCategory === "company"}
          name="discountCategory"
          type="radio"
          value="company"
          onChange={() => onChange("company")}
        />
        <span>Mã Công ty</span>
      </label>
    </>
  );

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
          <h2 className={styles.mobileTitle}>Loại chiết khấu</h2>
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
          <div className={styles.discountSelector}>{body}</div>
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
    <div className={styles.discountSelector}>
      <h2 className={styles.popoverTitle}>Loại chiết khấu</h2>
      {body}
    </div>
  );
}
