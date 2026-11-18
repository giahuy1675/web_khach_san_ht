import { servicesContent } from "@/config/services";
import ServiceIcon from "./ServiceIcon";
import styles from "./HotelServices.module.css";

export default function HotelServices() {
  const { title, description, items, extraFeeLabel, moreLabel, moreHref } = servicesContent;

  return (
    <section id="dich-vu" className={styles.services} aria-labelledby="services-title">
      <h2 id="services-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <ServiceIcon name={item.icon} />
            <span>{item.label}</span>
            {item.extraFee && <span className={styles.badge}>{extraFeeLabel}</span>}
          </li>
        ))}
      </ul>
      <a className={styles.moreLink} href={moreHref}>
        {moreLabel}
      </a>
    </section>
  );
}
