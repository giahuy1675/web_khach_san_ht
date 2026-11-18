import Image from "next/image";
import { eventsContent } from "@/config/events";
import styles from "./HotelEvents.module.css";

export default function HotelEvents() {
  const { title, stats, description, moreLabel, moreHref, quoteLabel, quoteHref } = eventsContent;
  const { galleryLabel, galleryHref, image, imageAlt } = eventsContent;

  return (
    <section id="su-kien" className={styles.events} aria-labelledby="events-title">
      <div className={styles.inner}>
        <h2 id="events-title" className={styles.title}>
          {title}
        </h2>

        <div className={styles.layout}>
          <div className={styles.content}>
            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <span className={styles.value}>{stat.value}</span>
                  <span className={styles.label}>{stat.label}</span>
                </li>
              ))}
            </ul>

            <p className={styles.description}>{description}</p>

            <div className={styles.actions}>
              <a className={styles.outlineButton} href={moreHref}>
                {moreLabel}
              </a>
              <a className={styles.solidButton} href={quoteHref}>
                {quoteLabel}
              </a>
            </div>
          </div>

          <figure className={styles.media}>
            <Image src={image} alt={imageAlt} fill quality={100} sizes="(max-width: 900px) 100vw, 504px" />
            <a className={styles.galleryLink} href={galleryHref}>
              {galleryLabel}
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
}
