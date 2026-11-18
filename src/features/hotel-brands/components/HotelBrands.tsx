"use client";

import { useRef } from "react";
import { brandsShowcaseContent } from "@/config/brandsShowcase";
import useCarousel from "@/shared/hooks/useCarousel";
import BrandCard from "./BrandCard";
import styles from "./HotelBrands.module.css";

export default function HotelBrands() {
  const { title, trackLabel, brands } = brandsShowcaseContent;
  const trackRef = useRef<HTMLUListElement>(null);
  const { isDragging } = useCarousel(trackRef, brands.length, { snap: false });

  return (
    <section className={styles.brands} aria-labelledby="brands-title">
      <h2 id="brands-title" className={styles.title}>
        {title}
      </h2>

      <div className={styles.viewport}>
        <ul
          ref={trackRef}
          className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
          aria-label={trackLabel}
        >
          {brands.map((brand, index) => {
            const isFirstOfTier = brands[index - 1]?.tier !== brand.tier;

            return (
              <BrandCard key={brand.name} brand={brand} tierLabel={isFirstOfTier ? brand.tier : null} />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
