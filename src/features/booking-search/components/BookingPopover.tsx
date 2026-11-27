"use client";

import { useEffect, useRef, useState } from "react";
import type {
  BookingDateRange,
  BookingPopoverKind,
  DiscountCategory,
  GuestSelection,
  PopoverAnchor,
} from "../types";
import BookingCalendar from "./BookingCalendar";
import DiscountSelector from "./DiscountSelector";
import GuestSelector from "./GuestSelector";
import styles from "./BookingPopover.module.css";

type BookingPopoverProps = {
  type: BookingPopoverKind;
  anchor: PopoverAnchor;
  dateRange: BookingDateRange;
  onDateRangeChange: (dateRange: BookingDateRange) => void;
  onDateComplete: () => void;
  guests: GuestSelection;
  onGuestsChange: (guests: GuestSelection) => void;
  discountCategory: DiscountCategory;
  onDiscountCategoryChange: (category: DiscountCategory) => void;
  onClose: () => void;
  onCloseAll?: () => void;
};

const dialogLabels: Record<BookingPopoverKind, string> = {
  dates: "Chọn ngày nhận và trả phòng",
  guests: "Chọn phòng và khách",
  discount: "Chọn loại chiết khấu",
};

export default function BookingPopover({
  type,
  anchor,
  dateRange,
  onDateRangeChange,
  onDateComplete,
  guests,
  onGuestsChange,
  discountCategory,
  onDiscountCategoryChange,
  onClose,
  onCloseAll,
}: BookingPopoverProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements =
          dialogRef.current?.querySelectorAll<HTMLElement>(
            'button:not(:disabled), input:not(:disabled)',
          );
        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    if (!isMobile) {
      closeButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus();
      }
    };
  }, [onClose, isMobile]);

  /* Trên điện thoại: guests & discount hiển thị full-screen, không có panel floating */
  if (isMobile && (type === "guests" || type === "discount")) {
    return (
      <div
        ref={dialogRef}
        className={styles.mobileFullscreen}
        role="dialog"
        aria-modal="true"
        aria-label={dialogLabels[type]}
      >
        {type === "guests" ? (
          <GuestSelector
            selection={guests}
            onChange={onGuestsChange}
            onBack={onClose}
            onCloseAll={onCloseAll ?? onClose}
            onConfirm={onClose}
            isMobile
          />
        ) : (
          <DiscountSelector
            selectedCategory={discountCategory}
            onChange={onDiscountCategoryChange}
            onBack={onClose}
            onCloseAll={onCloseAll ?? onClose}
            onConfirm={onClose}
            isMobile
          />
        )}
      </div>
    );
  }

  return (
    <>
      <div className={styles.backdrop} aria-hidden="true" onClick={onClose} />
      <div
        ref={dialogRef}
        className={styles.dialogLayer}
        role="dialog"
        aria-modal="true"
        aria-label={dialogLabels[type]}
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          type="button"
          aria-label="Đóng cửa sổ"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 5 14 14M19 5 5 19" />
          </svg>
        </button>
        <section
          className={`${styles.panel} ${styles[type]}`}
          style={{ left: anchor.left, top: anchor.top, width: anchor.width }}
        >
          {type === "dates" ? (
            <BookingCalendar
              dateRange={dateRange}
              onChange={onDateRangeChange}
              onComplete={onDateComplete}
              onBack={onClose}
              onCloseAll={onCloseAll ?? onClose}
            />
          ) : type === "guests" ? (
            <GuestSelector selection={guests} onChange={onGuestsChange} />
          ) : (
            <DiscountSelector
              selectedCategory={discountCategory}
              onChange={onDiscountCategoryChange}
            />
          )}
        </section>
      </div>
    </>
  );
}
