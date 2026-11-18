"use client";

import { homeContent } from "@/config/home";
import { siteConfig } from "@/config/site";
import { useRooms } from "../hooks/useRooms";
import Image from "next/image";
import styles from "./RoomList.module.css";

export default function RoomList() {
  const { rooms, isLoading, error } = useRooms();

  return (
    <section
      id={siteConfig.sections.rooms}
      className={styles.section}
      aria-labelledby="rooms-title"
    >
      <div className={styles.heading}>
        <h2 id="rooms-title">{homeContent.rooms.title}</h2>
        <a href="#luu-tru">{homeContent.rooms.viewAllLabel}</a>
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
        <ul className={styles.grid}>
          {rooms.map((room) => (
            <li key={room.id} className={styles.card}>
              <figure className={styles.image}>
                <Image
                  src="/images/mega-menu/stay.jpg"
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </figure>
              <div className={styles.cardContent}>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <span>Tối đa {room.maxGuests} khách</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
