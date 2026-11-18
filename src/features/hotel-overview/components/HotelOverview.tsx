import { overviewContent } from "@/config/overview";
import styles from "./HotelOverview.module.css";

export default function HotelOverview() {
  const { brand, title, paragraphs } = overviewContent;

  return (
    <section id="gioi-thieu" className={styles.overview} aria-labelledby="overview-title">
      <div className={styles.brand} aria-hidden="true">
        <span className={styles.brandName}>{brand.name}</span>
        <span className={styles.brandCaption}>{brand.caption}</span>
      </div>
      <h2 id="overview-title" className={styles.title}>
        {title}
      </h2>
      {paragraphs.map((text) => (
        <p key={text} className={styles.text}>
          {text}
        </p>
      ))}
    </section>
  );
}
