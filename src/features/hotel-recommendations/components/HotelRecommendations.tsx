import { recommendationsContent } from "@/config/recommendations";
import RecommendationCard from "./RecommendationCard";
import styles from "./HotelRecommendations.module.css";

export default function HotelRecommendations() {
  const { title, hotels } = recommendationsContent;

  return (
    <section className={styles.recommendations} aria-labelledby="recommendations-title">
      <h2 id="recommendations-title" className={styles.title}>
        {title}
      </h2>
      <div className={styles.grid}>
        {hotels.map((hotel) => (
          <RecommendationCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
