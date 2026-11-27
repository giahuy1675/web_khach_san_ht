"use client";

import { useCallback, useEffect, useState } from "react";
import { bookingSearchConfig } from "@/config/bookingSearch";
import { siteConfig } from "@/config/site";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { isPinned, slotHeight, slotRef, formRef } = useAnimatedBookingPin();

  // Trên điện thoại form mở dạng toàn màn hình: khóa cuộn nền, Esc để đóng.
  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // Hiển thị nút Back to Top khi cuộn xuống quá 400px.
  useEffect(() => {
    const THRESHOLD = 400;
    let frame = 0;
    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          setShowBackToTop(window.scrollY > THRESHOLD);
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

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

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSearchClick = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 900) {
      setIsModalOpen(true);
    } else {
      slotRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [slotRef]);

  const slotStyle = isPinned && slotHeight !== null ? { height: slotHeight } : undefined;

  return (
    <>
      <div className={styles.tabsSlot}>
        <div
          className={[
            styles.tabsOuter,
            isPinned ? styles.tabsHidden : "",
            activePopover ? styles.popoverOpen : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={styles.tabs} aria-label={bookingSearchConfig.tabsLabel}>
            <span className={styles.activeTab}>{bookingSearchConfig.tabs.hotel}</span>
            <span className={styles.inactiveTab}>{bookingSearchConfig.tabs.package}</span>
          </div>
        </div>
      </div>

      <div
        ref={slotRef}
        className={`${styles.searchSlot} ${activePopover ? styles.popoverOpen : ""}`}
        style={slotStyle}
      >
        <form
          ref={formRef}
          className={[
            styles.searchForm,
            isPinned ? styles.pinned : "",
            isModalOpen ? styles.modalOpen : "",
            activePopover ? styles.popoverOpen : "",
          ]
            .filter(Boolean)
            .join(" ")}
          action="#luu-tru"
          method="get"
          role="search"
          onSubmit={() => setIsModalOpen(false)}
        >
          <div className={styles.modalHeader}>
            <h2>{bookingSearchConfig.modal.title}</h2>
            <button
              className={styles.modalClose}
              type="button"
              aria-label={bookingSearchConfig.modal.closeLabel}
              onClick={() => setIsModalOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 5 14 14M19 5 5 19" />
              </svg>
            </button>
          </div>
          <div className={styles.modalTabs} aria-label={bookingSearchConfig.tabsLabel}>
            <span className={styles.activeTab}>{bookingSearchConfig.tabs.hotel}</span>
            <span className={styles.inactiveTab}>{bookingSearchConfig.tabs.package}</span>
          </div>

          <BookingSearchFields
            dateRange={dateRange}
            guests={guests}
            discountCategory={discountCategory}
            activePopover={activePopover}
            onOpenPopover={openPopover}
          />
          <button className={styles.searchButton} type="submit">
            {isPinned && !isModalOpen
              ? bookingSearchConfig.editLabel
              : bookingSearchConfig.searchLabel}
          </button>
        </form>
      </div>

      <aside
        className={`${styles.floatingActions} ${isModalOpen ? styles.floatingActionsHidden : ""}`}
        aria-label="Tiện ích nhanh"
      >
        {/* Nút Gọi Hotline */}
        <a
          href={`tel:${siteConfig.footer.phone.replace(/\s+/g, "")}`}
          className={`${styles.fabButton} ${styles.callFab}`}
          aria-label={`Gọi hotline ${siteConfig.footer.phone}`}
          title={`Gọi hotline: ${siteConfig.footer.phone}`}
        >
          <svg
            viewBox="0 0 24 24"
            className={styles.fabIcon}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M14.05 2a9 9 0 0 1 8 7.94" />
            <path d="M14.05 6A5 5 0 0 1 18 10" />
          </svg>
        </a>

        {/* Nút Tìm kiếm (thay cho nút tìm kiếm bự ở màn điện thoại) */}
        <button
          type="button"
          className={`${styles.fabButton} ${styles.searchFab}`}
          aria-haspopup="dialog"
          aria-label={bookingSearchConfig.modal.openLabel}
          title={bookingSearchConfig.modal.openLabel}
          onClick={handleSearchClick}
        >
          <svg
            viewBox="0 0 24 24"
            className={styles.fabIcon}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16.5 16.5 4.5 4.5" />
          </svg>
        </button>

        {/* Nút Back to top */}
        <button
          type="button"
          className={[
            styles.fabButton,
            styles.backToTopFab,
            showBackToTop ? "" : styles.backToTopHidden,
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          title="Về đầu trang"
        >
          <span className={styles.backToTopText}>
            <span>BACK</span>
            <span>TO</span>
            <span>TOP</span>
          </span>
        </button>
      </aside>

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
          onCloseAll={() => {
            closePopover();
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}
