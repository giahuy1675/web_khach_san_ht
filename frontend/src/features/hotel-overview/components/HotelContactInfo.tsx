import { contactContent } from "@/config/overview";
import { siteConfig } from "@/config/site";
import RatingDots from "./RatingDots";
import styles from "./HotelContactInfo.module.css";

export default function HotelContactInfo() {
  const { contact, address, reviews } = contactContent;
  const { email, phone, address: street } = siteConfig.footer;

  return (
    <section id="thong-tin-lien-he" className={styles.contactInfo} aria-label="Thông tin khách sạn">
      <div className={styles.column}>
        <p className={styles.label}>{contact.label}</p>
        <a className={styles.row} href={`mailto:${email}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
          </svg>
          {email}
        </a>
        <a className={styles.row} href={`tel:${phone.replace(/\s/g, "")}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.2 3.8 8 3.2l2.1 4.9-2 1.5a15 15 0 0 0 6.3 6.3l1.5-2 4.9 2.1-.6 2.8a2 2 0 0 1-2.2 1.6A17.5 17.5 0 0 1 3.6 6a2 2 0 0 1 1.6-2.2Z" />
          </svg>
          {phone}
        </a>
        <p className={styles.small}>{contact.checkIn}</p>
        <p className={styles.small}>{contact.checkOut}</p>
      </div>

      <div className={styles.column}>
        <p className={styles.label}>{address.label}</p>
        <p className={styles.address}>{street}</p>
        <a className={styles.mapLink} href={address.mapHref} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
            <circle cx="12" cy="10" r="2.3" />
          </svg>
          {address.mapLabel}
        </a>
        {address.distances.map((distance) => (
          <p key={distance} className={styles.small}>
            {distance}
          </p>
        ))}
      </div>

      <div className={styles.column}>
        <p className={styles.label}>{reviews.label}</p>
        <p className={styles.score}>
          {reviews.score}/{reviews.maxScore}
        </p>
        <RatingDots score={reviews.score} maxScore={reviews.maxScore} />
        <a className={styles.reviewCount} href={reviews.countHref}>
          ({reviews.count.toLocaleString("vi-VN")} đánh giá)
        </a>
      </div>
    </section>
  );
}
