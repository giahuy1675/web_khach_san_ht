"use client";

import { useRef } from "react";
import { roomsPageContent } from "@/config/roomsPage";
import useCarousel from "@/shared/hooks/useCarousel";
import type { Room } from "../types";
import RoomCard from "./RoomCard";
import styles from "./RecommendedRooms.module.css";

type RecommendedRoomsProps = {
  rooms: Room[];
};

export default function RecommendedRooms({ rooms }: RecommendedRoomsProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const { active, maxIndex, isDragging, goTo } = useCarousel(trackRef, rooms.length);
  const {
    recommendedTitle,
    recommendedPrevLabel,
    recommendedNextLabel,
    bookLabel,
    learnMoreLabel,
  } = roomsPageContent.detail;

  if (rooms.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="recommended-rooms-title">
      <div className={styles.heading}>
        <h2 id="recommended-rooms-title">{recommendedTitle}</h2>
      </div>

      <div className={styles.carousel}>
        {active > 0 ? (
          <button
            className={`${styles.navArrow} ${styles.navPrev}`}
            type="button"
            aria-label={recommendedPrevLabel}
            onClick={() => goTo(active - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </button>
        ) : null}

        <ul
          className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
          ref={trackRef}
        >
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              ctaLabel={bookLabel}
              secondaryCtaLabel={learnMoreLabel}
              allowTitleWrap
              variant="recommended"
            />
          ))}
        </ul>

        {active < maxIndex ? (
          <button
            className={`${styles.navArrow} ${styles.navNext}`}
            type="button"
            aria-label={recommendedNextLabel}
            onClick={() => goTo(active + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        ) : null}

        <div className={styles.mobilePagination}>
          <button
            type="button"
            className={styles.mobilePageBtn}
            aria-label={recommendedPrevLabel}
            disabled={active <= 0}
            onClick={() => goTo(active - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </button>
          <span className={styles.mobilePageCount}>
            {active + 1} / {rooms.length}
          </span>
          <button
            type="button"
            className={styles.mobilePageBtn}
            aria-label={recommendedNextLabel}
            disabled={active >= maxIndex}
            onClick={() => goTo(active + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
