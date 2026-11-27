"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { homeContent } from "@/config/home";
import { roomsPageContent } from "@/config/roomsPage";
import type { Room } from "../types";
import styles from "./RoomList.module.css";

type RoomCardProps = {
  room: Room;
  ariaHidden?: boolean;
  ctaLabel?: string;
  secondaryCtaLabel?: string;
  allowTitleWrap?: boolean;
  variant?: "default" | "recommended";
};

export default function RoomCard({
  room,
  ariaHidden,
  ctaLabel = homeContent.rooms.ctaLabel,
  secondaryCtaLabel,
  allowTitleWrap = false,
  variant = "default",
}: RoomCardProps) {
  const gallery = room.gallery && room.gallery.length > 0 ? room.gallery : homeContent.rooms.gallery;
  const [activeIndex, setActiveIndex] = useState(0);
  const roomHref = `${roomsPageContent.href}/${room.id}`;
  const goTo = (step: number) =>
    setActiveIndex((current) => (current + step + gallery.length) % gallery.length);

  return (
    <li className={styles.card} aria-hidden={ariaHidden}>
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
          aria-label={`${room.name}: ảnh trước`}
          onClick={() => goTo(-1)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m10 3-5 5 5 5" />
          </svg>
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          type="button"
          aria-label={`${room.name}: ảnh tiếp theo`}
          onClick={() => goTo(1)}
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
        <h3 className={allowTitleWrap ? styles.titleWrap : undefined}>{room.name}</h3>
        <ul className={styles.highlights}>
          {room.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{room.description}</p>
        {variant === "recommended" ? (
          <div className={styles.recommendedActions}>
            <Link className={styles.cta} href={roomHref}>
              {ctaLabel}
            </Link>
            {secondaryCtaLabel ? (
              <Link className={styles.secondaryCta} href={roomHref}>
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        ) : (
          <Link className={styles.cta} href={roomHref}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </li>
  );
}
