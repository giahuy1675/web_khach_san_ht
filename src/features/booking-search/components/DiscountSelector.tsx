import type { DiscountCategory } from "../types";
import styles from "./BookingPopover.module.css";

type DiscountSelectorProps = {
  selectedCategory: DiscountCategory;
  onChange: (category: DiscountCategory) => void;
};

export default function DiscountSelector({
  selectedCategory,
  onChange,
}: DiscountSelectorProps) {
  return (
    <div className={styles.discountSelector}>
      <h2 className={styles.popoverTitle}>Loại chiết khấu</h2>
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
    </div>
  );
}
