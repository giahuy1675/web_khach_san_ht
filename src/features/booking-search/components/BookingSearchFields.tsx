import { bookingSearchConfig } from "@/config/bookingSearch";
import type {
  BookingDateRange,
  BookingPopoverKind,
  DiscountCategory,
  GuestSelection,
} from "../types";
import styles from "./BookingSearchBar.module.css";

type BookingSearchFieldsProps = {
  dateRange: BookingDateRange;
  guests: GuestSelection;
  discountCategory: DiscountCategory;
  activePopover: BookingPopoverKind | null;
  onOpenPopover: (type: BookingPopoverKind, trigger: HTMLButtonElement) => void;
};

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="1" />
      <path d="M7.5 3v4M16.5 3v4M3.5 9.5h17" />
    </svg>
  );
}

function GuestsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20M16 5.5a3 3 0 0 1 0 5.8M17 14a4.5 4.5 0 0 1 3.5 4.4V20" />
    </svg>
  );
}

function DiscountIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="m8 16 8-8M8.2 8.5h.1M15.7 15.5h.1" />
      <circle cx="8.25" cy="8.5" r=".75" />
      <circle cx="15.75" cy="15.5" r=".75" />
    </svg>
  );
}

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit" }).format(
    new Date(year, month - 1, day),
  );
}

export default function BookingSearchFields({
  dateRange,
  guests,
  discountCategory,
  activePopover,
  onOpenPopover,
}: BookingSearchFieldsProps) {
  const dateLabel =
    dateRange.checkIn && dateRange.checkOut
      ? `${formatDate(dateRange.checkIn)} – ${formatDate(dateRange.checkOut)}`
      : dateRange.checkIn
        ? `${formatDate(dateRange.checkIn)} – ${bookingSearchConfig.datePlaceholderEnd}`
        : bookingSearchConfig.datePlaceholder;
  const guestsLabel = [
    `${guests.rooms} ${bookingSearchConfig.roomUnit}`,
    `${guests.adults} ${bookingSearchConfig.guestUnit}`,
    ...(guests.children > 0
      ? [`${guests.children} ${bookingSearchConfig.childUnit}`]
      : []),
  ].join(" · ");

  return (
    <>
      <label className={`${styles.field} ${styles.destinationField}`}>
        <SearchIcon />
        <input
          aria-label={bookingSearchConfig.destinationLabel}
          defaultValue={bookingSearchConfig.destination}
          name="destination"
        />
      </label>

      <button
        className={`${styles.field} ${styles.fieldButton} ${styles.dateField}`}
        type="button"
        aria-label={`${bookingSearchConfig.checkInLabel} – ${bookingSearchConfig.checkOutLabel}`}
        aria-haspopup="dialog"
        aria-expanded={activePopover === "dates"}
        onClick={(event) => onOpenPopover("dates", event.currentTarget)}
      >
        <CalendarIcon />
        <span>{dateLabel}</span>
      </button>

      <button
        className={`${styles.field} ${styles.fieldButton} ${styles.guestsField}`}
        type="button"
        aria-label={bookingSearchConfig.guestsLabel}
        aria-haspopup="dialog"
        aria-expanded={activePopover === "guests"}
        onClick={(event) => onOpenPopover("guests", event.currentTarget)}
      >
        <GuestsIcon />
        <span>{guestsLabel}</span>
      </button>

      <button
        className={`${styles.field} ${styles.fieldButton} ${styles.discountField}`}
        type="button"
        aria-label={bookingSearchConfig.discountLabel}
        aria-haspopup="dialog"
        aria-expanded={activePopover === "discount"}
        onClick={(event) => onOpenPopover("discount", event.currentTarget)}
      >
        <DiscountIcon />
        <span>{bookingSearchConfig.discountLabel}</span>
      </button>

      <input readOnly type="hidden" name="checkIn" value={dateRange.checkIn ?? ""} />
      <input readOnly type="hidden" name="checkOut" value={dateRange.checkOut ?? ""} />
      <input readOnly type="hidden" name="rooms" value={guests.rooms} />
      <input readOnly type="hidden" name="adults" value={guests.adults} />
      <input readOnly type="hidden" name="children" value={guests.children} />
      <input
        readOnly
        type="hidden"
        name="discountCategory"
        value={discountCategory ?? ""}
      />
    </>
  );
}
