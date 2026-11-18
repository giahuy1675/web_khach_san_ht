"use client";

import Image from "next/image";
import { useState } from "react";
import { homeContent } from "@/config/home";
import type { Room } from "../types";
import styles from "./RoomList.module.css";

type RoomCardProps = {
  room: Room;
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export default function RoomCard({ room, canPrev, canNext, onPrev, onNext }: RoomCardProps) {
  const { gallery, ctaLabel, ctaHref } = homeContent.rooms;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <li className={styles.card}>
      <figure className={styles.image}>
        {gallery.map((src, index) => (
          <Image
            key={src}
            className={index === activeIndex ? styles.slideActive : styles.slide}
            src={src}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 900px) 85vw, 568px"
          />
        ))}
        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          type="button"
          aria-label="Phòng trước"
          disabled={!canPrev}
          onClick={onPrev}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m10 3-5 5 5 5" />
          </svg>
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          type="button"
          aria-label="Phòng tiếp theo"
          disabled={!canNext}
          onClick={onNext}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </button>
        <div className={styles.dots}>
          {gallery.map((src, index) => (
            <button
              key={src}
              className={index === activeIndex ? styles.dotActive : styles.dot}
              type="button"
              aria-label={`${room.name}: ảnh ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </figure>
      <div className={styles.cardContent}>
        <h3>{room.name}</h3>
        <ul className={styles.highlights}>
          {room.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{room.description}</p>
        <a className={styles.cta} href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </li>
  );
}
