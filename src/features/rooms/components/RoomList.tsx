"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { homeContent } from "@/config/home";
import { siteConfig } from "@/config/site";
import { useRooms } from "../hooks/useRooms";
import RoomCard from "./RoomCard";
import styles from "./RoomList.module.css";

export default function RoomList() {
  const { rooms, isLoading, error } = useRooms();
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [rooms, updateScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) {
      return;
    }
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section
      id={siteConfig.sections.rooms}
      className={styles.section}
      aria-labelledby="rooms-title"
    >
      <div className={styles.heading}>
        <h2 id="rooms-title">{homeContent.rooms.title}</h2>
        <a href="#luu-tru">
          {homeContent.rooms.viewAllLabel}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </a>
      </div>

      {isLoading ? (
        <p className="mt-4 text-muted" aria-live="polite">
          {homeContent.rooms.loadingMessage}
        </p>
      ) : error ? (
        <p className="mt-4 text-muted" role="alert">
          {error}
        </p>
      ) : rooms.length === 0 ? (
        <p className="mt-4 text-muted">{homeContent.rooms.emptyMessage}</p>
      ) : (
        <div className={styles.carousel}>
          <ul className={styles.track} ref={trackRef} onScroll={updateScrollState}>
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </ul>
          <button
            className={`${styles.navButton} ${styles.prev}`}
            type="button"
            aria-label="Phòng trước"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="m10 3-5 5 5 5" />
            </svg>
          </button>
          <button
            className={`${styles.navButton} ${styles.next}`}
            type="button"
            aria-label="Phòng tiếp theo"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="m6 3 5 5-5 5" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
