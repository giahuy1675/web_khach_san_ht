"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { homeContent } from "@/config/home";
import { roomsPageContent } from "@/config/roomsPage";
import { siteConfig } from "@/config/site";
import type { Room } from "../types";
import { useRooms } from "../hooks/useRooms";
import useCarousel from "@/shared/hooks/useCarousel";
import useLoopCarousel from "@/shared/hooks/useLoopCarousel";
import RoomCard from "./RoomCard";
import styles from "./RoomList.module.css";

function DesktopRoomCarousel({ rooms }: { rooms: Room[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const { isDragging } = useCarousel(trackRef, rooms.length);

  return (
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
  );
}

function MobileRoomCarousel({ rooms }: { rooms: Room[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const count = rooms.length;
  const { isDragging } = useLoopCarousel(trackRef, count);
  // 3 bản sao để trên điện thoại card đang xem luôn căn giữa và 2 mép trái/phải ló ảnh cân bằng nhau.
  const slides = [...rooms, ...rooms, ...rooms];

  return (
    <div className={styles.carousel}>
      <ul
        className={`${styles.track} ${styles.loopTrack} ${isDragging ? styles.dragging : ""}`}
        ref={trackRef}
        style={{ "--position": count } as React.CSSProperties}
      >
        {slides.map((room, index) => {
          const isMiddleSet = index >= count && index < count * 2;
          return (
            <RoomCard
              key={`${index}-${room.id}`}
              room={room}
              ariaHidden={!isMiddleSet}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default function RoomList() {
  const { rooms, isLoading, error } = useRooms();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

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
      ) : isMobile ? (
        <MobileRoomCarousel rooms={rooms} />
      ) : (
        <DesktopRoomCarousel rooms={rooms} />
      )}
    </section>
  );
}
