import Image from "next/image";
import { diningContent } from "@/config/dining";
import styles from "./DiningSlide.module.css";

type Restaurant = (typeof diningContent.restaurants)[number];

type DiningSlideProps = {
  restaurant: Restaurant;
  isActive: boolean;
};

export default function DiningSlide({ restaurant, isActive }: DiningSlideProps) {
  const { moreLabel, bookLabel, bookHref, galleryLabel, galleryHref } = diningContent;

  return (
    <article
      className={`${styles.slide} ${isActive ? styles.active : ""}`}
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className={styles.text}>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
        <div className={styles.actions}>
          {restaurant.moreHref && (
            <a className={styles.outlineButton} href={restaurant.moreHref}>
              {moreLabel}
            </a>
          )}
          <a className={styles.solidButton} href={bookHref}>
            {bookLabel}
          </a>
        </div>
      </div>

      <figure className={styles.media}>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          sizes="(max-width: 900px) 100vw, 564px"
        />
        <a className={styles.galleryLink} href={galleryHref}>
          {galleryLabel}
        </a>
      </figure>
    </article>
  );
}
