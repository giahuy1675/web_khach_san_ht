"use client";

import { useEffect, useRef, useState } from "react";
import { recommendationsContent } from "@/config/recommendations";
import useCarousel from "@/shared/hooks/useCarousel";
import RecommendationCard from "./RecommendationCard";
import styles from "./HotelRecommendations.module.css";

type Hotel = (typeof recommendationsContent.hotels)[number];

function MobileRecommendationsCarousel({ hotels }: { hotels: readonly Hotel[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { active, isDragging, goTo } = useCarousel(trackRef, hotels.length);

  return (
    <div className={styles.carousel}>
      <div
        ref={trackRef}
        className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
      >
        {hotels.map((hotel) => (
          <div key={hotel.id} className={styles.slide}>
            <RecommendationCard hotel={hotel} />
          </div>
        ))}
      </div>
      <div className={styles.dots} role="tablist" aria-label="Chọn khách sạn đề xuất">
        {hotels.map((hotel, index) => (
          <button
            key={hotel.id}
            type="button"
            className={index === active ? styles.dotActive : styles.dot}
            aria-label={`${hotel.name}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function HotelRecommendations() {
  const { title, hotels } = recommendationsContent;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className={styles.recommendations} aria-labelledby="recommendations-title">
      <h2 id="recommendations-title" className={styles.title}>
        {title}
      </h2>
      {isMobile ? (
        <MobileRecommendationsCarousel hotels={hotels} />
      ) : (
        <div className={styles.grid}>
          {hotels.map((hotel) => (
            <RecommendationCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </section>
  );
}
