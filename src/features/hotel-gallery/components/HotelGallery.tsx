"use client";

import Image from "next/image";
import { useRef } from "react";
import { galleryContent } from "@/config/gallery";
import useLoopCarousel from "@/shared/hooks/useLoopCarousel";
import styles from "./HotelGallery.module.css";

export default function HotelGallery() {
  const { images, label, viewLibraryLabel, viewLibraryHref, previousLabel, nextLabel } = galleryContent;
  const count = images.length;
  const trackRef = useRef<HTMLUListElement>(null);
  const { active, isDragging, prev, next, goTo } = useLoopCarousel(trackRef, count);
  // 3 bản sao để băng chuyền có thể kéo vòng liên tục.
  const slides = [...images, ...images, ...images];

  return (
    <section
      id="thu-vien-anh"
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
              className={`${styles.slide} ${isActive ? styles.active : ""}`}
              aria-hidden={!isActive}
              onClick={() => goTo(index)}
            >
              <Image
                src={image.src}
                alt={isMiddleSet ? image.alt : ""}
                fill
                quality={100}
                loading="eager"
                sizes="(max-width: 900px) 90vw, 80vw"
                draggable={false}
              />
              <span className={styles.overlay} />
              {isActive && (
                <>
                  <button
                    className={`${styles.arrow} ${styles.arrowPrev}`}
                    type="button"
                    aria-label={previousLabel}
                    onClick={(event) => {
                      event.stopPropagation();
                      prev();
                    }}
                  >
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="m10 3-5 5 5 5" />
                    </svg>
                  </button>
                  <a
                    className={styles.plus}
                    href={viewLibraryHref}
                    aria-label={viewLibraryLabel}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                  </a>
                  <button
                    className={`${styles.arrow} ${styles.arrowNext}`}
                    type="button"
                    aria-label={nextLabel}
                    onClick={(event) => {
                      event.stopPropagation();
                      next();
                    }}
                  >
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="m6 3 5 5-5 5" />
                    </svg>
                  </button>
                </>
              )}
              <a className={styles.viewLibrary} href={viewLibraryHref} tabIndex={isActive ? 0 : -1}>
                <svg viewBox="0 0 16 13" aria-hidden="true">
                  <path d="M5.500 1.500h5l1 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2.500z" />
                  <circle cx="8" cy="7.500" r="2.500" />
                </svg>
                {viewLibraryLabel}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
