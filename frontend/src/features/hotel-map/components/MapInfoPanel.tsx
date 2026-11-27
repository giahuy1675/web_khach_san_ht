import { mapContent } from "@/config/map";
import { contactContent } from "@/config/overview";
import { siteConfig } from "@/config/site";
import styles from "./MapInfoPanel.module.css";

export default function MapInfoPanel() {
  const { addressLabel, contactLabel, distanceLabel, hotelInfoLabel, hotelInfo } = mapContent;
  const { address, email, phone } = siteConfig.footer;
  const { checkIn, checkOut } = contactContent.contact;

  return (
    <div className={styles.panel}>
      <section className={styles.group}>
        <h3 className={styles.label}>{addressLabel}</h3>
        <p className={styles.text}>{address}</p>
      </section>

      <section className={styles.group}>
        <h3 className={styles.label}>{contactLabel}</h3>
        <p className={styles.text}>
          <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
        </p>
        <p className={styles.text}>
          <a className={styles.underlined} href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        <p className={`${styles.small} ${styles.spaced}`}>{checkIn}</p>
        <p className={styles.small}>{checkOut}</p>
      </section>

      <section className={`${styles.group} ${styles.loose}`}>
        <h3 className={styles.label}>{distanceLabel}</h3>
        {contactContent.address.distances.map((distance) => (
          <p key={distance} className={styles.list}>
            {distance}
          </p>
        ))}
      </section>

      <section className={styles.group}>
        <h3 className={styles.label}>{hotelInfoLabel}</h3>
        {hotelInfo.map((item) => (
          <p key={item.label} className={styles.list}>
            {item.label}: {item.value}
          </p>
        ))}
      </section>
    </div>
  );
}
