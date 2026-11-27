"use client";

import { useState } from "react";
import { diningContent } from "@/config/dining";
import DiningSlide from "./DiningSlide";
import styles from "./HotelDining.module.css";

export default function HotelDining() {
  const { title, viewAllLabel, viewAllHref, restaurants, previousLabel, nextLabel } = diningContent;
  const [index, setIndex] = useState(0);
  const total = restaurants.length;

  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  return (
    <section id="am-thuc" className={styles.dining} aria-labelledby="dining-title">
      <div className={styles.heading}>
        <h2 id="dining-title">{title}</h2>
        <a href={viewAllHref}>
          {viewAllLabel}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </a>
      </div>

      <div className={styles.slider}>
        {restaurants.map((restaurant, slideIndex) => (
          <DiningSlide key={restaurant.id} restaurant={restaurant} isActive={slideIndex === index} />
        ))}

        <div className={styles.controls}>
          <button type="button" aria-label={previousLabel} onClick={() => go(-1)}>
            <svg viewBox="0 0 30 12" aria-hidden="true">
              <path d="M30 6H2M7 1 2 6l5 5" />
            </svg>
          </button>
          <span className={styles.counter} aria-live="polite">
            {index + 1} / {total}
          </span>
          <button type="button" aria-label={nextLabel} onClick={() => go(1)}>
            <svg viewBox="0 0 30 12" aria-hidden="true">
              <path d="M0 6h28M23 1l5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
