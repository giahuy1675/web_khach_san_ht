import Image from "next/image";
import { recommendationsContent } from "@/config/recommendations";
import styles from "./RecommendationCard.module.css";

type Hotel = (typeof recommendationsContent.hotels)[number];

export default function RecommendationCard({ hotel }: { hotel: Hotel }) {
  const { priceFromLabel, priceUnitLabel, currency } = recommendationsContent;
  const price = hotel.pricePerNight.toLocaleString("vi-VN");

  return (
    <a className={styles.card} href={hotel.href}>
      <span className={styles.media}>
        <Image src={hotel.image} alt="" fill quality={100} sizes="(max-width: 900px) 100vw, 379px" />
      </span>
      <span className={styles.name}>{hotel.name}</span>
      <span className={styles.city}>{hotel.city}</span>
      <span className={styles.price}>
        {priceFromLabel} <strong>{price} {currency}</strong> {priceUnitLabel}
      </span>
    </a>
  );
}
