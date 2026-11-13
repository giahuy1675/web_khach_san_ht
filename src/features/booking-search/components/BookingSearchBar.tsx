"use client";

import { useCallback, useState } from "react";
import { bookingSearchConfig } from "@/config/bookingSearch";
import type {
  BookingDateRange,
  BookingPopoverKind,
  DiscountCategory,
  GuestSelection,
  PopoverAnchor,
} from "../types";
import useAnimatedBookingPin from "../hooks/useAnimatedBookingPin";
import BookingPopover from "./BookingPopover";
import BookingSearchFields from "./BookingSearchFields";
import styles from "./BookingSearchBar.module.css";
import popoverStyles from "./BookingPopover.module.css";

const popupDimensions: Record<BookingPopoverKind, { width: number; height: number }> = {
  dates: { width: 870, height: 510 },
  guests: { width: 326, height: 430 },
  discount: { width: 312, height: 220 },
};

export default function BookingSearchBar() {
  const [activePopover, setActivePopover] = useState<BookingPopoverKind | null>(null);
  const [popoverAnchor, setPopoverAnchor] = useState<PopoverAnchor | null>(null);
  const [dateRange, setDateRange] = useState<BookingDateRange>({
    checkIn: null,
    checkOut: null,
  });
  const [guests, setGuests] = useState<GuestSelection>({
    rooms: 1,
    adults: 2,
    children: 0,
    petsIncluded: false,
  });
  const [discountCategory, setDiscountCategory] = useState<DiscountCategory>(null);
  const { isPinned, isAnimating, travelY, slotHeight, slotRef, formRef } =
    useAnimatedBookingPin();

  const closePopover = useCallback(() => {
    setActivePopover(null);
    setPopoverAnchor(null);
  }, []);

  const openPopover = useCallback(
    (type: BookingPopoverKind, trigger: HTMLButtonElement) => {
      if (activePopover === type) {
        closePopover();
        return;
      }

      const bounds = trigger.getBoundingClientRect();
      const dimensions = popupDimensions[type];
      const width = Math.min(dimensions.width, window.innerWidth - 32);
      const left =
        type === "dates"
          ? (window.innerWidth - width) / 2
          : Math.min(Math.max(16, bounds.left), window.innerWidth - width - 16);
      let top = bounds.bottom + 1;

      if (top + dimensions.height > window.innerHeight - 16) {
        top = Math.max(16, bounds.top - dimensions.height - 1);
      }

      setPopoverAnchor({ left, top, width });
      setActivePopover(type);
    },
    [activePopover, closePopover],
  );

  const updateDateRange = useCallback((nextRange: BookingDateRange) => {
    setDateRange(nextRange);
  }, []);

  const updateGuests = useCallback((nextGuests: GuestSelection) => {
    setGuests(nextGuests);
  }, []);

  const updateDiscountCategory = useCallback((category: DiscountCategory) => {
    setDiscountCategory(category);
  }, []);

  const slotStyle = isPinned && slotHeight !== null ? { height: slotHeight } : undefined;
  const formStyle = isPinned ? { transform: `translateY(${travelY}px)` } : undefined;

  return (
    <>
      <div
        className={`${styles.tabsOuter} ${activePopover ? popoverStyles.tabsOpen : ""}`}
      >
        <div className={styles.tabs} aria-label={bookingSearchConfig.tabsLabel}>
          <span className={styles.activeTab}>{bookingSearchConfig.tabs.hotel}</span>
          <span className={styles.inactiveTab}>{bookingSearchConfig.tabs.package}</span>
        </div>
      </div>

      <div ref={slotRef} className={styles.searchSlot} style={slotStyle}>
        <form
          ref={formRef}
          className={[
            styles.searchForm,
            isPinned ? styles.pinned : "",
            isAnimating ? styles.animated : "",
            activePopover ? styles.popoverOpen : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={formStyle}
          action="#luu-tru"
          method="get"
          role="search"
        >
          <BookingSearchFields
            dateRange={dateRange}
            guests={guests}
            discountCategory={discountCategory}
            activePopover={activePopover}
            onOpenPopover={openPopover}
          />
          <button className={styles.searchButton} type="submit">
            {isPinned ? bookingSearchConfig.editLabel : bookingSearchConfig.searchLabel}
          </button>
        </form>
      </div>

      {activePopover && popoverAnchor && (
        <BookingPopover
          type={activePopover}
          anchor={popoverAnchor}
          dateRange={dateRange}
          onDateRangeChange={updateDateRange}
          onDateComplete={closePopover}
          guests={guests}
          onGuestsChange={updateGuests}
          discountCategory={discountCategory}
          onDiscountCategoryChange={updateDiscountCategory}
          onClose={closePopover}
        />
      )}
    </>
  );
}
