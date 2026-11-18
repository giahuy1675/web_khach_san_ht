import { mapContent } from "@/config/map";
import MapInfoPanel from "./MapInfoPanel";
import styles from "./HotelMap.module.css";

export default function HotelMap() {
  const { title, mapTitle, mapQuery } = mapContent;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&hl=vi&z=14&output=embed`;

  return (
    <section id="ban-do" className={styles.map} aria-label={title}>
      <div className={styles.inner}>
        <MapInfoPanel />
        <div className={styles.frame}>
          <iframe
            title={mapTitle}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
