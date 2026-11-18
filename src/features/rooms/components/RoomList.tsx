"use client";

import { useRef } from "react";
import Link from "next/link";
import { homeContent } from "@/config/home";
import { roomsPageContent } from "@/config/roomsPage";
import { siteConfig } from "@/config/site";
import { useRooms } from "../hooks/useRooms";
import useCarousel from "@/shared/hooks/useCarousel";
import RoomCard from "./RoomCard";
import styles from "./RoomList.module.css";

export default function RoomList() {
  const { rooms, isLoading, error } = useRooms();
  const trackRef = useRef<HTMLUListElement>(null);
  const { isDragging } = useCarousel(trackRef, rooms.length);
  return (
    <section
      id={siteConfig.sections.rooms}
      className={styles.section}
      aria-labelledby="rooms-title"
    >
      <div className={styles.heading}>
        <h2 id="rooms-title">{homeContent.rooms.title}</h2>
        <Link href={roomsPageContent.href}>
          {homeContent.rooms.viewAllLabel}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </Link>
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
          <ul
            className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
            ref={trackRef}
          >
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
