"use client";

import Image from "next/image";
import { useRef } from "react";
import { roomsPageContent } from "@/config/roomsPage";
import useLoopCarousel from "@/shared/hooks/useLoopCarousel";
import styles from "./RoomsGallery.module.css";

export default function RoomsGallery() {
  const { images, label, previousLabel, nextLabel } = roomsPageContent.gallery;
  const count = images.length;
  const trackRef = useRef<HTMLUListElement>(null);
  const { active, isDragging, prev, next, goTo } = useLoopCarousel(trackRef, count);
  // 3 bản sao để băng chuyền có thể kéo vòng liên tục.
  const slides = [...images, ...images, ...images];

  return (
    <section
      className={styles.gallery}
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          prev();
        } else if (event.key === "ArrowRight") {
          next();
        }
      }}
    >
      <ul
        ref={trackRef}
        className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
        style={{ "--position": count } as React.CSSProperties}
      >
        {slides.map((image, index) => {
          const isMiddleSet = index >= count && index < count * 2;
          const isActive = isMiddleSet && index % count === active;

          return (
            <li
              key={`${index}-${image.src}`}
              className={styles.slide}
              aria-hidden={!isActive}
              onClick={() => goTo(index)}
            >
              <Image
                src={image.src}
                alt={isMiddleSet ? image.alt : ""}
                fill
                quality={100}
                loading="eager"
                sizes="(max-width: 900px) 90vw, 60vw"
                draggable={false}
              />
            </li>
          );
        })}
      </ul>

      <button
        className={`${styles.arrow} ${styles.arrowPrev}`}
        type="button"
        aria-label={previousLabel}
        onClick={prev}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="m10 3-5 5 5 5" />
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowNext}`}
        type="button"
        aria-label={nextLabel}
        onClick={next}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="m6 3 5 5-5 5" />
        </svg>
      </button>
    </section>
  );
}
